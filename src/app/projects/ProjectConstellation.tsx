'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, Line, OrbitControls, Sphere, Stars } from '@react-three/drei';
import Link from 'next/link';
import { useMemo, useRef } from 'react';
import { CanvasTexture, DoubleSide, type Group } from 'three';

type ProjectNode = {
  name: string;
  slug: string;
  year: string;
  tag: string;
};

type PlanetType = 'terra' | 'mars' | 'gas' | 'ice' | 'ocean' | 'desert';

type Planet = ProjectNode & {
  radius: number;
  eccentricity: number;
  speed: number;
  phase: number;
  tilt: number;
  spin: number;
  color: string;
  size: number;
  type: PlanetType;
  seed: number;
  hasRing: boolean;
};

const ORBIT_SEGMENTS = 96;
const PLANET_TYPES: PlanetType[] = ['terra', 'mars', 'gas', 'ice', 'ocean', 'desert'];

// Deterministic pseudo-random so every render/reload draws the same planets.
function seededRandom(seed: number) {
  const x = Math.sin(seed * 999.7) * 43758.5453;
  return x - Math.floor(x);
}

// Solves Kepler's equation M = E - e*sin(E) for the eccentric anomaly E
// via Newton-Raphson, then converts to an orbital-plane position with the
// sun sitting at the ellipse's focus (not its center).
function keplerPosition(meanAnomaly: number, semiMajorAxis: number, eccentricity: number) {
  let E = meanAnomaly;
  for (let i = 0; i < 6; i += 1) {
    E -= (E - eccentricity * Math.sin(E) - meanAnomaly) / (1 - eccentricity * Math.cos(E));
  }
  const x = semiMajorAxis * (Math.cos(E) - eccentricity);
  const z = semiMajorAxis * Math.sqrt(1 - eccentricity * eccentricity) * Math.sin(E);
  return [x, z] as const;
}

function drawBlobs(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  seed: number,
  count: number,
  colors: string[],
  maxSize: number,
) {
  for (let i = 0; i < count; i += 1) {
    const x = seededRandom(seed + i * 3.1) * width;
    const y = seededRandom(seed + i * 7.7) * height;
    const w = maxSize * (0.4 + seededRandom(seed + i * 11.3) * 0.6);
    const h = w * (0.5 + seededRandom(seed + i * 5.5) * 0.5);
    ctx.fillStyle = colors[i % colors.length];
    // draw thrice, offset by canvas width, so blobs wrap seamlessly around the sphere
    [-width, 0, width].forEach((offset) => {
      ctx.beginPath();
      ctx.ellipse(x + offset, y, w, h, 0, 0, Math.PI * 2);
      ctx.fill();
    });
  }
}

function createPlanetTexture(type: PlanetType, seed: number) {
  const width = 128;
  const height = 64;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  if (type === 'terra') {
    ctx.fillStyle = '#1e5fa8';
    ctx.fillRect(0, 0, width, height);
    drawBlobs(ctx, width, height, seed, 6, ['#2f8f4e', '#3ba55d', '#6b4423'], 22);
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.fillRect(0, 0, width, 5);
    ctx.fillRect(0, height - 5, width, 5);
  } else if (type === 'mars') {
    ctx.fillStyle = '#b5541f';
    ctx.fillRect(0, 0, width, height);
    drawBlobs(ctx, width, height, seed, 7, ['#8a3d16', '#c97a3f'], 18);
  } else if (type === 'gas') {
    const bandColors = ['#d9a45c', '#c98a3f', '#e6c08a', '#b97b3a'];
    const bandCount = 9;
    for (let i = 0; i < bandCount; i += 1) {
      ctx.fillStyle = bandColors[i % bandColors.length];
      ctx.fillRect(0, (i / bandCount) * height, width, height / bandCount + 1);
    }
  } else if (type === 'ice') {
    ctx.fillStyle = '#dbeafe';
    ctx.fillRect(0, 0, width, height);
    drawBlobs(ctx, width, height, seed, 5, ['#bfe3f7', '#9fd3ee'], 20);
  } else if (type === 'ocean') {
    ctx.fillStyle = '#0f4c5c';
    ctx.fillRect(0, 0, width, height);
    drawBlobs(ctx, width, height, seed, 6, ['#1a7a8c', '#2ea3ad'], 24);
  } else {
    ctx.fillStyle = '#d8b978';
    ctx.fillRect(0, 0, width, height);
    drawBlobs(ctx, width, height, seed, 6, ['#b3915a', '#8f6f42'], 20);
  }

  const texture = new CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function createSunTexture() {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 4, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, '#fff7d6');
  gradient.addColorStop(0.55, '#fde68a');
  gradient.addColorStop(1, '#f59e0b');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  drawBlobs(ctx, size, size, 42, 5, ['rgba(217,119,6,0.35)'], 16);
  const texture = new CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function useOrbitPath(radius: number, eccentricity: number, tilt: number) {
  return useMemo(() => {
    const points: [number, number, number][] = [];
    for (let i = 0; i <= ORBIT_SEGMENTS; i += 1) {
      const E = (i / ORBIT_SEGMENTS) * Math.PI * 2;
      const x = radius * (Math.cos(E) - eccentricity);
      const z = radius * Math.sqrt(1 - eccentricity * eccentricity) * Math.sin(E);
      points.push([x, z * Math.sin(tilt), z * Math.cos(tilt)]);
    }
    return points;
  }, [radius, eccentricity, tilt]);
}

function OrbitRing({ radius, eccentricity, tilt }: { radius: number; eccentricity: number; tilt: number }) {
  const points = useOrbitPath(radius, eccentricity, tilt);
  return <Line points={points} color="#3f4658" lineWidth={1} transparent opacity={0.5} />;
}

function PlanetBody({ planet }: { planet: Planet }) {
  const groupRef = useRef<Group>(null);
  const texture = useMemo(() => createPlanetTexture(planet.type, planet.seed), [planet.type, planet.seed]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const meanAnomaly = planet.phase + state.clock.getElapsedTime() * planet.speed;
    const [x, z] = keplerPosition(meanAnomaly, planet.radius, planet.eccentricity);
    groupRef.current.position.set(x, z * Math.sin(planet.tilt), z * Math.cos(planet.tilt));
    groupRef.current.rotation.y += delta * planet.spin;
  });

  return (
    <group ref={groupRef}>
      <Sphere args={[planet.size, 24, 24]}>
        <meshStandardMaterial map={texture ?? undefined} roughness={0.9} metalness={0.05} emissive={planet.color} emissiveIntensity={0.12} />
      </Sphere>
      {planet.hasRing ? (
        <mesh rotation={[Math.PI / 2 - 0.35, 0, 0]}>
          <ringGeometry args={[planet.size * 1.5, planet.size * 2.2, 40]} />
          <meshBasicMaterial color="#e8d5a8" side={DoubleSide} transparent opacity={0.55} />
        </mesh>
      ) : null}
      <Html center distanceFactor={9}>
        <Link className="constellation-label" href={`#${planet.slug}`}>
          <span>{planet.name}</span>
          <small>{planet.year}</small>
        </Link>
      </Html>
    </group>
  );
}

function ConstellationScene({ projects }: { projects: ProjectNode[] }) {
  const sunTexture = useMemo(() => createSunTexture(), []);

  const planets = useMemo<Planet[]>(() => {
    const total = projects.length;
    return projects.map((project, index) => {
      const radius = 2.1 + index * 0.5;
      const eccentricity = 0.06 + seededRandom(index + 1) * 0.24;
      const speed = 0.34 / Math.sqrt(radius);
      const phase = (index / total) * Math.PI * 2;
      const tilt = (index % 2 === 0 ? 1 : -1) * (0.1 + (index % 3) * 0.05);
      const spin = 0.3 + seededRandom(index + 7) * 0.9;
      const type = PLANET_TYPES[index % PLANET_TYPES.length];
      const color = index % 2 === 0 ? '#7dd3fc' : '#fb7185';
      const size = 0.19 + (index % 3) * 0.03;
      const hasRing = type === 'gas';
      return { ...project, radius, eccentricity, speed, phase, tilt, spin, color, size, type, seed: index * 13.7, hasRing };
    });
  }, [projects]);

  return (
    <group>
      <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.2}>
        <Sphere args={[0.66, 32, 32]}>
          <meshStandardMaterial map={sunTexture ?? undefined} emissive="#fde68a" emissiveIntensity={0.7} />
        </Sphere>
        <Html center distanceFactor={8}>
          <div className="pointer-events-none rounded-full border border-white/15 bg-black/75 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-white">
            repo core
          </div>
        </Html>
      </Float>

      {planets.map((planet) => (
        <OrbitRing key={`ring-${planet.slug}`} radius={planet.radius} eccentricity={planet.eccentricity} tilt={planet.tilt} />
      ))}

      {planets.map((planet) => (
        <PlanetBody key={planet.slug} planet={planet} />
      ))}
    </group>
  );
}

export default function ProjectConstellation({ projects }: { projects: ProjectNode[] }) {
  return (
    <div className="blender-panel">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500">orrery mode</p>
          <h3 className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">Project solar system</h3>
        </div>
        <span className="rounded-full border border-[#2a2a2a] bg-black px-2.5 py-1 font-mono text-[10px] uppercase text-zinc-300">
          live orbit
        </span>
      </div>
      <div className="relative h-[280px] overflow-hidden sm:h-[320px]">
        <Canvas camera={{ position: [0, 4.4, 8.6], fov: 38 }}>
          <color attach="background" args={['#050505']} />
          <fog attach="fog" args={['#050505', 10, 20]} />
          <ambientLight intensity={0.75} />
          <directionalLight position={[3, 5, 4]} intensity={1.3} color="#ffffff" />
          <pointLight position={[-4, -3, -2]} intensity={12} color="#7dd3fc" />
          <pointLight position={[4, 3, 2]} intensity={9} color="#fb7185" />
          <Stars radius={26} depth={10} count={800} factor={3} saturation={0} fade speed={1} />
          <ConstellationScene projects={projects} />
          <OrbitControls enablePan={false} maxDistance={11.5} minDistance={7.5} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
      </div>
    </div>
  );
}

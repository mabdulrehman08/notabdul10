'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, Line, OrbitControls, Sphere, Stars } from '@react-three/drei';
import Link from 'next/link';
import { useMemo, useRef } from 'react';
import type { Group } from 'three';

type ProjectNode = {
  name: string;
  slug: string;
  year: string;
  tag: string;
};

const orbitPositions = [
  [0, 0, 0],
  [2.6, 1.2, -1.4],
  [-2.7, 1.6, -1.1],
  [3.1, -1.8, 0.9],
  [-3.3, -1.9, 1.1],
  [0.2, 2.9, 1.7],
  [0.8, -3.2, -1.5],
  [4.2, 0.4, -2.3],
  [-4.1, 0.1, 2.2],
  [2.4, 3.1, 0.4],
  [-2.2, -3.1, -0.2],
];

function ConstellationScene({ projects }: { projects: ProjectNode[] }) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
  });

  const nodes = useMemo(
    () =>
      projects.map((project, index) => ({
        ...project,
        position: orbitPositions[index % orbitPositions.length],
        color: index === 0 ? '#f4ff00' : index % 2 === 0 ? '#7dd3fc' : '#fb7185',
      })),
    [projects],
  );

  return (
    <group ref={groupRef}>
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.35}>
        <Sphere args={[0.62, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#f8fafc" emissive="#7dd3fc" emissiveIntensity={0.8} />
        </Sphere>
        <Html center distanceFactor={10}>
          <div className="pointer-events-none rounded-full border border-white/15 bg-black/75 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white">
            repo core
          </div>
        </Html>
      </Float>

      {nodes.map((project) => (
        <group key={project.slug} position={project.position as [number, number, number]}>
          <Line
            color="rgba(255,255,255,0.5)"
            lineWidth={1}
            points={[
              [0, 0, 0],
              project.position as [number, number, number],
            ]}
            transparent
          />
          <Float speed={2.1} rotationIntensity={0.45} floatIntensity={0.55}>
            <Sphere args={[0.28, 24, 24]}>
              <meshStandardMaterial color={project.color} emissive={project.color} emissiveIntensity={1.2} />
            </Sphere>
            <Html center distanceFactor={11}>
              <Link
                className="constellation-label"
                href={`#${project.slug}`}
              >
                <span>{project.name}</span>
                <small>{project.year}</small>
              </Link>
            </Html>
          </Float>
        </group>
      ))}
    </group>
  );
}

export default function ProjectConstellation({ projects }: { projects: ProjectNode[] }) {
  return (
    <div className="blender-panel">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500">blender mode</p>
          <h3 className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">Project constellation</h3>
        </div>
        <span className="rounded-full border border-[#2a2a2a] bg-black px-2.5 py-1 font-mono text-[10px] uppercase text-zinc-300">
          orbit
        </span>
      </div>
      <div className="h-[250px] sm:h-[280px]">
        <Canvas camera={{ position: [0, 0, 7.2], fov: 44 }}>
          <color attach="background" args={['#050505']} />
          <fog attach="fog" args={['#050505', 8, 16]} />
          <ambientLight intensity={0.75} />
          <directionalLight position={[3, 5, 4]} intensity={1.3} color="#ffffff" />
          <pointLight position={[-4, -3, -2]} intensity={12} color="#7dd3fc" />
          <pointLight position={[4, 3, 2]} intensity={9} color="#fb7185" />
          <Stars radius={24} depth={10} count={800} factor={3} saturation={0} fade speed={1} />
          <ConstellationScene projects={projects} />
          <OrbitControls enablePan={false} maxDistance={8.1} minDistance={5.4} autoRotate autoRotateSpeed={0.4} />
        </Canvas>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';

const BOOT_LINES = [
  'ABDULREHMAN_OS v2.6.0 — build 20260706',
  'initializing kernel...................... ok',
  'loading resume.json...................... ok',
  'mounting /projects (10 repos)............ ok',
  'mounting /journal......................... ok',
  'connecting SF_LOCATION.beacon............ ok',
  'checking availability.................... AVAILABLE',
  'status: open to software engineering roles',
  '',
  'welcome, you have root access.',
];

const STORAGE_KEY = 'abdulrehman-os-booted';

export default function BootSequence({ children }: { children: React.ReactNode }) {
  const [booted, setBooted] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [closing, setClosing] = useState(false);
  const skippedRef = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const alreadyBooted = window.sessionStorage.getItem(STORAGE_KEY) === '1';

    const timers: ReturnType<typeof setTimeout>[] = [];

    if (alreadyBooted || reduceMotion) {
      window.sessionStorage.setItem(STORAGE_KEY, '1');
      timers.push(setTimeout(() => setBooted(true), 0));
      return () => timers.forEach(clearTimeout);
    }

    BOOT_LINES.forEach((_, index) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines(index + 1);
        }, 140 * index),
      );
    });

    timers.push(
      setTimeout(() => {
        finish();
      }, 140 * BOOT_LINES.length + 550),
    );

    function finish() {
      if (skippedRef.current) return;
      skippedRef.current = true;
      setClosing(true);
      window.sessionStorage.setItem(STORAGE_KEY, '1');
      setTimeout(() => setBooted(true), 420);
    }

    function skip(event: KeyboardEvent | MouseEvent) {
      if (event instanceof KeyboardEvent && event.key === 'Meta') return;
      finish();
    }

    window.addEventListener('keydown', skip);
    window.addEventListener('click', skip);

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('keydown', skip);
      window.removeEventListener('click', skip);
    };
  }, []);

  return (
    <>
      {children}
      {!booted ? (
        <div className={`boot-screen ${closing ? 'boot-screen-closing' : ''}`} role="status" aria-live="polite">
          <div className="boot-screen-inner">
            {BOOT_LINES.slice(0, visibleLines).map((line, index) => (
              <p key={index} className="boot-line">
                {line === '' ? ' ' : line}
              </p>
            ))}
            <span className="boot-caret" aria-hidden="true" />
          </div>
          <p className="boot-skip">press any key to skip</p>
        </div>
      ) : null}
    </>
  );
}

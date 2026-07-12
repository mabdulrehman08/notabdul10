'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useCommandPalette } from './command-palette';

const links = [
  { key: 'H', label: 'home', href: '/' },
  { key: 'P', label: 'projects', href: '/projects' },
  { key: 'J', label: 'journal', href: '/journals' },
];

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable;
}

export default function SiteNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { open, setOpen } = useCommandPalette();

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (open) return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (isTypingTarget(event.target)) return;

      const match = links.find((item) => item.key.toLowerCase() === event.key.toLowerCase());
      if (match) {
        event.preventDefault();
        router.push(match.href);
      }
    }

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [open, router]);

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <Link className="site-nav-logo" href="/">
          <span className="site-nav-dot" />
          <span className="site-nav-logo-full">ABDULREHMAN_OS</span>
          <span className="site-nav-logo-short">A_OS</span>
        </Link>

        <div className="site-nav-links">
          {links.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`site-nav-link ${active ? 'site-nav-link-active' : ''}`}
                aria-current={active ? 'page' : undefined}
                aria-label={`${item.label} (shortcut: ${item.key})`}
              >
                <span className="site-nav-key" aria-hidden="true">
                  [{item.key}]
                </span>
                <span className="site-nav-label" aria-hidden="true">
                  {item.label}
                </span>
              </Link>
            );
          })}

          <button type="button" className="site-nav-cmdk" onClick={() => setOpen(true)}>
            <span className="site-nav-cmdk-label">search</span>
            <kbd>⌘K</kbd>
          </button>
        </div>
      </div>
    </nav>
  );
}

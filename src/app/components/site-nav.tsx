'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCommandPalette } from './command-palette';

const links = [
  { key: 'H', label: 'home', href: '/' },
  { key: 'P', label: 'projects', href: '/projects' },
  { key: 'J', label: 'journal', href: '/journals' },
];

export default function SiteNav() {
  const pathname = usePathname();
  const { setOpen } = useCommandPalette();

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <Link className="site-nav-logo" href="/">
          <span className="site-nav-dot" />
          ABDULREHMAN_OS
        </Link>

        <div className="site-nav-links">
          {links.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={`site-nav-link ${active ? 'site-nav-link-active' : ''}`}>
                <span className="site-nav-key">{item.key}</span>
                {item.label}
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

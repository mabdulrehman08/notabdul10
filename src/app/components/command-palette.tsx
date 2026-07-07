'use client';

import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

type Command = {
  id: string;
  label: string;
  hint: string;
  keywords: string;
  run: (router: ReturnType<typeof useRouter>) => void;
};

const COMMANDS: Command[] = [
  {
    id: 'home',
    label: 'cd ~/home',
    hint: 'go to homepage',
    keywords: 'home index landing resume',
    run: (router) => router.push('/'),
  },
  {
    id: 'projects',
    label: 'cd ~/projects',
    hint: 'open repo journal',
    keywords: 'projects work repos code',
    run: (router) => router.push('/projects'),
  },
  {
    id: 'journals',
    label: 'cd ~/journal',
    hint: 'open the diary',
    keywords: 'journal blog notes diary thoughts',
    run: (router) => router.push('/journals'),
  },
  {
    id: 'contact',
    label: 'cat contact.txt',
    hint: 'jump to contact block',
    keywords: 'contact hire email reach',
    run: (router) => {
      router.push('/#contact');
    },
  },
  {
    id: 'resume',
    label: './download resume.pdf',
    hint: 'download the resume',
    keywords: 'resume cv download pdf',
    run: () => {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'resume.pdf';
      link.click();
    },
  },
  {
    id: 'github',
    label: 'open github://mabdulrehman08',
    hint: 'view GitHub profile',
    keywords: 'github code source repos',
    run: () => window.open('https://github.com/mabdulrehman08', '_blank', 'noopener,noreferrer'),
  },
  {
    id: 'linkedin',
    label: 'open linkedin://muhammad-abdulrehman08',
    hint: 'view LinkedIn profile',
    keywords: 'linkedin network professional',
    run: () => window.open('https://linkedin.com/in/muhammad-abdulrehman08', '_blank', 'noopener,noreferrer'),
  },
  {
    id: 'email',
    label: 'mailto: send email',
    hint: 'compose an email',
    keywords: 'email contact mail send',
    run: () => window.open('mailto:muhammadabdulrehman513@gmail.com'),
  },
];

type PaletteContextValue = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const PaletteContext = createContext<PaletteContextValue | null>(null);

export function useCommandPalette() {
  const ctx = useContext(PaletteContext);
  if (!ctx) throw new Error('useCommandPalette must be used within CommandPaletteProvider');
  return ctx;
}

export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpenState] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COMMANDS;
    return COMMANDS.filter(
      (command) => command.label.toLowerCase().includes(q) || command.keywords.includes(q),
    );
  }, [query]);

  function openPalette(next: boolean) {
    if (next) {
      setQuery('');
      setActiveIndex(0);
    }
    setOpenState(next);
  }

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      const isMeta = event.metaKey || event.ctrlKey;
      if (isMeta && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        openPalette(!open);
        return;
      }
      if (event.key === 'Escape') {
        setOpenState(false);
      }
    }

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [open]);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  function handleQueryChange(value: string) {
    setQuery(value);
    setActiveIndex(0);
  }

  function execute(command: Command) {
    command.run(router);
    setOpenState(false);
  }

  function handleInputKeydown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((current) => Math.min(current + 1, results.length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((current) => Math.max(current - 1, 0));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const command = results[activeIndex];
      if (command) execute(command);
    }
  }

  return (
    <PaletteContext.Provider value={{ open, setOpen: openPalette }}>
      {children}
      {open ? (
        <div className="cmdk-backdrop" onClick={() => setOpenState(false)}>
          <div className="cmdk-panel" onClick={(event) => event.stopPropagation()}>
            <div className="cmdk-input-row">
              <span className="cmdk-prompt">$</span>
              <input
                ref={inputRef}
                className="cmdk-input"
                placeholder="type a command or search..."
                value={query}
                onChange={(event) => handleQueryChange(event.target.value)}
                onKeyDown={handleInputKeydown}
                spellCheck={false}
                autoComplete="off"
              />
              <kbd className="cmdk-esc">esc</kbd>
            </div>
            <div className="cmdk-results">
              {results.length === 0 ? (
                <p className="cmdk-empty">no matches. try &quot;projects&quot;, &quot;resume&quot;, &quot;contact&quot;...</p>
              ) : (
                results.map((command, index) => (
                  <button
                    key={command.id}
                    type="button"
                    className={`cmdk-item ${index === activeIndex ? 'cmdk-item-active' : ''}`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => execute(command)}
                  >
                    <span className="cmdk-item-label">{command.label}</span>
                    <span className="cmdk-item-hint">{command.hint}</span>
                  </button>
                ))
              )}
            </div>
            <div className="cmdk-footer">
              <span>↑↓ navigate</span>
              <span>↵ select</span>
              <span>esc close</span>
            </div>
          </div>
        </div>
      ) : null}
    </PaletteContext.Provider>
  );
}

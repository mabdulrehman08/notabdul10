import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { CommandPaletteProvider } from './components/command-palette';
import BootSequence from './components/boot-sequence';

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ABDULREHMAN_OS',
  description: 'Muhammad Abdulrehman — software engineer. Boot into the resume.',
  icons: {
    icon: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mono.variable} font-mono antialiased`}>
        <div className="crt-overlay" aria-hidden="true" />
        <CommandPaletteProvider>
          <BootSequence>{children}</BootSequence>
        </CommandPaletteProvider>
      </body>
    </html>
  );
}

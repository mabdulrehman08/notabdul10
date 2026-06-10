import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'not_abdul.com',
  description: '',
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
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Abdulrehman | Portfolio',
  description: 'Interactive resume and project portfolio for Muhammad Abdulrehman.',
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

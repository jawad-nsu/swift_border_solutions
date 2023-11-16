import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Planet Pilot',
  description: 'Nasa API app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://stijndv.com' />
        <link
          rel='stylesheet'
          href='https://stijndv.com/fonts/Eudoxus-Sans.css'
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

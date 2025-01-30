import type { Metadata } from 'next';

import { Jersey_20, Kodchasan } from 'next/font/google';

import './globals.css';
import { Header } from '@/widgets/header';

const kodchasan = Kodchasan({
  variable: '--font-kodchasan',
  weight: '400',
  subsets: ['latin'],
});

const jersey_20 = Jersey_20({ variable: '--font-jersey_20', weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cura',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${kodchasan.variable} ${jersey_20.variable} antialiased relative pt-6`}>
        <Header />
        <main className='overflow-hidden'>{children}</main>
      </body>
    </html>
  );
}

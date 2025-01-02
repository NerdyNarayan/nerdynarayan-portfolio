import { Metadata } from 'next';

import '@/styles/globals.css';

import { Inter } from 'next/font/google';

import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `NerdyNarayan Portfolio`,
  description: `NerdyNarayan portfolio website`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}

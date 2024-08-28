import { Inter } from 'next/font/google';
import SessionWrapper from './component/sessionWrapper';
import Navbar from './component/navbar/page';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Next.js Blog',
  description: 'A blog platform with authentication',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
        <Navbar />
        {children}
        </SessionWrapper>
      </body>
    </html>
  );
}

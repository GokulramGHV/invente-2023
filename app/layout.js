import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Invente 2023',
  description: 'TechSpectrum: Traveling through time and Tech',
  other: {
    rel: 'stylesheet',
    url: 'https://www.dafontfree.net/embed/cG9zdC1uby1iaWxscy1jb2xvbWJvLWJvbGQmZGF0YS80NDEvcC8xNzk4MjAvUG9zdE5vQmlsbHNDb2xvbWJvLUJvbGQudHRm',
    type: 'text/css',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

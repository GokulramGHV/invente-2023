import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Invente 2023',
  description: 'TechSpectrum: Traveling through time and Tech',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://www.dafontfree.net/embed/cG9zdC1uby1iaWxscy1jb2xvbWJvLWJvbGQmZGF0YS80NDEvcC8xNzk4MjAvUG9zdE5vQmlsbHNDb2xvbWJvLUJvbGQudHRm"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

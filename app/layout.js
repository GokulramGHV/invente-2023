import './globals.css';
import { IBM_Plex_Sans } from 'next/font/google';

const ibm_plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

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
      <body className={ibm_plex.className}>{children}</body>
    </html>
  );
}

import Image from 'next/image';
import { IBM_Plex_Sans } from 'next/font/google';
import Navbar from '@/components/navbar';

const ibm_plex_sans1 = IBM_Plex_Sans({
  preload: 'true',
  weight: '100',
  subsets: ['latin']
})
const ibm_plex_sans2 = IBM_Plex_Sans({
  preload: 'true',
  weight: '500',
  subsets: ['latin']
})

export default function footerMobile() {
  return (
    <div className='md:block'>
        hi
    </div>
  );
}

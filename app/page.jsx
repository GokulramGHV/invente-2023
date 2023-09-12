import Image from 'next/image';

import Countdown from '@/components/countdown';
import { HeroLogo } from '@/components/heroLogo';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center p-10">
            <video
              src="/Asc.m4v"
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 z-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 flex justify-between items-center w-full p-16 z-10">
              <Image src="/snuLogo.svg" alt="SNU Logo" width="200" height="200" />
              <Image src="/ssnLogo.svg" alt="SSN Logo" width="130" height="130" />
            </div>
            <HeroLogo />
            <Countdown />
            <Image
              src="/downArrow.png"
              alt="Down Arrow"
              width="50"
              height="50"
              className="z-50 relative top-20 transition duration-700 ease-in-out animate-bounce"
            />
      </main>
      <div className="bg-hex w-full h-full bg-scroll bg-cover">
        <Navbar />
      </div>
    </div>
  );
}

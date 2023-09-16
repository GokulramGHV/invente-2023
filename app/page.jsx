import Image from 'next/image';

import Countdown from '@/components/countdown';
import { HeroLogo } from '@/components/heroLogo';
import Timeline from '@/components/timeline';
import ThemeSection from '@/components/ThemeSection';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center p-10">
        <video
          src="/Asc.m4v"
          autoPlay
          loop
          muted
          preload="auto"
          className="absolute top-0 left-0 z-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 flex justify-between items-center w-full md:px-16 px-8 z-10">
          <div className="relative md:w-[200px] md:h-[200px] w-[150px] h-[150px]">
            <Image src="/snuLogo.svg" alt="SNU Logo" fill />
          </div>
          <div className="relative md:w-[130px] md:h-[130px] w-[95px] h-[95px]">
            <Image src="/ssnLogo.svg" alt="SSN Logo" fill />
          </div>
        </div>
        <HeroLogo />
        <Countdown />
        <Image
          src="/downArrow.png"
          alt="Down Arrow"
          width="50"
          height="50"
          className="z-10 relative top-20 transition duration-700 ease-in-out animate-bounce"
        />
      </div>

      <div className="bg-hex w-full h-full bg-scroll bg-contain">
        <Navbar />
        <ThemeSection />
        <Timeline />
      </div>
    </main>
  );
}

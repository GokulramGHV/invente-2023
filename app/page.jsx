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
      </div>
      {/* <div className="w-full min-h-screen relative bg-[#252536]">
        <div
          className="w-full h-full absolute top-0 left-0 bg-cover bg-repeat-y opacity-20"
          style={{
            backgroundImage: `url("background_rect.png")`,
          }}
        ></div>
        <div
          className="w-full h-full absolute top-0 left-0 bg-contain bg-repeat-y opacity-40"
          style={{
            backgroundImage: `url("hexxx 1.svg")`,
          }}
        ></div> */}
      {/* <Image
          src="hexxx 1.svg"
          alt="hex"
          className="object-cover w-full h-full absolute top-0 left-0"
          width={1920}
          height={1080}
        /> */}
      {/* <Timeline />
      </div> */}
      <div className="bg-hex w-full h-full bg-scroll bg-cover">
        <Navbar />
      </div>
      <div
        className="w-full min-h-screen relative bg-contain"
        style={{
          backgroundImage: `url("hexbg.jpg")`,
        }}
      >
        <ThemeSection />
        <Timeline />
      </div>
      {/* <Timeline /> */}
    </main>
  );
}

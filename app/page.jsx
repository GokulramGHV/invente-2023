import Image from 'next/image';

import Countdown from '@/components/countdown';
import { HeroLogo } from '@/components/heroLogo';
import Timeline from '@/components/timeline';
import ThemeSection from '@/components/ThemeSection';
import Navbar from '@/components/navbar';
import Footer from '../components/footer';

export default function Home() {
  return (
    <main className='bg-[#1D1D1F]'>
      <div className='relative px-5 pb-3 pt-5 w-full'>
        <video
            src="/bg_video.m4v"
            autoPlay
            loop
            muted
            preload="auto"
            className="rounded-3xl h-screen w-full object-cover"
        />

        <div className="absolute top-0 left-0 flex justify-between items-center w-full md:px-16 px-8 z-10">
            <div className="relative md:w-[200px] md:h-[200px] w-[150px] h-[150px]">
                <Image src="/snuLogo.svg" alt="SNU Logo" fill />
            </div>
            <div className="relative md:w-[130px] md:h-[130px] w-[95px] h-[95px]">
                <Image src="/ssnLogo.svg" alt="SSN Logo" fill />
            </div>
        </div>

        <div className='absolute top-1/4 left-1/2 -translate-x-[50%] flex-row items-center justify-center w-max'>
          <HeroLogo />
          <Countdown />
          <div className="flex justify-center">
          <Image
            src="/downArrow.png"
            alt="Down Arrow"
            width="50"
            height="50"
            className="z-10 relative top-20 transition duration-700 ease-in-out animate-bounce"
          />
          </div>
          
        </div>

      </div>




      {/* <div className="flex min-h-screen flex-col items-center justify-center p-10">
        <video
          src="/bg_video.m4v"
          autoPlay
          loop
          muted
          preload="auto"
          className="absolute z-0 w-full h-screen object-cover rounded-3xl"
        />
        <div className="absolute top-0 left-0 flex justify-between items-center w-full md:px-16 px-8 z-10">
          <div className="relative md:w-[200px] md:h-[200px] w-[150px] h-[150px]">
            <Image src="/snuLogo.svg" alt="SNU Logo" fill />
          </div>
          <div className="relative md:w-[130px] md:h-[130px] w-[95px] h-[95px]">
            <Image src="/ssnLogo.svg" alt="SSN Logo" fill />
          </div>
        </div>
        
      </div> */}

      <div className="bg-hex w-full h-full bg-scroll bg-contain">
        <Navbar />
        <ThemeSection />
        <Timeline />
      </div>
      <Footer />
    </main>
  );
}

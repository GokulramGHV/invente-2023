'use client';
import Image from 'next/image';
import Link from 'next/link';
import Countdown from '@/components/countdown';
import { HeroLogo } from '@/components/heroLogo';
import Timeline from '@/components/timeline';
import ThemeSection from '@/components/ThemeSection';
import Navbar from '@/components/navbar';
import Footer from '../components/footer';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <main>
      <div
        className="relative flex min-h-screen flex-col items-center justify-center pl-5 pr-2 pt-5 bg-[#1D1D1F] bg-scroll"
        id="home"
      >
        <div className="relative flex-1 flex flex-col w-full">
          <video
            src="/bg_video.m4v"
            autoPlay
            loop
            muted
            preload="auto"
            className="rounded-3xl absolute h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 flex justify-between items-center w-full md:px-16 px-8 z-10">
            <div className="relative md:w-[200px] md:h-[200px] w-[150px] h-[150px]">
              <Image src="/snuLogo.svg" alt="SNU Logo" fill />
            </div>
            <div className="relative md:w-[130px] md:h-[130px] w-[95px] h-[95px]">
              <Image src="/ssnLogo.svg" alt="SSN Logo" fill />
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center w-full px-5">
            <HeroLogo />
            <Countdown />
            <Link href="#theme">
              <Image
                src="/downArrow.png"
                alt="Down Arrow"
                width="50"
                height="50"
                className="z-10 relative top-20 transition duration-700 ease-in-out animate-bounce"
              />
            </Link>
          </div>
        </div>
        <div ref={ref} className="w-full">
          <Navbar paddingX="px-3" />
        </div>
      </div>
      <div className="bg-hex w-full h-full bg-scroll bg-contain">
        {!inView && <Navbar />}
        <ThemeSection />
        <Timeline />
      </div>
      <Footer />
    </main>
  );
}

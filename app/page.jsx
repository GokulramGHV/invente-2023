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
import { useState, useEffect } from 'react';

export default function Home() {
  //load video afer timeout
  useEffect(() => {
    setTimeout(() => {
      document.getElementById('bg_video').load();
    }, 3000);
  }, []);

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  const [navOpen, setNavOpen] = useState(false);

  return (
    <main>
      <div
        className="relative flex min-h-[93vh] flex-col items-center justify-center pl-5 lg:pr-2 pr-5 pt-5 bg-[#1D1D1F] bg-scroll"
        id="home"
      >
        <div className="relative flex-1 flex flex-col w-full">

          <img
            src="/bg_video_pic.png"
            alt="Background Image"
            style={{ opacity: isVideoLoaded ? 0 : 1 }}
            className="rounded-3xl absolute h-full w-full object-cover"
          />

          <video
            id="bg_video"
            src="https://res.cloudinary.com/di4swkq4j/video/upload/v1695670138/Asc_3mb_mhm532.mp4"
            autoPlay
            loop
            muted

            onLoadStart={() => {
              setIsVideoLoaded(false)
              console.log('bg video load started')
            }}

            onLoadedData={() => {
              setIsVideoLoaded(true)
              console.log('bg video loaded')
            }}

            style={{ opacity: isVideoLoaded ? 1 : 0 }}
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
      </div>
      <div ref={ref} className="w-full sticky top-0 z-50">
        <Navbar paddingX="px-3" setIsOpen={setNavOpen} isOpen={navOpen} />
      </div>
      <div className="bg-hex w-full h-full bg-scroll bg-contain">
        <ThemeSection />
        <Timeline />
      </div>
      <Footer />
    </main>
  );
}

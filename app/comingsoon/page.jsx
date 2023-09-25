'use client';

import { Unbounded } from 'next/font/google';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import { Tilt } from 'react-tilt';
import { useState } from 'react';

const unbounded = Unbounded({
  preload: true,
  subsets: ['latin'],
});

export default function ComingSoon() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="bg-[#1D1D1F] h-screen w-full flex flex-col px-5 pt-5">
      <div className="relative flex-1 flex justify-center items-center w-full">
        <video
          src="https://res.cloudinary.com/di4swkq4j/video/upload/v1695670138/Asc_3mb_mhm532.mp4"
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

        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] w-max">
          <Tilt
            options={{
              scale: 1,
              max: 15,
              perspective: 1000,
              easing: 'cubic-bezier(.17,.67,.83,.67)',
              speed: 100,
            }}
          >
            <h1
              className={`xl:text-7xl md:text-6xl sm:text-5xl text-3xl font-semibold ${unbounded.className}`}
            >
              COMING SOON
            </h1>
          </Tilt>
        </div>
      </div>
      <Navbar paddingX="px-3" isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
}

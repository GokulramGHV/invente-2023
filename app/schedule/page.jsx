'use client';

import ScheduleBox from '@/components/scheduleBox';
import { Bayon } from 'next/font/google';

const bayon = Bayon({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Schedule() {
  return (
    <div className="relative bg-hex w-full min-h-screen flex flex-col items-center lg:px-32 lg:py-14 py-20 px-5 overflow-x-clip">
      <h1
        className={`${bayon.className} xl:text-7xl text-center uppercase text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#BAF7FF]`}
      >
        Schedule
      </h1>
      <ScheduleBox />
    </div>
  );
}

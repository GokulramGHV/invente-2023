'use client';

import { useCountdown } from '@/hooks/useCountDown';
import { Space_Grotesk } from 'next/font/google';

const space_grotesk = Space_Grotesk({
  preload: true,
  subsets: ['latin'],
});

export default function Countdown() {
  const [days, hours, minutes, seconds] = useCountdown('Oct 6, 2023 00:00:00');
  return (
    <div
      id="countdown"
      className={`${space_grotesk.className} flex gap-8 z-10 relative top-10 justify-center`}
    >
      <div className="text-center">
        <h1 className="md:text-7xl text-5xl font-bold text-white">{String(days).padStart(2, '0')}</h1>
        <p className="md:text-xl font-light text-[#F7971D] relative md:left-1">
          days
        </p>
      </div>
      <div className="text-center">
        <h1 className="md:text-7xl text-5xl font-bold text-white">{String(hours).padStart(2, '0')}</h1>
        <p className="md:text-xl font-light text-[#F7971D] relative md:left-1">
          hrs
        </p>
      </div>
      <div className="text-center">
        <h1 className="md:text-7xl text-5xl font-bold text-white">{String(minutes).padStart(2, '0')}</h1>
        <p className="md:text-xl font-light text-[#F7971D] relative md:left-1">
          mins
        </p>
      </div>
    </div>
  );
}

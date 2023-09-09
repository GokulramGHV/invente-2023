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
      className={`${space_grotesk.className} flex gap-8 z-50 relative top-10`}
    >
      <div className="text-center">
        <h1 className="text-7xl font-bold text-white">{days}</h1>
        <p className="text-xl font-light text-[#F7971D] relative left-1">
          days
        </p>
      </div>
      <div className="text-center">
        <h1 className="text-7xl font-bold text-white">{hours}</h1>
        <p className="text-xl font-light text-[#F7971D] relative left-1">
          hrs
        </p>
      </div>
      <div className="text-center">
        <h1 className="text-7xl font-bold text-white">{minutes}</h1>
        <p className="text-xl font-light text-[#F7971D] relative left-1">
          mins
        </p>
      </div>
    </div>
  );
}

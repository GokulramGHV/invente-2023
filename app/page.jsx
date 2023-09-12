import Image from 'next/image';

import Countdown from '@/components/countdown';
import Timeline from '@/components/timeline'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-steel">
      <div className='flex min-h-screen flex-col items-center justify-center px-10 py-0'>
        <video
          src="/Asc.m4v"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 z-0 w-full h-full object-cover"
        ></video>
        <div className="absolute top-0 left-0 flex justify-between items-center w-full p-16 z-10">
          <Image src="/snuLogo.svg" alt="SNU Logo" width="220" height="200" />
          <Image src="/ssnLogo.svg" alt="SSN Logo" width="150" height="130" />
        </div>
        <Image
          src="/inventeLogo.svg"
          alt="Invente"
          width="500"
          height="200"
          className="z-20"
        />
        <Countdown />
        <Image
          src="/downArrow.png"
          alt="Down Arrow"
          width="50"
          height="50"
          className="z-50 relative top-20 transition duration-700 ease-in-out animate-bounce"
        />
      </div>
      <Timeline />
    </main>
  );
}

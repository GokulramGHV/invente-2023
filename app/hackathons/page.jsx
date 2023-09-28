import { Bayon } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const bayon = Bayon({
  subsets: ['latin'],
  weight: ['400'],
});
export default function HackathonPage() {
  return (
    <div className="bg-hex w-full h-screen flex flex-col items-center md:p-32 p-10">
      <Image
        src="/invente-bulb.png"
        alt="invente-bulb"
        width={800}
        height={800}
        className="absolute top-[40%] translate-y-[-50%] -right-[200px] transform origin-top-right opacity-[0.05] -rotate-[16deg] z-0"
      />
      <h1
        className={`${bayon.className} xl:text-7xl text-center uppercase text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#BAF7FF]`}
      >
        Hackathons
      </h1>
      <div className="flex flex-col md:flex-row md:mt-24 mt-12 md:gap-24 gap-10 z-10">
        <Link
          href="/hackathons/hackfinity"
          className="hover:scale-105 transition-transform duration-200 ease-in-out"
        >
          <Image
            alt="hackfinity"
            src="/hackfinity.png"
            width={400}
            height={250}
          />
        </Link>
        <Link
          href="/hackathons/hardwired_ideathon"
          className="hover:scale-105 transition-transform duration-200 ease-in-out"
        >
          <Image
            alt="hardwired_ideathon"
            src="/hardwired.png"
            width={400}
            height={250}
          />
        </Link>
      </div>
    </div>
  );
}

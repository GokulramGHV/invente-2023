import { Bayon } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const bayon = Bayon({
  subsets: ['latin'],
  weight: ['400'],
});
export default function WorkShopPage() {
  return (
    <div className="relative bg-hex w-full h-screen flex flex-col items-center md:p-32 p-10 overflow-x-clip">
      <h1
        className={`${bayon.className} xl:text-7xl text-center uppercase text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#BAF7FF]`}
      >
        Workshops
      </h1>
      <Image
        src="/invente-bulb.png"
        alt="invente-bulb"
        width={800}
        height={800}
        className="absolute top-[40%] translate-y-[-50%] md:-right-[200px] -right-[100px] transform origin-top-right opacity-[0.05] -rotate-[16deg] z-0"
      />
      <div className="flex flex-col md:flex-row md:mt-24 mt-12 md:gap-24 gap-10 z-10">
        <Link
          href="/workshops/arvr"
          className="hover:scale-105 transition-transform duration-200 ease-in-out"
        >
          <Image
            alt="AR VR Workshop"
            src="/workshop_ARVR.png"
            width={400}
            height={250}
          />
        </Link>
        <Link
          href="/workshops/iot"
          className="hover:scale-105 transition-transform duration-200 ease-in-out"
        >
          <Image
            alt="IoT Workshop"
            src="/workshop_IOT.png"
            width={400}
            height={250}
          />
        </Link>
      </div>
    </div>
  );
}

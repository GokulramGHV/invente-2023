import { Bayon } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const bayon = Bayon({
  subsets: ['latin'],
  weight: ['400'],
});
export default function WorkShopPage() {
  return (
    <div className="bg-hex w-full h-screen flex justify-center sm:p-32 p-10">
      <h1
        className={`${bayon.className} xl:text-7xl text-center uppercase text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#BAF7FF]`}
      >
        Workshops
        <div className="flex flex-col sm:flex-row sm:mt-24 mt-12 sm:gap-24 gap-10">
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
              src="/workshop_iot.png"
              width={400}
              height={250}
            />
          </Link>
        </div>
      </h1>
    </div>
  );
}

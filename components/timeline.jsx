'use client';
import Image from 'next/image';

import { Space_Grotesk } from 'next/font/google';

const space_grotesk = Space_Grotesk({
  preload: true,
  subsets: ['latin'],
});

export default function Timeline() {
  return (
    <div
      className={`${space_grotesk.className} flex-column justify-center items-center w-full lg:px-20 px-5 pb-20 z-10`}
    >
      <div className="font-bold md:text-5xl text-3xl flex justify-center mb-20">
        EXPLORE THE TIMELINE
      </div>
      <div className="md:w-[630px] mx-auto flex flex-col lg:gap-3 gap-20">
        <div className="relative flex justify-center lg:justify-end items-center">
          <Image
            src="/cse.png"
            alt="cse"
            width="300"
            height="180"
            className="z-10"
          />
          <Image
            src="/Line 3.png"
            alt="arrow"
            width={100}
            height={56}
            className="hidden lg:block absolute top-[80%] left-[42%] z-[11]"
          />
          <div className="absolute -top-10 lg:-right-24 right-[35%]">
            <div className="relative">
              <Image
                src="/Vector 5.png"
                alt="arrow"
                width={120}
                height={56}
                className=""
              />
              <p className="absolute -top-0.5 -right-12 text-xl">2077</p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-start items-center">
          <Image
            src="/it.png"
            alt="it"
            width="300"
            height="180"
            className="z-10"
          />
          <Image
            src="/Line 3.png"
            alt="arrow"
            width={100}
            height={56}
            className="hidden lg:block absolute -bottom-12 left-[42%] z-[11] transform -scale-x-100"
          />
          <div className="absolute -top-10 lg:-left-24 left-[35%]">
            <div className="relative">
              <Image
                src="/Vector 5.png"
                alt="arrow"
                width={120}
                height={56}
                className=" transform -scale-x-100"
              />
              <p className="absolute -top-0.5 -left-12 text-xl">1980</p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end items-center">
          <Image
            src="/ece.png"
            alt="ece"
            width="300"
            height="180"
            className="z-10"
          />
          <Image
            src="/Line 3.png"
            alt="arrow"
            width={100}
            height={56}
            className="hidden lg:block absolute top-[80%] left-[42%] z-[11]"
          />
          <div className="absolute -top-10 lg:-right-24 right-[35%]">
            <div className="relative">
              <Image
                src="/Vector 5.png"
                alt="arrow"
                width={120}
                height={56}
                className=""
              />
              <p className="absolute -top-0.5 -right-12 text-xl">1971</p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-start items-center">
          <Image
            src="/mech.png"
            alt="mech"
            width="300"
            height="180"
            className="z-10"
          />
          <Image
            src="/Line 3.png"
            alt="arrow"
            width={100}
            height={56}
            className="hidden lg:block absolute -bottom-12 left-[42%] z-[11] transform -scale-x-100"
          />
          <div className="absolute -top-10 lg:-left-24 left-[35%]">
            <div className="relative">
              <Image
                src="/Vector 5.png"
                alt="arrow"
                width={120}
                height={56}
                className=" transform -scale-x-100"
              />
              <p className="absolute -top-0.5 -left-12 text-xl">1900</p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end items-center">
          <Image
            src="/chem.png"
            alt="chem"
            width="300"
            height="180"
            className="z-10"
          />
          <Image
            src="/Line 3.png"
            alt="arrow"
            width={100}
            height={56}
            className="hidden lg:block absolute top-[80%] left-[42%] z-[11]"
          />
          <div className="absolute -top-10 lg:-right-24 right-[35%]">
            <div className="relative">
              <Image
                src="/Vector 5.png"
                alt="arrow"
                width={120}
                height={56}
                className=""
              />
              <p className="absolute -top-0.5 -right-12 text-xl">1847</p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-start items-center">
          <Image
            src="/eee.png"
            alt="eee"
            width="300"
            height="180"
            className="z-10"
          />
          <Image
            src="/Line 3.png"
            alt="arrow"
            width={100}
            height={56}
            className="hidden lg:block absolute -bottom-12 left-[42%] z-[11] transform -scale-x-100"
          />
          <div className="absolute -top-10 lg:-left-24 left-[35%]">
            <div className="relative">
              <Image
                src="/Vector 5.png"
                alt="arrow"
                width={120}
                height={56}
                className=" transform -scale-x-100"
              />
              <p className="absolute -top-0.5 -left-12 text-xl">1800</p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end items-center">
          <Image
            src="/civil.png"
            alt="civil"
            width="300"
            height="180"
            className="z-10"
          />
          <Image
            src="/Line 3.png"
            alt="arrow"
            width={100}
            height={56}
            className="hidden lg:block absolute top-[80%] left-[42%] z-[11]"
          />
          <div className="absolute -top-10 lg:-right-24 right-[35%]">
            <div className="relative">
              <Image
                src="/Vector 5.png"
                alt="arrow"
                width={120}
                height={56}
                className=""
              />
              <p className="absolute -top-0.5 -right-12 text-xl">1755</p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-start items-center">
          <Image
            src="/bme.png"
            alt="bme"
            width="300"
            height="180"
            className="z-10"
          />
          <Image
            src="/Line 3.png"
            alt="arrow"
            width={100}
            height={56}
            className="hidden lg:block absolute -bottom-12 left-[42%] z-[11] transform -scale-x-100"
          />
          <div className="absolute -top-10 lg:-left-24 left-[35%]">
            <div className="relative">
              <Image
                src="/Vector 5.png"
                alt="arrow"
                width={120}
                height={56}
                className=" transform -scale-x-100"
              />
              <p className="absolute -top-0.5 -left-16 text-xl">950BC</p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end items-center">
          <Image
            src="/snu.png"
            alt="snu"
            width="300"
            height="180"
            className="z-10"
          />
          <div className="absolute -top-10 lg:-right-24 right-[35%]">
            <div className="relative">
              <Image src="/Vector 5.png" alt="arrow" width={120} height={56} />
              <p className="absolute -top-0.5 -right-[72px] text-xl">1000BC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

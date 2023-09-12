import { Space_Grotesk } from 'next/font/google';
import { Unbounded } from 'next/font/google';
import Image from 'next/image';

const space_grotesk = Space_Grotesk({
  preload: true,
  subsets: ['latin'],
});

const unbounded = Unbounded({
  preload: true,
  subsets: ['latin'],
});

export default function ThemeSection() {
  return (
    <div
      className={`relative w-full pt-20 pb-10 pr-20 pl-20 lg:pl-0 ${space_grotesk.className}`}
    >
      <div className="flex gap-20 items-center">
        <Image
          alt="clock"
          src="/Frame 8.png"
          width={300}
          height={500}
          className="lg:block hidden"
        />
        <div className="flex-1">
          <p>OUR THEME THIS YEAR</p>
          <h1
            className={`xl:text-7xl text-6xl font-semibold ${unbounded.className}`}
          >
            TECHSPECTRUM
          </h1>
          <h2
            className={`xl:text-2xl text-xl ml-4 font-light uppercase tracking-[0.4rem] ${unbounded.className}`}
          >
            Traveling through time and Tech
          </h2>

          <h3 className="uppercase mt-12 text-4xl font-bold">About Invente</h3>
          <p className="mt-2">
            Looking for fun? You&apos;ve come to the right place! Since 2016,
            Invente has been our flagship techfest, catered to challenge the
            spirits and intellect of students nationwide. With hundreds of
            participants across eight domains, it&apos;s designed to tickle your
            curiosity with a plethora of technical and non-technical events. The
            nationwide symposium assures to put to the test creativity, forward
            thinking, and of course, having a good time! And it gets better! In
            the first of it&apos;s kind, we&apos;d like to extend a warm welcome
            to try your hand at our fintech events, where you can flaunt your
            business prowess!! With workshops galore for networking & career
            growth, Invente 2023 is the techfest you don&apos;t wanna miss! So
            what are you waiting for? Grab your registrations now, we look
            forward to seeing you here soon!!
          </p>
        </div>
      </div>
    </div>
  );
}

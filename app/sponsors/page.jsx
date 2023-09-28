import { Bayon } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const bayon = Bayon({
  subsets: ['latin'],
  weight: ['400'],
});

const sponsors = [
  { img: '/sponsors/credai.jpg', link: 'https://credai.org/' },
  { img: '/sponsors/lancer.jpeg', link: 'http://www.lancerlaser.com/' },
  { img: '/sponsors/pck.jpg', link: 'https://pck-buderus.com/' },
  { img: '/sponsors/stayflexi.png', link: 'https://www.stayflexi.com/' },
  { img: '/sponsors/typesense.jpg', link: 'https://typesense.org/' },
];

export default function SponsorsPage() {
  return (
    <div className="bg-hex w-full h-screen flex flex-col items-center sm:p-32 p-10">
      <h1
        className={`${bayon.className} xl:text-7xl text-center uppercase text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#BAF7FF]`}
      >
        Our Sponsors
      </h1>
      <Image
        src="/invente-bulb.png"
        alt="invente-bulb"
        width={800}
        height={800}
        className="absolute top-[40%] translate-y-[-50%] -right-[200px] transform origin-top-right opacity-[0.05] -rotate-[16deg] z-0"
      />
      <div className="flex flex-wrap items-center justify-center gap-10 max-w-[800px] mx-auto mt-20">
        {sponsors.map((sponsor, i) => (
          <Link
            key={i}
            href={sponsor.link}
            target="_blank"
            rel="noreferrer"
            className="bg-white rounded-lg p-3 h-[100px] flex items-center hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            <Image alt="sponsor" src={sponsor.img} width={200} height={250} />
          </Link>
        ))}
      </div>
    </div>
  );
}

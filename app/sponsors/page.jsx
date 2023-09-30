import { Bayon } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const bayon = Bayon({
  subsets: ['latin'],
  weight: ['400'],
});

const sponsors = [
  {
    img: '/sponsors/credai.jpg',
    link: 'https://credai.org/',
    width: 200,
    height: 100,
  },
  {
    img: '/sponsors/lancer.jpeg',
    link: 'https://www.indiamart.com/lancerlaser-eng/profile.html?utm_campaign=imob_company_share&utm_medium=social&utm_source=social',
    width: 200,
    height: 100,
  },
  {
    img: '/sponsors/pck.jpg',
    link: 'https://pck-buderus.com/',
    width: 200,
    height: 100,
  },
  {
    img: '/sponsors/stayflexi.png',
    link: 'https://www.stayflexi.com/',
    width: 200,
    height: 100,
  },
  {
    img: '/sponsors/typesense.jpg',
    link: 'https://typesense.org/',
    width: 200,
    height: 100,
  },
  {
    img: '/sponsors/dsmsoft.jpg',
    link: 'https://dsmsoft.com/',
    width: 200,
    height: 100,
  },
  {
    img: '/sponsors/vishwayon.jpg',
    link: 'https://vishwayon.com/',
    width: 200,
    height: 100,
  },
  {
    img: '/sponsors/cwe.jpg',
    link: 'https://m.indiamart.com/classicwin-engineering-private-limited/',
    width: 150,
    height: 100,
  },
  {
    img: '/sponsors/max.jpg',
    link: 'https://www.instagram.com/duromaxofficial/',
    width: 100,
    height: 100,
  },
  {
    img: '/sponsors/sattva.jpg',
    link: 'https://www.sattva.in/',
    width: 200,
    height: 100,
  },
  {
    img: '/sponsors/amazech.png',
    link: 'https://www.1tab.com/',
    width: 200,
    height: 100,
  },
];

export default function SponsorsPage() {
  return (
    <div className="relative bg-hex w-full min-h-screen flex flex-col items-center sm:p-32 p-10 overflow-x-clip overflow-hidden">
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
        className="absolute top-[40%] translate-y-[-50%] md:-right-[200px] -right-[100px] transform origin-top-right opacity-[0.05] -rotate-[16deg] z-0"
      />
      <div className="bg-white rounded-lg p-3 flex flex-wrap items-center justify-center gap-10 max-w-[800px] mx-auto md:mt-16 mt-10">
        {sponsors.map((sponsor, i) => (
          <Link
            key={i}
            href={sponsor.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center hover:scale-110 transition-transform duration-200 ease-in-out"
          >
            <Image
              alt="sponsor"
              src={sponsor.img}
              width={sponsor.width}
              height={sponsor.height}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

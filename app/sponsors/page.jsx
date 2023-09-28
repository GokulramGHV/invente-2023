import { Bayon } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const bayon = Bayon({
  subsets: ['latin'],
  weight: ['400'],
});

const sponsors = [
  { img: '/sponsors/credai.jpg', link: 'https://credai.org/' },
  {
    img: '/sponsors/lancer.jpeg',
    link: 'https://www.indiamart.com/lancerlaser-eng/profile.html?utm_campaign=imob_company_share&utm_medium=social&utm_source=social',
  },
  { img: '/sponsors/pck.jpg', link: 'https://pck-buderus.com/' },
  { img: '/sponsors/stayflexi.png', link: 'https://www.stayflexi.com/' },
  { img: '/sponsors/typesense.jpg', link: 'https://typesense.org/' },
  { img: '/sponsors/dsmsoft.jpg', link: 'https://dsmsoft.com/' },
  { img: '/sponsors/vishwayon.jpg', link: 'https://vishwayon.com/' },
  // { img: '/sponsors/cwe.jpg', link: 'https://www.1tab.com/' },
  // { img: '/sponsors/max.jpg', link: 'https://www.edubridgeindia.com/' },
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
      <div className="flex flex-wrap items-center justify-center gap-10 max-w-[800px] mx-auto md:mt-20 mt-10">
        {sponsors.map((sponsor, i) => (
          <Link
            key={i}
            href={sponsor.link}
            target="_blank"
            rel="noreferrer"
            className="bg-white rounded-lg p-3 h-[100px] flex items-center hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            <Image alt="sponsor" src={sponsor.img} width={200} height={100} />
          </Link>
        ))}
      </div>
    </div>
  );
}

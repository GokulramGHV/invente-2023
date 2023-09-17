'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Events',
    href: '/#timeline',
  },
  {
    name: 'Workshops',
    href: '/comingsoon',
  },
  {
    name: 'Hackathons',
    href: '/comingsoon',
  },
  {
    name: 'Schedule',
    href: '/comingsoon',
  },
  {
    name: 'Sponsors',
    href: '/comingsoon',
  },
  {
    name: 'Contact Us',
    href: '/comingsoon',
  },
];

export default function Navbar({ className = '' }) {
  const hamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300`;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header
        className={`w-full text-gray-700 shadow-sm body-font z-[70] ${className}`}
      >
        <div
          className={`${isOpen && 'fixed top-0 left-0 h-screen z-40'} w-full`}
        >
          <div
            className={`flex  ${
              isOpen ? 'bg-[#161620]' : 'bg-[#1F1F1FCC]'
            } items-center justify-between px-8 py-4 m-0 w-full`}
          >
            <nav className="hidden xl:flex items-center justify-left text-white font-medium uppercase w-full gap-4">
              {links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="px-6 py-1.5 rounded-[5px] hover:outline outline-2 outline-white"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <button
              className="flex xl:hidden flex-col h-12 w-12 rounded justify-center items-center group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${hamburgerLine} ${
                  isOpen
                    ? 'rotate-45 translate-y-3 opacity-80 group-hover:opacity-100'
                    : 'opacity-80 group-hover:opacity-100'
                }`}
              />
              <div
                className={`${hamburgerLine} ${
                  isOpen ? 'opacity-0' : 'opacity-80 group-hover:opacity-100'
                }`}
              />
              <div
                className={`${hamburgerLine} ${
                  isOpen
                    ? '-rotate-45 -translate-y-3 opacity-80 group-hover:opacity-100'
                    : 'opacity-80 group-hover:opacity-100'
                }`}
              />
            </button>
            <div className="flex-1 flex justify-end">
              <button className="get-passes-button text-white font-bold whitespace-nowrap px-20 py-1.5 transition-all duration-200 ease-in-out uppercase w-fit">
                Get Passes
              </button>
            </div>
          </div>
          {isOpen && (
            <section className="xl:hidden w-full h-full overflow-y-auto py-3 bg-[#161620] z-30 flex justify-center items-center text-2xl uppercase font-medium">
              <div className="relative flex flex-col gap-y-5 items-center text-white h-full">
                {links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="px-6 py-1.5 rounded-[5px] hover:outline outline-2 outline-white"
                  >
                    {link.name}
                  </Link>
                ))}
                <Image
                  src="/inventeLogoWhite.png"
                  alt="Invente Logo"
                  className="mt-5"
                  width={250}
                  height={200}
                />
              </div>
            </section>
          )}
        </div>
      </header>
    </>
  );
}

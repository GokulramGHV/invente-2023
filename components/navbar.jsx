'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const links = [
  {
    name: 'Home',
    href: '#_',
  },
  {
    name: 'Events',
    href: '#_',
  },
  {
    name: 'Workshops',
    href: '#_',
  },
  {
    name: 'Hackathons',
    href: '#_',
  },
  {
    name: 'Schedule',
    href: '#_',
  },
  {
    name: 'Sponsors',
    href: '#_',
  },
  {
    name: 'Contact Us',
    href: '#_',
  },
];

export default function Navbar({ className = '' }) {
  const hamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300`;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header
        className={`w-full text-gray-700 shadow-sm body-font z-50 ${className}`}
      >
        <div
          className={`flex  ${
            isOpen ? 'bg-[#161620]' : 'bg-[#1F1F1FCC]'
          } items-center justify-between px-8 py-4 m-0 w-full z-40`}
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
      </header>
      {isOpen && (
        <section className="xl:hidden w-full overflow-y-auto py-10 h-screen fixed top-0 left-0 bg-[#161620] z-30 flex justify-center items-center text-2xl uppercase font-medium">
          <div className="relative flex flex-col gap-10 items-center">
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
              src="/invente_logo_white.png"
              alt="Invente Logo"
              className="mt-5"
              width={250}
              height={200}
            />
          </div>
        </section>
      )}
    </>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const links = [
  {
    name: 'Home',
    href: '/#home',
  },
  {
    name: 'Events',
    href: '/#timeline',
  },
  {
    name: 'Workshops',
    href: '/workshops',
  },
  {
    name: 'Hackathons',
    href: '/hackathons',
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

export default function Navbar({
  className = '',
  paddingX = 'px-8',
  isOpen = false,
  setIsOpen,
}) {
  const hamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300`;

  const [url, setUrl] = useState('');
  useEffect(() => {
    setUrl(window.location.pathname);
    if (window.location.pathname === '/') {
      setUrl('home');
    }
  }, []);
  return (
    <>
      <header
        className={`sticky top-0 w-full text-gray-700 shadow-sm body-font z-[70] ${className}`}
      >
        <div
          className={`${
            isOpen && 'fixed top-0 left-0 h-screen z-40 pb-12 bg-[#161620]'
          } w-full  text-white text-2xl uppercase font-medium flex-col flex justify-between items-center`}
        >
          <div
            className={`flex  ${
              isOpen ? 'bg-[#161620]' : 'bg-[#1F1F1F]/90'
            } items-center justify-between ${paddingX} py-4 m-0 w-full`}
          >
            <nav className="hidden xl:flex items-center justify-left text-white text-base font-medium uppercase w-full gap-4">
              {links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className={`px-6 py-1.5 rounded-[5px] hover:outline outline-2 hover:outline-white transition-all duration-200 ease-in-out  ${
                    new RegExp(link.name, 'i').test(url)
                      ? 'outline outline-blue-300 text-blue-100'
                      : ''
                  }`}
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
              <Link
                href="/register"
                className="get-passes-button text-white text-base font-bold whitespace-nowrap px-20 py-1.5 transition-all duration-200 ease-in-out uppercase w-fit"
              >
                Get Passes
              </Link>
            </div>
          </div>
          {isOpen && (
            <>
              {links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-6 py-1.5 rounded-[5px]  hover:outline outline-2 hover:outline-white   ${
                    new RegExp(link.name, 'i').test(url)
                      ? 'outline outline-blue-300'
                      : ''
                  }`}
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
            </>
          )}
        </div>
      </header>
    </>
  );
}

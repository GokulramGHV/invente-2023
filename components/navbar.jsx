'use client';

export default function Navbar({ className = '' }) {
  return (
    <header
      className={`hidden md:block w-full text-gray-700 shadow-sm body-font ${className}`}
    >
      <div className="flex flex-col bg-nav-color items-start justify-between px-6 py-4 m-0 w-full md:flex-row">
        <nav className="flex flex-wrap items-center justify-left text-white font-bold w-full">
          <a
            href="#_"
            className=" px-8 py-2.5 rounded-md hover:outline outline-2 outline-white"
          >
            Home
          </a>
          <a
            href="#_"
            className=" px-8 py-2.5 rounded-md hover:outline outline-2 outline-white"
          >
            Events
          </a>
          <a
            href="#_"
            className=" px-8 py-2.5 rounded-md hover:outline outline-2 outline-white"
          >
            Workshops
          </a>
          <a
            href="#_"
            className=" px-8 py-2.5 rounded-md hover:outline outline-2 outline-white"
          >
            Hackathons
          </a>
          <a
            href="#_"
            className=" px-8 py-2.5 rounded-md hover:outline outline-2 outline-white"
          >
            Schedule
          </a>
          <a
            href="#_"
            className=" px-8 py-2.5 rounded-md hover:outline outline-2 outline-white"
          >
            Sponsors
          </a>
          <a
            href="#_"
            className=" px-8 py-2.5 rounded-md hover:outline outline-2 outline-white"
          >
            Contact Us
          </a>
          {/* <div className="flex-1 flex justify-end mr-5">
            <button className="bg-[#2495D4] hover:bg-sky-600 rounded-[10px] px-24 py-2.5 uppercase w-fit">
              Get Passes
            </button>
          </div> */}
        </nav>
      </div>
    </header>
  );
}

'use client';
import Image from 'next/image';

export default function Navbar() {
    return (
        <header className="w-full text-gray-700 shadow-sm body-font">
            <div className="container flex flex-col bg-nav-color items-start justify-between p-6 m-0 w-full md:flex-row">
                <nav className="flex flex-wrap items-center justify-center text-white font-bold md:mr-auto">
                    <a href="#_" className="mx-5 px-8 py-3 rounded-md hover:outline outline-2 outline-white">Home</a>
                    <a href="#_" className="mx-5 px-8 py-3 rounded-md hover:outline outline-2 outline-white">Events</a>
                    <a href="#_" className="mx-5 px-8 py-3 rounded-md hover:outline outline-2 outline-white">Workshops</a>
                    <a href="#_" className="mx-5 px-8 py-3 rounded-md hover:outline outline-2 outline-white">Hackathons</a>
                    <a href="#_" className="mx-5 px-8 py-3 rounded-md hover:outline outline-2 outline-white">Schedule</a>
                    <a href="#_" className="mx-5 px-8 py-3 rounded-md hover:outline outline-2 outline-white">Sponsors</a>
                    <a href="#_" className="mx-5 px-8 py-3 rounded-md hover:outline outline-2 outline-white">Contact Us</a>
                </nav>
            </div>
            <div className="h-screen"></div>
        </header>
        );
}
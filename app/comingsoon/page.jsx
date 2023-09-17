import { Unbounded } from 'next/font/google';
import Image from 'next/image';

import Countdown from '@/components/countdown';
import { HeroLogo } from '@/components/heroLogo';
import Navbar from '@/components/navbar';
import Footer from '../footer/page';


const unbounded = Unbounded({
    preload: true,
    subsets: ['latin'],
});

export default function Home() {
    return (
        <main>
            <div className="flex min-h-screen flex-col items-center justify-center p-10">
                <video
                    src="/bg_video.m4v"
                    autoPlay
                    loop
                    muted
                    preload="auto"
                    className="absolute top-0 left-0 z-0 w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 flex justify-between items-center w-full md:px-16 px-8 z-10">
                    <div className="relative md:w-[200px] md:h-[200px] w-[150px] h-[150px]">
                        <Image src="/snuLogo.svg" alt="SNU Logo" fill />
                    </div>
                    <div className="relative md:w-[130px] md:h-[130px] w-[95px] h-[95px]">
                        <Image src="/ssnLogo.svg" alt="SSN Logo" fill />
                    </div>
                </div>
                <HeroLogo />
                <Countdown />
                <Image
                    src="/downArrow.png"
                    alt="Down Arrow"
                    width="50"
                    height="50"
                    className="z-10 relative top-20 transition duration-700 ease-in-out animate-bounce"
                />
            </div>

            <div className="w-full h-screen">
                <Navbar />

                <div className='min-h-full bg-hex bg-scroll bg-cover flex flex-col justify-center text-center'>

                    {/* <Image
                        alt="clock"
                        src="/clock.png"
                        width={600}
                        height={600}
                    /> */}

                    <h1 className={`my-auto xl:text-7xl md:text-6xl sm:text-5xl text-3xl font-semibold ${unbounded.className}`}>
                        COMING SOON
                    </h1>
                </div>
            </div>
            <Footer />
        </main>
    );
}

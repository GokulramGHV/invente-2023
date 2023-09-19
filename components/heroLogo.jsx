'use client';

import { Tilt } from "react-tilt";
import Image from 'next/image';

export const HeroLogo = () => {
    return (
        <div className="z-20">
            <Tilt options={{ scale: 1.05, max: 15, perspective: 1000, easing: "cubic-bezier(.17,.67,.83,.67)", speed: 500 }}>
                <Image
                    src="/inventeLogo.svg"
                    alt="Invente"
                    width="600"
                    height="200"
                    className="z-20 lg:w-[600px] md:w-[400px] w-[300px]"
                />
            </Tilt>
        </div>
    )
}
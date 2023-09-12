'use client';
import Image from 'next/image';

import { Space_Grotesk } from 'next/font/google';

const space_grotesk = Space_Grotesk({
  preload: true,
  subsets: ['latin'],
});

export default function Timeline() {

    return(
        <div className="relative flex-column justify-center items-center bg-steel w-full items-center m-0">
            <div className={`${space_grotesk.className} font-bold text-5xl relative flex justify-center  mb-8`}>
                EXPLORE THE TIMELINE
            </div>
            <div className='grid grid-cols-2 gap-y-10 gap-x-20 w-fit justify-center p-10 m-auto'>
                <div></div>
                <div>       
                    <Image 
                    src='/cse.png'
                    width="300"
                    height="180"
                    />
                </div>
                <div>               
                    <Image 
                    src='/it.png'
                    width="300"
                    height="180"       
                    />
                </div>
                <div></div>
                <div></div>
                <div>
                    <Image 
                    src='/ece.png'
                    width="300"
                    height="180"
                    />                    
                </div>
                <div>
                    <Image 
                    src='/mech.png'
                    width="300"
                    height="180"
                    />                    
                </div>
                <div></div>
                <div></div>
                <div>
                    <Image 
                    src='/chem.png'
                    width="300"
                    height="180"
                    />
                </div>
                <div>
                    <Image 
                    src='/civil.png'
                    width="300"
                    height="180"
                    />
                </div>
                <div></div>
                <div></div>
                <div>
                    <Image 
                    src='/bme.png'
                    width="300"
                    height="180"
                    />
                </div>
                <div>
                    <Image 
                    src='/snu.png'
                    width="300"
                    height="180"
                    />
                </div>
            </div>
        </div>
    )
}
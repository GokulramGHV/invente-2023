'use client';
import EventDetailsBox, {
    EventDetails,
} from '@/components/eventDetailsBox';

import { ARVRWorkshop } from './events';
import Image from 'next/image';
export default function HACKFINITY() {

    const colorScheme = {
        selected: 'bg-[#572F899c]',
        nonSelected: 'bg-[#08324b9c]',
        hover: 'hover:bg-[#08324b9c]',
    };

    const bg_color = 'bg-[#572F89]';

    return (
        <>
            <div className="background-gradient fixed left-0 top-0 h-full w-full z-0" />
            <div
                className="flex flex-col justify-center items-center min-h-screen bg-cover w-full z-10 sm:px-12 px-6 pt-16 pb-14"
                style={{
                    backgroundImage: `url('/background_ARVR.png')`,
                }}
            >

                <div className="flex justify-center flex-col items-center mt-10 mb-4 z-10">
                    <Image src="/ieeeLogo.png" width={200} height={200} />
                </div>

                <div className="flex relative lg:mt-8">


                    <EventDetailsBox
                        className={`xl:w-[60vw] md:h-[60vh] ${colorScheme.selected}`}
                    >
                        <EventDetails
                            event={ARVRWorkshop}
                            bg_color={bg_color}
                            textColor="text-[#ffffff]"
                        />
                    </EventDetailsBox>

                </div>
            </div>
        </>
    );
}

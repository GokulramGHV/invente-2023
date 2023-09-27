'use client';
import EventDetailsBox, {
    EventDetails,
} from '@/components/eventDetailsBox';

import { HACKFINITEvent } from './events';

export default function HACKFINITY() {


    const colorScheme = {
        selected: 'bg-[#08324b9c]',
        nonSelected: 'bg-[#08324b9c]',
        hover: 'hover:bg-[#08324b9c]',
    };

    const bg_color = 'bg-[#2f6789]';

    return (
        <>
            <div className="background-gradient fixed left-0 top-0 h-full w-full z-0" />
            <div
                className="flex flex-col justify-center items-center min-h-screen bg-full w-full z-10  sm:px-12 px-6 pt-16 pb-14"
                style={{
                    backgroundImage: `url('/background_HACKFINITY.png')`,
                }}
            >

                <div className="flex justify-center flex-col items-center mt-10 mb-4 z-10">
                    <p className="md:text-xl mb-5">DEPARTMENT OF</p>
                    <h1
                        className={`font-tourney700 font-medium lg:text-5xl text-3xl leading-10 text-center`}
                    >
                        ELECTRICAL & COMMUNICATION
                    </h1>
                    <h1
                        className={`font-tourney700 font-medium lg:text-5xl text-3xl leading-10 text-center`}
                    >
                        ENGINEERING
                    </h1>
                </div>

                <div className="flex relative lg:mt-8">


                    <EventDetailsBox
                        className={`xl:w-[60vw] md:h-[60vh] ${colorScheme.selected}`}
                    >
                        <EventDetails
                            event={HACKFINITEvent}
                            bg_color={bg_color}
                            textColor="text-[#ffffff]"
                        />
                    </EventDetailsBox>

                </div>
            </div>
        </>
    );
}

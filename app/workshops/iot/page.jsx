'use client';
import EventDetailsBox, {
    EventDetails,
} from '@/components/eventDetailsBox';

import { IOTWORKSHOP } from './events';

export default function IOTWorkShop() {


    const colorScheme = {
        selected: 'bg-[#04181A9C]',
        nonSelected: 'bg-[#492409b5]',
        hover: 'hover:bg-[#492409b5]',
    };

    const bg_color = 'bg-[#006C72]';

    return (
        <>
            <div className="background-gradient fixed left-0 top-0 h-full w-full z-0" />
            <div
                className="flex flex-col justify-center items-center min-h-screen bg-cover w-full z-10  sm:px-12 px-6 pt-16 pb-14 bg-gradient-to-b from-[#00000066] to-transparent"
                style={{
                    backgroundImage: `url('/background_IOT.png')`,
                }}
            >

                {/* <div className="flex justify-center flex-col items-center mt-10 mb-4 z-10">
                    <p className="md:text-xl mb-5">SHIV NADAR UNIVERSITY CHENNAI</p>
                    <h1
                        className={`font-tourney700 font-medium lg:text-5xl text-3xl leading-10 text-center`}
                    >
                        ROBOTICS CLUB
                    </h1>
                </div> */}

                <div className="flex relative lg:mt-8">


                    <EventDetailsBox
                        className={`xl:w-[60vw] md:h-[60vh] ${colorScheme.selected}`}
                    >
                        <EventDetails
                            event={IOTWORKSHOP}
                            bg_color={bg_color}
                            textColor="text-[#ffffff]"
                        />
                    </EventDetailsBox>

                </div>
            </div>
        </>
    );
}

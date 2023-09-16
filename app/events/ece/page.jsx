'use client';
import EventDetailsBox, {
  EventDetails,
  NonTechEventChip,
  TechEventChip,
} from '@/components/eventDetailsBox';
import Navbar from '@/components/navbar';
import localFont from 'next/font/local';
import { Space_Grotesk } from 'next/font/google';

import { useState } from 'react';

import { ECEevents } from './events';
import EventsDropDown from '@/components/eventsDropDown';
import Image from 'next/image';

const space_grotesk = Space_Grotesk({
  preload: true,
  subsets: ['latin'],
});

export default function ECE() {
  const [selectedEvent, setSelectedEvent] = useState(ECEevents.events[0]);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const colorScheme = {
    selected: "bg-[#614925B2]",
    nonSelected: "bg-[#635C4DCF]",
    hover: "hover:bg-[#614925B2]"
  }

  const bg_color = "bg-[#3b2f1c]"


  return (
    <>
      <Navbar className="top-0 left-0 w-full fixed" />
      <div className="background-gradient fixed left-0 top-0 h-full w-full z-0" />
      <div
        className="flex flex-col justify-center items-center min-h-screen bg-full w-full z-10 sm:px-12 px-6 py-12"
        style={{
          backgroundImage: `url('/background_ECE.png')`,
        }}
      >
        <div className="flex justify-center flex-col items-center mt-10 z-10">
          <p className="md:text-[32px] mb-3">DEPARTMENT OF</p>
          <h1
            className={`font-tourney900 font-bold md:text-[2.5rem] lg:text-[62px] sm:text-[26px] lg:leading-6 text-center uppercase`}
          >
            ELECTRONIC & COMMUNICATION
          </h1>
          <h1 className='font-tourney700 lg:text-[40px] sm:text-[26px] text-center'>
            ENGINEERING
          </h1>
          {/* <h4 className={`${tourney.className} md:text-2xl text-xl`}>
            ENGINEERING
          </h4> */}
        </div>

        <EventsDropDown
          {...{
            setDropDownOpen,
            setSelectedEvent,
            dropDownOpen,
            selectedEvent,
            deptEvents: ECEevents,
            colorScheme,
            bg_color: bg_color
          }}
        />

        <div className="flex relative md:top-8">
          <div className="relative h-fit mt-2 hidden md:flex flex-col gap-3 items-end">
            {ECEevents.events
              .filter((event) => event.event_type === 'tech')
              .map((event) => {
                if (event.name === selectedEvent.name) {
                  return (
                    <TechEventChip
                      key={event.name}
                      className={colorScheme.selected}
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                      width={ECEevents.sizes.width}
                    />
                  );
                } else {
                  return (
                    <TechEventChip
                      key={event.name}
                      className={`${colorScheme.nonSelected} ${colorScheme.hover}`}
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                      width={ECEevents.sizes.width}
                    />
                  );
                }
              })}
            <div className={`relative ${ECEevents.sizes.curveTech}`}>
              <Image
                alt="event type indicator"
                src="/event_type_indicator.png"
                className="absolute left-0 -bottom-4 w-full"
                width={500}
                height={300}
              />
              <h3 className={`absolute -left-5 bottom-6 uppercase font-bold text-white/80 rotate-[270deg] ${space_grotesk.className}`}>
                Tech
              </h3>
            </div>
          </div>

          <EventDetailsBox className={`lg:w-[60vw] md:min-h-[600px] h-max ${colorScheme.selected}`}>
            <EventDetails {...selectedEvent} bg_color={bg_color} />
          </EventDetailsBox>

          <div className="mt-2 hidden md:flex flex-col gap-3">
            {ECEevents.events
              .filter((event) =>
                event.event_type?.toLowerCase().includes('non')
              )
              .map((event) => {
                if (event.name === selectedEvent.name) {
                  return (
                    <NonTechEventChip
                      key={event.name}
                      className={`${colorScheme.selected}`}
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                      width={ECEevents.sizes.width}
                    />
                  );
                } else {
                  return (
                    <NonTechEventChip
                      key={event.name}
                      className={`${colorScheme.nonSelected} ${colorScheme.hover}`}
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                      width={ECEevents.sizes.width}
                    />
                  );
                }
              })}

            <div className={`relative ${ECEevents.sizes.curveNonTech}`}>
              <Image
                alt="event type indicator"
                src="/event_type_indicator.png"
                className="absolute left-0 -bottom-4 w-full"
                width={500}
                height={300}
              />
              <h3 className={`font-post-no-bills absolute -left-9 bottom-[50px] uppercase font-bold text-white/80 rotate-[90deg] transform -scale-x-90 ${space_grotesk.className}`}>
                Non-Tech
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

'use client';
import EventDetailsBox, {
  EventDetails,
  NonTechEventChip,
  TechEventChip,
} from '@/components/eventDetailsBox';
import Navbar from '@/components/navbar';

import { Press_Start_2P } from 'next/font/google';
import { useState } from 'react';

import { ITevents } from './events';
import EventsDropDown from '@/components/eventsDropDown';
import Image from 'next/image';

const press_start_2p = Press_Start_2P({
  preload: true,
  weight: '400',
  subsets: ['latin'],
});

export default function IT() {
  const [selectedEvent, setSelectedEvent] = useState(ITevents.events[0]);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const colorScheme = {
    selected : "#27578B99",
    nonSelected : "#6F748566"
  }

  return (
    <>
      <Navbar className="absolute top-0 left-0 w-full" />
      <div className="background-gradient fixed left-0 top-0 h-screen w-full z-0" />
      <div
        className="flex flex-col justify-center items-center min-h-screen bg-cover w-full z-10 sm:px-12 px-6 py-12"
        style={{
          backgroundImage: `url('/IT_background.png')`,
        }}
      >
        <div className="flex justify-center flex-col items-center mt-10 z-10">
          <p className="md:text-xl mb-3">DEPARTMENT OF</p>
          <h1
            className={`${press_start_2p.className} font-[400] md:text-[2.5rem] text-2xl leading-10 text-center uppercase`}
          >
            Information Technology
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
            deptEvents: ITevents,
            colorScheme
          }}
        />

        <div className="flex relative md:top-8">
          <div className="relative h-fit mt-2 hidden md:flex flex-col gap-3 items-end">
            {ITevents.events
              .filter((event) => event.event_type === 'tech')
              .map((event) => {
                if (event.name === selectedEvent.name) {
                  return (
                    <TechEventChip
                      key={event.name}
                      className="bg-[#27578B99]"
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                    />
                  );
                } else {
                  return (
                    <TechEventChip
                      key={event.name}
                      className="bg-[#6F748566] hover:bg-[#27578B99]"
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                    />
                  );
                }
              })}
            <div className="relative w-[165px]">
              <Image
                alt="event type indicator"
                src="/event_type_indicator.png"
                className="absolute left-0 -bottom-4 w-full"
                width={500}
                height={300}
              />
              <h3 className="absolute -left-5 bottom-8 uppercase font-bold text-white/80 rotate-[270deg]">
                Tech
              </h3>
            </div>
          </div>

          <EventDetailsBox className="md:w-[60vw] min-h-[500px] bg-[#27578B99]">
            <EventDetails {...selectedEvent} />
          </EventDetailsBox>

          <div className="mt-2 hidden md:flex flex-col gap-3">
            {ITevents.events
              .filter((event) =>
                event.event_type?.toLowerCase().includes('non')
              )
              .map((event) => {
                if (event.name === selectedEvent.name) {
                  return (
                    <NonTechEventChip
                      key={event.name}
                      className="bg-[#27578B99]"
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                    />
                  );
                } else {
                  return (
                    <NonTechEventChip
                      key={event.name}
                      className="bg-[#6F748566] hover:bg-[#27578B99]"
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                    />
                  );
                }
              })}

            <div className="relative w-[165px] transform -scale-x-100">
              <Image
                alt="event type indicator"
                src="/event_type_indicator.png"
                className="absolute left-0 -bottom-4 w-full"
                width={500}
                height={300}
              />
              <h3 className="font-post-no-bills absolute -left-11 bottom-[50px] uppercase font-bold text-white/80 rotate-[90deg] transform -scale-x-100">
                Non-Tech
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

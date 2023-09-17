'use client';
import EventDetailsBox, {
  EventDetails,
  NonTechEventChip,
  TechEventChip,
} from '@/components/eventDetailsBox';
import Navbar from '@/components/navbar';
import localFont from 'next/font/local';

import { Averia_Sans_Libre } from 'next/font/google';

const averia_sans_libre = Averia_Sans_Libre({
  preload: true,
  weight: '400',
  subsets: ['latin'],
});

import { useState } from 'react';

import { COMevents } from './events';
import EventsDropDown from '@/components/eventsDropDown';
import Image from 'next/image';


export default function COM() {
  const [selectedEvent, setSelectedEvent] = useState(COMevents.events[0]);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const colorScheme = {
    selected: "bg-[#0B4C3EBD]",
    nonSelected: "bg-[#6F7A8566]",
    hover: "hover:bg-[#0B4C3EBD]",
  }

  const bg_color = "bg-[#13735E]"

  return (
    <>
      <Navbar className="top-0 left-0 w-full fixed" />
      <div className="background-gradient fixed left-0 top-0 h-full w-full z-0" />
      <div
        className="flex flex-col justify-center items-center min-h-screen bg-full w-full z-10 sm:px-12 px-6 py-12"
        style={{
          backgroundImage: `url('/background_COM.jpg')`,
        }}
      >
        <div className="flex justify-center flex-col items-center mt-10 z-10">
          <p className="md:text-xl mb-3">DEPARTMENT OF</p>
          <h1
            className={`font-averia_sans_libre font-medium lg:text-[72px] text-[50px] leading-10 text-center`}
          >
            ECONOMICS, COMMERCE & MANAGEMENT
          </h1>
          <h4 className={`md:text-2xl text-xl italic mt-2`}>
            (Shiv Nadar University, Chennai)
          </h4>
        </div>

        <EventsDropDown
          {...{
            setDropDownOpen,
            setSelectedEvent,
            dropDownOpen,
            selectedEvent,
            deptEvents: COMevents,
            colorScheme,
            bg_color: bg_color
          }}
        />

        <div className="flex relative md:top-8">
          <div className="relative h-fit mt-2 hidden md:flex flex-col gap-3 items-end">
            {COMevents.events
              .filter((event) => event.event_type === 'tech')
              .map((event) => {
                if (event.name === selectedEvent.name) {
                  return (
                    <TechEventChip
                      key={event.name}
                      className={colorScheme.selected}
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                      width={COMevents.sizes.width}
                    />
                  );
                } else {
                  return (
                    <TechEventChip
                      key={event.name}
                      className={`${colorScheme.nonSelected} ${colorScheme.hover}`}
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                      width={COMevents.sizes.width}
                    />
                  );
                }
              })}
            <div className={`relative ${COMevents.sizes.curveTech}`}>
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

          <EventDetailsBox className={`lg:w-[60vw] md:min-h-[608px] h-max ${colorScheme.selected}`}>
            <EventDetails {...selectedEvent} bg_color={bg_color} />
          </EventDetailsBox>

          <div className="mt-2 hidden md:flex flex-col gap-3">
            {COMevents.events
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
                    />
                  );
                } else {
                  return (
                    <NonTechEventChip
                      key={event.name}
                      className={`${colorScheme.nonSelected} ${colorScheme.hover}`}
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                    />
                  );
                }
              })}

            <div className={`relative ${COMevents.sizes.curveNonTech}`}>
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
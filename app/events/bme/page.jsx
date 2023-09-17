'use client';
import EventDetailsBox, {
  EventDetails,
  NonTechEventChip,
  TechEventChip,
} from '@/components/eventDetailsBox';
import Navbar from '@/components/navbar';
import localFont from 'next/font/local';

import { Homemade_Apple } from 'next/font/google';

const homemadeapple = Homemade_Apple({
  preload: true,
  weight: '400',
  subsets: ['latin'],
});

import { useState } from 'react';

import { BMEevents } from './events';
import EventsDropDown from '@/components/eventsDropDown';
import Image from 'next/image';
import Footer from '@/app/footer/page';


export default function BME() {
  const [selectedEvent, setSelectedEvent] = useState(BMEevents.events[0]);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const colorScheme = {
    selected: "bg-[#B49E7299]",
    nonSelected: "bg-[#857E6F66]",
    hover: "hover:bg-[#B49E7299]",
  }

  const bg_color = "bg-[#664F36]"

  return (
    <>
      <Navbar className="top-0 left-0 w-full fixed" />
      <div className="background-gradient fixed left-0 top-0 h-full w-full z-0" />
      <div
        className="flex flex-col justify-center items-center min-h-screen bg-full w-full z-10 sm:px-12 px-6 py-12"
        style={{
          backgroundImage: `url('/background_BME.png')`,
        }}
      >
        <div className="flex justify-center flex-col items-center mt-10 z-10">
          <p className="md:text-xl mb-3">DEPARTMENT OF</p>
          <h1
            className={`font-homemadeApple font-medium text-[72px] leading-20 text-center`}
          >
            Biomedical Engineering
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
            deptEvents: BMEevents,
            colorScheme,
            bg_color: bg_color
          }}
        />

        <div className="flex relative md:top-8">
          <div className="relative h-fit mt-2 hidden md:flex flex-col gap-3 items-end">
            {BMEevents.events
              .filter((event) => event.event_type === 'tech')
              .map((event) => {
                if (event.name === selectedEvent.name) {
                  return (
                    <TechEventChip
                      key={event.name}
                      className={colorScheme.selected}
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                      width={BMEevents.sizes.width}
                    />
                  );
                } else {
                  return (
                    <TechEventChip
                      key={event.name}
                      className={`${colorScheme.nonSelected} ${colorScheme.hover}`}
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                      width={BMEevents.sizes.width}
                    />
                  );
                }
              })}
            <div className={`relative ${BMEevents.sizes.curveTech}`}>
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

          <EventDetailsBox className={`lg:w-[60vw] md:min-h-[608px] h-max  ${colorScheme.selected}`}>
            <EventDetails {...selectedEvent} bg_color={bg_color} />
          </EventDetailsBox>

          <div className="mt-2 hidden md:flex flex-col gap-3">
            {BMEevents.events
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

            <div className={`relative ${BMEevents.sizes.curveNonTech}`}>
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
      <Footer />
    </>
  );
}

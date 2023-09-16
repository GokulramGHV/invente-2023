'use client';
import EventDetailsBox, {
  EventDetails,
  NonTechEventChip,
  TechEventChip,
} from '@/components/eventDetailsBox';
import Navbar from '@/components/navbar';
import localFont from 'next/font/local';


import { useState } from 'react';

import { EEEevents } from './events';
import EventsDropDown from '@/components/eventsDropDown';
import Image from 'next/image';


export default function EEE() {
  const [selectedEvent, setSelectedEvent] = useState(EEEevents.events[0]);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const bg_color = "bg-[#02132b]";

  const colorScheme = {
    selected : "bg-[#35437699]",
    nonSelected : "bg-[#6F748566]",
    hover : "hover:bg-[#35437699]",
  }

  return (
    <>
      <Navbar className="top-0 left-0 w-full fixed" />
      <div className="background-gradient fixed left-0 top-0 h-full w-full z-0" />
      <div
        className="flex flex-col justify-center items-center min-h-screen bg-full w-full z-10 sm:px-12 px-6 py-12"
        style={{
          backgroundImage: `url('/EEE_background.png')`,
        }}
      >
        <div className="flex justify-center flex-col items-center mt-10 z-10">
          <p className="md:text-xl mb-3">DEPARTMENT OF</p>
          <h1
            className={`font-wokStencilCaps font-medium text-[72px] leading-10 text-center uppercase`}
          >
            ELECTRICAL and ELECTRONICS
          </h1>
          <h1 className='font-wokStencilCaps font-medium text-[60px] leading-10 text-center'>
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
            deptEvents: EEEevents,
            colorScheme,
            bg_color: bg_color,
          }}
        />

        <div className="flex relative md:top-8">
          <div className="relative h-fit mt-2 hidden md:flex flex-col gap-3 items-end">
            {EEEevents.events
              .filter((event) => event.event_type === 'tech')
              .map((event) => {
                if (event.name === selectedEvent.name) {
                  return (
                    <TechEventChip
                      key={event.name}
                      className={colorScheme.selected}
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                      width={EEEevents.sizes.width}
                    />
                  );
                } else {
                  return (
                    <TechEventChip
                      key={event.name}
                      className={`${colorScheme.nonSelected} ${colorScheme.hover}`}
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                      width={EEEevents.sizes.width}
                    />
                  );
                }
              })}
            <div className={`relative ${EEEevents.sizes.curveTech}`}>
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

          <EventDetailsBox className={`lg:w-[60vw] md:min-h-[500px] h-max ${colorScheme.selected}`}>
            <EventDetails {...selectedEvent} bg_color={bg_color} />
          </EventDetailsBox>

          <div className="mt-2 hidden md:flex flex-col gap-3">
            {EEEevents.events
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
                      width={EEEevents.sizes.width}
                    />
                  );
                } else {
                  return (
                    <NonTechEventChip
                      key={event.name}
                      className={`${colorScheme.nonSelected} ${colorScheme.hover}`}
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                      width={EEEevents.sizes.width}
                    />
                  );
                }
              })}

            <div className={`relative ${EEEevents.sizes.curveNonTech}`}>
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

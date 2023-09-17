'use client';
import EventDetailsBox, {
  EventDetails,
  NonTechEventChip,
  TechEventChip,
} from '@/components/eventDetailsBox';
import Navbar from '@/components/navbar';

import { useState } from 'react';

import { CSEevents } from './events';
import EventsDropDown from '@/components/eventsDropDown';
import Image from 'next/image';
import Footer from '@/app/footer/page';

export default function CSE() {
  const [selectedEvent, setSelectedEvent] = useState(CSEevents.events[0]);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const colorScheme = {
    selected: "#0c565299",
    nonSelected: "#6f8584b3"
  }

  return (
    <>
      <Navbar className="absolute top-0 left-0 w-full" />
      <div className="background-gradient fixed left-0 top-0 h-screen w-full z-0" />
      <div
        className="flex flex-col justify-center items-center min-h-screen bg-cover w-full z-10 sm:px-12 px-6 py-12"
        style={{
          backgroundImage: `url('/background_CSE.png')`,
        }}
      >
        <div className="flex justify-center flex-col items-center mt-10 z-10 leading-3">
          <p className="md:text-xl mb-3">DEPARTMENT OF</p>
          <h1
            className={`font-ndLogos font-[400] lg:text-[3.5rem] md:text-[2.5rem] text-2xl leading-tight text-center uppercase md:mb-2`}
          >
            COMPUTER SCIENCE
          </h1>
          <h4 className={`font-ndLogos md:text-[2rem] text-xl md:mt-2`}>
            AND ENGINEERING
          </h4>
        </div>

        <EventsDropDown
          {...{
            setDropDownOpen,
            setSelectedEvent,
            dropDownOpen,
            selectedEvent,
            deptEvents: CSEevents,
            colorScheme
          }}
        />

        <div className="flex relative md:top-8">
          <div className="relative h-fit mt-2 hidden md:flex flex-col gap-3 items-end">
            {CSEevents.events
              .filter((event) => event.event_type === 'tech')
              .map((event) => {
                if (event.name === selectedEvent.name) {
                  return (
                    <TechEventChip
                      key={event.name}
                      className="bg-[#0c565299]"
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                    />
                  );
                } else {
                  return (
                    <TechEventChip
                      key={event.name}
                      className="bg-[#6f8584b3] hover:bg-[#0c565299]"
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

          <EventDetailsBox className="lg:w-[60vw] md:min-h-[500px] bg-[#0c565299]">
            <EventDetails {...selectedEvent} />
          </EventDetailsBox>

          <div className="mt-2 hidden md:flex flex-col gap-3">
            {CSEevents.events
              .filter((event) =>
                event.event_type?.toLowerCase().includes('non')
              )
              .map((event) => {
                if (event.name === selectedEvent.name) {
                  return (
                    <NonTechEventChip
                      key={event.name}
                      className="bg-[#0c565299]"
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                    />
                  );
                } else {
                  return (
                    <NonTechEventChip
                      key={event.name}
                      className="bg-[#6f8584b3] hover:bg-[#0c565299]"
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
      <Footer />
    </>
  );
}

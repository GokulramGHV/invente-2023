'use client';
import EventDetailsBox, {
  EventDetails,
  NonTechEventChip,
  TechEventChip,
} from '@/components/eventDetailsBox';

import { useState } from 'react';

import { MECHevents } from './events';
import EventsDropDown from '@/components/eventsDropDown';
import { Audiowide, Stick_No_Bills } from 'next/font/google';
import { useSearchParams } from 'next/navigation';

const stick_no_bills = Stick_No_Bills({
  preload: true,
  subsets: ['latin'],
});

const audiowide = Audiowide({
  preload: true,
  weight: '400',
  subsets: ['latin'],
});

export default function MECH() {
  const searchParams = useSearchParams();
  const [selectedEvent, setSelectedEvent] = useState(
    MECHevents.events.find(
      (event) =>
        event?.name?.toLowerCase().replace(' ', '') ===
        searchParams?.get('event')?.toLowerCase().replace(' ', '')
    ) || MECHevents.events[0]
  );
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const colorScheme = {
    selected: '#42291E99',
    nonSelected: '#85786F66',
  };

  const bg_color = 'bg-[#674735]';

  return (
    <>
      <div className="background-gradient fixed left-0 top-0 h-screen w-full z-0 overflow-x-hidden" />
      <div
        className="flex flex-col justify-center items-center min-h-screen bg-full w-full z-10 sm:px-12 px-6 pt-14 md:pt-24  pb-14"
        style={{
          backgroundImage: `url('/background_MECH.png')`,
        }}
      >
        <div className="flex justify-center flex-col items-center z-10 leading-3">
          <p className="md:text-2xl">DEPARTMENT OF</p>
          <h1
            className={`font-mechsuit lg:text-[3rem] md:text-[2.5rem] text-3xl leading-tight text-center md:mb-2`}
          >
            mechAnicAl
          </h1>
          <h4 className={`${audiowide.className} md:text-[2rem] text-lg`}>
            ENGINEERING
          </h4>
        </div>

        <EventsDropDown
          {...{
            setDropDownOpen,
            setSelectedEvent,
            dropDownOpen,
            selectedEvent,
            deptEvents: MECHevents,
            colorScheme,
            width: '240px',
          }}
        />

        <div className="flex relative lg:mt-8">
          <div className="relative h-fit mt-2 hidden lg:flex flex-col gap-3 items-end">
            {MECHevents.events
              .filter((event) => event.event_type === 'tech')
              .map((event) => {
                if (event.name === selectedEvent.name) {
                  return (
                    <TechEventChip
                      key={event.name}
                      className="bg-[#42291E99]"
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                      width="w-[210px]"
                    />
                  );
                } else {
                  return (
                    <TechEventChip
                      key={event.name}
                      className="bg-[#85786F66] hover:bg-[#42291E99]"
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                      width="w-[210px]"
                    />
                  );
                }
              })}
            <div className="relative bottom-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="235"
                height="48"
                viewBox="0 0 308 48"
                fill="none"
              >
                <path
                  d="M5.66666 3C5.66666 4.47276 4.47275 5.66667 3 5.66667C1.52725 5.66667 0.333344 4.47276 0.333344 3C0.333344 1.52724 1.52725 0.333333 3 0.333333C4.47275 0.333333 5.66666 1.52724 5.66666 3ZM307.667 45C307.667 46.4728 306.473 47.6667 305 47.6667C303.527 47.6667 302.333 46.4728 302.333 45C302.333 43.5272 303.527 42.3333 305 42.3333C306.473 42.3333 307.667 43.5272 307.667 45ZM3.5 3V25H2.5V3H3.5ZM23 44.5H305V45.5H23V44.5ZM3.5 25C3.5 35.7696 12.2304 44.5 23 44.5V45.5C11.6782 45.5 2.5 36.3218 2.5 25H3.5Z"
                  fill="white"
                />
              </svg>
              <h3
                className={` ${stick_no_bills.className} text-lg absolute -left-3 bottom-14 uppercase font-bold text-white/80 rotate-[270deg]`}
              >
                Tech
              </h3>
            </div>
          </div>

          <EventDetailsBox className="xl:w-[60vw] md:h-[65vh] bg-[#42291E99]">
            <EventDetails event={selectedEvent} bg_color={bg_color} />
          </EventDetailsBox>

          <div className="mt-2 hidden lg:flex flex-col gap-3">
            {MECHevents.events
              .filter((event) =>
                event.event_type?.toLowerCase().includes('non')
              )
              .map((event) => {
                if (event.name === selectedEvent.name) {
                  return (
                    <NonTechEventChip
                      key={event.name}
                      className="bg-[#42291E99]"
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                      width="w-[210px]"
                    />
                  );
                } else {
                  return (
                    <NonTechEventChip
                      key={event.name}
                      className="bg-[#85786F66] hover:bg-[#42291E99]"
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                      width="w-[210px]"
                    />
                  );
                }
              })}

            <div className={`relative bottom-6 transform -scale-x-100`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="235"
                height="48"
                viewBox="0 0 308 48"
                fill="none"
              >
                <path
                  d="M5.66666 3C5.66666 4.47276 4.47275 5.66667 3 5.66667C1.52725 5.66667 0.333344 4.47276 0.333344 3C0.333344 1.52724 1.52725 0.333333 3 0.333333C4.47275 0.333333 5.66666 1.52724 5.66666 3ZM307.667 45C307.667 46.4728 306.473 47.6667 305 47.6667C303.527 47.6667 302.333 46.4728 302.333 45C302.333 43.5272 303.527 42.3333 305 42.3333C306.473 42.3333 307.667 43.5272 307.667 45ZM3.5 3V25H2.5V3H3.5ZM23 44.5H305V45.5H23V44.5ZM3.5 25C3.5 35.7696 12.2304 44.5 23 44.5V45.5C11.6782 45.5 2.5 36.3218 2.5 25H3.5Z"
                  fill="white"
                />
              </svg>
              <h3
                className={`${stick_no_bills.className} text-lg absolute -left-9 bottom-[77px] uppercase font-bold text-white/80 rotate-[90deg] transform -scale-x-100`}
              >
                Non-Tech
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

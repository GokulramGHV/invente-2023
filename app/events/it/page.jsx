'use client';
import EventDetailsBox, {
  EventDetails,
  NonTechEventChip,
  TechEventChip,
} from '@/components/eventDetailsBox';
import Navbar from '@/components/navbar';

import { Press_Start_2P, Stick_No_Bills } from 'next/font/google';
import { useState } from 'react';

import { ITevents } from './events';
import EventsDropDown from '@/components/eventsDropDown';
import Image from 'next/image';
import Footer from '@/app/footer/page';

const press_start_2p = Press_Start_2P({
  preload: true,
  weight: '400',
  subsets: ['latin'],
});

const stick_no_bills = Stick_No_Bills({
  preload: true,
  subsets: ['latin'],
});

export default function IT() {
  const [selectedEvent, setSelectedEvent] = useState(ITevents.events[0]);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const colorScheme = {
    selected: '#27578B99',
    nonSelected: '#6F748566',
  };

  const bg_color = 'bg-[#021746]';

  return (
    <>
      <Navbar className="absolute top-0 left-0 w-full" />
      <div className="background-gradient fixed left-0 top-0 h-screen w-full z-0" />
      <div
        className="flex flex-col justify-center items-center min-h-screen bg-cover w-full z-10 sm:px-12 px-6 pt-28 pb-14"
        style={{
          backgroundImage: `url('/background_IT_2.png')`,
        }}
      >
        <div className="flex justify-center flex-col items-center z-10">
          <p className="md:text-xl md:mb-3 mb-1">DEPARTMENT OF</p>
          <h1
            className={`${press_start_2p.className} font-[400] xl:text-5xl md:text-4xl text-2xl sm:text-3xl leading-10 text-center uppercase`}
          >
            Information Technology
          </h1>
        </div>

        <EventsDropDown
          {...{
            setDropDownOpen,
            setSelectedEvent,
            dropDownOpen,
            selectedEvent,
            deptEvents: ITevents,
            colorScheme,
            width: '200px',
          }}
        />

        <div className="flex relative lg:top-8">
          <div className="relative h-fit mt-2 hidden lg:flex flex-col gap-3 items-end">
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
              <h3
                className={`${stick_no_bills.className} text-lg absolute -left-4 bottom-6 uppercase font-bold text-white/80 rotate-[270deg]`}
              >
                Tech
              </h3>
            </div>
          </div>

          <EventDetailsBox className="lg:w-[60vw] md:min-h-[500px] bg-[#27578B99]">
            <EventDetails event={selectedEvent} bg_color={bg_color} />
          </EventDetailsBox>

          <div className="mt-2 hidden lg:flex flex-col gap-3">
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
              <h3
                className={`${stick_no_bills.className} absolute -left-9 bottom-[43px] text-lg uppercase font-bold text-white/80 rotate-[90deg] transform -scale-x-100`}
              >
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

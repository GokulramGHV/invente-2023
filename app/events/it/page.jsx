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

// const tourney = Tourney({
//   preload: true,
//   subsets: ['latin'],
// });

const press_start_2p = Press_Start_2P({
  preload: true,
  weight: '400',
  subsets: ['latin'],
});

export default function IT() {
  const [selectedEvent, setSelectedEvent] = useState(ITevents.events[0]);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <>
      <Navbar className="absolute top-0 left-0 w-full" />
      <div
        className="flex flex-col justify-center items-center min-h-screen bg-cover w-full z-[1] p-12"
        style={{
          backgroundImage: `url('/IT_background.png')`,
        }}
      >
        <div className="flex justify-center flex-col items-center mt-10">
          <p className="md:text-xl">DEPARTMENT OF</p>
          <h1
            className={`${press_start_2p.className} font-[400] md:text-[2.5rem] text-2xl leading-10`}
          >
            Information Technology
          </h1>
          {/* <h4 className={`${tourney.className} md:text-2xl text-xl`}>
            ENGINEERING
          </h4> */}
        </div>
        <div className="relative w-full my-6 md:hidden cursor-pointer">
          <button
            className="relative bg-[#635C4DCF] z-10 w-[180px] rounded-lg py-2 px-3 border border-white/40  backdrop-blur-[2px] text-sm flex gap-1.5 items-center"
            onClick={() => setDropDownOpen(!dropDownOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 h-4 ${
                dropDownOpen && 'rotate-90'
              } transition duration-300 ease-in-out`}
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M9.89826 6.61241C10.1803 6.35053 10.1803 5.92524 9.89826 5.66336L5.56577 1.64089C5.28371 1.37902 4.82564 1.37902 4.54358 1.64089C4.26152 1.90277 4.26152 2.32807 4.54358 2.58994L8.3661 6.13893L4.54583 9.68792C4.26377 9.94979 4.26377 10.3751 4.54583 10.637C4.8279 10.8988 5.28597 10.8988 5.56803 10.637L9.90052 6.6145L9.89826 6.61241Z"
                fill="white"
              />
            </svg>
            <span className="font-medium">{selectedEvent.name}</span>
          </button>
          <div
            className={`${
              !dropDownOpen && 'hidden'
            } absolute z-[1] top-0 left-0 w-[180px] bg-[#24232096] px-2 pt-12 pb-2 border border-white border-white/40 rounded-lg backdrop-blur-sm flex flex-col items-start text-sm`}
          >
            {ITevents.events
              .filter((event) => event.event_type === 'tech')
              .map((event) => (
                <button
                  key={event.name}
                  className="hover:bg-[#242320]/40 rounded w-full text-left p-2 cursor-pointer"
                  onClick={() => {
                    setSelectedEvent(event);
                    setDropDownOpen(false);
                  }}
                >
                  {event.name}
                </button>
              ))}
            <hr className="w-[160px] mx-auto bg-white h-[1px] my-2 " />
            {ITevents.events
              .filter((event) =>
                event.event_type?.toLowerCase().includes('non')
              )
              .map((event) => (
                <button
                  key={event.name}
                  className="hover:bg-[#242320]/40 rounded w-full text-left p-2 cursor-pointer"
                  onClick={() => {
                    setSelectedEvent(event);
                    setDropDownOpen(false);
                  }}
                >
                  {event.name}
                </button>
              ))}
          </div>
        </div>
        <div className="flex relative md:top-6">
          <div className="mt-2 hidden md:flex flex-col gap-3">
            {ITevents.events
              .filter((event) => event.event_type === 'tech')
              .map((event) => {
                if (event.name === selectedEvent.name) {
                  return (
                    <TechEventChip
                      key={event.name}
                      className="bg-[#C66D5199]"
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                    />
                  );
                } else {
                  return (
                    <TechEventChip
                      key={event.name}
                      className="bg-[#635C4DCF] hover:bg-[#C66D5199]"
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                    />
                  );
                }
              })}
          </div>
          <EventDetailsBox className=" md:w-full min-h-[500px] bg-[#C66D5199]">
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
                      className="bg-[#C66D5199]"
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                    />
                  );
                } else {
                  return (
                    <NonTechEventChip
                      key={event.name}
                      className="bg-[#635C4DCF] hover:bg-[#C66D5199]"
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                    />
                  );
                }
              })}
          </div>
        </div>
      </div>
    </>
  );
}

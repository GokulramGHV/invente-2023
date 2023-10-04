'use client';
import { useState } from 'react';
import { HospitalityContent } from './content';
import Image from 'next/image';

const calculateTranslateX = (display) => {
  switch (display) {
    case 'Instructions':
      return 'translate-x-0';
    case 'HowToReach':
      return 'translate-x-[184px]';
    case 'Accommodations':
      return 'translate-x-[368px]';
    case 'ContactUs':
      return 'translate-x-[552px]';
  }
};
export default function Page() {
  const [display, setDisplay] = useState('Instructions');
  return (
    <div className="relative bg-hex w-full min-h-screen flex flex-col items-center justify-center px-5 pt-28 pb-10 overflow-x-clip">
      <Image
        src="/invente-bulb.png"
        alt="invente-bulb"
        width={700}
        height={700}
        className="absolute top-[40%] translate-y-[-50%] lg:-right-[200px] -right-[100px] transform origin-top-right opacity-[0.05] -rotate-[16deg] z-0"
      />
      <div
        className="bg-[#181818] lg:px-16 px-8 py-8 rounded-[10px] xl:w-[1200px] min-h-[700px] relative bottom-10 z-10"
        style={{
          boxShadow: '0px 4px 7px 0px #FFFFFF12',
        }}
      >
        <div className="relative w-fit mx-auto">
          <div className="text-white flex flex-wrap justify-center items-center lg:gap-10 gap-5 w-fit mb-8 lg:mb-0">
            <button
              className={`${
                display === 'Instructions' &&
                'border-[#60BFF5] bg-[#60BFF5]/60 lg:bg-[#181818] lg:border-[#181818]'
              } w-36 py-3 hover:bg-[#4D4D4D4D] border border-[#181818] hover:border-white/20 rounded transition-all duration-200 ease-in-out`}
              onClick={() => setDisplay('Instructions')}
            >
              Instructions
            </button>
            <button
              className={`${
                display === 'HowToReach' &&
                'border-[#60BFF5] bg-[#60BFF5]/60 lg:bg-[#181818] lg:border-[#181818]'
              } w-36 py-3 hover:bg-[#4D4D4D4D] border border-[#181818] hover:border-white/20 rounded transition-all duration-200 ease-in-out`}
              onClick={() => setDisplay('HowToReach')}
            >
              How to reach
            </button>
            <button
              className={`${
                display === 'Accommodations' &&
                'border-[#60BFF5] bg-[#60BFF5]/60 lg:bg-[#181818] lg:border-[#181818]'
              } w-36 py-3 hover:bg-[#4D4D4D4D] border border-[#181818] hover:border-white/20 rounded transition-all duration-200 ease-in-out`}
              onClick={() => setDisplay('Accommodations')}
            >
              Accommodations
            </button>
            <button
              className={`${
                display === 'ContactUs' &&
                'border-[#60BFF5] bg-[#60BFF5]/60 lg:bg-[#181818] lg:border-[#181818]'
              } w-36 py-3 hover:bg-[#4D4D4D4D] border border-[#181818] hover:border-white/20 rounded transition-all duration-200 ease-in-out`}
              onClick={() => setDisplay('ContactUs')}
            >
              Contact Us
            </button>
          </div>
          <div className="mb-10 hidden lg:block">
            <div
              className={`h-0.5 w-36 bg-[#60BFF5] transition-all origin-left transform duration-300 ease-in-out ${calculateTranslateX(
                display
              )}`}
            ></div>
          </div>
        </div>
        <div>
          {display === 'Instructions' && (
            <div className="flex flex-col gap-4 p-2">
              <div className="flex gap-2 flex-wrap font-medium">
                Fill the gform for Invente accommodation:
                <a
                  href="https://forms.gle/SJUjgKvLGHpWpDqq8"
                  className="text-blue-500 underline"
                >
                  https://forms.gle/SJUjgKvLGHpWpDqq8
                </a>
              </div>
              <div className="flex gap-2 flex-wrap font-medium">
                Click here to view bus routes:
                <a
                target='_blank'
                  href="https://drive.google.com/file/d/1iJYQElpGEnq-8zsn_4GOI16DAoraftcu/view?usp=drive_link"
                  className="text-blue-500 underline"
                >
                  SSN Bus Routes
                </a>
              </div>
              {HospitalityContent['instructions'].map((content, index) => (
                <div key={index}>
                  <span className="block font-bold ">{content.heading}:</span>
                  <ul className="list-disc ml-6">
                    {content.body.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {display === 'HowToReach' && (
            <div>
              <h2 className="text-lg font-bold">
                {HospitalityContent['how_to_reach'].heading}
              </h2>
              <h3 className="mb-8">
                {HospitalityContent['how_to_reach'].location}
              </h3>
              <ul className="list-disc ml-5 space-y-5">
                {HospitalityContent['how_to_reach'].modes.map(
                  (content, index) => (
                    <li key={index}>
                      <span className="font-bold">{content.mode}</span>
                      <ul className="list-disc ml-5 space-y-1">
                        {content.instructions.map((content, index) => (
                          <li key={index}>{content}</li>
                        ))}
                      </ul>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
          {display === 'Accommodations' && (
            <div className="flex flex-col gap-2 list-disc">
              <ul className="list-disc ml-5 space-y-3">
                {HospitalityContent['accommodation'].map((content, index) => (
                  <li key={index}>
                    <span className="font-bold">{content.heading}</span>:
                    <span> {content.body}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {display === 'ContactUs' && (
            <div className="flex flex-col items-center gap-8 justify-center">
              <span>Reach out to us if you have any further queries...</span>
              {HospitalityContent.contact_us.map((content, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-1"
                >
                  <span className="font-bold text-xl">{content.name}</span>
                  <span>{content.number}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

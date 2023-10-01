'use client';

import { Bayon } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const bayon = Bayon({
  subsets: ['latin'],
  weight: ['400'],
});

const rulesArray = [
  'Technical Passes are valid only for **individual registration**, not for team registration.',
  'Using one Technical pass, the participant is able to participate in a maximum of **4 - Technical Events** across the departments.',
  'After participating in 4 - Technical Events, the participants are very much **welcome to buy another pass**.',
  'The participants should make sure that they are making the payment using only the **Razor-pay link** provided on the website.',
  'No other mode of payment is accepted.',
  'Once the participants make their payment using the Razor-pay link, they will receive the transaction **receipt through their given mail ID**.',
  'The participants can use the same Razor-pay link for Workshop and Hackathon registration.',
  'While making the payment, the participant should make sure that they are paying for **either (Technical pass / Workshop / Hackathon)**.',
  'After the payment process, the participants should fill out the **Google Form** attached (Register Here Button) below the "Pay Now" Button individually',
  'The participants should **upload the receipt** in the Google Form without fail.',
  'Those who are participating in **Paper Presentation / Poster Presentation** kindly mention that in the Gform without fail.',
  'These Technical Passes are not valid for Non-Technical Events. Non- Technical Events will have separate registration in their respective departments.',
];

export default function Register() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative bg-hex min-h-screen grid xl:grid-cols-2 w-full pt-10 pb-24">
      {open && (
        <div
          className="absolute top-0 left-0 h-full w-full bg-black/60 z-50 flex justify-center sm:items-center px-5 py-10"
          onClick={() => setOpen(false)}
        >
          <div className="bg-white rounded-lg shadow-xl p-5 sm:w-[550px] flex flex-col gap-5 h-fit">
            <div className="prose text-black text-lg">
              <ReactMarkdown>
                {`Dear participant, you can collect your Technical event pass and the workshop pass at the **Central Registration desk** on the day of the event.  
                  To skip the queues do registration now!!! Kindly go through all the 12 rules before you pay!`}
              </ReactMarkdown>
            </div>
            <a
              target="_blank"
              href="https://rzp.io/l/Invente-23"
              onClick={() => setOpen(false)}
              className="get-passes-button text-white text-base font-bold whitespace-nowrap xl:px-20 px-10 py-3 transition-all duration-200 ease-in-out uppercase w-full cursor-pointer text-center"
            >
              Continue to pay{'  '}→
            </a>
          </div>
        </div>
      )}

      <div className="flex flex-col xl:flex-row h-full w-full">
        <div className="xl:px-20 pt-10 xl:pt-0 px-8 h-full flex-1 flex flex-col justify-center items-center relative">
          <Image
            src="/invente-bulb.png"
            alt="invente-bulb"
            width={300}
            height={300}
            className="absolute top-[40%] translate-y-[-50%] left-[15%] opacity-30 -rotate-[16deg] z-[0]"
          />
          <h1
            className={`${bayon.className} xl:text-7xl text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#BAF7FF]`}
          >
            REGISTER NOW!
          </h1>
          <p className="text-center mt-2">
            Make sure you have read the rules and regulations before you pay for
            the passes.
          </p>
          <div className="xl:mt-20 mt-10 flex gap-4 relative xl:right-6 right-3">
            <div className="flex flex-col gap-2 justify-center items-center w-fit">
              <h3 className="text-4xl font-semibold">1</h3>
              <div className="h-8 w-1 rounded-full bg-white"></div>
              <h3 className="text-4xl font-semibold">2</h3>
              {/* <div className="h-8 w-1 rounded-full bg-white"></div>
              <h3 className="text-4xl font-semibold">3</h3> */}
            </div>
            <div className="flex flex-col gap-10">
              <div className="w-full flex items-center gap-5">
                <button
                  onClick={() => setOpen(true)}
                  className="get-passes-button text-white text-base font-bold whitespace-nowrap xl:px-20 px-10 py-3 transition-all duration-200 ease-in-out uppercase w-full cursor-pointer text-center"
                >
                  Pay Now
                </button>
              </div>
              <div className="w-full flex items-center gap-5">
                <a
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc4mr5QFS-GT45HPNmx4ZkGw-XsWgISVWx4m0Crg1E4IpmiVw/viewform?vc=0&c=0&w=1&flr=0"
                  className="get-passes-button text-white text-base font-bold whitespace-nowrap xl:px-20 px-10 py-3 transition-all duration-200 ease-in-out uppercase w-full cursor-pointer text-center"
                >
                  Register Here
                </a>
              </div>
              {/* <div className="w-full flex items-center gap-5">
                <a
                  target="_blank"
                  href="https://linktr.ee/ssnsnucinvente23"
                  className="get-passes-button text-white text-base font-bold whitespace-nowrap xl:px-20 px-10 py-3 transition-all duration-200 ease-in-out uppercase w-full cursor-pointer text-center"
                >
                  Event Forms
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div
          className="xl:h-full xl:w-[1px] w-full h-[1px] opacity-80 my-10 xl:my-0"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, #FFFFFF 52.6%, rgba(255, 255, 255, 0) 100%',
          }}
        ></div>
      </div>
      <div className="flex flex-col justify-center items-center xl:px-28 px-8">
        <h2 className={`${bayon.className} xl:text-6xl text-5xl uppercase`}>
          Rules
        </h2>
        <div className="text-lg space-y-3 mt-6 md:h-[60vh] overflow-y-auto">
          {rulesArray.map((rule, i) => (
            <div key={i} className="flex gap-3">
              <h3 className="font-semibold">{i + 1}. </h3>
              <ReactMarkdown className="leading-6">{rule}</ReactMarkdown>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

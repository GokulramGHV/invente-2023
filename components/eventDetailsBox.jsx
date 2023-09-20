'use client';
import markdownToHtml from '@/lib/markdown';
import { Inter, Stick_No_Bills, Aoboshi_One } from 'next/font/google';
import { useEffect, useState } from 'react';

const stick_no_bills = Stick_No_Bills({
  preload: true,
  subsets: ['latin'],
});
const inter = Inter({
  preload: true,
  subsets: ['latin'],
});
const aoboshi = Aoboshi_One({
  preload: true,
  weight: '400',
  subsets: ['latin'],
});

export default function EventDetailsBox({ className = '', children }) {
  return (
    <div
      className={`${className} border border-white border-white/50 rounded-xl backdrop-blur-sm py-6 sm:px-10 px-6 flex flex-col items-center min-h-[510px]`}
    // style={{
    //   border: '1px solid #FFFFFF50',
    //   borderImage:
    //     'linear-gradient(to bottom right,#FFFFFF, #FFFFFF00, #FFFFFF)',
    //   borderImageSlice: '10',
    //   WebkitMask: `
    //   linear-gradient(#fff 0 0) padding-box,
    //   linear-gradient(#fff 0 0)
    // `,
    // }}
    >
      {children}
    </div>
  );
}

export function EventDetails({ event, bg_color, textColor = 'text-white' }) {
  const [content, setContent] = useState(event.description);

  useEffect(() => {
    async function getContent() {
      const content = await markdownToHtml(event.description || '');
      setContent(content);
    }
    getContent();
  }, [event.description]);

  return (
    <>
      <h3
        className={`${stick_no_bills.className} uppercase md:text-lg font-bold text-[#FFFFFF99] `}
      >
        {event.event_type === 'tech' ? 'Tech Event' : 'Non-Tech Event'}
      </h3>

      <h2
        className={`${aoboshi.className} md:text-3xl text-2xl text-center font-bold ${textColor}`}
      >
        {event.name}
      </h2>
      <div
        className={`text-center lg:text-base text-sm p-3.5 w-full md:w-fit mx-auto my-5 flex flex-wrap gap-x-6 gap-y-3 justify-center items-center ${bg_color} rounded-[8px]`}
      >
        <div className="sm:col-span-1 font-bold leading-3">
          {event.winner ? `₹${event.winner}` : 'TBD'}
          <br />
          <span className="font-light text-[11px]">W I N N E R</span>
        </div>
        <div className="sm:col-span-1 font-bold leading-3">
          {event.runner ? `₹${event.runner}` : 'TBD'}
          <br />
          <span className="font-light text-[11px]">R U N N E R</span>
        </div>
        {event?.third_prize && event?.third_prize !== '' && (
          <div className="sm:col-span-1 font-bold leading-3">
            {event.third_prize ? `₹${event.third_prize}` : 'TBD'}
            <br />
            <span className="font-light text-[11px]">T H I R D</span>
          </div>
        )}

        <div className="flex flex-wrap gap-x-4 sm:gap-x-6 justify-center gap-y-3">
          <div className="flex md:gap-2 gap-1.5 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="none"
              className="md:w-6 md:h-6 w-4 h-4"
            >
              <path
                d="M19.3333 23.9998C18.4 23.9998 17.6111 23.6776 16.9667 23.0332C16.3222 22.3887 16 21.5998 16 20.6665C16 19.7332 16.3222 18.9443 16.9667 18.2998C17.6111 17.6554 18.4 17.3332 19.3333 17.3332C20.2667 17.3332 21.0556 17.6554 21.7 18.2998C22.3444 18.9443 22.6667 19.7332 22.6667 20.6665C22.6667 21.5998 22.3444 22.3887 21.7 23.0332C21.0556 23.6776 20.2667 23.9998 19.3333 23.9998ZM6.66667 29.3332C5.93333 29.3332 5.30556 29.0721 4.78333 28.5498C4.26111 28.0276 4 27.3998 4 26.6665V7.99984C4 7.2665 4.26111 6.63873 4.78333 6.1165C5.30556 5.59428 5.93333 5.33317 6.66667 5.33317H8V3.99984C8 3.62206 8.12778 3.30539 8.38333 3.04984C8.63889 2.79428 8.95556 2.6665 9.33333 2.6665C9.71111 2.6665 10.0278 2.79428 10.2833 3.04984C10.5389 3.30539 10.6667 3.62206 10.6667 3.99984V5.33317H21.3333V3.99984C21.3333 3.62206 21.4611 3.30539 21.7167 3.04984C21.9722 2.79428 22.2889 2.6665 22.6667 2.6665C23.0444 2.6665 23.3611 2.79428 23.6167 3.04984C23.8722 3.30539 24 3.62206 24 3.99984V5.33317H25.3333C26.0667 5.33317 26.6944 5.59428 27.2167 6.1165C27.7389 6.63873 28 7.2665 28 7.99984V26.6665C28 27.3998 27.7389 28.0276 27.2167 28.5498C26.6944 29.0721 26.0667 29.3332 25.3333 29.3332H6.66667ZM6.66667 26.6665H25.3333V13.3332H6.66667V26.6665ZM6.66667 10.6665H25.3333V7.99984H6.66667V10.6665Z"
                fill="white"
              />
            </svg>
            <p className="col-span-2">
              {/* {event.date ? event.date.slice(0, 6) : 'TBD'} */}
              TBD
            </p>
          </div>
          <div className="flex md:gap-1.5 gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-6 md:h-6 w-4 h-4"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16.0007 25.7998C18.7118 23.3109 20.7229 21.0498 22.034 19.0165C23.3451 16.9832 24.0007 15.1776 24.0007 13.5998C24.0007 11.1776 23.2284 9.19428 21.684 7.64984C20.1395 6.10539 18.2451 5.33317 16.0007 5.33317C13.7562 5.33317 11.8618 6.10539 10.3173 7.64984C8.77287 9.19428 8.00065 11.1776 8.00065 13.5998C8.00065 15.1776 8.65621 16.9832 9.96732 19.0165C11.2784 21.0498 13.2895 23.3109 16.0007 25.7998ZM16.0007 28.4332C15.6895 28.4332 15.3784 28.3776 15.0673 28.2665C14.7562 28.1554 14.4784 27.9887 14.234 27.7665C12.7895 26.4332 11.5118 25.1332 10.4007 23.8665C9.28954 22.5998 8.36176 21.3721 7.61732 20.1832C6.87287 18.9943 6.30621 17.8498 5.91732 16.7498C5.52843 15.6498 5.33398 14.5998 5.33398 13.5998C5.33398 10.2665 6.40621 7.61095 8.55065 5.63317C10.6951 3.65539 13.1784 2.6665 16.0007 2.6665C18.8229 2.6665 21.3062 3.65539 23.4506 5.63317C25.5951 7.61095 26.6673 10.2665 26.6673 13.5998C26.6673 14.5998 26.4729 15.6498 26.084 16.7498C25.6951 17.8498 25.1284 18.9943 24.384 20.1832C23.6395 21.3721 22.7118 22.5998 21.6007 23.8665C20.4895 25.1332 19.2118 26.4332 17.7673 27.7665C17.5229 27.9887 17.2451 28.1554 16.934 28.2665C16.6229 28.3776 16.3118 28.4332 16.0007 28.4332ZM16.0007 15.9998C16.734 15.9998 17.3618 15.7387 17.884 15.2165C18.4062 14.6943 18.6673 14.0665 18.6673 13.3332C18.6673 12.5998 18.4062 11.9721 17.884 11.4498C17.3618 10.9276 16.734 10.6665 16.0007 10.6665C15.2673 10.6665 14.6395 10.9276 14.1173 11.4498C13.5951 11.9721 13.334 12.5998 13.334 13.3332C13.334 14.0665 13.5951 14.6943 14.1173 15.2165C14.6395 15.7387 15.2673 15.9998 16.0007 15.9998Z"
                fill="white"
              />
            </svg>
            <p className="">{event.venue ? event.venue : 'TBD'}</p>
          </div>
          <div className="flex md:gap-2 gap-1.5 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-6 md:h-6 w-4 h-4"
              viewBox="0 0 39 39"
              fill="none"
            >
              <path
                d="M1.625 30.875V27.95C1.625 27.0292 1.86198 26.1828 2.33594 25.4109C2.8099 24.6391 3.43958 24.05 4.225 23.6437C5.90417 22.8042 7.61042 22.1745 9.34375 21.7547C11.0771 21.3349 12.8375 21.125 14.625 21.125C16.4125 21.125 18.1729 21.3349 19.9063 21.7547C21.6396 22.1745 23.3458 22.8042 25.025 23.6437C25.8104 24.05 26.4401 24.6391 26.9141 25.4109C27.388 26.1828 27.625 27.0292 27.625 27.95V30.875C27.625 31.3354 27.4693 31.7214 27.1578 32.0328C26.8464 32.3443 26.4604 32.5 26 32.5H3.25C2.78958 32.5 2.40365 32.3443 2.09219 32.0328C1.78073 31.7214 1.625 31.3354 1.625 30.875ZM30.1031 32.5C30.3469 32.3104 30.5365 32.0734 30.6719 31.7891C30.8073 31.5047 30.875 31.1865 30.875 30.8344V27.625C30.875 26.4333 30.5432 25.2891 29.8797 24.1922C29.2162 23.0953 28.275 22.1542 27.0563 21.3687C28.4375 21.5312 29.7375 21.8089 30.9563 22.2016C32.175 22.5943 33.3125 23.075 34.3688 23.6437C35.3438 24.1854 36.0885 24.788 36.6031 25.4516C37.1177 26.1151 37.375 26.8396 37.375 27.625V30.875C37.375 31.3354 37.2193 31.7214 36.9078 32.0328C36.5964 32.3443 36.2104 32.5 35.75 32.5H30.1031ZM14.625 19.5C12.8375 19.5 11.3073 18.8635 10.0344 17.5906C8.76146 16.3177 8.125 14.7875 8.125 13C8.125 11.2125 8.76146 9.68229 10.0344 8.40937C11.3073 7.13646 12.8375 6.5 14.625 6.5C16.4125 6.5 17.9427 7.13646 19.2156 8.40937C20.4885 9.68229 21.125 11.2125 21.125 13C21.125 14.7875 20.4885 16.3177 19.2156 17.5906C17.9427 18.8635 16.4125 19.5 14.625 19.5ZM30.875 13C30.875 14.7875 30.2385 16.3177 28.9656 17.5906C27.6927 18.8635 26.1625 19.5 24.375 19.5C24.0771 19.5 23.6979 19.4661 23.2375 19.3984C22.7771 19.3307 22.3979 19.2562 22.1 19.175C22.8313 18.3083 23.3932 17.3469 23.7859 16.2906C24.1786 15.2344 24.375 14.1375 24.375 13C24.375 11.8625 24.1786 10.7656 23.7859 9.70937C23.3932 8.65312 22.8313 7.69167 22.1 6.825C22.4792 6.68958 22.8583 6.60156 23.2375 6.56094C23.6167 6.52031 23.9958 6.5 24.375 6.5C26.1625 6.5 27.6927 7.13646 28.9656 8.40937C30.2385 9.68229 30.875 11.2125 30.875 13ZM4.875 29.25H24.375V27.95C24.375 27.6521 24.3005 27.3812 24.1516 27.1375C24.0026 26.8937 23.8063 26.7042 23.5625 26.5687C22.1 25.8375 20.624 25.2891 19.1344 24.9234C17.6448 24.5578 16.1417 24.375 14.625 24.375C13.1083 24.375 11.6052 24.5578 10.1156 24.9234C8.62604 25.2891 7.15 25.8375 5.6875 26.5687C5.44375 26.7042 5.2474 26.8937 5.09844 27.1375C4.94948 27.3812 4.875 27.6521 4.875 27.95V29.25ZM14.625 16.25C15.5188 16.25 16.2839 15.9318 16.9203 15.2953C17.5568 14.6589 17.875 13.8937 17.875 13C17.875 12.1062 17.5568 11.3411 16.9203 10.7047C16.2839 10.0682 15.5188 9.75 14.625 9.75C13.7313 9.75 12.9661 10.0682 12.3297 10.7047C11.6932 11.3411 11.375 12.1062 11.375 13C11.375 13.8937 11.6932 14.6589 12.3297 15.2953C12.9661 15.9318 13.7313 16.25 14.625 16.25Z"
                fill="white"
              />
            </svg>
            <p className="grid grid-cols-1 justify-items-start">
              {event.team_size ? event.team_size : 'TBD'}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col items-center w-full h-full md:overflow-y-scroll ${textColor}`}
      >
        <div
          className="prose text-sm md:text-base text-justify"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
        {event?.rounds?.length > 0 && (
          <>
            <h3 className="md:text-xl mt-5 mb-2 text-lg font-bold">ROUNDS</h3>
            <ol className="space-y-3">
              {event?.rounds?.map((round, index) => (
                <li
                  key={index}
                  className="flex gap-1 text-sm md:text-base text-justify"
                >
                  <div>{index + 1}.</div>
                  <div>
                    <span className="font-semibold">{round.name}</span> -{' '}
                    {round.description}
                  </div>
                </li>
              ))}
            </ol>
          </>
        )}
        {event?.coordinators?.length > 0 && (
          <>
            <h3 className="md:text-xl mt-6 mb-2 text-lg font-bold">
              CO-ORDINATORS
            </h3>
            <ol className="space-y-3 flex flex-col items-center justify-center">
              {event?.coordinators?.map((coordinator, index) => (
                <li key={index} className="flex gap-1 text-sm md:text-base">
                  <span className="font-bold">{coordinator.name}</span>
                  {'   '}(+91 {''}
                  {coordinator.phone})
                </li>
              ))}
            </ol>
          </>
        )}
      </div>
    </>
  );
}

export function TechEventChip({
  className = '',
  name,
  onClickHandler,
  width,
  textColor,
}) {
  return (
    <button
      onClick={onClickHandler}
      className={`${className} ${width} ${inter.className} ${textColor} font-semibold rounded-l-lg py-2 px-3 border-y border-l border-white/40  backdrop-blur-[2px] text-sm w-[140px] flex justify-end`}
    >
      {name}
    </button>
  );
}

export function NonTechEventChip({
  className = '',
  name,
  onClickHandler,
  width,
  textColor,
}) {
  return (
    <button
      onClick={onClickHandler}
      className={`${className} ${width} ${inter.className} ${textColor} font-semibold rounded-r-lg py-2 px-3 border-y border-r border-white/40  backdrop-blur-[2px] text-sm w-[140px] flex justify-start`}
    >
      {name}
    </button>
  );
}

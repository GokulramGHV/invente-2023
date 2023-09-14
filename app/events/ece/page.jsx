import Navbar from '@/components/navbar';

import { Tourney } from 'next/font/google';

// const space_grotesk = Space_Grotesk({
//   preload: true,
//   subsets: ['latin'],
// });

const tourney = Tourney({
  preload: true,
  subsets: ['latin'],
});

export default function ECE() {
  return (
    <>
      <Navbar className="absolute top-0 left-0 w-full" />
      {/* <div className='w-full h-screen fixed top-0 left-0'>
        <Image alt='background' src="" fill />
      </div> */}
      <div
        className="flex flex-col justify-center items-center min-h-screen bg-cover w-full z-[1] p-10"
        style={{
          backgroundImage: `url('/ECE_background.png')`,
        }}
      >
        <div className="flex justify-center flex-col items-center mt-10">
          <p className="text-xl font-thin">DEPARTMENT OF</p>
          <h1
            className={`${tourney.className} font-[900] text-[2.5rem] leading-10`}
          >
            ELECTRONIC & COMMUNICATION
          </h1>
          <h4 className={`${tourney.className} text-2xl`}>ENGINEERING</h4>
        </div>
        <div className="flex relative top-6">
          <div className="mt-2 flex flex-col gap-3">
            <div className="rounded-l-lg py-2 px-4 bg-[#C66D5199] backdrop-blur-[2px] text-sm w-[180px] flex justify-end">
              Paper Presentation
            </div>
            <div className="rounded-l-lg px-6 py-2 bg-[#C66D5199] backdrop-blur-[2px] text-sm">
              Paper Presentation
            </div>
          </div>
          <div
            className="w-[800px] h-[500px] rounded-xl bg-[#76401999] backdrop-blur-sm"
            style={{
              border: '1px solid #FFFFFF50',
              //   borderImage:
              //     'linear-gradient(to bottom right,#FFFFFF, #FFFFFF00, #FFFFFF)',
              //   borderImageSlice: '10',
              //   WebkitMask: `
              //   linear-gradient(#fff 0 0) padding-box,
              //   linear-gradient(#fff 0 0)
              // `,
            }}
          ></div>
          <div className="mt-2 flex flex-col gap-3">
            <div className="rounded-r-lg py-2 px-4 bg-[#C66D5199] backdrop-blur-[2px] text-sm w-[180px] flex justify-end">
              Paper Presentation
            </div>
            <div className="rounded-r-lg px-6 py-2 bg-[#C66D5199] backdrop-blur-[2px] text-sm">
              Paper Presentation
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

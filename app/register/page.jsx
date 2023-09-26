import Navbar from '@/components/navbar';
import { Bayon } from 'next/font/google';
import Image from 'next/image';

const bayon = Bayon({
  subsets: ['latin'],
  weight: ['400'],
});

const rulesArray = [
  'Technical Passes are valid only for individual registration, not for team registration.',
  'Using one Technical pass, the participant is able to participate in 4 - Technical Events across the departments.',
  'After participating in 4 - Technical Events, the participants are very much welcome to buy another pass.',
  'The participants should make sure that they are making the payment using only the Razor-pay link provided on the website.',
  'No other mode of payment is accepted.',
  'Once the participants make their payment using the Razor-pay link, they will receive the transaction receipt through their login mail I’D.',
  'The participants can use the same Razor-pay link for Workshop and Hackathon registration.',
  'While making the payment, the participant should make sure that they are paying for either (Technical pass / Workshop / Hackathon).',
  'After the payment process, the participants should fill out the Payment Google Form mentioned below the Razor Pay link.',
  'The participants should upload the receipt in the Google Form without fail.',
  'Register for 4 technical events using the link tree provided which has department wise registration forms.',
  'From the list of Technical Events, the participants are allowed to select any 4-Technical Events and register for the same.',
  'All the event registration forms can be found in the link tree.',
  'In a single pass, more than 4-Technical Events registrations will not be acceptable.',
  'These Technical Passes are not valid for Non-Technical Events. Non- Technical Events will have separate registration in their respective departments.',
];

export default function Register() {
  return (
    <>
      <Navbar />
      <div className="bg-hex min-h-screen grid xl:grid-cols-2 w-full pt-10 pb-24">
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
              Make sure you have read the rules and regulations before you pay
              for the passes.
            </p>
            <div className="xl:mt-20 mt-10 flex flex-col gap-10 relative xl:right-6 right-3">
              <div className="h-8 w-1 rounded-full bg-white absolute left-2.5 top-[66px] translate-y-[-50%]"></div>
              <div className="h-8 w-1 rounded-full bg-white absolute left-2.5 top-[156px] translate-y-[-50%]"></div>
              <div className="w-full flex items-center gap-5">
                <h3 className="text-4xl font-semibold">1</h3>
                <a
                  target="_blank"
                  href="https://rzp.io/l/Invente-23"
                  className="get-passes-button text-white text-base font-bold whitespace-nowrap xl:px-20 px-10 py-3 transition-all duration-200 ease-in-out uppercase w-full cursor-pointer text-center"
                >
                  Pay Now
                </a>
              </div>
              <div className="w-full flex items-center gap-5">
                <h3 className="text-4xl font-semibold">2</h3>
                <a
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc4mr5QFS-GT45HPNmx4ZkGw-XsWgISVWx4m0Crg1E4IpmiVw/viewform?vc=0&c=0&w=1&flr=0"
                  className="get-passes-button text-white text-base font-bold whitespace-nowrap xl:px-20 px-10 py-3 transition-all duration-200 ease-in-out uppercase w-full cursor-pointer text-center"
                >
                  Register Here
                </a>
              </div>
              <div className="w-full flex items-center gap-5">
                <h3 className="text-4xl font-semibold">3</h3>
                <a
                  target="_blank"
                  href="https://linktr.ee/ssnsnucinvente23"
                  className="get-passes-button text-white text-base font-bold whitespace-nowrap xl:px-20 px-10 py-3 transition-all duration-200 ease-in-out uppercase w-full cursor-pointer text-center"
                >
                  Event Forms
                </a>
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
          <div className="text-lg space-y-3 mt-6">
            {rulesArray.map((rule, i) => (
              <div key={i} className="flex gap-3">
                <h3 className="font-semibold">{i + 1}. </h3>
                <p className="leading-6">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

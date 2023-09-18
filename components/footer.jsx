import Image from 'next/image';
import FooterMobile from '@/components/footerMobile';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className="relative lg:hidden z-30">
        <FooterMobile />
      </div>
      <div className="hidden lg:block text-sm relative">
        <div className="relative py-10 px-20 text-left w-full bg-gradient-to-r from-[#1D1F2A] from-100% to-[#1D1F2AE5] to-90% overflow-hidden">
          <div className="flex justify-between gap-5 mb-8">
            <div className="lg:col-span-3 font-medium">
              <Image
                src="/invente.png"
                alt="invente_logo"
                width={252}
                height={90}
              />
            </div>
            <div className="grid grid-cols-3 xl:gap-28 gap-20 mr-12">
              <div>
                <p className="font-extralight text-sm uppercase mb-2.5">
                  participate
                </p>
                <ul className="flex flex-col font-medium text-base gap-1.5">
                  <li>
                    <Link href="/#timeline">Events</Link>
                  </li>
                  <li>
                    <Link href="/comingsoon">Hackathons</Link>
                  </li>
                  <li>
                    <Link href="comingsoon">Workshops</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-extralight text-sm uppercase mb-2.5">
                  Know More
                </p>
                <ul className="flex flex-col font-medium text-base gap-1.5">
                  <li>
                    <Link href="/comingsoon">Schedule</Link>
                  </li>

                  <li>
                    <Link href="/comingsoon">Sponsors</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-extralight text-sm uppercase mb-2.5">
                  Get in touch
                </p>
                <ul className="flex flex-col font-medium text-base gap-1.5">
                  <li>
                    <Link href="/comingsoon">Contact us</Link>
                  </li>
                  <li>
                    <div className="flex gap-3 mt-2 justify-center items-center">
                      <span>
                        <a href="https://www.instagram.com/ssnsnucinvente/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7 h-7"
                            viewBox="0 0 28 32"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_625_452)">
                              <path
                                d="M14.007 8.8127C10.032 8.8127 6.82578 12.0189 6.82578 15.9939C6.82578 19.9689 10.032 23.1752 14.007 23.1752C17.982 23.1752 21.1883 19.9689 21.1883 15.9939C21.1883 12.0189 17.982 8.8127 14.007 8.8127ZM14.007 20.6627C11.4383 20.6627 9.33828 18.5689 9.33828 15.9939C9.33828 13.4189 11.432 11.3252 14.007 11.3252C16.582 11.3252 18.6758 13.4189 18.6758 15.9939C18.6758 18.5689 16.5758 20.6627 14.007 20.6627ZM23.157 8.51895C23.157 9.4502 22.407 10.1939 21.482 10.1939C20.5508 10.1939 19.807 9.44395 19.807 8.51895C19.807 7.59395 20.557 6.84395 21.482 6.84395C22.407 6.84395 23.157 7.59395 23.157 8.51895ZM27.9133 10.2189C27.807 7.9752 27.2945 5.9877 25.6508 4.3502C24.0133 2.7127 22.0258 2.2002 19.782 2.0877C17.4695 1.95645 10.5383 1.95645 8.22578 2.0877C5.98828 2.19395 4.00078 2.70645 2.35703 4.34395C0.713281 5.98145 0.207031 7.96895 0.0945312 10.2127C-0.0367187 12.5252 -0.0367187 19.4564 0.0945312 21.7689C0.200781 24.0127 0.713281 26.0002 2.35703 27.6377C4.00078 29.2752 5.98203 29.7877 8.22578 29.9002C10.5383 30.0314 17.4695 30.0314 19.782 29.9002C22.0258 29.7939 24.0133 29.2814 25.6508 27.6377C27.2883 26.0002 27.8008 24.0127 27.9133 21.7689C28.0445 19.4564 28.0445 12.5314 27.9133 10.2189ZM24.9258 24.2502C24.4383 25.4752 23.4945 26.4189 22.2633 26.9127C20.4195 27.6439 16.0445 27.4752 14.007 27.4752C11.9695 27.4752 7.58828 27.6377 5.75078 26.9127C4.52578 26.4252 3.58203 25.4814 3.08828 24.2502C2.35703 22.4064 2.52578 18.0314 2.52578 15.9939C2.52578 13.9564 2.36328 9.5752 3.08828 7.7377C3.57578 6.5127 4.51953 5.56895 5.75078 5.0752C7.59453 4.34395 11.9695 4.5127 14.007 4.5127C16.0445 4.5127 20.4258 4.35019 22.2633 5.0752C23.4883 5.5627 24.432 6.50644 24.9258 7.7377C25.657 9.58145 25.4883 13.9564 25.4883 15.9939C25.4883 18.0314 25.657 22.4127 24.9258 24.2502Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_625_452">
                                <rect width="28" height="32" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                      </span>
                      <span>
                        <a href="https://www.linkedin.com/company/invente-ssnce/?originalSubdomain=in">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            viewBox="0 0 28 28"
                            fill="none"
                          >
                            <path
                              d="M24.6667 0H3.33333C1.49333 0 0 1.49333 0 3.33333V24.6667C0 26.5067 1.49333 28 3.33333 28H24.6667C26.5067 28 28 26.5067 28 24.6667V3.33333C28 1.49333 26.5067 0 24.6667 0ZM8.66667 10.6667V23.3333H4.66667V10.6667H8.66667ZM4.66667 6.98C4.66667 6.04667 5.46667 5.33333 6.66667 5.33333C7.86667 5.33333 8.62 6.04667 8.66667 6.98C8.66667 7.91333 7.92 8.66667 6.66667 8.66667C5.46667 8.66667 4.66667 7.91333 4.66667 6.98ZM23.3333 23.3333H19.3333C19.3333 23.3333 19.3333 17.16 19.3333 16.6667C19.3333 15.3333 18.6667 14 17 13.9733H16.9467C15.3333 13.9733 14.6667 15.3467 14.6667 16.6667C14.6667 17.2733 14.6667 23.3333 14.6667 23.3333H10.6667V10.6667H14.6667V12.3733C14.6667 12.3733 15.9533 10.6667 18.54 10.6667C21.1867 10.6667 23.3333 12.4867 23.3333 16.1733V23.3333Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      </span>
                      <span>
                        <a href="https://www.facebook.com/ssninvente/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            viewBox="0 0 29 30"
                            fill="none"
                          >
                            <path
                              d="M14.5 0.574219C6.49205 0.574219 0 7.06626 0 15.0742C0 22.344 5.35511 28.3463 12.3329 29.3949V18.9174H8.74548V15.1059H12.3329V12.5697C12.3329 8.37061 14.3787 6.52713 17.8686 6.52713C19.5401 6.52713 20.4239 6.65104 20.8424 6.70772V10.0348H18.4618C16.9802 10.0348 16.4628 11.4393 16.4628 13.0225V15.1059H20.8049L20.2156 18.9174H16.4628V29.4259C23.5401 28.4656 29 22.4145 29 15.0742C29 7.06626 22.508 0.574219 14.5 0.574219Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="bg-coral flex items-center text-[#FFFFFF2B] w-full">
              <div className="w-full relative top-3">
                <div className="box-border h-0 border-[1px] border-[#FFFFFF2B] w-full mb-2" />
                <div>
                  ©2023 SSN College of Engineering & Shiv Nadar University,
                  Chennai.
                </div>
              </div>
            </div>
            <a href="https://www.snuchennai.edu.in/">
              <Image
                src="/snuLogo.svg"
                alt="SNU Logo"
                height={50}
                width={170}
              />
            </a>
            <a href="http://www.ssn.edu.in/">
              <Image
                src="/ssnLogo.svg"
                alt="SSN Logo"
                height={45}
                width={110}
              />
            </a>
          </div>
        </div>
        <div className="flex bg-[#303746] w-full font-medium items-center text-white text-sm py-4 px-20">
          <div className="flex decoration-solid">
            <span>
              Website: Built by{' '}
              <span className="underline">
                <a href="https://gokulram.me/"> Gokulram</a>
              </span>
              {', '}
              <span className="underline">
                <a href="https://www.linkedin.com/in/thenithinbalaji/">
                  Nithin Balaji
                </a>
              </span>
              {', '}
              <span className="underline">
                <a href="https://www.linkedin.com/in/vetrivel-m-458a3a1b7/">
                  Vetrivel
                </a>
              </span>
              {', '}
              <span className="underline">
                <a href="https://www.linkedin.com/in/vaishnavejp/">
                  Vaishnave JP
                </a>
              </span>
              {', '}
              <span className="underline">
                <a href="https://portfolio-madraceee.vercel.app/">
                  Nitheesh Raja
                </a>
              </span>
              {'. '}
              <span> Designed by </span>
              <span className="underline">
                <a href="https://www.linkedin.com/in/suprajasridh/">Supraja</a>
              </span>{' '}
              <span className="">
                <a href=""> and </a>
              </span>
              <span className="underline">
                <a href="https://www.linkedin.com/in/vshwjth/"> Vishwajith. </a>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

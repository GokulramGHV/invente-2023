import Image from 'next/image';
import { IBM_Plex_Sans } from 'next/font/google';
import Navbar from '@/components/navbar';
import footerMobile from './footerMobile'

const ibm_plex_sans1 = IBM_Plex_Sans({
  preload: 'true',
  weight: '100',
  subsets: ['latin']
})
const ibm_plex_sans2 = IBM_Plex_Sans({
  preload: 'true',
  weight: '500',
  subsets: ['latin']
})

export default function Footer() {
  return (
    <div className='relative text-left lg:h-[486px] sm:h-[584px] w-screen bg-gradient-to-r from-[#1D1F2A] from-100% to-[#1D1F2AE5] to-90% overflow-hidden'>
      <div className='grid lg:grid-cols-6 lg:pt-[63px] lg:pl-[76px] md:grid-cols-1'>
        <div className={`lg:col-span-3 ${ibm_plex_sans2.className}`}>
          <Image 
            src="/invente.png"  
            alt='invente_logo'
            width={369}
            height={142}
          />
        </div>
        <div>
          <p className={`${ibm_plex_sans1.className} uppercase`}>participate</p>
          <ul>
            <a href='https://ssnsnucinvente.com/#timeline'><li>Events</li></a>
            <a href='https://ssnsnucinvente.com/comingsoon'><li>Hackathons</li></a>
            <a href='https://ssnsnucinvente.com/comingsoon'><li>Workshops</li></a>
          </ul>
        </div>
        <div>
          <p className={`${ibm_plex_sans1.className} uppercase`}>Know More</p>
          <ul>
            <a href='https://ssnsnucinvente.com/comingsoon'><li>Schedule</li></a>
            <a href='https://ssnsnucinvente.com/comingsoon'><li>Sponsors</li></a>
          </ul>
        </div>
        <div>
          <p className={`${ibm_plex_sans1.className} uppercase`}>Get in touch</p>
          <ul>
            <a href='https://ssnsnucinvente.com/comingsoon'><li>Contact us</li></a>
            <li>
              <div className='flex gap-5 mt-1'>
                <span><a href='https://www.instagram.com/ssnsnucinvente/'>
                  <Image 
                    src="/instaLogo.png"
                    alt='instagram'
                    width={28}
                    height={32}
                  />
                </a></span>
                <span><a href='https://www.linkedin.com/company/invente-ssnce/?originalSubdomain=in'>
                  <Image 
                    src="/linkedinLogo.png"
                    alt='linkedin'
                    width={28}
                    height={32}
                  />
                </a></span>
                <span><a href='https://www.facebook.com/ssninvente/'>
                  <Image 
                    src="/fbLogo.png"
                    alt='facebook'
                    width={28}
                    height={32}
                  />
                </a></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='grid lg:grid-cols-7 lg:grid-rows-2 pl-[61px] pt-[50px] relative top-10'>
        <div className='lg:col-span-5 row-span-2 bg-coral justify-items-center items-center text-[#FFFFFF2B]'>
          <div className='text-[#1D1F2A]'>.</div>
          <div className='box-border h-0 w-[1290px] border-[1px] border-[#FFFFFF2B] lg:col-span-5'>

          </div>
          <div>©2023 SSN College of Engineering & Shiv Nadar University, Chennai</div>
        </div>
        <div className='col-span-1 row-span-1'>
          <Image 
            src="/snuLogo.svg"
            alt="SNU Logo"
            height={53}
            width={177}
          />
        </div>
        <div className='col-span-1 row-span-1'>
          <Image 
            src="/ssnLogo.svg"
            alt="SSN Logo"
            height={47}
            width={110}
          />
        </div>
      </div>
      <div className='flex lg:bg-[#82D9FFB0] h-[81px] w-full absolute bottom-0 pl-[61px] items-center text-[#1D1D1B]'>
      <div className='flex decoration-solid'>
          <span>
            This website was Built by 
            <span className='underline'><a href='https://gokulram.me/'> Gokul, </a></span>
            <span className='underline'><a href='https://www.linkedin.com/in/thenithinbalaji/'>Nithin Balaji,</a></span>
            <span className='underline'><a href='https://www.linkedin.com/in/vetrivel-m-458a3a1b7/'> Vetrivel, </a></span>
            <span className='underline'><a href='https://www.linkedin.com/in/vaishnavejp/'> Vaishnave JP, </a></span>
            <span className='underline'><a href='https://portfolio-madraceee.vercel.app/'> Nitheesh Raja </a></span>
            <span> and Designed by </span> 
            <span className='underline'><a href='https://www.linkedin.com/in/suprajasridh/'> Supraja </a></span>
            <span className=''><a href=''> and </a></span>
            <span className='underline'><a href='https://www.linkedin.com/in/vshwjth/'> Vishwajith </a></span>
          </span>
        </div>
      </div>
    </div>
  );
}

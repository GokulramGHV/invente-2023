'use client';
import Image from 'next/image';
import { useState } from 'react';


export default function FooterMobile() {
  const [openParticipate, setOpenParticipate] = useState(false);
  const [openKnowMore, setOpenKnowMore] = useState(false);
  const [openGetInTouch, setOpenGetInTouch] = useState(false);

  return (
    <div className='grid justify-items-center grid-rows-9 bg-gradient-to-r from-[#1D1F2A] from-100% to-[#1D1F2AE5] to-90% overflow-hidden w-full min-h-[584px]'>
      <div className='pt-10'>
        <Image 
          src="/invente.png"
          alt='invente'
          width={186}
          height={70}
        />
      </div>
      <div className='uppercase'>
        Participate <button onClick={() => {setOpenParticipate(!openParticipate);}}>+</button>
        <div className={`${openParticipate} hidden`}>
          hi
        </div>
      </div>
      <div className='uppercase'>
        Know More <button>+</button>
      </div>
      <div className='uppercase'>
        Get in touch <button>+</button>
      </div>
      <div className='box-border h-0 w-[190px] border-[1px] border-[#FFFFFF2B]'></div>
      <div className='flex'>
        <Image 
          src="/snuLogo.svg"
          alt='SNU Logo'
          height={35}
          width={116}
        />
        <Image 
          src="/ssnLogo.svg"
          alt='SSN Logo'
          height={35}
          width={116}
        />
      </div>
      <div className='box-border h-0 w-[190px] border-[1px] border-[#FFFFFF2B]'></div>
      <div className='text-center text-[14px] text-[#FFFFFF2B]'>
        <p>©2023 SSN College of Engineering & <br></br>Shiv Nadar University, Chennai</p>
      </div>
      <div className='bg-[#82D9FFB0] font-semibold text-[#1D1D1B] w-full p-0 text-center items-center text-[14px] p-[10px]'>
        <div className=''>
          Website: 
        </div>
        <div>
          Built by 
          <span className='underline'><a href='https://gokulram.me/'> Gokul, </a></span>
          <span className='underline'><a href='https://www.linkedin.com/in/thenithinbalaji/'>Nithin Balaji,</a></span>
          <span className='underline'><a href='https://www.linkedin.com/in/vetrivel-m-458a3a1b7/'> Vetrivel, </a></span>
          <span className='underline'><a href='https://www.linkedin.com/in/vaishnavejp/'> Vaishnave JP, </a></span>
          <span className='underline'><a href='https://portfolio-madraceee.vercel.app/'> Nitheesh Raja </a></span>
        </div>
        <div>
          Designed by 
          <span className='underline'><a href='https://www.linkedin.com/in/suprajasridh/'> Supraja </a></span>
          <span className=''><a href=''> and </a></span>
          <span className='underline'><a href='https://www.linkedin.com/in/vshwjth/'> Vishwajith </a></span>
        </div>
      </div>
    </div>
  );
}

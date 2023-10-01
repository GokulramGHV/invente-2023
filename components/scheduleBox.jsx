'use client';

import { useState } from 'react';
import Image from 'next/image';
import TimeTableDeptDropDown from './TimeTableDeptDropDown';

export default function ScheduleBox() {
  const timeTable = [
    {
      name: 'CSE',
      image: '/timetable/CSE.jpg',
    },
    {
      name: 'IT',
      image: '/timetable/IT.jpg',
    },
    {
      name: 'ECE',
      image: '/timetable/ECE.jpg',
    },
    {
      name: 'MECH',
      image: '/timetable/MECH.jpg',
    },
    {
      name: 'CHEM',
      image: '/timetable/CHEM.jpg',
    },
    {
      name: 'EEE',
      image: '/timetable/EEE.jpg',
    },
    {
      name: 'CIVIL',
      image: '/timetable/CIVIL.jpg',
    },
    {
      name: 'BME',
      image: '/timetable/BME.jpg',
    },
    {
      name: 'SNUC',
      image: '/timetable/SNUC.jpg',
    },
  ];

  const [dept, setDept] = useState('CSE');
  const [deopDownOpen, setDropDownOpen] = useState(false);
  return (
    <div className="flex flex-col items-center mt-8 h-fit">
      <div
        className="flex flex-col items-center justify-center bg-[#181818] rounded-md w-full"
        style={{
          boxShadow: '0px 4px 7px 0px #FFFFFF12',
        }}
      >
        <div className="m-5 lg:hidden">
          <TimeTableDeptDropDown
            deptList={timeTable}
            dropDownOpen={deopDownOpen}
            setDropDownOpen={setDropDownOpen}
            dept={dept}
            setDept={setDept}
          />
        </div>
        <div className=" flex-row lg:gap-4 items-center justify-center p-5 hidden lg:flex">
          {timeTable.map((deptInfo, index) => (
            <div
              key={index}
              className={`px-6 py-1 hover:outline outline-white rounded-md outline-1 cursor-pointer font-bold text-lg xl:text-xl ${
                dept === deptInfo.name && 'border-2 border-blue-300'
              }`}
              onClick={() => setDept(deptInfo.name)}
            >
              {deptInfo.name}
            </div>
          ))}
        </div>
        <a href={`/timetable/${dept}.jpg`} target="_blank">
          <div className="relative w-full ">
            <Image
              src={`/timetable/${dept}.jpg`}
              alt={`${dept} Timetable`}
              width={1920}
              height={1400}
              quality={100}
            />
          </div>
        </a>
        <p className="text-center my-2 italic font-semibold text-gray-400 text-xs sm:text-sm mx-4">
          Click on the image to open on a new tab
        </p>
      </div>
    </div>
  );
}

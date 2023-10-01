'use client'

import { useState } from "react"
import Image from 'next/image';
import TimeTableDeptDropDown from "./TimeTableDeptDropDown";


export default function ScheduleBox() {
    const timeTable = [
        {
            name: 'BME',
            image: '/timetable/BME.jpg'
        },
        {
            name: 'CHEM',
            image: '/timetable/CHEM.jpg'
        },
        {
            name: 'CIVIL',
            image: '/timetable/CIVIL.jpg'
        },
        {
            name: 'CSE',
            image: '/timetable/CSE.jpg'
        },
        {
            name: 'ECE',
            image: '/timetable/ECE.jpg'
        },
        {
            name: 'EEE',
            image: '/timetable/EEE.jpg'
        },
        {
            name: 'IT',
            image: '/timetable/IT.jpg'
        },
        {
            name: 'MECH',
            image: '/timetable/MECH.jpg'
        },
        {
            name: 'SNUC',
            image: '/timetable/SNUC.jpg'
        }
    ]


    const [dept, setDept] = useState("BME")
    const [deopDownOpen, setDropDownOpen] = useState(false)
    return (
        <div className="w-11/12 lg:w-3/4 flex flex-col items-center py-5" style={{ background: 'url:' }}>
            <span className="font-bold text-5xl py-3 ">Schedule</span>
            <div className="flex flex-col items-center py-5 bg-[#181818] px-2 rounded-md w-full h-full">
                <TimeTableDeptDropDown deptList={timeTable} dropDownOpen={deopDownOpen} setDropDownOpen={setDropDownOpen} dept={dept} setDept={setDept} />
                <div className=" flex-row gap-2 items-center justify-center py-5 hidden lg:flex">
                    {timeTable.map((deptInfo, index) => (
                        <div key={index} className={`px-3 py-1 hover:outline outline-white rounded-md outline-1 cursor-pointer ${dept === deptInfo.name && "border-2 border-blue-300"}`} onClick={() => setDept(deptInfo.name)} >
                            {deptInfo.name}
                        </div>
                    ))}
                </div>
                <a href={`/timetable/${dept}.jpg`} target="_blank" className="w-full h-full">
                    <div className="relative w-full h-[70vh] sm:aspect-[4/3] " >
                        <Image src={`/timetable/${dept}.jpg`} alt={`${dept} Timetable`} fill={true} quality={100} className="absolute top-0 left-0" />
                    </div>
                </a>
                <p className="text-center">Click on the image to open on a new tab</p>
            </div>

        </div>
    )
}
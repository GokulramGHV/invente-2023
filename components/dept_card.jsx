'use client';

import { Dela_Gothic_One } from 'next/font/google';

const dela = Dela_Gothic_One({
    preload: true,
    subsets: ['latin'],
    weight: '400',
  });

export default function Card(props){

    return (
        <div className={`${dela.className} max-w-xs p6 rounded-xl relative bg-${props.dept} bg-cover h-44 bg-center flex justify-center w-full my-6`}>
            <div className='w-3/4 p-0 m-0 text-3xl flex justify-center text-center items-center'>
                {props.name}
            </div>
        </div>
    )
}
import Image from 'next/image'
import React from 'react'
import Mic from '@/asserts/mic.png';
import Graph from '@/asserts/graph.png';
import Case from '@/asserts/pseudo.png';

function OurServices() {
    return (
        <section className='mt-16'>
            <div className='flex justify-center text-center'>
                <div className='flex flex-col'>
                    <h1 className='text-[#F14836] uppercase text-[1.5rem] mb-2'>Our Services</h1>
                    <p className='md:text-[2rem] font-extralight md:w-[27rem] text-[1.9rem] leading-tight'> <span className='font-extrabold'>Bunch of Services </span>to Rock Your Business</p>
                </div>
            </div>

            <div className='mt-12 flex flex-col md:flex-row justify-center items-center gap-8'>
                <div className='flex items-center space-x-3 text-[#F14836] text-[0.9rem]'>
                    <Image src={Case} />
                    <h1 className='md:w-[7rem] w-[4rem] '>Business Consultancy</h1>
                </div>

                <div className='flex items-center space-x-3 text-[#F14836] text-[0.9rem]'>
                    <Image src={Mic} />
                    <h1 className='md:w-[6rem]  w-[4rem]'>Digital Marketing</h1>
                </div>

                <div className='flex items-center space-x-3 text-[#F14836] text-[0.9rem]'>
                    <Image src={Graph} className='text-[#F14836]' />
                    <h1 className='md:w-[5rem]  w-[4rem]'>Market Analysis</h1>
                </div>
            </div>
            <hr className='border-2 w-[90%] mx-auto mt-12'></hr>

        </section>
    )
}

export default OurServices
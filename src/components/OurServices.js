"use client"
import Image from 'next/image'
import React from 'react'
import Mic from '@/asserts/mic.png';
import Graph from '@/asserts/graph.png';
import Case from '@/asserts/pseudo.png';
import Image1 from '@/asserts/Image1.png';
import { AnimationTop } from '@/app/AnimationWrapper'

function OurServices() {
    return (
        <section className='mt-16'>
            <AnimationTop delay={0.2}>x

                <div className='flex justify-center text-center'>
                    <div className='flex flex-col'>
                        <h1 className='text-[#F14836] uppercase text-[1.5rem] mb-2'>Our Services</h1>
                        <p className='md:text-[2rem] font-extralight md:w-[27rem] text-[1.9rem] leading-tight'> <span className='font-extrabold'>Bunch of Services </span>to Rock Your Business</p>
                    </div>
                </div>
            </AnimationTop>

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

            <section className='mt-6'>
                <div className='flex flex-col md:flex-row md:justify-evenly 2xl:justify-center 2xl:space-x-7'>

                    <div>
                        <Image src={Image1} alt='pic' />
                    </div>

                    <div className='flex mx-2'>
                        <div className='flex flex-col space-y-4'>
                            <h1 className='font-extrabold md:text-[2.4rem]  md:w-[31rem] text-[1.6rem]'>Business Consultancy
                                <span className='font-extralight'> for Your Business Growth.</span>
                            </h1>
                            <p className='text-gray-500 md:w-[32rem] w-auto text-[0.9rem]' >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec est arcu. Maecenas
                                semper tortor.
                            </p>
                            <p className='text-gray-500 md:w-[32rem] w-auto text-[0.9rem] '>In elementum in risus sed commodo. Phasellus nisi ligula, luctus at tempor vitae, placerat
                                at ante. Cras sed consequat justo. Curabitur laoreet eu est vel convallis.</p>


                            <div className='flex  items-center space-x-3 text-[1.5rem] mx-2'>
                                <div className="w-32 h-32 border-2 border-red-500 pt-12 rounded-full items-center justify-center text-center border-spacing-44"> 95%</div>
                                <h1 className='w-[8rem]'>Consultancy Agency Skill.</h1>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </section>
    )
}

export default OurServices
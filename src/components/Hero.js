"use client"
import React from 'react'
import HeroImg from '@/asserts/HeroImg.png'
import Image from 'next/image'
import { AnimationLeft, AnimationTop } from '@/app/AnimationWrapper'

function Hero() {

    return (

        <section className='my-6 bg-[#FFFFFF] mx-2'>

            <div className='flex flex-col md:flex-row md:justify-end  items-center '>
                <div className='flex flex-col '>
                    <AnimationTop delay={0.1}>
                        <h1 className='2xl:text-[4.25rem] md:text-[3.75rem] text-[2.15rem] md:w-[33.25rem] 2xl:w-[38.25rem] md:mb-0 mb-4 leading-tight'><span className='font-extrabold'>Your</span> <span className='text-[#F14836] '>Consultancy</span> Partner for <span className='font-extrabold'>Growth.</span></h1>
                    </AnimationTop>
                    <AnimationTop delay={0.1}>
                        <p className='text-gray-500 md:w-[30rem]'>Phasellus vel elit efficitur, gravida libero sit amet, scelerisque tortor arcu, commodo sit amet nulla sed.</p>
                    </AnimationTop>
                    <AnimationTop delay={0.1}>
                        <div className='flex flex-col md:flex-row mt-12'>
                            <input className='md:w-[29rem] border-2 border-gray-300 px-2 py-4 rounded-full  md:mb-0 mb-4' placeholder='username@gmail.com ' />
                            <button className='rounded-full px-9 md:py-2 py-4 md:-ml-14 bg-[#F14836] text-white'>Sign Up</button>
                        </div>
                    </AnimationTop>
                </div>

                <AnimationLeft delay={0.1}>
                    <div className='flex ml-2 '>
                        <Image src={HeroImg} alt='pic' className='md:w-[44rem] md:h-[34rem] 2xl:w-[55rem] 2xl:h-[44rem]' />
                    </div>
                </AnimationLeft>

            </div>
        </section>
    )
}

export default Hero
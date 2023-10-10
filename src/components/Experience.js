"use client"
import React from 'react'
import { AnimationTop } from '@/app/AnimationWrapper'
import Image from 'next/image'
import ExpImg from '@/asserts/exp.png'
import Shape1 from '@/asserts/div.counter-shape1.png';
import Shape2 from '@/asserts/div.counter-shape2.png';
import Shape3 from '@/asserts/div.counter-shape3.png';

function Experience() {
  return (
    <section className='my-12'>
      <div className='flex flex-col justify-center items-center'>
        <AnimationTop delay={0.2}>
          <h1 className='text-[#F14836] md:text-[1.5rem]'>WELCOME</h1>
        </AnimationTop>
        <AnimationTop delay={0.2}>
          <p className='md:text-[1.5rem] 2xl:text-[2.5rem] md:w-[38rem] 2xl:w-[58rem] text-center '><span className='font-extrabold'>Our 10 years working experience to</span> take care of your business goal.</p>
        </AnimationTop>
      </div>
      <div className='flex justify-center items-center'>
        <AnimationTop delay={0.2}>
          <Image src={ExpImg} alt='pic' />
          <p className='md:w-[60rem] border-2 flex justify-center text-center text-gray-500 mt-6 md:mx-16 mx-2'>
            Duis et metus et massa tempus lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ultricies, orci
            molestie blandit interdum. ipsum ante pellentesque nisl, eget mollis turpis quam nec eros. ultricies, orci molestie blandit interdum.
          </p>
        </AnimationTop>
      </div>
      <div className='mt-16 flex flex-col md:flex-row justify-center items-center md:gap-[12rem] gap-12'>
        <AnimationTop delay={0.2}>
          <div className='flex items-center'>
            <Image src={Shape1} alt='pic' />
            <div className='flex flex-col leading-tight'>
              <h1 className='text-[2rem]'>350</h1>
              <p className='text-[1.5rem] text-gray-400'>Clients</p>
            </div>
          </div>
        </AnimationTop>
        <AnimationTop delay={0.2}>
          <div className='flex items-center'>
            <Image src={Shape2} alt='pic' />
            <div className='flex flex-col leading-tight'>
              <h1 className='text-[2rem]'>99%</h1>
              <p className='text-[1.5rem] text-gray-400'>Satisfaction</p>
            </div>
          </div>
        </AnimationTop>
        <AnimationTop delay={0.2}>
          <div className='flex items-center'>
            <Image src={Shape3} alt='pic' />
            <div className='flex flex-col leading-tight'>
              <h1 className='text-[2rem]'>870</h1>
              <p className='text-[1.5rem] text-gray-400'>Projects</p>
            </div>
          </div>
        </AnimationTop>
      </div>

    </section>
  )
}

export default Experience
"use client"
import React from 'react'
import { AnimationLeft, AnimationTop } from '@/app/AnimationWrapper'


function Pricing() {
    return (
        <section className='mt-12 mx-2'>
            <div className='flex flex-col justify-center items-center text-center'>
                <AnimationTop delay={0.3}>
                    <div className=''>
                        <h1 className='text-[#F14836] uppercase md:text-[1rem]'>Pricing Plans</h1>
                        <p className='md:text-[2rem] text-[1.5rem] w-[16rem] md:w-[30rem]'>Providing Best Pricing For Your Business.</p>
                    </div>
                </AnimationTop>

                <div className='flex flex-col md:flex-row'>

                    <div className='grid md:grid-cols-3 gap-3'>

                        <div className='md:w-[24rem] md:h-[38rem] w-[22rem] h-[34rem] border-2 rounded-xl'>
                            <AnimationLeft delay={0.3}>
                                <div className='flex flex-col justify-center items-center text-center'>
                                    <h1 className='text-[2rem] pt-10'>50$/m</h1>
                                    <div className='flex space-x-1 items-center'>
                                        <h1 className='text-white bg-blue-400 px-2 rounded-full py-1'>20% OFF</h1>
                                        <p>Basic</p>
                                    </div>
                                    <div className='flex flex-col mt-20 space-y-5 text-gray-400'>
                                        <p>Full Access</p>
                                        <p>Unlimited Bandwidth</p>
                                        <p>50 gb Space</p>
                                        <p>1 Month Support</p>
                                    </div>

                                    <div className='mt-20'>
                                        <button className='bg-gray-300 px-4 py-2 rounded-lg'>Sign Up Now !</button>
                                    </div>
                                </div>
                            </AnimationLeft>

                        </div>

                        <div className='md:w-[24rem] md:h-[38rem] w-[22rem] h-[34rem] border-2 rounded-xl shadow-2xl'>
                            <AnimationLeft delay={0.3}>

                                <div className='flex flex-col justify-center items-center text-center'>
                                    <h1 className='text-[2rem] pt-10'>69$/m</h1>
                                    <div className='flex space-x-1 items-center'>
                                        <h1 className='text-white bg-orange-600 px-2 rounded-full py-1'>special</h1>
                                        <p>Standard</p>
                                    </div>
                                    <div className='flex flex-col mt-20 space-y-5 text-gray-400'>
                                        <p>Full Access</p>
                                        <p>Unlimited Bandwidth</p>
                                        <p>50 gb Space</p>
                                        <p>1 Month Support</p>
                                    </div>

                                    <div className='mt-20'>
                                        <button className='bg-orange-600 text-white px-4 py-2 rounded-lg'>Sign Up Now !</button>
                                    </div>
                                </div>
                            </AnimationLeft>
                        </div>


                        <div className='md:w-[24rem] md:h-[38rem] w-[22rem] h-[34rem] border-2 rounded-xl'>
                            <AnimationLeft delay={0.3}>
                                <div className='flex flex-col justify-center items-center text-center'>
                                    <h1 className='text-[2rem] pt-10'>99$/m</h1>
                                    <div className='flex space-x-1 items-center'>
                                        <h1 className='text-white bg-[#63B85F] px-2 rounded-full py-1'>New</h1>
                                        <p>Premium</p>
                                    </div>
                                    <div className='flex flex-col mt-20 space-y-5 text-gray-400'>
                                        <p>Full Access</p>
                                        <p>Unlimited Bandwidth</p>
                                        <p>50 gb Space</p>
                                        <p>1 Month Support</p>
                                    </div>

                                    <div className='mt-20'>
                                        <button className='bg-gray-300 px-4 py-2 rounded-lg'>Sign Up Now !</button>
                                    </div>

                                </div>
                            </AnimationLeft>
                        </div>

                    </div>

                </div>

            </div>
        </section >
    )
}

export default Pricing
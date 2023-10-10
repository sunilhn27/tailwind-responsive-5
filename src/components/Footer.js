import Image from 'next/image'
import React from 'react'
import Logo from '@/asserts/logo.png'
import Link from 'next/link'

function Footer() {
    return (
        <footer className='mt-12 bg-gray-100 py-16'>

            <div className='flex justify-around items-center'>

                <div className='grid-cols-4 md:grid '>

                    <div className='flex flex-col md:w-[20rem] w-[22rem] text-gray-500 space-y-5 mb-3'>
                        <Image src={Logo} alt='pic' />
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                            Repellendus, repudiandae! Totam,
                            nemo sed? Provident.</p>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                            Repellendus</p>
                    </div>


                    <div className='mb-5'>
                        <h1 className='font-extrabold text-[1.5rem] mb-2'>Services</h1>
                        <div className='flex flex-col space-y-4 '>
                            <Link href={"/"} className='text-gray-500'>Business Consultancy</Link>
                            <Link href={"/"} className='text-gray-500'>Digital Marketing</Link>
                            <Link href={"/"} className='text-gray-500'>Market Analysis</Link>
                            <Link href={"/"} className='text-gray-500'> Web Development</Link>
                        </div>
                    </div>


                    <div className='mb-5'>
                        <h1 className='font-extrabold text-[1.5rem] mb-2'>About Us</h1>
                        <div className='flex flex-col space-y-4'>
                            <Link href={"/"} className='text-gray-500'>Overview </Link>
                            <Link href={"/"} className='text-gray-500'>Why us </Link>
                            <Link href={"/"} className='text-gray-500'>Awards & Recognitions </Link>
                            <Link href={"/"} className='text-gray-500'> Team </Link>
                        </div>
                    </div>


                    <div className='mb-5'>
                        <h1 className='font-extrabold text-[1.5rem] mb-2'>Contact Info</h1>
                        <div className='flex flex-col space-y-4'>
                            <p className='text-gray-500 md:w-[16rem]'>21 King Street, Melbourne
                                Victoria, 1202 Australia. </p>
                            <p className='text-gray-500'>support@uideck.com </p>
                            <p className='text-gray-500'>+99 99000555651 </p>
                        </div>
                    </div>


                </div>


            </div>
            <div className='flex justify-center items-center mt-6'>
                <h1>© 2022 Crafted by <span className='text-[#F14836]'>UIdeck</span> All Rights Reserved.</h1>
            </div>
        </footer>
    )
}

export default Footer



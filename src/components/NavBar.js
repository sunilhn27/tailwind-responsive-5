"use client"
import React, { useState } from 'react';
import Logo from '@/asserts/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from "react-icons/ai";
function NavBar() {

    const [showSubmenu, setShowSubmenu] = useState(false);
    const [mobileView, setMobileView] = useState(true);
    const toggleSubmenu = () => {
        setShowSubmenu(!showSubmenu);
    };

    const handleView = () => {
        setMobileView(!mobileView);
    };

    return (
        <section className='w-auto h-[6rem] '>
            <nav className='md:w-[73rem]  mx-auto flex justify-between items-center text-center  h-[6rem] px-3'>
                <Image src={Logo} className='w-[8.8rem] md:w-[8.8rem] md:h-[2rem]' />
                <div className='hidden md:flex gap-10 font-extrabold group-[5]:'>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>About</Link>
                    <Link href={"/"}>Services</Link>
                    <Link href={"/"}>Portfolio</Link>
                    <Link href={"/"}>Blogs</Link>
                    <Link href={"/"}>Contact</Link>
                </div>
                <div className='hidden md:flex'>
                    <button className={`bg-[#F14836] text-white px-7 py-4 rounded-full `}>Download</button>

                </div>
                <div className='md:hidden'>
                    {mobileView ? (
                        <AiOutlineClose onClick={handleView} className='w-[1.5rem] h-[1.5rem]' />
                    ) : (
                        <GiHamburgerMenu onClick={handleView} className='w-[1.5rem] h-[1.5rem]' />
                    )}
                </div>
            </nav>

        </section >
    )
}

export default NavBar



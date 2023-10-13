"use client"
import React, { useState, useEffect } from 'react';
import Logo from '@/asserts/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from "react-icons/ai";
function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [mobileView, setMobileView] = useState(true);
    const toggleSubmenu = () => {
        setShowSubmenu(!showSubmenu);
    };

    const handleView = () => {
        setMobileView(!mobileView);
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClass = scrolled ? 'bg-white shadow-md' : 'bg-transparent';
    // const navText = scrolled ? 'text-black' : 'text-red';


    return (
        <section className='w-auto h-[6rem] md:fixed top-0 left-0 right-0 z-10 '>
            <nav className={`md:w-[73rem]  mx-auto flex justify-between items-center text-center  h-[6rem] px-3 ${navbarClass}`} >
                <Image src={Logo} className='w-[8.8rem] md:w-[8.8rem] md:h-[2rem]' />
                <div className='hidden md:flex gap-10 font-extrabold'>
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



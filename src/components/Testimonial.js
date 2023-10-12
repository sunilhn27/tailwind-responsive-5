"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

export default function Testimonial() {
    return (
        <>

            <div className='flex justify-center items-center text-[2rem]'>
                <h1 className='mb-6 text-[#F14836]'>What Client Says, About Us</h1>
            </div>
            <Swiper effect={'cards'} grabCursor={true} className="mySwiper text-black rounded-3xl border-2 px-3 md:w-[60%] w-[80%] h-[8rem] md:h-[19rem] my-auto">
                <SwiperSlide className="swiper-slide md:text-[3rem]">
                    <div className='flex justify-center items-center text-center py-6 px-2'>
                        “Praesent scelerisque, odio eu fermentum malesuada, nisi arcu volutpat nisl, sit amet convallis nunc turp.”
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide md:text-[3rem]">
                    <div className='flex justify-center items-center text-center py-6 px-2'>
                        “Praesent scelerisque, odio eu fermentum malesuada, nisi arcu volutpat nisl, sit amet convallis nunc turp.”
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide md:text-[3rem]">
                    <div className='flex justify-center items-center text-center py-6 px-2'>
                        “Praesent scelerisque, odio eu fermentum malesuada, nisi arcu volutpat nisl, sit amet convallis nunc turp.”
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide md:text-[3rem]">
                    <div className='flex justify-center items-center text-center py-6 px-2'>
                        “Praesent scelerisque, odio eu fermentum malesuada, nisi arcu volutpat nisl, sit amet convallis nunc turp.”
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

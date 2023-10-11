import React from 'react'

function Contact() {
    return (
        <section className='my-12'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='uppercase text-[#F14836] md:text-[1rem]'>Our Contacts</h1>
                <p className='md:text-[2rem]'> <span className='font-extrabold'>Get In</span> <span className='font-extralight'>Touch</span></p>
            </div>


            <div className='flex flex-col md:flex-row justify-center mt-6 space-y-3'>

                <div className='flex items-center md:space-x-3 '>
                    <div className='w-16 h-16 bg-black rounded-full'></div>
                    <div >
                        <p className='w-[14rem]'>21 King Street, Melbourne
                            Victoria, 1202 Australia.</p>
                    </div>
                </div>


                <div className='flex items-center md:space-x-3 '>
                    <div className='w-16 h-16 bg-red-500 rounded-full'></div>
                    <div >
                        <p className='w-[14rem]'>hello@uideck.com
                            support@uideck.com</p>
                    </div>
                </div>


                <div className='flex items-center md:space-x-3 '>
                    <div className='w-16 h-16 bg-blue-500 rounded-full'></div>
                    <div >
                        <p className='w-[8rem]'>+99 000 1111 555
                            +88 999 5555 444</p>
                    </div>
                </div>

            </div>

            <div className='mt-12 '>
                <h1 className='md:text-[2rem] md:ml-60'>Leave a Message</h1>
                <div className='flex flex-col md:flex-row justify-center mt-12'>
                    <form className='mx-6 md:mx-0 grid  md:grid-cols-2 justify-around md:space-x-5'>
                        <div className='flex flex-col space-y-4'>
                            <label>Enter Your Name</label>
                            <input type='text' placeholder='Full Name' className='md:w-[35rem] w-[19rem] h-[3rem] md:h-[4rem] border-2 px-3' />
                        </div>

                        <div className='flex flex-col  space-y-4'>
                            <label>Enter Your Email</label>
                            <input type='text' placeholder='Email' className='md:w-[35rem] w-[19rem] h-[3rem] md:h-[4rem] border-2 px-3' />

                        </div>
                    </form>


                </div>


                <div className='flex flex-col justify-center space-y-4 mt-6  md:w-[72rem] w-[20rem]  mx-auto'>
                    <label className='flex justify-start'>Your Message</label>
                    <textarea className='border-2  md:h-[11rem] h-[12rem]'>
                    </textarea>
                </div>

                <button className='bg-[#F14836] text-white w-[8rem] h-[3.5rem] mt-6 m-8 md:ml-36 2xl:ml-96'>Send Now</button>

            </div>

        </section>
    )

}


export default Contact
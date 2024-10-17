"use client"
import React from 'react'

import image1 from "../../assets/Call-Center-career.jpg"
import Image from 'next/image';
const Page = () => {

   return (
      <div className='flex flex-col  p-20 bg-background'>
         <div className='flex flex-col w-full pb-10'>
            <h1 className='text-textColor'>About <span className='text-blue'>Elegant Serve</span></h1>
            <p className='h-1 bg-textColor  w-20 text-center -mt-2'></p>
         </div>
         <div className='flex flex-col md:flex-row w-full gap-16 flex-wrap md:flex-nowrap space-y-5 overflow-hidden'>
            <div className='flex flex-col gap-5 text-xl text-textColor text-justify w-1/2 items-center justify-center'>
               <p className='text-2xl'>Elegant Serve Technologies LLC is a systems integration company based in the UAE. We provides a range of Customized IT solutions and systems enabling our customers to achieve excellence and sustainable competitive edge.  </p>
               <p className='text-2xl'>
                  Elegant Serve Team has extensive experience and expertise in managing projects from design to implementation and customer support. Elegant Serve Technologies is an outcome driven organization, with a passion for results – in terms of values we assist our Clients attain In their quest for excellence.
               </p>
               <p className='text-2xl'>
                  We are also continually expanding the range of services and products listed in our portfolio to offer wider choices to our clients.VisionWe pride ourselves on the vision, skills, expertise and professionalism of our company. We aim to meet demanding customer needs!MissionTo consistently create value for our customers by providing solutions which enable them to achieve excellence and sustainable competitive edge
               </p>

            </div>
            <div
               className='flex flex-grow-1 justify-center items-center h-96 md:w-96 flex-grow overflow-hidden'>
               <Image className='rounded-lg h-full w-full object-cover overflow-hidden' src={image1} alt='elegantServe' />
            </div>
         </div>
      </div>
   )
}

export default Page;
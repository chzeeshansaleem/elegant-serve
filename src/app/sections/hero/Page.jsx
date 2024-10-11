'use client';
import React, { useState, useEffect } from 'react';

import Header from "../../component/headers/Page";
import Image1 from "../../assets/CCTV-banner.jpg";
import Image2 from "../../assets/image2.avif";
import Image3 from "../../assets/Call-Center-career.jpg";

import { TypeAnimation } from 'react-type-animation';

const Page = () => {
   const images = [Image1, Image2, Image3];

   // Array of images
   const [currentImage, setCurrentImage] = useState(0); // Track current image index


   useEffect(() => {
      const interval = setInterval(() => {

         setTimeout(() => {
            setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
         }, 500);

      }, 5000);

      return () => clearInterval(interval); // Cleanup interval on unmount
   }, [images.length]);

   return (
      <div className="min-h-screen h-[600px] relative overflow-hidden z-20">
         <div className="z-10 relative">
            <Header />
         </div>
         <div className="absolute h-full w-full top-0 -z-10 overflow-hidden">
            <div
               className={`h-full w-full absolute duration-1000 ease-in-out`}
               style={{
                  backgroundImage: `url(${images[currentImage]?.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
               }}
            ></div>
            <div className="h-full w-full bg-black/50 absolute top-0 flex flex-col justify-center items-start px-5 md:pl-28 ">
               <p className="text-3xl md:text-4xl lg:text-5xl font-light text-white z-20 mt-28 uppercase">
                  We aim to meet
                  <br />
                  demanding customer needs.
               </p>
               <div className='my-3'>
                  <TypeAnimation
                     sequence={[
                        'Delivering Customized IT Solutions for Lasting Success.',
                        2000,
                        'Specialists in Systems Integration and Innovation',
                        2000,
                        'Your Partner for Achieving Operational Excellence.',
                        2000,
                        'Sustainable Competitive Edge through Tailored Solutions.',
                        2000,
                        'Innovative IT Services Driving Business Transformation.',
                        2000,
                        'Enhancing Client Success with Scalable IT Solutions.',
                        2000,
                        'Solutions that Drive Results and Fuel Growth.',
                        2000,
                     ]}
                     wrapper="p"
                     className="text-sm md:text-4xl lg:text-2xl font-semibold tracking-widest rounded-sm text-white z-20 mt-4 bg-blue px-2 py-2"
                     repeat={Infinity}
                  />
               </div>
               <div className='flex  flex-col md:flex-row gap-3 md:gap-10 mt-10 z-30'>
                  <button className='bg-buttonColor hover:drop-shadow-blue text-white z-30 px-8 rounded-md hover:rounded-none duration-700 hover:scale-110 py-3 tracking-widest uppercase'>Learn More</button>
                  <button className='text-white rounded-md uppercase tracking-widest border px-8 py-3 border-white hover:bg-white hover:text-black hover:scale-110 duration-700 hover:rounded-none drop-shadow-white'>Contact Us</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Page;

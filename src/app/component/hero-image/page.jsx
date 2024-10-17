'use client';
import React from 'react';
import Header from "../headers/Page";
import { motion } from 'framer-motion'; // Import framer-motion

const Page = ({ src, title }) => {
   return (
      <>
         <div className='h-screen flex flex-col justify-center items-center w-full relative'
            style={{
               backgroundImage: `url(${src?.src})`,
               backgroundPosition: 'center',
               backgroundSize: 'cover',
            }}
         >
            <div className='absolute top-0 w-full z-10'>
               <Header />
            </div>
            <div className='absolute bg-black/70 h-full w-full flex flex-col justify-center items-center'>

               {/* Title with animation */}
               <motion.p
                  initial={{ opacity: 0, y: 50 }} // Start off-screen (y: 50)
                  animate={{ opacity: 1, y: 0 }} // Animate to the final position (y: 0)
                  transition={{ duration: 1, ease: 'easeOut' }} // Smooth transition
                  className='text-xl md:text-5xl text-white font-semibold tracking-widest'
               >
                  {title}
               </motion.p>

               <p className='border border-b mt-5 w-16 font text-center'></p>
            </div>
         </div>
      </>
   );
};

export default Page;

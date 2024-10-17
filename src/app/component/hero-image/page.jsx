'use client';
import React from 'react';
import Header from "../headers/Page";

// Styled-components and react-animations imports
import styled, { keyframes } from 'styled-components';
import { slideInUp } from 'react-animations';

// Define the slide-up animation
const slideUpAnimation = keyframes`${slideInUp}`;

// Create a styled component with the animation
const AnimatedTitle = styled.h1`
  animation: 0.5s ${slideUpAnimation};
`;

const page = ({ src, title }) => {
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
               {/* Apply the animation to the title */}
               <AnimatedTitle className='text-xl md:text-5xl font-semibold tracking-widest'>
                  {title}
               </AnimatedTitle>
               <p className='border border-b w-16 font text-center'></p>
            </div>
         </div>
      </>
   );
};

export default page;

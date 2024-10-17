'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';  // Next.js Image component
import { TbArrowBadgeRightFilled, TbArrowBadgeLeftFilled } from "react-icons/tb";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../globals.css';

import { testimonials } from "./constants";
import Heading from "../../component/main-heading/Page";

function Testimonial() {
   return (
      <div className="flex flex-col gap-20 container">
         <div>
            <Heading heading={"What People Say About Us!"} />
         </div>
         <div>
            <Swiper
               effect={'coverflow'}
               grabCursor={true}
               centeredSlides={true}
               loop={true}
               slidesPerView={'auto'}
               coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
               }}
               pagination={{ clickable: true }}
               navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                  clickable: true,
               }}
               autoplay={{
                  delay: 3000, // Time between auto-slides (in milliseconds)
                  disableOnInteraction: false, // Keep autoplay even after manual navigation
               }}
               modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
               className="swiper_container"
            >
               {
                  testimonials.map((testimonial, index) => (
                     <SwiperSlide key={index}>
                        <div className="flex flex-col justify-center items-center gap-5 p-5 h-full text-foreground font-semibold bg-background rounded-lg">
                           <div className='flex items-center gap-5'>
                              <Image
                                 width={50}
                                 height={50}
                                 src={testimonial.image}
                                 alt={testimonial.name}
                                 className="h-10 w-10 rounded-full object-cover"
                              />
                              <div className=''>
                                 <p className="text-blue-400 font-semibold mt-2 text-blue">{testimonial.name}</p>
                                 <p className="text-gray-700">{testimonial.position}</p>
                              </div>
                           </div>
                           <p className="text-2xl text-center">{testimonial.message}</p>
                        </div>
                     </SwiperSlide>
                  ))
               }

               <div className="slider-controler">
                  <div className="swiper-button-prev slider-arrow bg-background">
                     <TbArrowBadgeLeftFilled className='text-blue' />
                  </div>
                  <div className="swiper-button-next slider-arrow bg-background">
                     <TbArrowBadgeRightFilled className='text-blue' />
                  </div>
               </div>
            </Swiper>
         </div>
      </div>
   );
}

export default Testimonial;

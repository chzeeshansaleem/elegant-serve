import React from 'react'
import Image from 'next/image';
// App imports
import image from "@/app/assets/Call-Center-Agents-300x200.jpg";
import HeroImage from "@/app/component/hero-image/page";
import About from "@/app/sections/about/Page";
import Contact from "@/app/component/contact-form/page";

import { clients } from '@/app/constant/constant';

const page = () => {

   return (
      <div>
         <div>
            <HeroImage src={image} title={"About US"} />
         </div>
         <div>
            <About />
         </div>
         <div className='pt-20'>
            <p className='text-6xl font-bold uppercase text-center'>Certifications and partnership</p>
            <div className='flex flex-row justify-center flex-wrap py-20'>
               {
                  clients.map((client) => (
                     <div>
                        <Image src={client} height={200} width={200} />
                     </div>
                  ))
               }
            </div>
            <div>
               <Contact background={'bg-background'} />
            </div>
         </div>
      </div>
   )
}

export default page;
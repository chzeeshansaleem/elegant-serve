import React from 'react'

import HeroImage from "@/app/component/hero-image/page";
import Service from "@/app/sections/services/Page";
import Contact from "@/app/component/contact-form/page";
import image from "@/app/assets/tumb-1_03.png";
const page = () => {

   return (
      <div>
         <div>
            <HeroImage src={image} title={'Our Services'} />
         </div>
         <div>
            <Service />
         </div>
         <div>
            <Contact background={'bg-background'} />
         </div>
      </div>
   )
}

export default page
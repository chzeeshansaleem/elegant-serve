import React from 'react'

import HeroImage from "@/app/component/hero-image/Page";
import Projects from "@/app/sections/projects/Page";
import Contact from "@/app/component/contact-form/page";
import image from "@/app/assets/tumb-1_03.png";
const Page = () => {

   return (
      <div>
         <div>
            <HeroImage src={image} title='Projects' />
         </div>
         <div>
            <Projects />
         </div>
         <div>
            <Contact background={'bg-background'} />
         </div>
      </div>
   )
}

export default Page
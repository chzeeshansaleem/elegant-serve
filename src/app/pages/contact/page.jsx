import React from 'react'

// App sections imports
import HeroImage from "../../component/hero-image/page";
import ContactForm from "../../component/contact-form/page";
import Map from "../../component/map/map-config";
import image from "../../assets/Call-Center-career.jpg";
const page = () => {
   return (
      <>
         <div>
            <HeroImage src={image} title="Let's talk about your project." />
         </div>
         <div>
            <ContactForm />
         </div>
         <div>
            <Map />
         </div>
         <div>
         </div>
      </>
   )
}

export default page;
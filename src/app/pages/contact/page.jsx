'use client';

import dynamic from 'next/dynamic';
import image from "../../assets/Call-Center-career.jpg";

// Dynamically import the components to disable SSR
const HeroImage = dynamic(() => import('../../component/hero-image/Page'), { ssr: false });
const ContactForm = dynamic(() => import('../../component/contact-form/page'), { ssr: false });
const Map = dynamic(() => import('../../component/map/map-config'), { ssr: false });

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
      </>
   );
}

export default page;

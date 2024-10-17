import React from 'react';
import Marquee from 'react-fast-marquee'; // Import the Marquee component
import Image from 'next/image'; // For handling images in Next.js

import Heading from "../../component/main-heading/Page";
import { clients } from "@/app/constant/constant";

const Page = () => {

   return (
      <div className="py-28">
         <div className='flex flex-col w-full items-center'>
            <Heading heading="Our Partners" />
         </div>
         <div className="relative mt-20">
            <Marquee speed={50} gradient={false}>
               {clients?.map((client, index) => (
                  <div key={index} className="mx-6">
                     <Image src={client} alt={`Client ${index + 1}`} width={150} height={100} />
                  </div>
               ))}
            </Marquee>
         </div>
      </div>
   );
};

export default Page;

'use client';
import React, { useState } from "react";
import { services } from "./constant";
import Heading from "../../component/main-heading/Page";

// Updated variants to include fade-in with opacity
const leftSideVariants = {
   hidden: { opacity: 0, x: -550 },
   visible: { opacity: 1, x: 0 },
};

const rightSideVariants = {
   hidden: { opacity: 0, x: 550 },
   visible: { opacity: 1, x: 0 },
};

const Page = () => {
   const [expandedService, setExpandedService] = useState(null);

   const toggleService = (id) => {
      setExpandedService(expandedService === id ? null : id);
   };

   return (
      <div className="flex flex-col justify-center items-center w-full py-14 overflow-hidden">
         <Heading heading="Services" className="text-3xl" />
         <div className="flex flex-row justify-center flex-wrap gap-8 p-8 text-textColor w-full mt-10">
            {services.map((service, index) => (
               <div
                  key={service.id}
                  className="flex flex-row items-start px-5 py-5 gap-5 bg-background rounded-md border duration-1000 transition-all hover:scale-105 border-foreground/60 w-[450px]  hover:shadow-blue cursor-pointer group overflow-hidden"
                  initial="hidden"
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  // Apply fade-in from left or right with opacity
                  variants={service.side === "left" ? leftSideVariants : rightSideVariants}
               >
                  <div>
                     <p className="flex items-center justify-center font-extralight rounded-full h-[60px] w-[60px] bg-foreground/70 text-2xl group-hover:drop-shadow-white duration-1000 text-white">
                        {service.icon}
                     </p>
                  </div>

                  <div className="flex flex-col space-y-5 w-full">
                     <div className="flex gap-5 text-4xl text-blue">
                        <p className="text-sm md:text-xl font-bold uppercase text-textColor flex items-center">
                           {service.title}
                        </p>
                     </div>
                     <div className="relative">

                        <div
                           key="collapsed"
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: "auto", opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           transition={{ duration: 0.3 }}
                           className="overflow-hidden"
                        >
                           <p>{service.description.substring(0, 150)}...</p>
                        </div>
                        <button
                           onClick={() => toggleService(service.id)}
                           className="text-blue font-semibold text-lg hover:underline underline-offset-2 duration-800 mt-3"
                        >
                           {expandedService === service.id ? "Show Less" : "Read More"}
                        </button>
                     </div>
                  </div>
               </div>

            ))}
         </div>
      </div>
   );
};

export default Page;

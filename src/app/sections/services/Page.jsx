'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "./constant";
import Heading from "../../component/main-heading/Page";

const leftSideVariants = {
   hidden: { opacity: 0, x: -150 },
   visible: { opacity: 1, x: 0 },
};

const rightSideVariants = {
   hidden: { opacity: 0, x: 150 },
   visible: { opacity: 1, x: 0 },
};

const Page = () => {
   // Local state to track which service is expanded
   const [expandedService, setExpandedService] = useState(null);

   const toggleService = (id) => {
      setExpandedService(expandedService === id ? null : id); // Toggle the service expansion
   };

   return (
      <div className="flex flex-col justify-center items-center w-full bg-background py-14 overflow-hidden">
         <Heading heading="Services" className="text-3xl" />
         <div className="flex flex-row justify-center flex-wrap gap-8 p-8 text-white w-full mt-10">
            {services.map((service, index) => (
               <motion.div
                  key={service.id}
                  className="flex flex-row items-start px-5 py-3 gap-5 border duration-1000 hover:scale-110 border-white/20 w-[600px] rounded-sm  hover:shadow-white cursor-pointer group overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  variants={service.side === "left" ? leftSideVariants : rightSideVariants}
               >
                  <div>
                     <p className="flex items-center justify-center font-extralight rounded-full h-[60px] w-[60px] bg-foreground/70 text-2xl group-hover:drop-shadow-white duration-1000">
                        {service.icon}
                     </p>
                  </div>

                  <div className="flex flex-col space-y-5 w-full">
                     <div className="flex gap-5 text-4xl text-blue">
                        <p className="text-sm md:text-lg font-bold uppercase text-white flex items-center">
                           {service.title}
                        </p>
                     </div>
                     <div className="relative">
                        <AnimatePresence initial={false}>
                           {expandedService === service.id ? (
                              <motion.p
                                 key="expanded"
                                 initial={{ height: 0, opacity: 0 }}
                                 animate={{ height: "auto", opacity: 1 }}
                                 exit={{ height: 0, opacity: 0 }}
                                 transition={{ duration: 0.3 }}
                                 className="overflow-hidden"
                              >
                                 {service.description}
                              </motion.p>
                           ) : (
                              <motion.p
                                 key="collapsed"
                                 initial={{ height: 0, opacity: 0 }}
                                 animate={{ height: "auto", opacity: 1 }}
                                 exit={{ height: 0, opacity: 0 }}
                                 transition={{ duration: 0.3 }}
                                 className="overflow-hidden"
                              >
                                 {service.description.substring(0, 150)}...
                              </motion.p>
                           )}
                        </AnimatePresence>
                        <button
                           onClick={() => toggleService(service.id)}
                           className="text-blue font-semibold text-lg hover:underline underline-offset-2 duration-800 mt-3"
                        >
                           {expandedService === service.id ? "Show Less" : "Read More"}
                        </button>
                     </div>
                  </div>

               </motion.div>
            ))}
         </div>
      </div>
   );
};

export default Page;

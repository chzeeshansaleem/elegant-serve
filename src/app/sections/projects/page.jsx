
'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Heading from "@/app/component/main-heading/Page";
import Image from 'next/image';


// Sample data for projects
const projects = [
   { id: 1, title: 'TECOM', category: 'Project', image: 'https://plus.unsplash.com/premium_photo-1661290256778-3b821d52c514?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
   { id: 2, title: 'Hewlett Packard Enterprises', category: 'Project', image: 'https://images.unsplash.com/photo-1625722723669-389a6feb52f2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
   { id: 3, title: 'Marriott Management', category: 'Case Study', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
   { id: 4, title: 'Transmed', category: 'Case Study', image: 'https://plus.unsplash.com/premium_photo-1678453147484-b38ed9cbe11a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
   { id: 5, title: 'Dragos', category: 'Case Study', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
   { id: 6, title: 'Citco', category: 'Project', image: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const categories = ['All', 'Case Study', 'Project'];

const Projects = () => {
   const [selectedCategory, setSelectedCategory] = useState('All');

   // Filter projects based on the selected category
   const filteredProjects = selectedCategory === 'All'
      ? projects
      : projects.filter(project => project.category === selectedCategory);

   return (
      <div className="container mx-auto py-10">
         <div>
            <Heading heading={"Our Projects"} />
         </div>
         {/* Filter Buttons */}
         <div className="flex justify-center space-x-4 my-16">
            {categories.map(category => (
               <button
                  key={category}
                  className={`px-4 py-2 rounded-md ${selectedCategory === category ? 'bg-blue-500 text-blue font-medium' : 'text-white tracking-wide'
                     }`}
                  onClick={() => setSelectedCategory(category)}
               >
                  {category}
               </button>
            ))}
         </div>

         <div className="w-full max-w-5xl mx-auto columns-1 p-5 pb-10 gap-10 sm:columns-2 lg:columns-3 xl:columns-2 flex-wrap">
            <AnimatePresence>
               {filteredProjects.map(project => (
                  <motion.div
                     key={project.id}
                     className="relative group w-[300px] "
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.8 }}
                     transition={{ duration: 0.5 }}
                  >
                     <Image
                        width={300}
                        height={700}
                        src={project.image}
                        alt={project.title}
                        className="w-full object-cover mb-4 group-hover:scale-95 duration-1000 cursor-pointer"
                     />
                     <div className="absolute bottom-0 bg-background h-28  w-fit flex flex-col justify-center px-5">
                        <h2 className="font-semibold text-blue uppercase tracking-widest text-2xl">{project.title}</h2>
                        <p className="text-white text-lg tracking-wide">{project.category}</p>
                     </div>
                  </motion.div>
               ))}
            </AnimatePresence>
         </div>

      </div>
   );
};

export default Projects;

'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Squash as HamburgerSquash } from 'hamburger-react';
import ProgressBar from 'react-scroll-progress-bar';
import { usePathname } from 'next/navigation'

import Logo from '../../assets/logo.png';

const Page = () => {
   const [scroll, setScroll] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const [selectedOption, setSelectedOption] = useState('/');
   const pathname = usePathname();

   useEffect(() => {
      window.addEventListener('scroll', () => {
         setScroll(window.scrollY > 40);
      });
   }, []);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 760) {
            setIsOpen(false);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   // Handle window resize and close menu on larger screens
   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth >= 1024) {
            setIsOpen(false); // Close the menu when the screen is resized to lg or larger
         }
      };

      window.addEventListener('resize', handleResize);

      // Call the resize handler initially to check the current window size
      handleResize();

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   console.log(pathname, selectedOption, pathname == selectedOption)
   const menuOptions = [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/pages/service' },
      { name: 'Projects', path: '/pages/projects' },
      // { name: 'Partner', path: '/pages/partners' },
      { name: 'About Us', path: '/pages/about' },
      { name: 'Contact Us', path: '/pages/contact' },
   ];

   const borderStyle = "relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center";

   return (
      <>
         <ProgressBar height="6" bgcolor="#05799d" duration="1" />
         <div className={`${scroll ? 'fixed top-0 w-full animate-fadeInDown bg-foreground' : ''} flex justify-around px-10 h-28 items-center border-b-white/20 border-b-[0.1px]`}>
            <div>
               <Link href='/'>
                  <Image src={Logo} className='w-28 md:w-52 cursor-pointer' alt='ElegantServe' />
               </Link>
            </div>

            {/* Menu Bar for Desktop Screen */}
            <div className='hidden lg:flex flex-row gap-8 z-20'>
               {menuOptions.map((option, index) => (
                  <Link
                     key={index}
                     onClick={() => setSelectedOption(option.path)}
                     className={`text-xl text-white uppercase font-extralight tracking-widest hover:text-blue duration-300 ${pathname === selectedOption ? 'text-blue' : 'text-white'} ${borderStyle}`}
                     href={option.path}
                  >
                     {option.name}
                  </Link>
               ))}
            </div>

            {/* Menu Options for Mobile Screen */}
            <div className={`absolute top-20 bg-foreground left-2 right-2 px-6 gap-5 flex flex-col py-4 duration-700 ${isOpen ? 'translate-y-9 opacity-1 z-40' : '-translate-y-64 opacity-0'}`}>
               {menuOptions.map((option, index) => (
                  <Link
                     onClick={() => setSelectedOption(option.path)}
                     key={index}
                     className={`text-lg text-white uppercase font-extralight tracking-wide hover:text-blue duration-300 ${pathname === option.path ? 'text-[#05799d]' : 'text-textColor'} ${borderStyle}`}
                     href={option.path}
                  >
                     {option.name}
                  </Link>
               ))}
            </div>

            {/* Menu Icon will be shown on Medium screen */}
            <div className='flex lg:hidden'>
               <HamburgerSquash
                  toggled={isOpen}
                  toggle={setIsOpen}
                  size={30}
                  direction='left'
                  duration={0.3}
                  distance='sm'
                  rounded
                  label='Show menu'
                  color='#05799d'
                  easing='ease-in'
               />
            </div>
         </div>
      </>
   );
};

export default Page;

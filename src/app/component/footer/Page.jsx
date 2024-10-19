import React from 'react'
import Logo from "../../assets/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaPhoneAlt, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Montserrat } from "next/font/google";
const roboto = Montserrat({
   weight: "400",
   subsets: ["latin"],
});
import Image1 from "../../assets/footer.avif"
const Page = () => {

   const headingStyle = `text-blue text-3xl uppercase font-bold tracking-wide font-gowun`;
   const iconsStyle = 'text-blue text-3xl hover:scale-110 duration-700 hover:drop-shadow-blue  shadow-lg cursor-pointer'

   const footerContent = {
      "Services": [
         {
            name: "INFORMATION TECHNOLOGY SOLUTION",
            path: "/pages/service"
         },
         {
            name: "INFRASTRUCTURE SOLUTION",
            path: "/pages/service"
         }, {
            name: "ELV SOLUTION",
            path: "/pages/service"
         }, {
            name: "MAINTENANCE & SUPPORT SERVICES",
            path: "/pages/service"
         },
         {
            name: "HARDWARE TRADING",
            path: "/pages/service"
         }
      ],

      "Company": [
         {
            name: "Projects",
            path: "/pages/project"
         },
         {
            name: "About Us",
            path: "/pages/about"
         },
         {
            name: "Contact Us",
            path: "/pages/contact"
         }
      ],
   }

   const email = 'randomemail@example.com';
   const phoneNumber = '+1234567890';


   return (
      <div className={`${roboto.className} relative w-full bottom-0 flex-grow `}>
         <div style={{ backgroundImage: `url(${Image1})` }} className={`bg-foreground justify-around w-full top-0 p-5 md:px-20 overflow-auto flex-1`}>
            <div className="flex justify-start md:justify-around pl-10 md:pl-0  w-full flex-wrap space-y-5 border-b border-gray-200/20 py-20">
               <div>
                  <Image src={Logo} alt="elegant serve" />
                  <div>
                     <div className="flex flex-col text-white mt-5 gap-3">
                        <Link href={`mailto:${email}`} className="flex items-center text-white hover:text-blue duration-500">
                           <CiMail />
                           <span className="ml-2">{email}</span>
                        </Link>

                        <Link href={`tel:${phoneNumber}`} className="flex items-center text-white hover:text-blue duration-500">
                           <FaPhoneAlt />
                           <span className="ml-2">{phoneNumber}</span>
                        </Link>
                     </div>

                  </div>
               </div>
               {
                  Object.entries(footerContent).map(([key, value], index) => (
                     <div key={index}>
                        <h3 className={headingStyle}>{key}</h3>
                        <div className="flex flex-col text-white mt-5 gap-3">
                           {
                              value.map((val, index) => (
                                 <Link key={index} className="tracking-widest font-extralight hover:text-blue duration-500 hover:scale-110" href={val.path}>{val.name}</Link>
                              ))
                           }
                        </div>
                     </div>
                  ))
               }

            </div>
            <div className='flex flex-col md:flex-row gap-5 justify-between  px-20 py-10'>
               <div className='flex gap-7'>
                  <FaFacebook className={iconsStyle} />
                  <FaInstagram className={iconsStyle} />
                  <FaLinkedin className={iconsStyle} />
               </div>
               <div className='text-white gap-8 text-xl flex'>
                  <Link className='border-b-white hover:border-b' href={'/'}>Terms Of Use</Link>
                  <Link className='border-b-white hover:border-b' href={'/'}>Privacy & Policies</Link>
               </div>
            </div>
         </div>
      </div>

   )
}

export default Page;
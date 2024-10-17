'use client';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// Validation schema using Yup
const validationSchema = Yup.object({
   name: Yup.string().trim()
      .required('Name is required'),
   email: Yup.string().trim()
      .email('Invalid email address')
      .required('Email is required'),
   phoneNo: Yup.string().trim()
      .required('Phone number is required'),
   message: Yup.string().trim()
      .required('Message is required')
});

const Page = ({ background }) => {

   const initialValues = {
      name: '',
      email: '',
      phoneNo: '',
      message: ''
   };

   const onSubmitHandler = (values, { resetForm }) => {
      console.log('Form Data', values);
      resetForm();
   };

   return (
      <div className={`px-20 md:px-36 py-20 gap-10 flex flex-wrap justify-between w-full ${background}`}>
         {/* contact form */}
         <div className='w-full md:w-1/2'>
            <h1 className="text-4xl font-semibold w-full bg-gradient-to-r from-indigo-400 to-pink-700 bg-clip-text text-transparent">
               Get In Touch
            </h1>

            <Formik
               initialValues={initialValues}
               validationSchema={validationSchema}
               onSubmit={onSubmitHandler}
            >
               {({ touched, errors, isSubmitting }) => (
                  <Form className='flex flex-col w-full gap-5'>
                     <div>
                        <Field
                           className={`w-full h-14 p-3 bg-transparent border-b border-b-textColor/60 outline-none ${touched.name && errors.name ? 'border-red-500' : ''}`}
                           type="text"
                           name="name"
                           placeholder="Name"
                        />
                        <ErrorMessage component="div" name="name" className="text-red-500 text-md mt-1" />
                     </div>

                     <div>
                        <Field
                           className={`w-full h-14 p-3 bg-transparent border-b border-b-textColor/60 outline-none ${touched.email && errors.email ? 'border-red-500' : ''}`}
                           type="text"
                           name="email"
                           placeholder="Email"
                        />
                        <ErrorMessage component="div" name="email" className="text-red-500 text-md mt-1" />
                     </div>

                     <div>
                        <Field
                           className={`w-full h-14 p-3 bg-transparent border-b border-b-textColor/60 outline-none ${touched.phoneNo && errors.phoneNo ? 'border-red-500' : ''}`}
                           type="text"
                           name="phoneNo"
                           placeholder="Phone No"
                        />
                        <ErrorMessage component="div" name="phoneNo" className="text-red-500 text-md mt-1" />
                     </div>

                     <div>
                        <Field
                           as="textarea"
                           className={`w-full p-3 bg-transparent border border-textColor/60 outline-none mt-10 rounded-md ${touched.message && errors.message ? 'border-red-500' : ''}`}
                           name="message"
                           rows={5}
                           placeholder="Message"
                        />
                        <ErrorMessage component="div" name="message" className="text-red-500 text-md mt-1" />
                     </div>

                     <button type="submit" disabled={isSubmitting} className='w-fit bg-textColor text-white px-10 py-5 rounded-md'>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                     </button>
                  </Form>
               )}
            </Formik>
         </div>

         {/* contact info */}
         <div className='space-y-10'>
            <h1 className="text-4xl font-semibold w-full bg-gradient-to-r from-indigo-400 to-pink-700 bg-clip-text text-transparent">Contact Info</h1>
            <div>
               <p className='text-3xl font-semibold'>Let's Talk.</p>
               <p className='text-zinc-700 text-2xl mt-3'>Email@gmail.com</p>
               <p className='text-zinc-700 text-2xl mt-2'>+123456789</p>
            </div>

            <div>
               <p className='text-3xl font-semibold'>Visit Us.</p>
               <p className='text-zinc-700 text-2xl mt-3'>295 ABC street XYZ State, Country</p>
            </div>

            <div className='flex gap-5'>
               <FaFacebook className='cursor-pointer h-14 w-14 p-3' />
               <FaTwitter className='cursor-pointer h-14 w-14 p-3' />
               <FaLinkedinIn className='cursor-pointer h-14 w-14 p-3' />
            </div>
         </div>
      </div>
   );
}

export default Page;

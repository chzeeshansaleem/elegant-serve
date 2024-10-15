import React from 'react'
const Page = ({ heading }) => {
   return (
      <div className='flex flex-col w-full items-center'>
         <h1 className='text-3xl'>{heading}</h1>
         <p className='h-[0.5px] bg-blue w-10 -mt-4 text-center'></p>

      </div>
   )
}
export default Page;
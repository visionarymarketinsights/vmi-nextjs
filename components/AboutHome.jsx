'use client'
import React from 'react'
import { motion } from 'framer-motion'
export default function AboutHome() {
  return (
    <div className='relative py-12 overflow-clip'>
      <div className='absolute bottom-0 w-full h-full -z-10 bg-gradient'>
        {/* <img loading='lazy' src={'/assets/abstract.jpg'} alt="bgimg" className='hidden md:block' /> */}
      </div>
      <div className='mx-auto max-w-7xl sm:px-6'>
        {/* <div className="mb-10 text-3xl font-extrabold text-center ">About Us</div> */}
        <motion.div
          initial={{ opacity: 0, y: '25%' }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="items-center text-center md:text-left md:flex">

            <div className="md:pr-8 md:w-1/2">
              <div className='flex gap-4'>
                <img loading="lazy" className='object-cover object-top rounded-lg h-[440px] brightness-110 md:w-1/2' src={'/assets/others/vmiabout.jpg'} alt="about-img" srcSet="" />
                <div className='flex flex-col gap-4 md:w-1/2'>
                  <img loading="lazy" className='object-cover object-top rounded-lg h-[211px] brightness-110' src={'/assets/others/vmiabout.jpg'} alt="about-img" srcSet="" />
                  <img loading="lazy" className='object-cover object-top rounded-lg h-[211px] brightness-110' src={'/assets/others/vmiabout.jpg'} alt="about-img" srcSet="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-10 pb-0 md:p-0 md:w-1/2">
              {/* <img loading="lazy" className='object-cover object-top w-full rounded-lg h-72 brightness-110' src={'/assets/others/vmiabout.jpg'} alt="about-img" srcSet="" /> */}

              <div className="text-3xl font-extrabold text-slate-500">About Us</div>
              <div className="text-2xl italic md:w-3/4">We deliver the most advanced strategies for your business</div>
              <div className="text-lg md:w-4/5">With our insightful and precise consulting services, you can keep a close eye on the market's shifting trends. CMI has a solution for every business issue you face.</div>
              <div className='flex justify-between gap-4 mt-4'>
                <div className='flex w-full gap-8 px-4 py-4 rounded-md bg-slate-200'>
                  <div className='flex items-center w-2/5'>
                    <svg fill="#000000" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Productivity"> <path d="M12,22H4a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V23A1,1,0,0,0,12,22ZM11,46H5V24h6Z"></path> <path d="M26,16H18a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V17A1,1,0,0,0,26,16ZM25,46H19V18h6Z"></path> <path d="M41,31V27a1,1,0,0,0-1-1H32a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1h6.25V46H33V28h6v3Z"></path> <path d="M47,13h6V29.6h2V12a1,1,0,0,0-1-1H46a1,1,0,0,0-1,1V28.17h2Z"></path> <path d="M51,33A10,10,0,1,0,61,43,10,10,0,0,0,51,33Zm3.29,14.71-4-4A1,1,0,0,1,50,43V37h2v5.59l3.71,3.7Z"></path> </g> </g></svg>
                  </div>
                  <div className='flex flex-col justify-center w-3/5 font-bold '>
                    <div className='text-3xl'>
                      3016+
                    </div>
                    <div>
                      Satisfied Clients
                    </div>
                  </div>
                </div>
                <div className='w-full px-4 py-4 rounded-md bg-slate-200'>
                  With our comprehensive coverage, decision-makers can confidently decipher the future of the world's largest industries.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

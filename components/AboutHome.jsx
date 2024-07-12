'use client'
import React from 'react'
import { motion } from 'framer-motion'
export default function AboutHome() {
  return (
    <div className='relative py-12 overflow-clip bg-mono'>
      {/* <img loading="lazy" className='absolute top-0 object-cover w-full h-full brightness-50' src={'/assets/vmi/bgn1.webp'} alt="bg-banner-img" srcSet="" /> */}
            
      <div className='container mx-auto max-w-8xl sm:px-6'>
        <motion.div
          initial={{ opacity: 0, y: '25%' }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="items-center text-center md:text-left md:flex">

            <div className="px-8 md:w-1/3">
                <img loading="lazy" className='object-cover object-center rounded-lg w-full md:w-[550px] h-[440px] brightness-110' src={'/assets/vmi/ab1.webp'} alt="about-img" srcSet="" />
            </div>
            {/* <div className="flex flex-col gap-4 p-10 pb-0 md:p-0 md:w-1/2"> */}
            <div className="flex flex-col gap-4 p-10 pb-0 md:p-0 md:w-2/3 none md:block">

              {/* <div className="text-3xl font-extrabold text-slate-500">About Us</div> */}
              <h2 className="text-3xl font-bold text-white custom-underline-about">About Us</h2>
              {/* <div className="text-2xl italic md:w-3/4">We deliver the most advanced strategies for your business</div> */}
              <div className="text-white text-md">Visionary Market Insights is a leading global market research company dedicated to providing in-depth research insights and strategic solutions to businesses across the globe. </div>
              <div className="text-white text-md">We help companies across 150+ countries in 6 continents, we work alongside our clients as one team with a shared ambition and vision to analyze and anticipate markets, outperform the competition, and redefine industries. We complement our tailored, integrated expertise with a holistic approach to identify growth opportunities in hundreds of sectors using a powerful understanding of how value chains operate on a global level.</div>
              <div className='flex flex-col gap-4 mt-4 md:flex-row'>
                <div className='flex gap-8 px-4 py-4 rounded-md md:w-2/5 bg-slate-200'>
                  <div className='flex items-center w-2/5'>
                    <svg fill="#000000" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Productivity"> <path d="M12,22H4a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V23A1,1,0,0,0,12,22ZM11,46H5V24h6Z"></path> <path d="M26,16H18a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V17A1,1,0,0,0,26,16ZM25,46H19V18h6Z"></path> <path d="M41,31V27a1,1,0,0,0-1-1H32a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1h6.25V46H33V28h6v3Z"></path> <path d="M47,13h6V29.6h2V12a1,1,0,0,0-1-1H46a1,1,0,0,0-1,1V28.17h2Z"></path> <path d="M51,33A10,10,0,1,0,61,43,10,10,0,0,0,51,33Zm3.29,14.71-4-4A1,1,0,0,1,50,43V37h2v5.59l3.71,3.7Z"></path> </g> </g></svg>
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
                <div className='px-4 py-4 text-sm rounded-md md:w-2/5 bg-slate-200'>
                Through our client work and targeted consolidated impact of USD 100 Bn, we’re catering in depth market research and business consulting solutions for various industry verticals to maximize their revenues.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

'use client'
import React from 'react'
import { motion } from 'framer-motion'
export default function CategoryMain() {
  return (
    <div className='relative py-12 text-white overflow-clip'>
      <div className='absolute bottom-0 w-full h-full -z-10 bg-gradient'>
        {/* <img loading='lazy' src={'/assets/abstract.jpg'} alt="bgimg" className='hidden md:block' /> */}
      </div>
      <div className='max-w-6xl mx-auto sm:px-6'>
        <div className="mb-4 text-3xl font-extrabold text-center underline">Explore Your Industry</div>
        <div className="mb-10 text-xl text-center ">Integrate Curated Intelligence in Business Matrix with Our Trending Market Reports</div>
        <div className="text-center md:text-left md:flex">

          <div className="flex flex-col items-end gap-4 pb-4 md:pb-0 md:pr-8 md:w-1/3">
            <div className='relative w-4/5 p-3 text-center text-black bg-white rounded-sm cursor-pointer hover:text-blue-400'>
              Automation
              <div className='absolute w-4 h-4 -right-2 top-1/4  border-t-[15px] border-t-transparent border-l-[15px] border-l-white border-b-[15px] border-b-transparent'></div>
            </div>
            <div className='relative w-4/5 p-3 text-center text-black bg-white rounded-sm cursor-pointer hover:text-blue-400'>
              Agriculture
              <div className='absolute w-4 h-4 -right-2 top-1/4  border-t-[15px] border-t-transparent border-l-[15px] border-l-white border-b-[15px] border-b-transparent'></div>
            </div>
            <div className='relative w-4/5 p-3 text-center text-black bg-white rounded-sm cursor-pointer hover:text-blue-400'>
              Packaging
              <div className='absolute w-4 h-4 -right-2 top-1/4  border-t-[15px] border-t-transparent border-l-[15px] border-l-white border-b-[15px] border-b-transparent'></div>
            </div>
            <div className='relative w-4/5 p-3 text-center text-black bg-white rounded-sm cursor-pointer hover:text-blue-400'>
              Food and Beverages
              <div className='absolute w-4 h-4 -right-2 top-1/4  border-t-[15px] border-t-transparent border-l-[15px] border-l-white border-b-[15px] border-b-transparent'></div>
            </div>
            <div className='relative w-4/5 p-3 text-center text-black bg-white rounded-sm cursor-pointer hover:text-blue-400'>
              Pharmaceutical
              <div className='absolute w-4 h-4 -right-2 top-1/4  border-t-[15px] border-t-transparent border-l-[15px] border-l-white border-b-[15px] border-b-transparent'></div>
            </div>
            <div className='relative w-4/5 p-3 text-center text-black bg-white rounded-sm cursor-pointer hover:text-blue-400'>
              IT & Telecom
              <div className='absolute w-4 h-4 -right-2 top-1/4  border-t-[15px] border-t-transparent border-l-[15px] border-l-white border-b-[15px] border-b-transparent'></div>
            </div>
          </div>
          <div className="p-10 pb-0 text-black bg-white rounded-sm md:p-0 md:w-2/3">
            <div className="p-3 text-lg text-center">- Automation -</div>
            <div className='grid grid-cols-2 gap-1 md:gap-2'>
              <div className='p-4 mx-3 my-2 border cursor-pointer bg-slate-200 hover:bg-white border-slate-200'>
                <div className="font-semibold">Automotive Coil Spring Market</div>
                <div className="text-sm">Surge in demand for improved suspension systems in vehicles and rise</div>
              </div>
              <div className='p-4 mx-3 my-2 border cursor-pointer bg-slate-200 hover:bg-white border-slate-200'>
                <div className="font-semibold">Automotive Coil Spring Market</div>
                <div className="text-sm">Surge in demand for improved suspension systems in vehicles and rise</div>
              </div>
              <div className='p-4 mx-3 my-2 border cursor-pointer bg-slate-200 hover:bg-white border-slate-200'>
                <div className="font-semibold">Automotive Coil Spring Market</div>
                <div className="text-sm">Surge in demand for improved suspension systems in vehicles and rise</div>
              </div>
              <div className='p-4 mx-3 my-2 border cursor-pointer bg-slate-200 hover:bg-white border-slate-200'>
                <div className="font-semibold">Automotive Coil Spring Market</div>
                <div className="text-sm">Surge in demand for improved suspension systems in vehicles and rise</div>
              </div>
            </div>
            <div className='flex items-center justify-center text-center '>
              <div className='p-3 m-4 font-semibold rounded-md cursor-pointer md:w-1/2 hover:text-blue-600 bg-slate-200'>
                Browse All Automation Reports
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'
import React from 'react'
import { motion } from 'framer-motion'
export default function CategoryMain() {
  return (
    <div className='relative py-12 overflow-clip'>
      <div className='absolute bottom-0 w-full h-full -z-10'>
        {/* <img loading='lazy' src={'/assets/abstract.jpg'} alt="bgimg" className='hidden md:block' /> */}
      </div>
      <div className='max-w-6xl mx-auto sm:px-6'>
        <div className="mb-4 text-3xl font-extrabold text-center underline text-slate-600">Explore Your Industry</div>
        <div className="mb-10 text-xl font-semibold text-center ">Integrate Curated Intelligence in Business Matrix with Our Trending Market Reports</div>
        <div className="text-center md:text-left md:flex">

          <div className="flex flex-col items-end gap-4 pb-4 md:pb-0 md:pr-8 md:w-1/3">
            <div className='relative w-4/5 p-3 font-semibold text-center text-black text-orange-500 duration-150 bg-white border border-orange-500 rounded-sm cursor-pointer'>
              Automation
              {/* <div className='absolute w-4 h-4 -right-2 top-1/4  border-t-[15px] border-t-transparent border-l-[15px] border-l-white border-b-[15px] border-b-transparent'></div> */}
            </div>
            <div className='relative w-4/5 p-3 font-semibold text-center text-black duration-150 border rounded-sm cursor-pointer bg-gradient hover:bg-white hover:text-orange-500 hover:border-orange-500'>
              Agriculture
              {/* <div className='absolute w-4 h-4 -right-2 top-1/4  border-t-[15px] border-t-transparent border-l-[15px] border-l-white border-b-[15px] border-b-transparent'></div> */}
            </div>
            <div className='relative w-4/5 p-3 font-semibold text-center text-black duration-150 border rounded-sm cursor-pointer bg-gradient hover:bg-white hover:text-orange-500 hover:border-orange-500'>
              Packaging
              {/* <div className='absolute w-4 h-4 -right-2 top-1/4  border-t-[15px] border-t-transparent border-l-[15px] border-l-white border-b-[15px] border-b-transparent'></div> */}
            </div>
            <div className='relative w-4/5 p-3 font-semibold text-center text-black duration-150 border rounded-sm cursor-pointer bg-gradient hover:bg-white hover:text-orange-500 hover:border-orange-500'>
              Food and Beverages
              {/* <div className='absolute w-4 h-4 -right-2 top-1/4  border-t-[15px] border-t-transparent border-l-[15px] border-l-white border-b-[15px] border-b-transparent'></div> */}
            </div>
            <div className='relative w-4/5 p-3 font-semibold text-center text-black duration-150 border rounded-sm cursor-pointer bg-gradient hover:bg-white hover:text-orange-500 hover:border-orange-500'>
              Pharmaceutical
              {/* <div className='absolute w-4 h-4 -right-2 top-1/4  border-t-[15px] border-t-transparent border-l-[15px] border-l-white border-b-[15px] border-b-transparent'></div> */}
            </div>
            <div className='relative w-4/5 p-3 font-semibold text-center text-black duration-150 border rounded-sm cursor-pointer bg-gradient hover:bg-white hover:text-orange-500 hover:border-orange-500'>
              IT & Telecom
              {/* <div className='absolute w-4 h-4 -right-2 top-1/4  border-t-[15px] border-t-transparent border-l-[15px] border-l-white border-b-[15px] border-b-transparent'></div> */}
            </div>
            <div className='relative w-4/5 p-3 font-semibold text-center text-black duration-150 border rounded-sm cursor-pointer bg-gradient hover:bg-white hover:text-orange-500 hover:border-orange-500'>
              Pharmaceutical
              {/* <div className='absolute w-4 h-4 -right-2 top-1/4  border-t-[15px] border-t-transparent border-l-[15px] border-l-white border-b-[15px] border-b-transparent'></div> */}
            </div>
            <div className='relative w-4/5 p-3 font-semibold text-center text-black duration-150 border rounded-sm cursor-pointer bg-gradient hover:bg-white hover:text-orange-500 hover:border-orange-500'>
              IT & Telecom
              {/* <div className='absolute w-4 h-4 -right-2 top-1/4  border-t-[15px] border-t-transparent border-l-[15px] border-l-white border-b-[15px] border-b-transparent'></div> */}
            </div>
          </div>
          <div className="text-black border rounded-sm bg-gradient md:p-0 md:w-2/3">
            <div className="pt-4 text-lg text-xl font-semibold text-center">- Automation -</div>
            <div className='grid grid-cols-2 gap-1 p-4 md:gap-2'>
              <div className='p-4 mx-3 my-2 duration-150 bg-white border cursor-pointer border-slate-200'>
                <div className="font-semibold">Automotive Coil Spring Market</div>
                <div className="text-sm">Surge in demand for improved suspension systems in vehicles and rise</div>
              </div>
              <div className='p-4 mx-3 my-2 duration-150 bg-white border cursor-pointer border-slate-200'>
                <div className="font-semibold">Automotive Coil Spring Market</div>
                <div className="text-sm">Surge in demand for improved suspension systems in vehicles and rise</div>
              </div>
              <div className='p-4 mx-3 my-2 duration-150 bg-white border cursor-pointer border-slate-200'>
                <div className="font-semibold">Automotive Coil Spring Market</div>
                <div className="text-sm">Surge in demand for improved suspension systems in vehicles and rise</div>
              </div>
              <div className='p-4 mx-3 my-2 duration-150 bg-white border cursor-pointer border-slate-200'>
                <div className="font-semibold">Automotive Coil Spring Market</div>
                <div className="text-sm">Surge in demand for improved suspension systems in vehicles and rise</div>
              </div>
              <div className='p-4 mx-3 my-2 duration-150 bg-white border cursor-pointer border-slate-200'>
                <div className="font-semibold">Automotive Coil Spring Market</div>
                <div className="text-sm">Surge in demand for improved suspension systems in vehicles and rise</div>
              </div>
              <div className='p-4 mx-3 my-2 duration-150 bg-white border cursor-pointer border-slate-200'>
                <div className="font-semibold">Automotive Coil Spring Market</div>
                <div className="text-sm">Surge in demand for improved suspension systems in vehicles and rise</div>
              </div>
            </div>
            <div className='flex items-center justify-center text-center '>
              {/* <div className='p-3 m-4 font-semibold duration-150 rounded-md cursor-pointer md:w-1/2 hover:150-blue-600 bg-gradient'>
                Browse All Automation Reports
              </div> */}
              <button type="button" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all bg-orange-500 border border-transparent rounded-md hover:bg-orange-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                Browse All Automation Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

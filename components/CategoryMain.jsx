'use client'
import React from 'react'
import { motion } from 'framer-motion'
export default function CategoryMain() {

  const categoryList = [{ "icon": "/category_icons/defense.png", "id": 6, "name": "Aerospace & Defense", "abr": "AAD", "url": "aerospace-and-defense", "back_cover": "/category_covers/aero.jpg" }, { "icon": "/category_icons/agriculture.png", "id": 1, "name": "Agriculture", "abr": "AGR", "url": "agriculture", "back_cover": "/category_covers/agriculture1.jpg" }, { "icon": "/category_icons/automotive.png", "id": 2, "name": "Automotive & Transportation", "abr": "AAT", "url": "automotive-and-transportation", "back_cover": "/category_covers/automative.jpg" }, { "icon": "/category_icons/construction.png", "id": 3, "name": "Building & Construction", "abr": "BAC", "url": "building-and-construction", "back_cover": "/category_covers/building.jpg" }, { "icon": "/category_icons/experiment.png", "id": 4, "name": "Chemicals & Materials", "abr": "CAM", "url": "chemicals-and-materials", "back_cover": "/category_covers/chemicals.jpg" }, { "icon": "/category_icons/box.png", "id": 5, "name": "Consumer Goods", "abr": "CGS", "url": "consumer-goods", "back_cover": "/category_covers/consumer.jpg" }, { "icon": "/category_icons/electronics.png", "id": 7, "name": "Electronics & Semiconductors", "abr": "EAS", "url": "electronics-and-semiconductors", "back_cover": "/category_covers/electronics.jpg" }, { "icon": "/category_icons/tools.png", "id": 8, "name": "Energy & Natural Resources", "abr": "ENR", "url": "energy-and-natural-resources", "back_cover": "/category_covers/energy.jpg" }, { "icon": "/category_icons/carrot.png", "id": 9, "name": "Food & Beverages", "abr": "FAB", "url": "food-and-beverages", "back_cover": "/category_covers/food.jpg" }, { "icon": "/category_icons/cross.png", "id": 10, "name": "Healthcare & Life Sciences", "abr": "HLS", "url": "healthcare-and-life-sciences", "back_cover": "/category_covers/healthcare.jpg" }, { "icon": "/category_icons/automation.png", "id": 11, "name": "Heavy Engineering", "abr": "HEG", "url": "heavy-engineering", "back_cover": "/category_covers/heavy_engg.jpg" }, { "icon": "/category_icons/telecom.png", "id": 12, "name": "IT & Telecom", "abr": "IAT", "url": "it-and-telecom", "back_cover": "/category_covers/it.jpg" }, { "icon": "/category_icons/packaging.png", "id": 13, "name": "Packaging", "abr": "PAC", "url": "packaging", "back_cover": "/category_covers/packaging.jpg" }, { "icon": "/category_icons/patient.png", "id": 14, "name": "Pharmaceutical", "abr": "PHR", "url": "pharmaceutical", "back_cover": "/category_covers/pharma.jpg" }];
  return (
    <div className='relative py-12 overflow-clip'>
      <div className='absolute bottom-0 w-full h-full -z-10'>
        {/* <img loading='lazy' src={'/assets/abstract.jpg'} alt="bgimg" className='hidden md:block' /> */}
      </div>
      <div className='max-w-6xl mx-auto sm:px-6'>
        <div className="mb-4 text-3xl font-extrabold text-center text-cyan-950  custom-underline">Explore Your Industry</div>
        <div className="mb-10 text-xl font-semibold text-center ">Integrate Curated Intelligence in Business Matrix with Our Trending Market Reports</div>
        <div className="text-center md:text-left md:flex">

          <div className="flex flex-col items-end gap-4 pb-4 md:pb-0 md:pr-4 md:w-1/3">
            {
              categoryList.map((r, i) => {
                return (
                  i < 7 &&
                  <div className={`relative flex items-center w-4/5 gap-2 p-3 font-semibold text-center text-sm text-black duration-150 border rounded-sm cursor-pointer hover:shadow-lg hover:bg-white hover:text-cyan-800 hover:border-cyan-800 ${ (i==2 ?'bg-white text-cyan-800 border-cyan-800 shadow-lg':'bg-gradient')}`}>
                    <div className='p-1 rounded-md bg-slate-500'>
                      <img loading="lazy" src={'/assets/' + r.icon} alt='category-icon' className="flex justify-center w-6 duration-100 "></img>
                    </div>
                    {r.name}
                    {/* <div className='absolute w-4 h-4 -right-2 top-1/4  border-t-[15px] border-t-transparent border-l-[15px] border-l-white border-b-[15px] border-b-transparent'></div> */}
                  </div>
                )
              })
            }
          </div>
          <div className="text-black border rounded-sm shadow-lg bg-gradient md:p-0 md:w-2/3">
            <div className="pt-4 text-lg text-xl font-semibold text-center">- Automation -</div>
            <div className='grid grid-cols-2 gap-1 p-4 md:gap-2'>
              <div className='p-4 mx-3 my-2 duration-150 bg-white border cursor-pointer hover:text-cyan-800 border-slate-200'>
                <div className="font-semibold">Automotive Coil Spring Market</div>
                <div className="text-sm">Surge in demand for improved suspension systems in vehicles and rise</div>
              </div>
              <div className='p-4 mx-3 my-2 duration-150 bg-white border cursor-pointer hover:text-cyan-800 border-slate-200'>
                <div className="font-semibold">Automotive Coil Spring Market</div>
                <div className="text-sm">Surge in demand for improved suspension systems in vehicles and rise</div>
              </div>
              <div className='p-4 mx-3 my-2 duration-150 bg-white border cursor-pointer hover:text-cyan-800 border-slate-200'>
                <div className="font-semibold">Automotive Coil Spring Market</div>
                <div className="text-sm">Surge in demand for improved suspension systems in vehicles and rise</div>
              </div>
              <div className='p-4 mx-3 my-2 duration-150 bg-white border cursor-pointer hover:text-cyan-800 border-slate-200'>
                <div className="font-semibold">Automotive Coil Spring Market</div>
                <div className="text-sm">Surge in demand for improved suspension systems in vehicles and rise</div>
              </div>
              <div className='p-4 mx-3 my-2 duration-150 bg-white border cursor-pointer hover:text-cyan-800 border-slate-200'>
                <div className="font-semibold">Automotive Coil Spring Market</div>
                <div className="text-sm">Surge in demand for improved suspension systems in vehicles and rise</div>
              </div>
              <div className='p-4 mx-3 my-2 duration-150 bg-white border cursor-pointer hover:text-cyan-800 border-slate-200'>
                <div className="font-semibold">Automotive Coil Spring Market</div>
                <div className="text-sm">Surge in demand for improved suspension systems in vehicles and rise</div>
              </div>
            </div>
            <div className='flex items-center justify-center text-center '>
              {/* <div className='p-3 m-4 font-semibold duration-150 rounded-md cursor-pointer md:w-1/2 hover:150-blue-600 bg-gradient'>
                Browse All Automation Reports
              </div> */}
              <button type="button" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all border border-transparent rounded-md bg-cyan-800 hover:bg-cyan-950 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                Browse All Automation Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

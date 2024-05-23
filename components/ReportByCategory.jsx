'use client'
import React from 'react'
import Link from 'next/link';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { apiUrl, toCapitalCase } from '@/constants';
export default function ReportByCategory() {


  const [url, setUrl] = useState('agriculture');
  const [reportList, setReportList] = useState([]);

  useEffect(() => {
    if (url) {
      // axios.get(`${apiUrl}/reports/category/${categories.find(res => res.url === url).name}?page=${page}&per_page=8`).then(res => {
      axios.get(`${apiUrl}/reports/category/${url}?page=${1}&per_page=6`).then(res => {
        let reportList = res.data.data;
        if (reportList.length) {
          setReportList(reportList)
        } else {
          setReportList([])
          notifyError('No reports for this category')
        }
      })
    }
  }, [url]);

  const categoryList = [{ "icon": "/category_icons/defense.webp", "id": 6, "name": "Aerospace & Defense", "abr": "AAD", "url": "aerospace-and-defense", "back_cover": "/category_covers/aero.jpg" }, { "icon": "/category_icons/agriculture.webp", "id": 1, "name": "Agriculture", "abr": "AGR", "url": "agriculture", "back_cover": "/category_covers/agriculture1.jpg" }, { "icon": "/category_icons/automotive.webp", "id": 2, "name": "Automotive & Transportation", "abr": "AAT", "url": "automotive-and-transportation", "back_cover": "/category_covers/automative.jpg" }, { "icon": "/category_icons/construction.webp", "id": 3, "name": "Building & Construction", "abr": "BAC", "url": "building-and-construction", "back_cover": "/category_covers/building.jpg" }, { "icon": "/category_icons/experiment.webp", "id": 4, "name": "Chemicals & Materials", "abr": "CAM", "url": "chemicals-and-materials", "back_cover": "/category_covers/chemicals.jpg" }, { "icon": "/category_icons/box.webp", "id": 5, "name": "Consumer Goods", "abr": "CGS", "url": "consumer-goods", "back_cover": "/category_covers/consumer.jpg" }, { "icon": "/category_icons/electronics.webp", "id": 7, "name": "Electronics & Semiconductors", "abr": "EAS", "url": "electronics-and-semiconductors", "back_cover": "/category_covers/electronics.jpg" }, { "icon": "/category_icons/tools.webp", "id": 8, "name": "Energy & Natural Resources", "abr": "ENR", "url": "energy-and-natural-resources", "back_cover": "/category_covers/energy.jpg" }, { "icon": "/category_icons/carrot.webp", "id": 9, "name": "Food & Beverages", "abr": "FAB", "url": "food-and-beverages", "back_cover": "/category_covers/food.jpg" }, { "icon": "/category_icons/cross.webp", "id": 10, "name": "Healthcare & Life Sciences", "abr": "HLS", "url": "healthcare-and-life-sciences", "back_cover": "/category_covers/healthcare.jpg" }, { "icon": "/category_icons/automation.webp", "id": 11, "name": "Heavy Engineering", "abr": "HEG", "url": "heavy-engineering", "back_cover": "/category_covers/heavy_engg.jpg" }, { "icon": "/category_icons/telecom.webp", "id": 12, "name": "IT & Telecom", "abr": "IAT", "url": "it-and-telecom", "back_cover": "/category_covers/it.jpg" }, { "icon": "/category_icons/packaging.webp", "id": 13, "name": "Packaging", "abr": "PAC", "url": "packaging", "back_cover": "/category_covers/packaging.jpg" }, { "icon": "/category_icons/patient.webp", "id": 14, "name": "Pharmaceutical", "abr": "PHR", "url": "pharmaceutical", "back_cover": "/category_covers/pharma.jpg" }];
  return (
    <div className='relative py-12 overflow-clip'>
      <img loading="lazy" className='absolute top-0 object-cover w-full h-full -z-10 brightness-110' src={'/assets/vmi/bgn2.webp'} alt="bg-banner-img" srcSet="" />
      <div className='px-2 mx-auto text-white max-w-7xl sm:px-6'>
        <div className="mb-4 text-3xl font-extrabold text-center custom-underline">Explore Your Industry</div>
        <div className="mb-10 text-xl font-semibold text-center ">Integrate Curated Intelligence in Business Matrix with Our Trending Market Reports</div>
        <div className="text-center md:text-left md:flex">

          <div className="flex flex-col items-center gap-4 pb-4 md:items-end md:pb-0 md:pr-4 md:w-1/3">
            {
              categoryList.map((r, i) => {
                return (
                  i < 7 &&
                  <div key={i} onClick={() => setUrl(r.url)} className={`relative flex items-center w-full gap-2 p-3  font-semibold text-center text-sm text-black duration-150 border rounded-sm cursor-pointer hover:shadow-lg hover:bg-white hover:text-cyan-800 hover:border-cyan-800 ${(r.url == url ? 'bg-white text-cyan-800 border-cyan-800 shadow-lg' : 'bg-gradient')}`}>
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
            <div className="pt-4 text-lg text-xl font-semibold text-center">- {toCapitalCase(url)} -</div>
            <div className='grid grid-cols-1 gap-1 p-4 md:grid-cols-2 md:gap-2'>
              {reportList.map((r, i) => {
                return (
                  <div className='p-4 mx-3 my-2 duration-150 bg-white border cursor-pointer hover:text-cyan-800 border-slate-200'>
                    <div className="font-semibold text-cyan-800">{toCapitalCase(r.url)}</div>
                    <div className="text-sm overflow-clip">{r.summary.split(' ').filter((r, i) => i < 10).join(' ')}...</div>
                  </div>
                )
              })
              }
            </div>
            <div className='flex items-center justify-center text-center '>
              {/* <div className='p-3 m-4 font-semibold duration-150 rounded-md cursor-pointer md:w-1/2 hover:150-blue-600 bg-gradient'>
                Browse All Automation Reports
              </div> */}
              <Link href={`/reports/${url}`}>
                <button type="button" className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-8 text-sm font-semibold text-white transition-all border border-transparent rounded-md md:mb-0 bg-cyan-800 hover:bg-cyan-950 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                  Browse All Automation Reports
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

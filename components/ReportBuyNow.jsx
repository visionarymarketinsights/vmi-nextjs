'use client'

import React from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react';
import RequestSample from '@/components/RequestSample';
import axios from 'axios';
import { apiUrl, getPriceInNumber, discountedPrice } from '@/constants';
import Skeleton from './Skeleton';

export default function ReportBuyNow({ report }) {

  const [priceList, setPriceList] = useState([]);


  const getPriceList = () => {
    axios.get(`${apiUrl}/price/`).then(res => {
      setPriceList(res.data.data.reverse())
    })
  };

  useEffect(() => {
    getPriceList();
  }, [])

  const [discountFormOpen, setDiscountFormOpen] = useState(false);
  const handleDiscountFormOpen = () => setDiscountFormOpen(true);
  const handleDiscountFormClose = () => setDiscountFormOpen(false);

  // const getPriceInNumber = (price) => {
  //   return Number(price.split('$')[1].split(',')[0] + price.split('$')[1].split(',')[1]);
  // }
  // const discountedPrice = (price, discountPercent) => {
  //   price = price - (discountPercent * price / 100)
  //   return price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  // }

  const [license, setLicense] = useState('Single User License');
  return (

    <div className='flex flex-col gap-2 px-4 py-6 border rounded-md shadow-lg '>
      <div className='text-slate-500'>Choose License Type</div>
      <img loading="lazy" className='w-full h-full pb-2 brightness-110' src={'/assets/vmi/payment-modes.jpg'} alt="bg-banner-img" srcSet="" />
      {
        priceList.length == 0 && <Skeleton count={2} />
      }
      {
        priceList.map((res, i) => {
          return (
            <div key={i} onClick={() => setLicense(res.license)} className={`flex justify-between cursor-default duration-200 bg-white py-2 hover:text-cyan-800 ${license == res.license && 'text-cyan-800 scale-[110%]'}  rounded-sm`}>
              <div className='flex gap-2 text-sm'>
                <input type="checkbox" checked={license == res.license} name="price-radio" id="" />
                {res.license}</div>
              <div className='relative font-bold'>
                {'$' + discountedPrice(getPriceInNumber(res.price))}
                {/* <div className='absolute text-right text-sm font-normal w-full line-through text-red-500 top-[-16px]'>
                  {res.price}
                </div> */}
              </div>
            </div>
          )
        })
      }
      <div className='flex flex-col gap-2 mt-2'>
        {/* <button className='w-full py-2 font-semibold text-white bg-blue-500 rounded-md text-md'>Buy Now</button>
<button className='w-full py-2 font-semibold text-white bg-blue-500 rounded-md text-md'>Inquiry Before Buying</button> */}
        <button type="button" className="inline-flex items-center justify-center px-8 py-1 font-semibold text-white transition-all border border-transparent rounded-md bg-cyan-800 hover:bg-cyan-950 focus:outline-none focus:ring-1 focus:ring-offset-2">
          <Link href={`/buy-now/${report?.id}/${priceList.find(res => res.license === license)?.id}`}>
            Buy Now
          </Link>
        </button>
        <button type="button" className="inline-flex items-center justify-center px-8 py-1 font-semibold text-white transition-all border border-transparent rounded-md bg-cyan-800 hover:bg-cyan-950 focus:outline-none focus:ring-1 focus:ring-offset-2">
          <Link href={`/buy-now/${report?.id}/${priceList.find(res => res.license === license)?.id}`}>
            Enquire Now
          </Link>
        </button>
        {/* <button type="button" className="inline-flex items-center justify-center px-8 py-2 font-semibold text-white transition-all border border-transparent rounded-md bg-cyan-800 hover:bg-cyan-950 focus:outline-none focus:ring-1 focus:ring-offset-2">
          <Link href={`/buy-now/${report?.id}/${priceList.find(res => res.license === license)?.id}`}>
            Ask For Discount
          </Link>
        </button> */}
        {/* <button type="button" onClick={handleDiscountFormOpen} className="inline-flex items-center justify-center px-8 py-2 font-semibold text-white transition-all border border-transparent rounded-md bg-cyan-800 hover:bg-cyan-950 focus:outline-none focus:ring-1 focus:ring-offset-2">
          Request Discount
        </button> */}
      </div>
      <Modal
        open={discountFormOpen}
        onClose={handleDiscountFormClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          {/* <div className='flex items-center justify-center'>
            <div className=' m-2 py-6 px-10 w-[700px] rounded-md bg-white'>
              <div className="pb-2 mb-2 text-xl font-semibold text-center">Request Discount</div>
              <RequestSample reportTitle={report?.title.split('Market')[0] + 'Market'} enquiryType='Request Discount' closeModal={handleDiscountFormClose} />
            </div>
          </div> */}
          <div className='flex items-center justify-center'>
            <div className=' m-2 p-4 md:p-6 w-[350px] md:w-[700px] rounded-md bg-white'>
              <div className="flex justify-between pb-2 mb-2 text-xl font-semibold text-center">
                <div>Request Discount</div>
                <svg height={24} width={24} onClick={handleDiscountFormClose} className="cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#1C274C" /> </g></svg>
              </div>
              <div className="h-[82vh] overflow-auto text-sm md:text-md">
                <RequestSample reportTitle={report?.title.split('Market')[0] + 'Market'} enquiryType='Request Discount' closeModal={handleDiscountFormClose} />
              </div>
            </div>
          </div>
        </Box>
      </Modal>

    </div>
  )
}

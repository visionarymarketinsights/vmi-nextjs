'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import RequestSample from '@/components/RequestSample';
import CustomModal from '@/components/CustomModal';

export default function ReportBuyNow({ report }) {

  // const [priceList, setPriceList] = useState([]);


  // const getPriceList = () => {
  //   axios.get(`${apiUrl}/price/`).then(res => {
  //     setPriceList(res.data.data.reverse())
  //   })
  // };

  // useEffect(() => {
  //   getPriceList();
  // }, [])

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

    <div className='flex flex-col gap-2 p-4 border rounded-md shadow-lg '>
      <div className='text-slate-500'>Choose License Type</div>
      <img loading="lazy" className='w-full h-full pb-2 brightness-110' src={'/assets/vmi/payment-modes.webp'} alt="bg-banner-img" srcSet="" />
      <div onClick={() => setLicense('Single User License')} className={`flex justify-between cursor-default duration-200 bg-white py-2 hover:text-cyan-800 ${license == 'Single User License' && 'text-cyan-800 scale-[110%]'}  rounded-sm`}>
        <div className='flex gap-2 text-sm'>
          <input type="checkbox" checked={license == 'Single User License'} name="price-radio" id="" />
          Single User License</div>
        <div className='relative font-bold'>
          {report.single_user_price ? '$' + report.single_user_price : '$3700'}
        </div>
      </div>
      <div onClick={() => setLicense('Multi User License')} className={`flex justify-between cursor-default duration-200 bg-white py-2 hover:text-cyan-800 ${license == 'Multi User License' && 'text-cyan-800 scale-[110%]'}  rounded-sm`}>
        <div className='flex gap-2 text-sm'>
          <input type="checkbox" checked={license == 'Multi User License'} name="price-radio" id="" />
          Multi User License</div>
        <div className='relative font-bold'>
          {report.multi_user_price ? '$' + report.multi_user_price : '$5700'}
        </div>
      </div>
      <div onClick={() => setLicense('Corporate License')} className={`flex justify-between cursor-default duration-200 bg-white py-2 hover:text-cyan-800 ${license == 'Corporate License' && 'text-cyan-800 scale-[110%]'}  rounded-sm`}>
        <div className='flex gap-2 text-sm'>
          <input type="checkbox" checked={license == 'Corporate License'} name="price-radio" id="" />
          Corporate License</div>
        <div className='relative font-bold'>
          {report.corporate_price ? '$' + report.corporate_price : '$7700'}
        </div>
      </div>
      <div onClick={() => setLicense('Excel Spreadsheet License')} className={`flex justify-between cursor-default duration-200 bg-white py-2 hover:text-cyan-800 ${license == 'Excel Spreadsheet License' && 'text-cyan-800 scale-[110%]'}  rounded-sm`}>
        <div className='flex gap-2 text-sm'>
          <input type="checkbox" checked={license == 'Excel Spreadsheet License'} name="price-radio" id="" />
          Excel Spreadsheet License</div>
        <div className='relative font-bold'>
          {report.excel_spreadsheet_price ? '$' + report.excel_spreadsheet_price : '$1800'}
        </div>
      </div>
      <div className='flex flex-col gap-2 mt-2'>
        {/* <button className='w-full py-2 font-semibold text-white bg-blue-500 rounded-md text-md'>Buy Now</button>
<button className='w-full py-2 font-semibold text-white bg-blue-500 rounded-md text-md'>Inquiry Before Buying</button> */}
        <Link className="inline-flex items-center justify-center px-8 py-1 font-semibold text-white transition-all border border-transparent rounded-md bg-cyan-800 hover:bg-cyan-950 focus:outline-none focus:ring-1 focus:ring-offset-2" href={`/buy-now/${report?.id}/${license.toLowerCase().split(' ').join('-')}`}>
          Buy Now
        </Link>

        {/* <button type="button" className="inline-flex items-center justify-center px-8 py-1 font-semibold text-white transition-all border border-transparent rounded-md bg-cyan-800 hover:bg-cyan-950 focus:outline-none focus:ring-1 focus:ring-offset-2">
          Enquire Now
        </button> */}
        {/* <button type="button" className="inline-flex items-center justify-center px-8 py-2 font-semibold text-white transition-all border border-transparent rounded-md bg-cyan-800 hover:bg-cyan-950 focus:outline-none focus:ring-1 focus:ring-offset-2">
          <Link href={`/buy-now/${report?.id}/${priceList.find(res => res.license === license)?.id}`}>
            Ask For Discount
          </Link>
        </button> */}
        <button type="button" onClick={handleDiscountFormOpen} className="inline-flex items-center justify-center px-8 py-2 font-semibold text-white transition-all border border-transparent rounded-md bg-cyan-800 hover:bg-cyan-950 focus:outline-none focus:ring-1 focus:ring-offset-2">
          Enquire Now
        </button>
      </div>
      <CustomModal open={discountFormOpen} handleClose={handleDiscountFormClose} isModalCustomSize={true} component={<RequestSample reportTitle={report?.title.split('Market')[0] + 'Market'} enquiryType='Enquire Now' closeModal={handleDiscountFormClose} />} title='Enquire Now'/>
    </div>
  )
}

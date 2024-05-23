'use client'
import React, { useEffect, useState } from 'react'
import { apiUrl, discountedPrice, getPriceInNumber, toCapitalCase } from '@/constants';
import BuyNowForm from '@/components/BuyNowForm'
import axios from 'axios';
import BuyNowInfo from '@/components/BuyNowInfo'

export default function BuyNow({ params }) {
    const [report, setReport] = useState({});
    const [license, setLicense] = useState('');

    useEffect(() => {
        console.log(params?.id)
        setLicense(params?.license)
        axios.get(`${apiUrl}/reports/${params?.id}`).then(res => {
            res.data.data.price = getPriceByLicense(params?.license, res.data.data); 
            setReport(res.data.data);
        })
    }, [])

    const getPriceByLicense = (license, report) => {
        console.log(license, report)
        if(license=='single-user-license'){
            return report.single_user_price?'$' + report.single_user_price:'$3700'
        }
        if(license=='multi-user-license'){
            return report.multi_user_price?'$' + report.multi_user_price:'$5700'
        }
        if(license=='corporate-license'){
            return report.corporate_price?'$' + report.corporate_price:'$7700'
        }
        if(license=='excel-spreadsheet-license'){
            return report.excel_spreadsheet_price?'$' + report.excel_spreadsheet_price:'$1800'
        }
        return '2000'
    };


    return (
        <div className="p-4 mx-auto max-w-7xl sm:px-6">
            <h1 className='fixed text-transparent'>Buy Now</h1>
            <div className="py-2 text-center md:pt-2 md:text-left">
                <div className="pb-12 mx-auto max-w-8xl md:pb-10">
                    <div className='flex flex-col gap-4 md:flex-row'>
                        <div className="border rounded-md shadow-md md:w-2/5">
                            <div className='relative p-4'>
                                <div className="mb-2 text-xl font-semibold">Order Summary</div>
                                <div className='flex flex-col justify-between py-2'>
                                    <div>
                                        <div className='flex flex-col items-center gap-4 md:items-start md:flex-row'>
                                            {/* <div className='flex items-center justify-center object-cover w-16 h-20 font-bold text-white rounded-md bg-slate-500'>VMI</div> */}
                                            <img loading="lazy" src="/assets/vmi/mr1.webp" className='object-cover w-16 h-full rounded-md bg-slate-500' alt="" />
                                            {/* <div className='object-fill font-semibold text-white rounded-md overflow-clip bg-slate-500'>
                                            </div> */}
                                            <div>
                                                <div className='font-semibold'>
                                                    {/* {report.title.split('2030')[0] + '2030'} */}
                                                    {report.url?.split('-').map(res => res[0].toUpperCase() + res.slice(1)).join(' ')}
                                                </div>
                                                <div className='flex justify-center pt-2 text-sm md:justify-normal'>
                                                    <div className={`pr-4 ${report.category && 'border-r-2'} border-slate-300`}>
                                                        <div>Report ID</div>
                                                        {/* <div>CNG{getAbrByCategory(report.category)}{report.id}</div> */}
                                                        <div>CNG{report.category_url}{report.id}</div>
                                                    </div>
                                                    {
                                                        report.category_name &&
                                                        <div className='pl-4'>
                                                            <div>Category</div>
                                                            <div>{report.category_name}</div>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className='py-4 text-xs'>Format Type: PDF / WORD / EXCEL / PPT</div>
                                        <div className='flex flex-col pt-4 pb-20'>
                                            <div className='px-4 py-3 border-b-2'>
                                                Selected License
                                            </div>
                                            <div className='flex justify-between px-4 py-4 border-b-2'>
                                                <div>
                                                    {toCapitalCase(license)}
                                                </div>
                                                {
                                                    
                                                    <div className='font-bold'>
                                                        {/* {license.price} */}
                                                        <div className='relative font-bold'>
                                                            {report.price}
                                                            {/* <div className='absolute text-right text-sm font-normal w-full line-through text-red-500 top-[-16px]'>
                                                                {report.price}
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                            <div className='flex justify-between px-4 py-3'>
                                                <div>
                                                    Total <span className='text-xs'>(Inclusive of all taxes)</span>
                                                </div>
                                                {
                                                    <div className='font-bold text-cyan-800'>
                                                        {report.price}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='relative flex justify-between gap-3 p-6 border rounded-sm '>
                                            <div className='absolute top-[-8px] text-xs right-0 w-full flex justify-center'>
                                                <div className='px-4 bg-white'>
                                                    We Accept all major credit cards
                                                </div>
                                            </div>
                                            <div>
                                                <img loading="lazy" src={"/assets/payment-methods.webp"} alt="payments" />
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-center p-4 text-sm'>
                                            <BuyNowInfo />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border rounded-md shadow-md md:w-3/5">
                            <div className='relative p-4'>
                                <div className='flex flex-col gap-2 '>
                                    <BuyNowForm license={license} reportTitle={report.title?.split('Market')[0] + 'Market'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

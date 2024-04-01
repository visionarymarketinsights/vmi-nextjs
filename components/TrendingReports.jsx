'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { apiUrl, toCapitalCase } from '@/constants';
import { notifyError, notifySuccess } from '@/utils/CustomToastContainer';
import CustomToastContainer from '@/utils/CustomToastContainer';
import moment from 'moment';
import { motion } from "framer-motion"

export default function TrendingReports() {

    const [pressReleaseList, setPressReleaseList] = useState([]);

    useEffect(() => {
        axios.get(`${apiUrl}/reports/latest?page=1&per_page=6`).then(res => {
            let reportList = res.data.data;
            if (reportList.length) {
                setPressReleaseList(reportList)
            } else {
                setPressReleaseList([])
                notifyError('No latest reports')
            }
        })
    }, []);

    return (
        <div className="relative flex items-center justify-center py-12 mx-auto bg-bottom bg-cover overflow-clip ">
            {/* <img loading="lazy" className='absolute top-0 object-cover w-full h-full' src={'/assets/vmi/bg2.jpg'} alt="bg-banner-img" srcSet="" /> */}
            <CustomToastContainer />
            <div className="max-w-6xl px-4 mx-auto sm:px-6">
                <div className="mx-auto text-center ">
                    <motion.div
                        initial={{ opacity: 0, y: '25%' }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                    <h2 className="mb-6 text-3xl font-bold text-cyan-950 custom-underline">Trending Reports</h2>
                        <div className='flex flex-col flex-wrap justify-between md:gap-0 md:flex-row'>
                            {pressReleaseList.map((res, i) => {
                                return (
                                    <div key={i} className="p-2 md:w-1/2">
                                        {/* <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2 }}> */}
                                        <div className="text-left bg-white border rounded-md md:flex ">
                                            <div className="relative flex flex-col w-full p-4 text-sm">
                                                <div className='text-xs font-semibold text-right'>
                                                    {moment(res.created_date).format('Do MMM YYYY')}
                                                </div>
                                                <div className='py-2 text-lg font-semibold text-cyan-800'>
                                                    {toCapitalCase(res.url)}
                                                </div>
                                                <div className='h-12 mb-8 text-xs md:text-justify'>
                                                    {res.summary.split('').filter((r, i) => i < 150).join('').split(' ').slice(0, -1).join(' ')}...
                                                </div>
                                                <div className='absolute bottom-[-10px] right-[35%] md:right-[20px] flex justify-center md:justify-end'>
                                                    <Link href={`/report/${res.url}`}>
                                                        <button type="button" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all border border-transparent rounded-md bg-cyan-800 hover:bg-cyan-950 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                                                            Read Me
                                                        </button>
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>
                                        {/* </motion.div> */}
                                    </div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

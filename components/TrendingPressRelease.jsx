'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import axios from 'axios';
import { apiUrl, toCapitalCase } from '@/constants';
import { notifyError, notifySuccess } from '@/utils/CustomToastContainer';
import CustomToastContainer from '@/utils/CustomToastContainer';
import { motion } from "framer-motion"
export default function TrendingPressRelease() {


    const [my_swiper, set_my_swiper] = useState({});
    const [reportList, setReportList] = useState([]);


    useEffect(() => {
        axios.get(`${apiUrl}/press_release/latest?page=1&per_page=6`).then(res => {
            if (res.data.data.length) {
                setReportList(res.data.data)
            } else {
                setReportList([])
                notifyError('No latest reports')
            }
        })
    }, []);

    return (
        <div className='relative overflow-clip'>
            <CustomToastContainer />
            <div className="z-10 py-12 mx-auto max-w-[1600px] md:pt-10 sm:px-6">
                {/* <div className='mb-8 text-3xl font-extrabold text-center'>Trending Press Releases</div> */}
                <h2 className="mb-6 text-3xl font-extrabold text-center text-cyan-950 custom-underline">Trending Press Releases</h2>
                <motion.div initial={{ opacity: 0, y: '25%' }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
                    <div className="flex items-center justify-between mt-6">
                        <div className="p" onClick={() => { my_swiper.slidePrev() }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-left-filled" width={44} height={44} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 2a10 10 0 0 1 .324 19.995l-.324 .005l-.324 -.005a10 10 0 0 1 .324 -19.995zm.707 5.293a1 1 0 0 0 -1.414 0l-4 4a1.048 1.048 0 0 0 -.083 .094l-.064 .092l-.052 .098l-.044 .11l-.03 .112l-.017 .126l-.003 .075l.004 .09l.007 .058l.025 .118l.035 .105l.054 .113l.043 .07l.071 .095l.054 .058l4 4l.094 .083a1 1 0 0 0 1.32 -1.497l-2.292 -2.293h5.585l.117 -.007a1 1 0 0 0 -.117 -1.993h-5.586l2.293 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth={0} fill="currentColor" />
                            </svg>

                        </div>
                        <Swiper
                            onInit={(ev) => {
                                set_my_swiper(ev)
                            }}
                            slidesPerView={3}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                400: {
                                    slidesPerView: 1,
                                },
                                639: {
                                    slidesPerView: 3,
                                },
                                865: {
                                    slidesPerView: 3
                                },
                            }}
                            onSlideChange={() => { }}
                            onSwiper={(swiper) => { }}
                        >

                            {reportList.map((val, index) =>
                                <SwiperSlide key={index}>
                                    <div className="mx-2 border rounded-md md:h-44 md:flex overflow-clip">
                                        <img loading="lazy" className='object-cover object-top h-full' src={'/assets/vmi/pr1.webp'} alt="about-img" srcSet="" />
                                        <div className="flex flex-col justify-between p-4 text-xs md:text-justify">
                                            <div>
                                                <div className='pb-4 line-clamp-4 max-h-[100px] overflow-hidden'>
                                                    {val.summary}
                                                </div>
                                            </div>
                                            <div className='flex justify-center mt-8 md:mt-0 md:justify-end'>
                                                <Link href={`/report/${val.url}`}>
                                                    <button type="button" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all border border-transparent rounded-md bg-cyan-800 hover:bg-cyan-950 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                                                        Read Me
                                                    </button>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                        <div className="ml-2" onClick={() => { my_swiper.slideNext() }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-right-filled" width={44} height={44} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6f32be" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" strokeWidth={0} fill="currentColor" />
                            </svg>

                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    )

}

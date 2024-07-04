'use client'
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
export default function Services() {
    return (
        <div className='relative overflow-clip bg-mono'>

            <div className='absolute flex items-center justify-between w-full h-full -z-10'>
            </div>
            {/* <img loading="lazy" className='absolute top-0 object-cover w-full h-full brightness-50' src={'/assets/vmi/bgn1.webp'} alt="bg-banner-img" srcSet="" /> */}
            <div className="px-4 mx-auto max-w-7xl sm:px-6 ">
                <div className="pt-12 md:py-12 md:pt-10">
                    <div className="pb-12 mx-auto text-center md:pb-0">
                        {/* <h2 className="mb-6 text-3xl font-extrabold text-slate-500">Discover Our Services</h2> */}

                        <motion.div
                            initial={{ opacity: 0, y: '25%' }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }} viewport={{ once: true }}
                        >

                            <h2 className="mb-6 text-3xl font-extrabold text-center text-white custom-underline">Discover Our Services</h2>
                            {/* <div className='flex justify-center mb-8 text-xs text-white'>
                                <div className='w-4/5 md:w-full'>
                                    Welcome to Visionary Market Insights, where strategic insights and innovative solutions converge to empower your business. We offer a diverse range of services tailored to meet your unique market research needs. By partnering with us, you unlock a world of opportunities and gain a competitive edge in your industry. Explore our services and discover how we can drive your business forward.
                                </div>
                            </div> */}
                            <div className='flex flex-col flex-wrap md:gap-0 md:flex-row'>
                                <div className="p-2 md:w-1/3">
                                    <div className="w-full p-2 text-left bg-white border rounded-md text-cyan-800 md:flex">
                                        <div className='flex items-start justify-center md:py-4 '>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-aperture" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                <path d="M3.6 15h10.55" />
                                                <path d="M6.551 4.938l3.26 10.034" />
                                                <path d="M17.032 4.636l-8.535 6.201" />
                                                <path d="M20.559 14.51l-8.535 -6.201" />
                                                <path d="M12.257 20.916l3.261 -10.034" />
                                            </svg>

                                        </div>
                                        <div className="relative flex flex-col flex-grow gap-1 p-4 text-center min-h-[260px] md:w-3/5 md:text-left">
                                            <div className='font-semibold '>
                                                Market Intelligence
                                            </div>
                                            <div className='mb-2 text-xs text-black md:text-justify '>
                                            Market Intelligence is crucial in turning companies into modern, data-driven organizations, empowering their daily reporting, operations, and insights sharing. We offer our expertise and Market Intelligence services to assess the business environment with respect to external and internal factors and enable strategic decision-making. Our, Market Intelligence solutions provide actionable insights into various business-critical factors and custom research for informed decision-making.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 md:w-1/3">
                                    <div className="w-full p-2 text-left bg-white border rounded-md text-cyan-800 md:flex">
                                        <div className='flex items-start justify-center md:py-4'>
                                            <svg viewBox="0 0 24 24" width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="setting"> <path id="vector" d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#000000" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" /> <path id="vector_2" d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z" stroke="#000000" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" /> </g> </g> </g></svg>

                                        </div>
                                        <div className="relative flex flex-col flex-grow gap-1 p-4 text-center min-h-[260px] md:w-3/5 md:text-left">
                                            <div className='font-semibold '>
                                                Competitive Benchmarking
                                            </div>
                                            <div className='mb-2 text-xs text-black md:text-justify '>
                                            Through our Competitive Benchmarking Dashboards,  we evaluate company's performance by comparing its performance and productivity metrics with those of its competitors. We prepare our competitive benchmarking dashboards on various parameters such as Product/Services Benchmarking, Strategy Benchmarking, Financial Benchmarking, Process Benchmarking, Customer Benchmarking, Operational Benchmarking, Marketing Benchmarking, Pricing Benchmarking, Production Capacity Benchmarking, etc.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 md:w-1/3">
                                    <div className="w-full p-2 text-left bg-white border rounded-md text-cyan-800 md:flex">
                                        <div className='flex items-start justify-center md:py-4 '>
                                            <svg viewBox="0 0 24 24" width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M5.6 20H18.4C18.9601 20 19.2401 20 19.454 19.891C19.6422 19.7951 19.7951 19.6422 19.891 19.454C20 19.2401 20 18.9601 20 18.4V6.93137C20 6.32556 20 6.02265 19.8802 5.88238C19.7763 5.76068 19.6203 5.69609 19.4608 5.70865C19.2769 5.72312 19.0627 5.93731 18.6343 6.36569L15.3657 9.63431C14.9373 10.0627 14.7231 10.2769 14.5392 10.2914C14.3797 10.3039 14.2237 10.2393 14.1198 10.1176C14 9.97735 14 9.67445 14 9.06863V6.93137C14 6.32556 14 6.02265 13.8802 5.88238C13.7763 5.76068 13.6203 5.69609 13.4608 5.70865C13.2769 5.72312 13.0627 5.93731 12.6343 6.36569L9.36569 9.63431C8.93731 10.0627 8.72312 10.2769 8.53923 10.2914C8.37967 10.3039 8.22374 10.2393 8.1198 10.1176C8 9.97735 8 9.67445 8 9.06863V4.8C8 4.51997 8 4.37996 7.9455 4.273C7.89757 4.17892 7.82108 4.10243 7.727 4.0545C7.62004 4 7.48003 4 7.2 4H4.8C4.51997 4 4.37996 4 4.273 4.0545C4.17892 4.10243 4.10243 4.17892 4.0545 4.273C4 4.37996 4 4.51997 4 4.8V18.4C4 18.9601 4 19.2401 4.10899 19.454C4.20487 19.6422 4.35785 19.7951 4.54601 19.891C4.75992 20 5.03995 20 5.6 20Z" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>


                                        </div>
                                        <div className="relative flex flex-col flex-grow gap-1 p-4 text-center min-h-[260px] md:w-3/5 md:text-left">
                                            <div className='font-semibold '>
                                                Consulting Services
                                            </div>
                                            <div className='mb-2 text-xs text-black md:text-justify '>
                                            We consult companies in building and developing unique financial, supply chain, operations and customer management capabilities. These are critical areas to gain competitive advantage in the market.  Visionary Market Insights is emerging as one of the fastest growing management consulting companies in India, VMI has pioneered the implementation of various consulting solutions in various sectors such as Chemical & Materials, Healthcare, Pharmaceuticals, Consumer Goods, ICT, Automotive, Consumer Goods & Retail, Textiles & Garments, Equipment Manufacturing, Engineering & Construction and Life Sciences. 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 md:w-1/3">
                                    <div className="w-full p-2 text-left bg-white border rounded-md text-cyan-800 md:flex">
                                        <div className='flex items-start justify-center md:py-4 '>
                                            <svg viewBox="0 0 24 24" width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3M21 12C21 7.02944 16.9706 3 12 3M21 12H12M12 3V12M12 12L16.9948 19.4879" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>


                                        </div>
                                        <div className="relative flex flex-col flex-grow gap-1 p-4 text-center min-h-[260px] md:w-3/5 md:text-left">
                                            <div className='font-semibold '>
                                                Market Research Reports
                                            </div>
                                            <div className='mb-2 text-xs text-black md:text-justify '>
                                            Visionary Market Insights provides data driven insights and full market research reports, publishing over 1000+ reports each year, covering 100+ industries, on a global, regional and country level. We track and analyze various industries to identify key markets trends & emerging market opportunities, understand competitive landscape, estimate and forecast market sizes.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 md:w-1/3">
                                    <div className="w-full p-2 text-left bg-white border rounded-md text-cyan-800 md:flex">
                                        <div className='flex items-start justify-center md:py-4 '>
                                            <svg viewBox="0 0 24 24" width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>


                                        </div>
                                        <div className="relative flex flex-col flex-grow gap-1 p-4 text-center min-h-[260px] md:w-3/5 md:text-left">
                                            <div className='font-semibold '>
                                                Syndicated Research
                                            </div>
                                            <div className='mb-2 text-xs text-black md:text-justify '>
                                            Keeping pace with the business environment, we publish syndicated market research studies. Every year we do publish 1000+ syndicated market research studies.  We employ best-practice models and research methodologies as well as comprehensive market analysis to ensure each syndicated report provides accurate market segmentation and insights. We provide unique and detailed surveys and reports through meticulous examination and careful evaluation of the market trends, statistics, and various micro as well as macroeconomic factors. 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 md:w-1/3">
                                    <div className="w-full p-2 text-left bg-white border rounded-md text-cyan-800 md:flex">
                                        <div className='flex items-start justify-center md:py-4 '>
                                            <svg viewBox="0 0 24 24" width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M14.581 19.4041C14.6645 19.9894 14.2606 20.5326 13.676 20.6211L12 20.9841C11.6307 21.1187 11.2169 21.0265 10.9398 20.7477C10.6627 20.469 10.5729 20.0546 10.7097 19.6861C10.8466 19.3176 11.1851 19.0623 11.577 19.0321L13.252 18.6701C13.8213 18.509 14.4142 18.8364 14.581 19.4041V19.4041Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path fillRule="evenodd" clipRule="evenodd" d="M7 15.9919C5.89543 15.9919 5 15.0965 5 13.9919V10.9919C5 9.88737 5.89543 8.99194 7 8.99194C8.10457 8.99194 9 9.88737 9 10.9919V13.9919C9 15.0965 8.10457 15.9919 7 15.9919Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path fillRule="evenodd" clipRule="evenodd" d="M17 15.9919C15.8954 15.9919 15 15.0965 15 13.9919V10.9919C15 9.88737 15.8954 8.99194 17 8.99194C18.1046 8.99194 19 9.88737 19 10.9919V13.9919C19 15.0965 18.1046 15.9919 17 15.9919Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M18.25 11C18.25 11.4142 18.5858 11.75 19 11.75C19.4142 11.75 19.75 11.4142 19.75 11H18.25ZM4.25 11C4.25 11.4142 4.58579 11.75 5 11.75C5.41421 11.75 5.75 11.4142 5.75 11H4.25ZM19.75 14.0023C19.7513 13.5881 19.4165 13.2513 19.0023 13.25C18.5881 13.2487 18.2513 13.5835 18.25 13.9977L19.75 14.0023ZM13.5113 19.8951C13.1071 19.9855 12.8527 20.3865 12.9431 20.7907C13.0335 21.1949 13.4345 21.4493 13.8387 21.3589L13.5113 19.8951ZM19.75 11V9H18.25V11H19.75ZM19.75 9C19.75 4.71979 16.2802 1.25 12 1.25V2.75C15.4518 2.75 18.25 5.54822 18.25 9H19.75ZM12 1.25C7.71979 1.25 4.25 4.71979 4.25 9H5.75C5.75 5.54822 8.54822 2.75 12 2.75V1.25ZM4.25 9V11H5.75V9H4.25ZM18.25 13.9977C18.2414 16.8289 16.2742 19.2771 13.5113 19.8951L13.8387 21.3589C17.2853 20.588 19.7393 17.534 19.75 14.0023L18.25 13.9977Z" fill="#000000" /> </g></svg>


                                        </div>
                                        <div className="relative flex flex-col flex-grow gap-1 p-4 text-center min-h-[260px] md:w-3/5 md:text-left">
                                            <div className='font-semibold '>
                                                Custom Research
                                            </div>
                                            <div className='mb-2 text-xs text-black md:text-justify '>
                                            Visionary Market Insights provide the tailored market research insights as per our client requirements. Complex research problems that cannot be solved with syndicated research can be solved with custom research. We work with our clients to build custom market research solutions such as qualitative analysis, quantitative analysis, market size analysis and forecast, competitive landscape and value chain analysis.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center mt-8 text-center'>
                                <Link href='/services'>
                                    <button type="button" className="inline-flex items-center justify-center gap-2 px-16 py-2 font-semibold transition-all bg-white border border-transparent rounded-md text-cyan-800 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:ring-offset-2">
                                        Browse All Services
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

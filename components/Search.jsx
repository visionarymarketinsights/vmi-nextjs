'use client'
import React, { Component, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { notifyError } from '@/utils/CustomToastContainer';
import CustomToastContainer from '@/utils/CustomToastContainer';
{/* <CustomToastContainer /> */ }
import { getCategories } from '@/constants';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Search() {
    const router = useRouter()
    const [categories, setCategories] = useState([]);
    const [keyword, setKeyword] = useState('');


    const handleEnterSearch = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    const handleSearch = () => {
        if (keyword) {
            router.push(`/search/${keyword}`)
        } else {
            notifyError('Enter search keyword')
        }
    }


    const getCategoryList = () => {
        getCategories().then(data => {
            setCategories(data)
        });
    }
    useEffect(() => {
        getCategoryList();
    }, [])


    return (
        // <div className={`mx-auto h-[90vh] bg-cover bg-bottom flex justify-center items-center`} style={{ backgroundImage: `url(/world-background.jpg)` }}>
        // <div className={`mx-auto py-12 bg-cover bg-bottom flex justify-center items-center bg-gradient-to-bl from-blue-900 to-blue-500 text-white`}>
        // <div className={`mx-auto py-12 bg-cover bg-bottom flex justify-center items-center bg-gradient-0 text-white`}>
        // <div className={`mx-auto py-12 bg-cover bg-bottom flex justify-center items-center bg-gradient-45 text-white`}>
        <div className={`relative mx-auto py-12 bg-cover overflow-clip  flex justify-center items-center `}>
            {/* <video className='absolute bottom-0 z-10 hidden w-full brightness-[0.4] md:block' autoPlay muted loop id="myVideo">
                <source data-src={"/assets/sample.webm"} type="video/mp4" src={"/assets/sample.webm"} />
            </video> */}
            <img loading="lazy" className='absolute top-0 z-10 object-cover h-full md:w-full md:bottom-0 brightness-95' src={'/assets/vmi/bgn1.jpg'} alt="bg-banner-img" srcSet="" />
            {/* <video className='absolute top-0 z-10 block w-full brightness-[0.4] md:hidden' autoPlay muted loop id="myVideo">
                <source data-src={"/assets/sample_vertical.webm"} type="video/mp4" src={"/assets/sample_vertical.webm"} />
            </video> */}

            <div className='z-10 flex flex-col gap-8 px-4 text-center text-white md:px-16 md:gap-8'>
                <div className="text-3xl font-semibold md:text-4xl" >
                    We Analyze and Anticipate the Global Market 
                </div>
                <div className='flex justify-center'>
                    <div className="text-sm text-center md:w-5/6 md:text-lg" >Our Market Research and Business Consulting Solutions helps clients to build a rational strategy that can create inclusive and sustainable growth and considers impact through five dimensions: Financial & Operational, Customer, Capability, Employee, and Environmental & Social.</div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='flex items-center justify-between w-full overflow-hidden bg-white rounded-lg md:w-auto focus-within:shadow-lg'>
                        <div className="flex items-center ">
                            <div className="grid w-12 h-full text-gray-300 place-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                className="h-full pr-2 text-gray-700 outline-none w-[100px] text-xs  md:text-sm md:w-[400px]"
                                type="text"
                                id="search"
                                value={keyword}
                                onKeyDown={handleEnterSearch}
                                onChange={(e) => setKeyword(e.target.value)}
                                placeholder="Search reports.." />
                        </div>
                        {/* <button className='px-8 m-1 text-sm font-bold tracking-wide text-white rounded-md bg-primary'>Search</button> */}
                        <button onClick={handleSearch} type="submit" className="inline-flex items-center justify-center gap-2 px-6 py-2 m-1 font-semibold text-white transition-all border border-transparent rounded-md bg-cyan-800 hover:bg-cyan-950 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>

                            <svg viewBox="0 0 24 24" width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
                            Search
                        </button>

                    </div>
                </div>
                <div className='flex items-center justify-center gap-2 pt-4' >
                    <div className='text-xl text-center text-white'>
                        Browse By Industry
                    </div>
                    <div className='hidden md:block w-1/2 h-[2px] bg-white'>
                    </div>
                </div>
                <div className='min-h-20'>
                    <motion.div initial={{ opacity: 0, y: '25%' }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} viewport={{ once: true }}>
                        <div className='grid items-start justify-center w-full grid-cols-3 gap-4 text-white sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-14'>
                            {
                                categories.map((res, index) => (
                                    <Link key={index} href={`/reports/${res.url}`}>
                                        <div className='flex flex-col items-center gap-1 p-2 mb-2 duration-200 hover:scale-125 hover:font-semibold'>
                                            <img loading="lazy" src={'/assets/' + res.icon} alt='category-icon' className="flex justify-center w-6 duration-100 "></img>
                                            <div className="text-center mx-1 text-[8px] md:text-[10px] w-20">{res.name}</div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </motion.div>
                </div>
            </div>
            <CustomToastContainer />
        </div>
    )
}
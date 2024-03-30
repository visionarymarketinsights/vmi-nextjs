'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { apiUrl, toCapitalCase } from '@/constants'
import axios from 'axios';
import { notifyError, notifySuccess } from '@/utils/CustomToastContainer';
import CustomToastContainer from '@/utils/CustomToastContainer';
import moment from 'moment';
// import type { Metadata } from 'next';

// export async function generateMetadata({ params, searchParams }, parent) {
//     const url = params.url
//     return {
//         title: 'Press Releases - Latest News and Updates | Visionary Market Insights',
//         description: 'Stay informed with our latest press releases. Explore news and updates across various categories, showcasing our commitment to delivering valuable insights.',
//         keywords: 'Press Releases, Latest News, Company Updates, Press Release Categories, Corporate Announcements, Market Insights, Industry News, Business Reports, Press Release Archive',
//         alternates: {
//             canonical: 'https://www.visionarymarketinsights.com/press-releases/' + url
//         },
//     }
// }


// export const metadata: Metadata = {
//     title: 'Syndicate, Custom and Consulting Report Services from Visionary Market Insights',
//     description: 'Unlock strategic advantages with Visionary Market Insights—your partner for syndicate reports, custom research, and consulting services.',
//     keywords: 'Syndicate Reports, Custom Research, Consulting Services, Market Insights, Strategic Analysis, Tailored Solutions, Business Intelligence, Industry Trends, Data-driven Insights, Competitive Landscape, Emerging Markets, Comprehensive Research, Market Dynamics, Strategic Consulting, Customized Reports',
//     alternates: {
//         canonical: 'https://www.visionarymarketinsights.com/offering',
//     },
// }


export default function PressReleases({ params }) {

    const { url } = params;
    const [category, setCategory] = useState({});
    const [categoryList, setCategoryList] = useState([]);
    const [sampleList, setSampleList] = useState(["Press Release", "Blogs", "Case Studies", "Research Insights", "Analyst Notes", "Industry Tracker",]);
    const [pressReleaseList, setPressReleaseList] = useState([]);
    const [reportCount, setReportCount] = useState(0);
    const [totalReportCount, setTotalReportCount] = useState(0);
    const [page, setPage] = useState(1);

    const setPagination = (val) => {
        setPage(val);
        scrollToTop();
    }


    const scrollToTop = () => {
        window.scroll(0, 0)
    }
    const getCategoryByUrl = () => {
        if (url != 'all-industries') {
            axios.get(`${apiUrl}/category/url/${url}`).then(res => {
                setCategory(res.data.data)
            });
        }
    }

    useEffect(() => {
        getCategoryByUrl();
        axios.get(`${apiUrl}/press_release/category/category_count`).then(res => {
            let tempCount = 0;
            let totalCount = 0;
            let categoryList = res.data.data.map(res => {
                if (url === res.category_url) {
                    tempCount = res.count;
                }
                totalCount += res.count;
                return res;
            })
            setReportCount(url == 'all-industries' ? totalCount : tempCount)
            setTotalReportCount(totalCount)
            setCategoryList(categoryList)
        })
    }, [url]);
    useEffect(() => {
        if (url) {
            // axios.get(`${apiUrl}/press_release/category/${categories.find(res => res.id === Number(url)).name}?page=${page}&per_page=8`).then(res => {
            axios.get(`${apiUrl}/press_release/category/${url}?page=${page}&per_page=8`).then(res => {
                let reportList = res.data.data;
                if (reportList.length) {
                    setPressReleaseList(reportList)
                } else {
                    setPressReleaseList([])
                    notifyError('No press releases for this category')
                }
            })
        }
    }, [url, page]);
    return (
        <div>
            <CustomToastContainer />
            <h1 className='fixed text-transparent'>{category.name && category.name.toUpperCase()}</h1>
            <div className='text-white bg-[#006388]'>
                <div className="relative flex items-center max-w-6xl px-4 py-6 mx-auto mb-6 text-lg font-semibold sm:px-6 md:text-2xl overflow-clip">
                    <div className='flex gap-2'>
                        <svg width={30} height={30} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>news_line</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="File" transform="translate(-768.000000, 0.000000)" fill-rule="nonzero"> <g id="news_line" transform="translate(768.000000, 0.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M16,3 C17.0543909,3 17.9181678,3.81587733 17.9945144,4.85073759 L18,5 L18,10 L19.5,10 C20.2796706,10 20.9204457,10.5949121 20.9931332,11.3555442 L21,11.5 L21,19 C21,20.597725 19.7511226,21.903664 18.1762773,21.9949075 L18,22 L5,22 C3.94563773,22 3.08183483,21.18415 3.00548573,20.1492661 L3,20 L3,5 C3,3.94563773 3.81587733,3.08183483 4.85073759,3.00548573 L5,3 L16,3 Z M19,12 L18,12 L18,20 C18.5523,20 19,19.5523 19,19 L19,12 Z M16,5 L5,5 L5,20 L16,20 L16,5 Z M11,13 C11.5523,13 12,13.4477 12,14 C12,14.51285 11.613973,14.9355092 11.1166239,14.9932725 L11,15 L8,15 C7.44772,15 7,14.5523 7,14 C7,13.48715 7.38604429,13.0644908 7.88337975,13.0067275 L8,13 L11,13 Z M13,8 C13.5523,8 14,8.44772 14,9 C14,9.55228 13.5523,10 13,10 L8,10 C7.44772,10 7,9.55228 7,9 C7,8.44772 7.44772,8 8,8 L13,8 Z" id="形状" fill="#ffffff"> </path> </g> </g> </g> </g></svg>
                        <div>
                            News Room
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl px-4 mx-auto sm:px-6">
                <div className="py-2 text-center md:pt-10 md:text-left">
                    <div className="pb-12 mx-auto max-w-8xl md:pb-10">
                        <div className='md:flex'>
                            <div className=" md:w-[28%]">
                                <div className='border rounded-md p-4 sticky top-[20px]'>
                                    <div className='flex flex-col gap-2'>
                                        {/* <Link href={`/press-releases/all-industries`} >
                                            <div className={`py-2 text-sm cursor-pointer hover:text-cyan-800 ${url === 'all-industries' && 'text-cyan-800'} border-b-2`}>All Industries</div>
                                        </Link> */}
                                        {/* {categoryList.map((res, key) => { */}
                                        {sampleList.map((res, key) => {
                                            return (
                                                // <Link key={key} href={`/press-releases/${res.category_url}`} onClick={scrollToTop}>
                                                //     {/* <div className={`py-2 text-sm cursor-pointer hover:text-cyan-800 ${res.category_url === url && 'text-cyan-800'} ${key < categoryList.length - 1 && 'border-b-2'}`} key={key}>{res.category_name}</div> */}
                                                //     <div className={`py-2 text-sm cursor-pointer hover:text-cyan-800 ${res.category_url === url && 'text-cyan-800'} ${key < categoryList.length - 1 && 'border-b-2'}`} key={key}>{res.category_name}</div>
                                                // </Link>
                                                <div key={key} onClick={scrollToTop}>
                                                    <div className={`py-2 text-sm cursor-pointer hover:text-cyan-800 ${res === url && 'text-cyan-800'} ${key < sampleList.length - 1 && 'border-b-2'}`} key={key}>{res}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="relative mt-12 md:w-3/4 md:ml-8 md:mt-0">
                                <div className='hidden md:block absolute top-[-70px] right-0 text-right'>
                                    <nav >
                                        <ul className="inline-flex my-4 -space-x-px text-sm cursor-pointer">
                                            <li>
                                                <div onClick={() => (page - 1) > 0 ? setPagination(page - 1) : ''} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 border-e-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="-rotate-90 icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M6 15l6 -6l6 6" />
                                                    </svg>
                                                </div>
                                            </li>
                                            {(page - 2) > 0 && <li>
                                                <div onClick={() => setPagination(page - 2)} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page - 2}</div>
                                            </li>}
                                            {(page - 1) > 0 && <li>
                                                <div onClick={() => setPagination(page - 1)} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page - 1}</div>
                                            </li>}
                                            <li>
                                                <div className={`flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 `}>{page}</div>
                                            </li>
                                            {(page + 1) <= ((reportCount / 8) + 1) && <li>
                                                <div onClick={() => setPagination(page + 1)} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page + 1}</div>
                                            </li>}
                                            {(page + 2) <= ((reportCount / 8) + 1) && <li>
                                                <div onClick={() => setPagination(page + 2)} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page + 2}</div>
                                            </li>}
                                            <li>
                                                <div onClick={() => (page + 1) <= ((reportCount / 8) + 1) ? setPagination(page + 1) : ''} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90 icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M6 15l6 -6l6 6" />
                                                    </svg>
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* <div className="px-4 mb-4 text-xl font-semibold">Press Release in {heading}</div> */}
                                {pressReleaseList.map((res, key) => {
                                    return (
                                        // <Link to='/report' key={key}>
                                        //   </Link>

                                        <Link key={key} href={`/press-release/${res.url}`} onClick={scrollToTop}>
                                            <div className='relative group' key={key} >
                                                <div className='absolute top-[-10px] right-[20px] py-1 px-4 text-xs bg-cyan-800 text-white rounded-sm'>
                                                    {moment(res.created_date).format('Do MMM YYYY')}
                                                </div>
                                                <div className='flex flex-col gap-2 p-4 mb-6 border-2 rounded-md cursor-pointer group-hover:bg-slate-50'>
                                                    {/* <div className="font-semibold group-hover:text-cyan-800 group-hover:underline">{res.title.split(' ').filter((r, i) => i < 20).join(' ')}...</div> */}
                                                    <div className="font-semibold group-hover:text-cyan-800 group-hover:underline">{toCapitalCase(res.url)}</div>
                                                    <div className="text-xs">{res.summary}...</div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}

                                <div className='text-center'>
                                    <nav >
                                        <ul className="inline-flex my-4 -space-x-px text-sm cursor-pointer">
                                            <li>
                                                <div onClick={() => (page - 1) > 0 ? setPagination(page - 1) : ''} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 border-e-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="-rotate-90 icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M6 15l6 -6l6 6" />
                                                    </svg>
                                                </div>
                                            </li>
                                            {(page - 2) > 0 && <li>
                                                <div onClick={() => setPagination(page - 2)} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page - 2}</div>
                                            </li>}
                                            {(page - 1) > 0 && <li>
                                                <div onClick={() => setPagination(page - 1)} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page - 1}</div>
                                            </li>}
                                            <li>
                                                <div className={`flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 `}>{page}</div>
                                            </li>
                                            {(page + 1) <= ((reportCount / 8) + 1) && <li>
                                                <div onClick={() => setPagination(page + 1)} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page + 1}</div>
                                            </li>}
                                            {(page + 2) <= ((reportCount / 8) + 1) && <li>
                                                <div onClick={() => setPagination(page + 2)} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page + 2}</div>
                                            </li>}
                                            <li>
                                                <div onClick={() => (page + 1) <= ((reportCount / 8) + 1) ? setPagination(page + 1) : ''} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90 icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M6 15l6 -6l6 6" />
                                                    </svg>
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

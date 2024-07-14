'use client'

import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import RequestSample from '@/components/RequestSample';
import axios from 'axios';
import { apiUrl } from '@/constants';
import Skeleton from '@/components/Skeleton'
import Faq from '@/components/Faq';
import Methodology from '@/components/Methodology';

export default function ReportBuyNow({ report, url, segment }) {

  const [localReport, setLocalReport] = useState('');

  useEffect(() => {
    if (!report) return;
    report.description = addTableWrapper(report.description)
    setLocalReport(report);
  }, [url, report])

  const addTableWrapper = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    // Find all tables (consider using a more robust selector if needed)
    const tables = doc.querySelectorAll('table');
    // Wrap each table with a div and apply CSS class dynamically
    tables.forEach((table) => {
      const wrapper = document.createElement('div');
      wrapper.classList.add('overflow-auto'); // Adjust class name as needed
      // Optionally, append additional elements or styles to the wrapper
      
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
    
    console.log(doc.body.innerHTML)
    // Return the modified HTML as a string
    return doc.body.innerHTML;
  };

  return (
    <div>
      <div className={`${segment !== 'request-sample' && 'md:sticky top-0'} pt-4 relative justify-between gap-2 bg-white border-b-2 md:flex px-4`}>
        <Link href={'/report/' + report?.url} className={`md:w-1/3 py-3 md:mb-0 mb-4 duration-200 text-sm flex justify-center rounded-b-none items-center rounded-sm cursor-pointer border-b-0 border-2 translate-y-[2px]  ${!segment ? 'font-semibold text-cyan-800  z-10 bg-white ' : ''}`}>Description</Link>
        <Link href={'/report/' + report?.url + '/toc'} className={`md:w-1/3 py-3 md:mb-0 mb-4 duration-200 text-sm rounded-b-none flex justify-center items-center border-b-0 border-2 z-10 rounded-sm cursor-pointer translate-y-[2px]  ${segment === 'toc' ? 'font-semibold text-cyan-800  z-10 bg-white' : ''}`}>Table Of Content</Link>
        {/* <Link href={'/report/' + report?.url + '/methodology'} className={`md:w-1/3 py-3 md:mb-0 mb-4 duration-200 text-sm rounded-b-none flex justify-center items-center border-b-0 border-2 z-10 rounded-sm cursor-pointer translate-y-[2px]  ${segment === 'methodology' ? 'font-semibold text-cyan-800  z-10 bg-white' : ''}`}>Methodology</Link> */}
        <Link href={'/report/' + report?.url + '/request-sample'} className={`md:w-1/3 py-3 md:mb-0 mb-4 duration-200 text-sm rounded-b-none flex justify-center items-center border-b-0 border-2 z-10 rounded-sm cursor-pointer translate-y-[2px] bg-[#9A1750] text-white  ${segment === 'request-sample' ? 'font-semibold underline text-white border-b-0 z-10' : ''}`}>  Request Sample</Link>
      </div>
      <div className='p-4'>
        {!segment &&
          <div>
            <div className='html-content description-content' dangerouslySetInnerHTML={{ __html: localReport?.description }}></div>
            {localReport?.description && <Faq faqs={JSON.parse(localReport?.faqs)} />}
          </div>
        }
        {segment === 'toc' &&
          <div>
            <div dangerouslySetInnerHTML={{ __html: localReport?.toc }}></div>
          </div>
        }
        {/* {segment === 'Highlights' &&
          <div>
            <div dangerouslySetInnerHTML={{ __html: localReport?.highlights }}></div>
          </div>
        } */}
        {segment === 'methodology' &&
          <div>
            <Methodology />
          </div>
        }
        {segment === 'request-sample' &&
          <div>
            <RequestSample reportTitle={localReport?.title.split('Market')[0] + 'Market'} enquiryType='Request Sample' closeModal={() => { }} />
          </div>
        }
      </div>
    </div>
  )
}

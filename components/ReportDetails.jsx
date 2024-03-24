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

export default function ReportBuyNow({ report, url, section }) {

  const [localReport, setLocalReport] = useState(report);

  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');


  useEffect(() => {
    setBlankImage(report);
  }, [url])

  useEffect(() => {
    if (img1 && !section) {
      setDescriptionImages(img1, img2)
    }
  }, [section])




  const setBlankImage = (reportData) => {
    if (!reportData) return;
    const parser = new DOMParser();

    // For Description
    const descriptionDoc = parser.parseFromString(reportData.description, "text/html");
    const imgToModify1 = descriptionDoc.querySelectorAll("img")[0];
    const imgToModify2 = descriptionDoc.querySelectorAll("img")[1];
    if (imgToModify1) {
      imgToModify1.setAttribute("src", '');
      imgToModify1.style.height = '0px';
    }
    if (imgToModify2) {
      imgToModify2.setAttribute("src", '');
      imgToModify2.style.height = '0px';
    }
    reportData.description = descriptionDoc.documentElement.outerHTML;

    // For Methodology
    const methodologyDoc = parser.parseFromString(reportData?.methodology, "text/html");
    const methodologyImgToModify1 = methodologyDoc.querySelectorAll("img")[0];
    if (methodologyImgToModify1) {
      methodologyImgToModify1.setAttribute("src", '');
      methodologyImgToModify1.style.height = '0px';
    }
    reportData.methodology = methodologyDoc.documentElement.outerHTML;

    setLocalReport(reportData);
    getReportImages(reportData.id);
  }

  const getReportImages = (repId) => {
    axios.get(`${apiUrl}/report_images/RP${repId}`).then((response) => {
      let image1 = response.data.data.find(res => res.img_name.includes('_1'))?.img_file || '';
      let image2 = response.data.data.find(res => res.img_name.includes('_2'))?.img_file || '';

      setImg1(image1);
      setImg2(image2);
      setTimeout(() => {
        setDescriptionImages(image1, image2);
      }, 500);
    })
  }
  const setDescriptionImages = (image1, image2) => {

    const descriptionImages = document.querySelectorAll('.description-content p span img');

    if (descriptionImages.length > 0) {
      descriptionImages[0].src = image1 ? image1 : img1;
      descriptionImages[0].style.height = 'auto';

      if (descriptionImages.length > 1) {
        descriptionImages[1].src = image2 ? image2 : img2;
        descriptionImages[1].style.height = 'auto';
      }
    }
  }
  return (
    <div>
      <div className={`${section !== 'Request' && 'md:sticky top-0'} pt-4 relative justify-between gap-2 bg-white border-b-2 md:flex px-4`}>
        <Link href={'/report/' + report?.url} className={`md:w-1/4 py-3 md:mb-0 mb-4 duration-200 text-sm flex justify-center rounded-b-none items-center rounded-sm cursor-pointer border-b-0 border-2 translate-y-[2px]  ${!section ? 'font-bold text-cyan-800 border-b-0 z-10 bg-white ' : ''}`}>Description</Link>
        <Link href={'/report/' + report?.url + '?section=Table'} className={`md:w-1/4 py-3 md:mb-0 mb-4 duration-200 text-sm rounded-b-none flex justify-center items-center border-b-0 border-2 z-10 rounded-sm cursor-pointer translate-y-[2px]  ${section === 'Table' ? 'font-bold text-cyan-800 border-b-0 z-10 bg-white' : ''}`}>Table Of Content</Link>
        <Link href={'/report/' + report?.url + '?section=Highlights'} className={`md:w-1/4 py-3 md:mb-0 mb-4 duration-200 text-sm rounded-b-none flex justify-center items-center border-b-0 border-2 z-10 rounded-sm cursor-pointer translate-y-[2px]  ${section === 'Highlights' ? 'font-bold text-cyan-800 border-b-0 z-10 bg-white' : ''}`}>Highlights</Link>
        <Link href={'/report/' + report?.url + '?section=Methodology'} className={`md:w-1/4 py-3 md:mb-0 mb-4 duration-200 text-sm rounded-b-none flex justify-center items-center border-b-0 border-2 z-10 rounded-sm cursor-pointer translate-y-[2px]  ${section === 'Methodology' ? 'font-bold text-cyan-800 border-b-0 z-10 bg-white' : ''}`}>Methodology</Link>
        <Link href={'/report/' + report?.url + '?section=Request'} className={`md:w-1/4 py-3 md:mb-0 mb-4 duration-200 text-sm rounded-b-none flex justify-center items-center border-b-0 border-2 z-10 rounded-sm cursor-pointer translate-y-[2px]  ${section === 'Request' ? 'font-bold text-cyan-800 border-b-0 z-10 bg-white' : ''}`}>  Request Sample</Link>
      </div>
      <div className='p-4'>
        {!section &&
          <div>
            <div className='html-content description-content' dangerouslySetInnerHTML={{ __html: localReport?.description }}></div>
            {localReport?.description && <Faq faqs={JSON.parse(localReport?.faqs)} />}
          </div>
        }
        {section === 'Table' &&
          <div>
            <div dangerouslySetInnerHTML={{ __html: localReport?.toc }}></div>
          </div>
        }
        {section === 'Highlights' &&
          <div>
            <div dangerouslySetInnerHTML={{ __html: localReport?.highlights }}></div>
          </div>
        }
        {section === 'Methodology' &&
          <div>
            <Methodology />
          </div>
        }
        {section === 'Request' &&
          <div>
            <RequestSample reportTitle={localReport?.title.split('Market')[0] + 'Market'} enquiryType='Request Sample' closeModal={() => { }} />
          </div>
        }
      </div>
    </div>
  )
}

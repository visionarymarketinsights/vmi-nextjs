'use client'
import React from 'react';
import moment from 'moment';
export default function ReportInfoBlock({ report }) {
  return (

    <div className='flex gap-2'>
      <div>
        <img loading="lazy" className='h-[200px]' src={'/assets/vmi/mr1.png'} alt="about-img" srcSet="" />
      </div>
      <div className='flex flex-col justify-between'>
        <div className='font-semibold'>
          Rep ID:
        </div>
        <div className='text-sm'>
          VMI{report.category_abr}{report.id}
        </div>
        <div className='font-semibold'>
          Published On:
        </div>
        <div className='text-sm'>
          {moment(report.created_date).format('MMMM YYYY')}
        </div>
        <div className='font-semibold'>
          Pages:
        </div>
        <div className='text-sm'>
          {report.pages}
        </div>
        <div className='font-semibold'>
          Format:
        </div>
        <div className='text-sm'>
          PPT, Excel, PDF
        </div>
      </div>
    </div>
  )
}

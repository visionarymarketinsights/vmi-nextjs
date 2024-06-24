'use client'
import React from 'react';
import moment from 'moment';
export default function ReportInfoBlock({ report }) {
  return (

    <div className='flex flex-col gap-4 p-4 border rounded-md shadow-lg '>
      <div className='flex items-center gap-4'>
        <div className='w-2 h-2 rounded-full bg-slate-500'>

        </div>
        <div>
          {moment(report.created_date).format('MMMM YYYY')}
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <div className='w-2 h-2 rounded-full bg-slate-500'>

        </div>
        <div>
          VMI{report.category_abr}{report.id}
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <div className='w-2 h-2 rounded-full bg-slate-500'>

        </div>
        <div>
          {report.pages} Pages
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <div className='w-2 h-2 rounded-full bg-slate-500'>

        </div>
        <div>
          PPT, Excel, PDF
        </div>
      </div>
    </div>
  )
}

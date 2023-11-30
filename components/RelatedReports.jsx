'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { apiUrl } from '@/constants';
export default function RelatedReports({category_url, currentReportId}) {

  const [relatedReportList, setRelatedReportList] = useState([]);

  useEffect(() => {
    getRelatedReports();
  }, [])

  const getRelatedReports = () => {
    if(category_url){
      axios.get(`${apiUrl}/reports/category/${String(category_url)}?page=1&per_page=3`).then(res => {
        if (res.data.data.length) {
          let filterData = res.data.data.filter(res => res.id !== currentReportId);
          filterData = filterData.filter((r, i) => i < 2);
          setRelatedReportList(filterData)
        } else {
          setRelatedReportList([])
        }
      })
    }
  };

  return (<div className='flex flex-col gap-2 border rounded-md shadow-lg'>
    <div>
      <div className='px-4 py-2'>Related Reports</div>
      <div className=''>
        {
          relatedReportList.map((r, i) => {
            return (
              // <Link key={i} href={`/report/${r.url}`} onClick={() => window.location.reload()}>
              <Link key={i} href={`/report/${r.url}`}>
                <div className='flex flex-col px-4 py-2 border-t-2 cursor-pointer group hover:bg-slate-100'>
                  <div className="font-bold group-hover:text-primary">{r.url?.split('-').map(res => res[0].toUpperCase() + res.slice(1)).join(' ')}</div>
                  <div className="text-sm">{r.summary.split(' ').filter((s, j) => j < 15).join(' ')}...</div>
                </div>
              </Link>
            )
          })
        }
        {relatedReportList.length === 0
          &&
          <div className='flex flex-col px-4 py-2 border-t-2 cursor-pointer group hover:bg-slate-100'>
            <div className="p-4 font-bold text-center group-hover:text-primary">No Report Found</div>
            {/* <div className="text-sm">{r.summary.split(' ').filter((s, j) => j < 15).join(' ')}...</div> */}
          </div>
        }
      </div>
    </div>
  </div>
  )
}

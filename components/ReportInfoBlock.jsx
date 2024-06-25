'use client'
import React from 'react';
import moment from 'moment';
export default function ReportInfoBlock({ report }) {
  return (

    <div className='flex flex-col gap-4 p-4 border rounded-md shadow-lg '>
      <div className='flex items-center gap-4'>
        <div className='w-6 h-6'>
          <svg viewBox="-0.5 0 15 15" xmlns="http://www.w3.org/2000/svg" fill="#016484"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#016484" fill-rule="evenodd" d="M107,154.006845 C107,153.45078 107.449949,153 108.006845,153 L119.993155,153 C120.54922,153 121,153.449949 121,154.006845 L121,165.993155 C121,166.54922 120.550051,167 119.993155,167 L108.006845,167 C107.45078,167 107,166.550051 107,165.993155 L107,154.006845 Z M108,157 L120,157 L120,166 L108,166 L108,157 Z M116.5,163.5 L116.5,159.5 L115.757485,159.5 L114.5,160.765367 L114.98503,161.275112 L115.649701,160.597451 L115.649701,163.5 L116.5,163.5 Z M112.5,163.5 C113.412548,163.5 114,163.029753 114,162.362119 C114,161.781567 113.498099,161.473875 113.110266,161.433237 C113.532319,161.357765 113.942966,161.038462 113.942966,160.550798 C113.942966,159.906386 113.395437,159.5 112.505703,159.5 C111.838403,159.5 111.359316,159.761248 111.051331,160.115385 L111.456274,160.632075 C111.724335,160.370827 112.055133,160.231495 112.425856,160.231495 C112.819392,160.231495 113.13308,160.382438 113.13308,160.690131 C113.13308,160.974601 112.847909,161.102322 112.425856,161.102322 C112.28327,161.102322 112.020913,161.102322 111.952471,161.096517 L111.952471,161.839623 C112.009506,161.833817 112.26616,161.828012 112.425856,161.828012 C112.956274,161.828012 113.190114,161.967344 113.190114,162.275036 C113.190114,162.565312 112.93346,162.768505 112.471483,162.768505 C112.10076,162.768505 111.684411,162.605951 111.427757,162.327286 L111,162.87881 C111.279468,163.227141 111.804183,163.5 112.5,163.5 Z M110,152.5 C110,152.223858 110.214035,152 110.504684,152 L111.495316,152 C111.774045,152 112,152.231934 112,152.5 L112,153 L110,153 L110,152.5 Z M116,152.5 C116,152.223858 116.214035,152 116.504684,152 L117.495316,152 C117.774045,152 118,152.231934 118,152.5 L118,153 L116,153 L116,152.5 Z" transform="translate(-107 -152)"></path> </g></svg>
        </div>
        <div>
          {moment(report.created_date).format('MMMM YYYY')}
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <div className='w-6 h-6'>
          <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 9.96997H2" stroke="#016484" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5 18.9199H11" stroke="#016484" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18 3.91992H6C3.79086 3.91992 2 5.71078 2 7.91992V17.9199C2 20.1291 3.79086 21.9199 6 21.9199H18C20.2091 21.9199 22 20.1291 22 17.9199V7.91992C22 5.71078 20.2091 3.91992 18 3.91992Z" stroke="#016484" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
        <div>
          VMI{report.category_abr}{report.id}
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <div className='w-6 h-6'>
        <svg fill="#016484" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" stroke="#016484"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.5 2c-.276.004-.504.224-.5.5v4c0 .815.656 1.5 1.47 1.5h4.03c.67 0 .654-1 0-1h-4.03c-.26 0-.47-.207-.47-.5v-4c.004-.282-.218-.504-.5-.5zM8.47 0C7.657 0 7 .685 7 1.5v23c0 .815.656 1.5 1.47 1.5h17.06c.814 0 1.47-.685 1.47-1.5v-18c0-.133-.053-.26-.146-.354l-6-6C20.76.053 20.634 0 20.5 0zm0 1h11.823L26 6.707V24.5c0 .293-.21.5-.47.5H8.47c-.26 0-.47-.207-.47-.5v-23c0-.293.21-.5.47-.5zm-4 3C3.657 4 3 4.685 3 5.5v23c0 .815.656 1.5 1.47 1.5h17.06c.814 0 1.47-.685 1.47-1.5v-1c.01-.676-1.01-.676-1 0v1c0 .293-.21.5-.47.5H4.47c-.26 0-.47-.207-.47-.5v-23c0-.293.21-.5.47-.5h1.06c.675.01.675-1.01 0-1z"></path></g></svg>
        </div>
        <div>
          {report.pages} Pages
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <div className='w-6 h-6'>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#016484"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z"></path> </g> </g></svg>
        </div>
        <div>
          PPT, Excel, PDF
        </div>
      </div>
    </div>
  )
}

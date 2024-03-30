'use client'

import React from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react';
import RequestSample from '@/components/RequestSample';
import axios from 'axios';
import { apiUrl, getPriceInNumber, discountedPrice } from '@/constants';
import Skeleton from './Skeleton';

export default function ReportInfoBlock({ report }) {
  return (

    <div className='flex gap-2'>
      <div>
        <img loading="lazy" className='h-[200px]' src={'/assets/vmi/mr1.png'} alt="about-img" srcSet="" />
      </div>
      <div className='flex flex-col justify-between'>
        <div className='font-semibold'>
          Published On:
        </div>
        <div className='text-sm'>
          Mar, 2024
        </div>
        <div className='font-semibold'>
          Published On:
        </div>
        <div className='text-sm'>
          Mar, 2024
        </div>
        <div className='font-semibold'>
          Published On:
        </div>
        <div className='text-sm'>
          Mar, 2024
        </div>
        <div className='font-semibold'>
          Published On:
        </div>
        <div className='text-sm'>
          Mar, 2024
        </div>
      </div>
    </div>
  )
}

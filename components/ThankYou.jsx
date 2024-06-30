'use client'
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '@/public/assets/lottie/thank-you.json';
import Link from 'next/link';

export default function ThankYou({ title }) {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <Lottie
        isClickToPauseDisabled={true}
        options={defaultOptions}
        height={200}
        width={400}
      />
      <div className='mt-4 text-center'>
        We have received your request for <strong>{title}</strong> report. <br />
        Our research specialist will contact you soon.
      </div>
      <div className='mt-8 mb-4 text-center hover:underline text-[#00628A] cursor-pointer'>
        <Link href='/'>Go to homepage</Link>
      </div>
    </div>
  );
}

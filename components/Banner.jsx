'use client'
import React from 'react'
export default function Banner() {
  return (
    <div className='relative p-12 overflow-clip h-[90vh] bg-[url("https://media.istockphoto.com/id/516356147/photo/defocused-office-background.jpg?s=612x612&w=0&k=20&c=MCn6FoMCzNi2pxcYx1U6rBAZxrU5zTvxEZqtpGFjOPU=")] bg-no-repeat bg-cover flex flex-col justify-start'>
      <div>
        <div className='text-6xl font-bold'>STRATEGY EXECUTION</div>
        <div className='pt-12 pb-4 text-2xl font-semibold'>Accelerate Strategy Execution <br /> and Consistency in <span className='font-bold'>Revenue Growth!!</span></div>
        <div >Our business consulting services are ﬁne-tuned to answer your business queries <br /> with relevant data derived from trusted industrial sources.</div>
      </div>
    </div>
  )
}

import React from 'react'

export default function Clients() {

  const LOGOS = [
    <img loading="lazy" className='pointer-events-none w-36' src={'/assets/client_logos/basf.png'} alt="basf" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/assets/client_logos/total.png'} alt="total" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/assets/client_logos/pfizer.png'} alt="pfizer" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/assets/client_logos/atos.png'} alt="atos" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/assets/client_logos/sanofi.png'} alt="sanofi" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/assets/client_logos/microsoft.png'} alt="microsoft" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/assets/client_logos/hcl.png'} alt="hcl" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/assets/client_logos/nestle.png'} alt="nestle" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/assets/client_logos/vmware.png'} alt="vmware" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/assets/client_logos/ranstad.png'} alt="randstad" />,
  ];

  return (
    <div className="relative py-12 mx-auto md:py-8">
      <div className="">
        {/* Section header */}
        <div className="max-w-6xl pb-12 mx-8 text-center md:mx-auto md:pb-4">
          <h2 className="mb-8 text-3xl font-bold text-cyan-950 custom-underline">Our Clients</h2>
          <h2 className="mb-4 h2">TRUSTED BY COMPANIES AND LEADERS ACROSS THE GLOBE </h2>
          <p className="text-gray-600 md:text-xl" data-aos="zoom-y-out">We combine Visionary Market Insight’s global expertise with deep local insights to help our clients accelerate sustainable and inclusive growth. Our clients around the world are achieving enduring change in their capabilities and performance. Our Mission is to help our clients make distinctive, lasting, and substantial improvements in their performance and to build a great firm that attracts, develops, excites, and retains exceptional people.</p>
        </div>
        <div className="select-none mt-6 mb-3 relative m-auto w-50vw overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px]  before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100  after:content-['']">
          <div className="animate-infinite-slider flex w-[calc(500px*10)]">
            {LOGOS.map((logo, index) => (
              <div
                className="slide flex w-[250px] items-center justify-center"
                key={index}
              >
                {logo}
              </div>
            ))}
            {LOGOS.map((logo, index) => (
              <div
                className="slide flex w-[250px] items-center justify-center"
                key={index}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>


      </div>
    </div >
  )
}

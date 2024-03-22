import React from 'react'
import Search from '@/components/Search'
import Testimonial from '@/components/Testimonial'
import Clients from '@/components/Clients'
import AboutHome from '@/components/AboutHome'
import LatestReports from '@/components/LatestReports'
import Insights from '@/components/Insights'
import LatestPressRelease from '@/components/LatestPressRelease'
import Services from '@/components/Services'
import CategoryMain from '@/components/CategoryMain'
import Banner from '@/components/Banner'

export default function Home() {
  return (

    <section className="relative" >
      <h1 className='fixed text-transparent'>Visionary Market Insights</h1>
      <Banner />
      <CategoryMain />
      <Insights />
      <LatestReports />
      < LatestPressRelease />
      <Services />
      <Testimonial />
      <AboutHome />
      <Clients />
    </section >
  )
}

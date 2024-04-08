import React from 'react'
import Search from '@/components/Search'
import Testimonial from '@/components/Testimonial'
import Clients from '@/components/Clients'
import AboutHome from '@/components/AboutHome'
import TrendingReports from '@/components/TrendingReports'
import Insights from '@/components/Insights'
import TrendingPressRelease from '@/components/TrendingPressRelease'
import Services from '@/components/Services'
import ReportByCategory from '@/components/ReportByCategory'
import Banner from '@/components/Banner'

export default function Home() {
  return (

    <section className="relative" >
      <h1 className='fixed text-transparent'>Visionary Market Insights</h1>
      <Search />
      {/* <Banner /> */}
      <Insights />
      <ReportByCategory />
      <TrendingReports />
      <Services />
      <TrendingPressRelease />
      <AboutHome />
      <Clients />
      <Testimonial />
    </section >
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const notifySuccess = (value: any) => toast.success(value);
export const notifyWarning = (value: any) => toast.warning(value);
export const notifyError = (value: any) => toast.error(value);
export const notifyInfo = (value: any) => toast.info(value);

export const metadata: Metadata = {
  title: 'Congruence Market Insights',
  description: 'Congruence Market Insights is a leading market research company dedicated to providing unparalleled insights and strategic intelligence. Our expert analysts deliver actionable data, empowering businesses to make informed decisions in a dynamic marketplace. Trust us to navigate your path to success.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark custom-bg`}>
        <Header></Header>
        {children}
        <ToastContainer
          position='top-center'
          theme='light'
          hideProgressBar />
        <Footer></Footer>
      </body>
    </html>
  )
}

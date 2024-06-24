'use client'
import React, { useState } from "react";
import RequestSample from '@/components/RequestSample'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Link from "next/link";
import Privacy from "@/components/Privacy";
import Terms from "@/components/Terms";
import HowToOrder from "@/components/HowToOrder";
import CustomerFAQ from "@/components/CustomerFAQ";
import Disclaimer from "@/components/Disclaimer";



const Footer = () => {

  const detailsList = [
    {
      id: 1,
      title: 'How To Order'
    },
    // {
    //   id: 2,
    //   title: 'Privacy'
    // },
    {
      id: 3,
      title: 'Terms and Conditions'
    },
    {
      id: 4,
      title: 'CustomerFAQ'
    },
    {
      id: 5,
      title: 'Disclaimer'
    },
    {
      id: 5,
      title: 'Career'
    },
  ]

  const [formOpen, setFormOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [details, setDetails] = useState(detailsList[0]);
  const [email, setEmail] = useState('');
  const handleFormOpen = () => setFormOpen(true);
  const handleFormClose = () => { setFormOpen(false); setEmail('') };
  const handleDetailsOpen = (title: any) => {
    setDetails(detailsList.find(r => r.title === title) as typeof details)
    setDetailsOpen(true)
  };
  const handleDetailsClose = () => setDetailsOpen(false);

  return (
    <div>
      <div className="relative p-8 text-center text-white bg-[#37475A] md:text-left">
        <div className="flex flex-col justify-between border-b-2 md:flex-row">
          <div className="mb-4 md:border-r-2 md:w-4/5 ">
            <div className="text-center">- Help -</div>
            <div className="flex flex-col justify-between gap-2 p-4 md:gap-0 md:pr-12 md:flex-row">
              <button className="hover:underline" onClick={() => handleDetailsOpen('Terms and Conditions')} >
                Terms Of Use
              </button>
              <button className="hover:underline" onClick={() => handleDetailsOpen('CustomerFAQ')}>
                Customer FAQ
              </button>
              <button className="hover:underline" onClick={() => handleDetailsOpen('How To Order')} >
                How To Order
              </button>
              {/* <button className="hover:underline" onClick={() => handleDetailsOpen('Privacy')}>
                Privacy Policy
              </button> */}
              <button className="hover:underline" onClick={() => handleDetailsOpen('Disclaimer')}>
                Disclaimer
              </button>
              <Link href='/career' className="hover:underline">
                Career
              </Link>
            </div>
          </div>
          <div className="text-center md:w-1/5">
            <div>- Follow Us -</div>
            <div className="flex flex-col justify-center p-4 md:flex-row">
              <img src="https://www.transparencymarketresearch.com/assets/images/Socialicon.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8 px-4 pt-12 md:gap-0 md:flex-row grow">
          <div className="flex justify-center md:w-1/3">
            <div className="flex flex-col justify-center w-4/5 p-4 bg-white rounded-md md:flex-row">
              <img src={'/assets/vmilogo.webp'}  className="h-16 rounded-md" alt="vmilogo" />
            </div>
          </div>
          <div className="md:w-1/3">
            <div>
              Corporate Headquarter
            </div>
            <div className="text-sm">
              Zen Business Center, Above Cafe Coffee Day 
              <br /> Shankar Kalat Nagar Wakad  Pune 411057
            </div>
          </div>
          <div className="md:w-1/3">
            <div>
              Reach Us
            </div>
            <div className="text-sm">

              +1-518-618-1030,  866-552-3453 (US-Canada Toll Free)
              <br /> support@visionarymarketinsights.com
            </div>
          </div>
        </div>
      </div>
      <div className="px-12 py-4 text-white bg-[#4E5763] flex flex-col md:flex-row justify-between">
        <div className="text-center md:text-left">
          Copyright © Visionary Market Dynamics Pvt. Ltd, All Rights reserved
        </div>
        <img src="https://www.transparencymarketresearch.com/assets/images/paypalLogo.svg" className="h-6" alt="" />
      </div>
      <Modal
        open={detailsOpen}
        onClose={handleDetailsClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div className='flex items-center justify-center md:flex-row'>
            <div className=' m-2 p-2 md:p-6 w-[350px] md:w-[700px] rounded-md bg-white'>
              <div className="flex justify-between pb-2 mb-2 text-xl font-semibold text-center md:flex-row">
                <div>{details.title}</div>
                <svg height={24} width={24} onClick={handleDetailsClose} className="cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#1C274C" /> </g></svg>
              </div>
              <div className='h-[82vh] overflow-auto text-sm md:text-md'>
                {details.title === 'How To Order' && <HowToOrder />}
                {/* {details.title === 'Privacy' && <Privacy />} */}
                {details.title === 'Career' && <Terms />}
                {details.title === 'Terms and Conditions' && <Terms />}
                {details.title === 'CustomerFAQ' && <CustomerFAQ />}
                {details.title === 'Disclaimer' && <Disclaimer />}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Footer;


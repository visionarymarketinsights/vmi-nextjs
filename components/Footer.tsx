'use client'
import React, { useState } from "react";
import Link from "next/link";
import Terms from "@/components/Terms";
import HowToOrder from "@/components/HowToOrder";
import CustomerFAQ from "@/components/CustomerFAQ";
import Disclaimer from "@/components/Disclaimer";
import CustomModal from "@/components/CustomModal";



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

  const getModalComponent = (title: any) => {
    if (title == 'How To Order') {
      return <HowToOrder />
    }
    if (title == 'Career') {
      return <Terms />
    }
    if (title == 'Terms and Conditions') {
      return <Terms />
    }
    if (title == 'CustomerFAQ') {
      return <CustomerFAQ />
    }
    if (title == 'Disclaimer') {
      return <Disclaimer />
    }
    return null;
  }

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
              <img src={'/assets/vmilogo.webp'} className="h-16 rounded-md" alt="vmilogo" />
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
              {/* (+91) 952-906-7763
              <br />  */}
              support@visionarymarketinsights.com
            </div>
          </div>
        </div>
      </div>
      <div className="px-12 py-4 text-white bg-[#4E5763] flex flex-col md:flex-row justify-between">
        <div className="text-center md:text-left">
          Copyright © Visionary Market Insights, All Rights reserved
        </div>
        <img src="https://www.transparencymarketresearch.com/assets/images/paypalLogo.svg" className="h-6" alt="" />
      </div>
      <CustomModal open={detailsOpen} handleClose={handleDetailsClose} title={details.title} isModalCustomSize={true} component={getModalComponent(details.title)} />
    </div>
  );
};

export default Footer;


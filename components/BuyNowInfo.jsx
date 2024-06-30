
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ReturnPolicy from '@/components/ReturnPolicy';
import Terms from '@/components/Terms';
import Privacy from '@/components/Privacy';
import CustomModal from '@/components/CustomModal';
import React, { useState } from 'react'
export default function BuyNowInfo() {

  const detailsList = [
    {
      id: 1,
      title: 'Return Policy',
    },
    {
      id: 2,
      title: 'Terms & Conditions',
    },
    {
      id: 3,
      title: 'Privacy',
    },
  ]


  const [detailsOpen, setDetailsOpen] = useState(false);
  const [details, setDetails] = useState(detailsList[0]);
  const handleDetailsOpen = (title) => {
    setDetails(detailsList.find(r => r.title === title))
    setDetailsOpen(true)
  };
  const handleDetailsClose = () => setDetailsOpen(false);

  return (
    <>
      {detailsList.map((r, i) => {
        return <div key={i} onClick={() => handleDetailsOpen(r.title)} className={`px-3 cursor-pointer ${r.id < 3 && 'border-r-2'} `}>{r.title}</div>
      })}
      <CustomModal open={detailsOpen} handleClose={handleDetailsClose} title={details.title} isModalCustomSize={false} component={details.title === 'Return Policy' ? <ReturnPolicy /> : details.title === 'Terms & Conditions' ? <Terms /> : <Privacy />}/>
    </>
  )
}

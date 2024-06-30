'use client'
import RequestSample from '@/components/RequestSample';
import CustomModal from '@/components/CustomModal';
import React, { useState } from 'react'

export default function PressReleaseRequestSample({ reportTitle, pressReleaseTitle }) {

    const [formOpen, setFormOpen] = useState(false);
    const enquiryType = 'Request Sample';
    const handleFormOpen = () => setFormOpen(true);
    const handleFormClose = () => setFormOpen(false);

    return (
        <>
            <button onClick={handleFormOpen} className="gap-4 font-semibold bg-[#9A1750] text-white transition-all codepen-button w-44 ">
                <span className='flex items-center justify-center py-2'>
                    {enquiryType}
                </span>
            </button>
            <CustomModal open={formOpen} onClose={handleFormClose} title={enquiryType} isModalCustomSize={true} component={<RequestSample reportTitle={reportTitle} pressReleaseTitle={pressReleaseTitle} />} />
        </>
    )
}

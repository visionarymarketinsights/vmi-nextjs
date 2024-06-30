'use client'
import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export default function CustomModal({open, handleClose, title, component, isModalCustomSize}) {
    return (
        
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box>
                <div className='flex items-center justify-center md:flex-row'>
                    <div className=' m-2 p-2 md:p-6 w-[350px] md:w-[700px] rounded-md bg-white'>
                        <div className="flex justify-between pb-2 mb-2 text-xl font-semibold text-center md:flex-row">
                            <div>{title}</div>
                            <svg height={24} width={24} onClick={handleClose} className="cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#1C274C" /> </g></svg>
                        </div>
                        <div className={`overflow-auto text-sm md:text-md ${!isModalCustomSize && 'h-[82vh]'}`}>
                            {component}
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

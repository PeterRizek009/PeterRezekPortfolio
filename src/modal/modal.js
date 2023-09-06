import React, { useEffect, useState } from 'react';


const Modal = ({ message, show }) => {

  console.log(message);
    const[dispaly , setDisaply] =  useState(show);


    useEffect(() => {
        const delay = 3000; // Delay in milliseconds

        const timeoutId = setTimeout(() => {
            setDisaply(false);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, []);

    const showHideClassName = dispaly ? "fixed top-0 inset-0 z-10 overflow-y-auto" : "hidden";


    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className={showHideClassName}>
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-slate-500 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="flex flex-col justify-center items-center">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <svg className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                    </svg>
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">{message}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
}

export default Modal;
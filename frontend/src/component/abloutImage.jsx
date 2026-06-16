/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from "react-router-dom";

import about01 from '../assets/images/business/about01.jpg';
import about02 from '../assets/images/business/about02.jpg';


export default function AboutImage({grid}){
    const [isOpen, setOpen] = useState(false);
    return(
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className={grid}>
                <div className="relative lg:me-8">
                    <img src={about01} className="rounded-md" alt="" />

                    <div className="absolute bottom-24 end-0">
                        <img src={about02} className="rounded-md shadow-md size-48" alt="" />
                        <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                            <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610"
                                className="lightbox size-14 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600">
                                <i className="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && 
                <div className="flex bg-[#00000099] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-1 w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                            <div className="flex items-center justify-between p-1 border-b rounded-t dark:border-gray-600 border-gray-200">
                                <button type="button" onClick={()=>setOpen(!isOpen)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-1 md:p-1 space-y-4">
                                <iframe width="100%" height="400" src="https://www.youtube.com/embed/yba7hPeTSjk?playlist=yba7hPeTSjk&loop=1"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                }

            <div className="md:col-span-6">
                <div className="lg:ms-5">
                    <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Our History</h6>
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">“Sweet as the Moment When <br /> the coworking Went &apos;Pop”</h3>

                    <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                    <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Get Started</Link>
                </div>
            </div>
        </div>
    )
}
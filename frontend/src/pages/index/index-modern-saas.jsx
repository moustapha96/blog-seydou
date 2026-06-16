import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import logo_icon_40 from '../../assets/images/logo-icon-40.png';
import video from '../../assets/images/modern.mp4';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import UserFeedBack from '../../component/userFeedBack';
import CookieModal from '../../component/cookieModal';
import AboutOne from '../../component/aboutOne';
import AboutTwo from '../../component/aboutTwo';
import PricingOne from '../../component/pricingOne';
import GetInTuch from '../../component/getInTuch';

import * as Icon from 'react-feather';
import CountUp from 'react-countup';

import { accordionData } from '../../data/dataTwo';
import { FaArrowRight } from 'react-icons/fa';
import { HiArrowTrendingDown } from 'react-icons/hi2';

export default function IndexModernSaas() {

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });

    let [isOpen, setOpen] = useState(false)
    let [activeIndex, setActiveIndex] = useState(0);

    let toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index);
        }
    }

    return (
        <>
            <Navbar />
            <section className="relative table w-full py-36 overflow-hidden bg-gradient-to-b to-transparent from-indigo-600/20 dark:from-indigo-600/40">
                <div className="container relative">
                    <div className="relative grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                        <div className="md:col-span-6">
                            <div className="md:me-8">
                                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white relative">Easy way to <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-600 relative inline-block"><span className="relative text-white">manage</span></span> your over work</h4>
                                <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                <div className="subcribe-form mt-6 mb-3">
                                    <form className="relative max-w-xl">
                                        <input type="email" id="subcribe" name="email" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800" placeholder="Your Email Address :" />
                                        <button type="submit" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Try it for free <FaArrowRight className="ms-2 text-[10px]"/></button>
                                    </form>
                                </div>

                                <span className="text-slate-400 font-medium">Looking for help? <Link to="#" className="text-indigo-600">Get in touch with us</Link></span>
                            </div>
                        </div>

                        <div className="md:col-span-6">
                            <div className="relative">
                                <div className="relative rounded-xl overflow-hidden shadow-md dark:shadow-gray-800">
                                    <div className="w-full py-72 bg-slate-400 bg-[url('../../assets/images/saas/home.jpg')] bg-cover bg-no-repeat bg-top jarallax" data-jarallax data-speed="0.5"></div>
                                </div>

                                <div className="absolute flex justify-between items-center md:bottom-10 bottom-5 md:-start-16 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
                                    <div className="flex items-center">
                                        <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-indigo-600/5 text-indigo-600 text-center rounded-full me-3">
                                            <Icon.Monitor className="size-6"></Icon.Monitor>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="text-slate-400">Visitor</h6>
                                            <p className="text-xl font-bold"><CountUp className="counter-value" end={4589} start={2100} /></p>
                                        </div>
                                    </div>

                                    <span className="text-red-600 flex items-center"><HiArrowTrendingDown className="me-1"/> 0.5%</span>
                                </div>

                                <div className="absolute xl:top-20 top-40 xl:-end-20 lg:-end-10 -end-1 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
                                    <h5 className="text-xl font-semibold mb-3">Manage Your Software</h5>
                                    <div className="flex justify-between mt-3 mb-2">
                                        <span className="text-slate-400">Work in progress</span>
                                        <span className="text-slate-400">84%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                        <div className="bg-indigo-600 h-[6px] rounded-full" style={{ "width": "84%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative md:pb-24 pb-16 overflow-hidden">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <div className="flex items-center justify-center rounded-full mx-auto bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 size-[110px]">
                            <img src={logo_icon_40} className="block mx-auto" alt="" />
                        </div>
                        <h3 className="mb-6 mt-8 md:text-4xl text-3xl md:leading-normal leading-normal font-bold">The best customer relationship <br /> management platform for just <br /> about <span className="after:absolute after:end-0  after:start-0  after:bottom-1 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/30 relative text-indigo-600">everything.</span></h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid mt-8">
                        <div className="relative overflow-hidden rounded-lg shadow-md dark:shadow-gray-800">
                            <video controls autoPlay loop>
                                <source src={video} type="video/mp4" />
                            </video>

                            <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="lightbox lg:h-20 h-16 lg:w-20 w-16 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 hover:bg-indigo-600 dark:hover:bg-indigo-600 text-indigo-600 hover:text-white duration-500 ease-in-out mx-auto">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-3xl"></i>
                                </Link>
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
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Why Everyone Loves Techwind</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <AboutOne/>
                </div>

                <AboutTwo/>

                <div className=" md:mt-24 mt-16" >
                  <UserFeedBack />
               </div>
                <div className="container relative md:mt-24 mt-16">
                    <PricingOne/>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="relative grid md:grid-cols-12 grid-cols-1 items-center mt-8 gap-[30px]">
                        <div className="md:col-span-6">
                            <div className="relative">
                                <div className="relative rounded-xl overflow-hidden shadow-md dark:shadow-gray-800">
                                    <div className="w-full py-72 bg-slate-400 bg-[url('../../assets/images/saas/cta.jpg')] bg-no-repeat bg-top bg-cover jarallax" data-jarallax data-speed="0.5"></div>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-6">
                            <div id="accordion-collapse">
                                {accordionData.slice(0,5).map((item, index) => (
                                    <div key={index} className="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                        <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                            <button type="button" onClick={() => toggleAccordion(index)} className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === index ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''}`} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                                <span>{item.title}</span>
                                                <svg data-accordion-icon className={`${activeIndex === index ? "rotate-180" : "rotate-270" } size-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </h2>
                                        {activeIndex === index && (
                                            <div>
                                                <div className="p-5">
                                                    <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <GetInTuch/>
            </section>

            <Footer />
            <CookieModal />
        </>
    )
}

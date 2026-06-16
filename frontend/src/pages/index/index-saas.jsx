import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import classic01 from '../../assets/images/saas/classic01.png';
import home from '../../assets/images/saas/home.png';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import UserFeedBack from '../../component/userFeedBack';
import Blog2 from '../../component/blog2';
import CookieModal from '../../component/cookieModal';
import CompanyLogo from '../../component/companyLogo';
import KeyFeature from '../../component/keyFeature';
import PricingOne from '../../component/pricingOne';

import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

import AOS from "aos";
import "aos/dist/aos.css";
import AboutThree from '../../component/aboutThree';
import AboutFour from '../../component/aboutFour';


export default function IndexSaas() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')

        AOS.init({
            duration : 700
        });

    });

    let [isOpen, setOpen] = useState(false)
    return (
        <>
            <Navbar />
            <section className="relative before:content-[''] before:absolute xl:before:-top-[30%] lg:before:-top-[50%] sm:before:-top-[80%] before:-top-[90%] before:-start-80 before:end-0 before:w-[140rem] before:h-[65rem] ltr:before:-rotate-12 rtl:before:rotate-12 before:bg-indigo-600/5 dark:before:bg-indigo-600/10 before:z-1 items-center overflow-hidden">
                <div className="container relative z-2">
                    <div className="grid grid-cols-1 md:mt-44 mt-32 text-center">
                        <div className="" data-aos="fade-up">
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Build fast, Released quickly.</h4>
                            <p className="text-slate-400 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise
                                on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                            <div className="mt-6">
                                <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Try For Free</Link>

                                <p className="text-slate-400 text-sm mt-3">No credit card required. Free 14-days trial</p>
                            </div>
                        </div>
                        <div className="home-dashboard mt-8 z-3 " data-aos="zoom-in">
                            <img src={classic01} alt="" className="mover" />
                        </div>
                    </div>

                    <div className="bg-indigo-600 w-8 h-16 z-2 absolute start-2 lg:bottom-28 md:bottom-36 sm:bottom-40 bottom-16"></div>
                    <div className="bg-indigo-600/20 w-8 h-16 z-2 absolute start-12 lg:bottom-32 md:bottom-40 sm:bottom-44 bottom-20"></div>

                    <div className="bg-indigo-600/20 w-8 h-16 z-2 absolute end-12 xl:bottom-[420px] lg:bottom-[315px] md:bottom-[285px] sm:bottom-80 bottom-32"></div>
                    <div className="bg-indigo-600 w-8 h-16 z-2 absolute end-2 xl:bottom-[440px] lg:bottom-[335px] md:bottom-[305px] sm:bottom-[340px] bottom-36"></div>
                </div>
            </section>

            <section className="py-6">
                <div className="container relative" data-aos="fade-up" data-aos-delay="300">
                    <CompanyLogo/>
                </div>
            </section>

            <section className="relative md:py-24 py-16 overflow-hidden">
                 <div className="container ">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold" data-aos="fade-up" data-aos-delay="300">Key Features</h3>

                        <p className="text-slate-400 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="400">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                    <div data-aos="fade-up">
                        <KeyFeature />
                    </div>

                    <div className="grid grid-cols-1 justify-center" data-aos="fade-up" data-aos-delay="200">
                        <div className="mt-6 text-center">
                            <Link className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <MdArrowForward className="text-base ms-1"/></Link>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold" data-aos="fade-up">Why Everyone Loves Techwind</h3>

                        <p className="text-slate-400 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="200">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                    
                    <AboutThree/>
                </div>

                <AboutFour/>

                <div className=" md:mt-24 mt-16" data-aos="fade-up" data-aos-delay="300">
                  <UserFeedBack />
               </div>
            </section>

            <section className="relative md:py-24 py-16 md:pt-0 pt-0">
                <div className="container relative">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="relative z-1">
                            <div className="grid grid-cols-1 md:text-start text-center justify-center">
                                <div className="relative">
                                    <img src={home} alt="" data-aos="zoom-in-up"/>
                                    <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                        <Link to="#" onClick={() => setOpen(true)}
                                            className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
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

                            <div className="content md:mt-8">
                                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                    <div className="lg:col-start-2 lg:col-span-10">
                                        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                                            <div className="mt-8">
                                                <div className="section-title text-md-start" data-aos="zoom-in-right" data-aos-delay="300">
                                                    <h6 className="text-white/50 text-lg font-semibold">Get Free Trial</h6>
                                                    <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">Get An Easy Start <br /> With Techwind Now</h3>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="section-title text-md-start" data-aos="zoom-in-left" data-aos-delay="300">
                                                    <p className="text-white/50 max-w-xl mx-auto mb-2">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                                    <Link to="#" className="text-white inline-flex items-center">Read More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-indigo-500 to-indigo-600"></div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative" data-aos="fade-up" data-aos-delay="300">
                  <PricingOne/>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                    <Blog2 className={"container relative md:mt-24 mt-16"} />
                </div>
            </section>

            <Footer />
            <CookieModal />
        </>
    )
}

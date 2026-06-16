import {useEffect, useState} from 'react'
import { Link } from "react-router-dom";

import Navbar from '../../component/Navbar/navbar'
import CompanyLogo from "../../component/companyLogo";
import WhoWeAre from "../../component/whoWeAre";
import PricingOne from '../../component/pricingOne';
import UserFeedBack from '../../component/userFeedBack';
import Blog from '../../component/blog';
import MobileApp from '../../component/mobileApp';
import Footer from '../../component/Footer/footer';

import hero1 from '../../assets/images/cowork/1.jpg'
import hero2 from '../../assets/images/cowork/10.jpg'
import hero3 from '../../assets/images/cowork/2.jpg'
import hero4 from '../../assets/images/cowork/4.jpg'
import hero5 from '../../assets/images/cowork/9.jpg'
import hero6 from '../../assets/images/cowork/5.jpg'
import hero7 from '../../assets/images/business/bg02.jpg'
import Cta from '../../assets/images/cta-bg.jpg'

import { aboutFive } from "../../data/dataFive";

import { FiChevronRight, FiHexagon } from 'react-icons/fi';

export default function LandingSix(){
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });

    return(
        <>
        <Navbar/>
        <section className="relative md:pt-44 py-36 bg-slate-50 dark:bg-slate-800" id="home">
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center text-center">
                    <div className="">
                        <h1 className="font-bold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl capitalize mb-5">Qualified Business Consultancy</h1>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                    
                        <div className="subcribe-form mt-6 mb-3">
                            <form className="relative max-w-xl mx-auto">
                                <input type="email" id="emailid" name="email" className="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/60 dark:bg-slate-900/60 shadow-sm dark:shadow-gray-800" placeholder="yourname@domain.com"/>
                                <button type="submit" className="absolute top-[2px] end-[3px] h-[46px] py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">Subscribe Now</button>
                            </form>
                        </div>

                        <span className="font-medium">Looking for help? <Link to="" className="text-indigo-600">Get in touch with us</Link></span>
                    </div>

                    <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 lg:gap-4 gap-2 mx-auto mt-8 items-center">
                        <div className="lg:col-span-4">
                            <div className="grid grid-cols-2 gap-4 items-center">
                                <div className="">
                                    <div className="grid grid-cols-1 gap-4">
                                        <img src={hero1} className="shadow-sm rounded-lg" alt=""/>
                                    </div>
                                </div>
    
                                <div className="">
                                    <div className="grid grid-cols-1 gap-4">
                                        <img src={hero2} className="shadow-sm rounded-lg" alt=""/>
                                        <img src={hero3} className="shadow-sm rounded-lg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <img src={hero7} className="shadow-sm rounded-lg" alt=""/>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="grid grid-cols-2 gap-4 items-center">
                                <div className="">
                                    <div className="grid grid-cols-1 gap-4">
                                        <img src={hero4} className="shadow-sm rounded-lg" alt=""/>
                                        <img src={hero5} className="shadow-sm rounded-lg" alt=""/>
                                    </div>
                                </div>
    
                                <div className="">
                                    <div className="grid grid-cols-1 gap-4">
                                        <img src={hero6} className="shadow-sm rounded-lg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-6 border-b border-gray-100 dark:border-gray-700">
            <div className="container relative">
                <CompanyLogo/>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <WhoWeAre/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What we do ?</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {aboutFive.map((item,index) =>{
                        let Icon = item.icon
                        return(
                            <div key={index} className="group relative p-6 shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 duration-500 rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <FiHexagon className="size-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"></FiHexagon>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white duration-500 text-3xl flex align-middle justify-center items-center">
                                        <Icon className=""></Icon>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <Link to="" className="text-lg font-medium group-hover:text-white duration-500">{item.title}</Link>
                                    <p className="text-slate-400 group-hover:text-white/50 duration-500 mt-3">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 md:pt-0 pt-0">
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative z-1">
                        <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                            <div className="lg:col-start-2 lg:col-span-10">
                                <div className="relative">
                                    <img src={Cta} className="rounded-md shadow-lg" alt=""/>
                                    <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                        <Link to="#!" onClick={() => setOpen(true)} 
                                            className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                        </Link>
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
                            </div>
                        </div>
                        <div className="content md:mt-8">
                            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                <div className="lg:col-start-2 lg:col-span-10">
                                    <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                                        <div className="mt-8">
                                            <div className="section-title text-md-start">
                                                <h6 className="text-white/50 text-lg font-semibold">Team</h6>
                                                <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">Meet Experience <br/> Team Member</h3>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="section-title text-md-start">
                                                <p className="text-white/50 max-w-xl mx-auto mb-2">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                                <Link to="" className="text-white inline-flex items-center">Read More <FiChevronRight className="align-middle"></FiChevronRight></Link>
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
            <div className="container relative">
                <PricingOne/>
            </div>

            <div className="md:mt-24 mt-16">
                <UserFeedBack/>
            </div>

            <Blog className="container relative md:mt-24 mt-16 mb-16"/>

            <MobileApp/>
        </section>
        <Footer/>

        </>
    )
}
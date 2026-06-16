import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import home from '../../assets/images/saas/home.png';
import shape_image from '../../assets/images/shape-image.png';
import classic02 from '../../assets/images/saas/classic02.png';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import CookieModal from '../../component/cookieModal';
import MobileApp from '../../component/mobileApp';
import CompanyLogo from '../../component/companyLogo';
import AboutTwo from '../../component/aboutTwo';

import * as Icon from 'react-feather';

import TinySlider from 'tiny-slider-react';

import { accordionData } from '../../data/dataTwo';
import { feedback } from '../../data/data';
import { hostingAbout } from '../../data/dataFour';
import { FaArrowRight, FaRegComments } from 'react-icons/fa';
import { MdAirplay, MdApi, MdKeyboardArrowRight } from 'react-icons/md';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import { BsCheckCircle } from 'react-icons/bs';

export default function IndexSoftware() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });

    let settings = {
        container: '.tiny-single-item',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 16,
    }
    let [activeIndex, setActiveIndex] = useState(1);

    let toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index);
        }
    }

    let accordionData1 = accordionData.filter((x) => x.id < 5);
    let accordionData2 = accordionData.filter((x) => x.id > 4)

    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="relative md:h-screen md:py-0 py-36 items-center overflow-hidden bg-indigo-600 bg-[url('../../assets/images/bg3.png')] bg-center bg-no-repeat bg-cover">
                <div className="container relative">
                    <div className="grid grid-cols-1 md:mt-36 mt-10 text-center">
                        <h4 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Integrated Techwind <span className="text-orange-500">Software <br /> & Saas</span> Plateform </h4>
                        <p className="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise
                            on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                        <div className="subcribe-form mt-6 mb-3">
                            <form className="relative max-w-xl mx-auto">
                                <input type="email" id="subcribe" name="email" className="form-input border-0 pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800" placeholder="Your Email Address :" />
                                <button type="submit" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-full">Try it for free <FaArrowRight className="ms-2 text-[10px]"/></button>
                            </form>
                        </div>

                        <span className="text-slate-400 font-medium">Looking for help? <Link className="text-orange-500">Get in touch with us</Link></span>

                        <div className="overflow-hidden mt-8">
                            <img src={home} alt="" />
                        </div>

                        <div className="overflow-hidden after:content-[''] after:absolute after:h-14 after:w-14 after:bg-white/20 after:-top-[40px] after:start-[30%] after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>

                        <div className="overflow-hidden after:content-[''] after:absolute after:size-10 after:bg-white/20 after:top-[30%] after:end-[20%] after:rounded-full after:animate-ping"></div>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700">
                <div className="container relative">
                    <CompanyLogo/>
                </div>
            </section>

            <section className="relative md:py-24 py-16 overflow-hidden">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">How It Works?</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">

                        <div className="group relative hover:bg-white dark:hover:bg-slate-900 hover:shadow-sm dark:hover:shadow-gray-800 p-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center h-fit">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Icon.Hexagon className="size-28 fill-indigo-600/5 dark:fill-white/5 mx-auto rotate-[30deg]"></Icon.Hexagon>
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 dark:text-white rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                    <MdAirplay className="size-7"/>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">UX / UI Design</Link>
                                <p className="text-slate-400 transition duration-500 ease-in-out mt-3">If the distribution of letters and &apos;words&apos; is random, the reader will not be distracted from making.</p>
                            </div>
                        </div>

                        <div className="group relative hover:bg-white dark:hover:bg-slate-900 hover:shadow-sm dark:hover:shadow-gray-800 p-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center h-fit md:mt-16">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Icon.Hexagon className="size-28 fill-indigo-600/5 dark:fill-white/5 mx-auto rotate-[30deg]"></Icon.Hexagon>
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 dark:text-white rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                    <MdApi className="size-7"/>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">IOS App Designer</Link>
                                <p className="text-slate-400 transition duration-500 ease-in-out mt-3">If the distribution of letters and &apos;words&apos; is random, the reader will not be distracted from making.</p>
                            </div>
                        </div>

                        <div className="group relative hover:bg-white dark:hover:bg-slate-900 hover:shadow-sm dark:hover:shadow-gray-800 p-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center h-fit">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Icon.Hexagon className="size-28 fill-indigo-600/5 dark:fill-white/5 mx-auto rotate-[30deg]"></Icon.Hexagon>
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 dark:text-white rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle 
                                justify-center items-center">
                                    <HiOutlineCog6Tooth className="size-7"/>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">Web Security</Link>
                                <p className="text-slate-400 transition duration-500 ease-in-out mt-3">If the distribution of letters and &apos;words&apos; is random, the reader will not be distracted from making.</p>
                            </div>
                        </div>

                        <div className="group relative hover:bg-white dark:hover:bg-slate-900 hover:shadow-sm dark:hover:shadow-gray-800 p-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center h-fit md:mt-16">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Icon.Hexagon className="size-28 fill-indigo-600/5 dark:fill-white/5 mx-auto rotate-[30deg]"></Icon.Hexagon>
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 dark:text-white rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                    <FaRegComments className="size-7"/>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">24/7 Support</Link>
                                <p className="text-slate-400 transition duration-500 ease-in-out mt-3">If the distribution of letters and &apos;words&apos; is random, the reader will not be distracted from making.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                        <img src={shape_image} alt="" />

                        <div className="lg:ms-8">
                            <h4 className="mb-4 text-2xl leading-normal font-medium">Great Product Analytics <br /> With Real Problem</h4>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                            <ul className="list-none text-slate-400 mt-4">
                                <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                            </ul>

                            <div className="mt-4">
                                <Link to="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                            </div>
                        </div>
                    </div>
                </div>

               <AboutTwo/>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                        <div className="relative">
                            <img src={classic02} className="rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                            <div className="overflow-hidden absolute lg:size-[400px] size-[320px] bg-indigo-600/5 bottom-0 start-0 rotate-45 -z-1 rounded-3xl"></div>
                        </div>

                        <div className="lg:ms-8">
                            <div className="grid grid-cols-1 gap-[30px]">
                                {hostingAbout.map((item,index)=>{
                                    const Icons = item.icon
                                    return(
                                        <div key={index} className="group flex items-center relative overflow-hidden p-6 rounded-md shadow-sm dark:shadow-gray-800 bg-gray-50 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 duration-500">
                                            <span className="text-indigo-600 group-hover:text-white text-5xl font-semibold duration-500">
                                                <Icons className="size-8"/>
                                            </span>
                                            <div className="flex-1 ms-3">
                                                <h5 className="group-hover:text-white text-xl font-semibold duration-500">{item.title}</h5>
                                                <p className="text-slate-400 group-hover:text-white/50 duration-500 mt-2">{item.desc}</p>
                                            </div>
                                            <div className="absolute start-1 top-5 text-slate-900/[0.03] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.04] duration-500">
                                                <Icons className="size-20"/>
                                            </div>
                                        </div>

                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">What Our Client Say ?</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="flex justify-center relative mt-16">
                        <div className="relative lg:w-1/3 md:w-1/2 w-full">
                            <div className="absolute -top-20 md:-start-24 -start-0">
                                <i className="mdi mdi-format-quote-open text-9xl opacity-5"></i>
                            </div>

                            <div className="absolute bottom-28 md:-end-24 -end-0">
                                <i className="mdi mdi-format-quote-close text-9xl opacity-5"></i>
                            </div>

                            <div className="tiny-single-item">
                                <TinySlider settings={settings}>
                                    {feedback.map((item, index) => {
                                       return (
                                            <div className="tiny-slide" key={index}>
                                                <div className="text-center">
                                                    <p className="text-lg text-slate-400 italic"> {item.description} </p>
    
                                                    <div className="text-center mt-5">
                                                        <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                        </ul>
    
                                                        <img src={item.image} className="size-14 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt="" />
                                                        <h6 className="mt-2 font-semibold">{item.name}</h6>
                                                        <span className="text-slate-400 text-sm">{item.role}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </TinySlider>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Pricing Plans</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px] items-center">
                        <div className="p-6">
                            <div className="pb-8">
                                <h3 className="mb-6 text-xl font-medium dark:text-white">Free</h3>
                                <div className="mb-6 dark:text-white/50">
                                    <span className="relative h6 -top-5 text-xl">$</span>
                                    <span className="text-5xl h6 font-medium dark:text-white">00</span>
                                    <span className="inline-block h6 ml-1">/ month</span>
                                </div>
                                <p className="mb-6 text-slate-400">Free features for your business.</p>
                                <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md w-full">Redeem Now</Link>
                            </div>
                            <div className="border-b border-slate-200 dark:border-slate-200/5"></div>
                            <ul className="self-start pt-8">
                                <li className="flex items-center mb-1 text-slate-400 m-0">
                                    <BsCheckCircle className="text-indigo-600 text-base me-2"/>
                                    <span>Complete documentation</span>
                                </li>
                                <li className="flex items-center my-1 text-slate-400 m-0">
                                    <BsCheckCircle className="text-indigo-600 text-base me-2"/>
                                    <span>Working materials in Figma</span>
                                </li>
                                <li className="flex items-center my-1 text-slate-400 m-0">
                                    <BsCheckCircle className="text-indigo-600 text-base me-2"/>
                                    <span>100GB cloud storage</span>
                                </li>
                                <li className="flex items-center my-1 text-slate-400 m-0">
                                    <BsCheckCircle className="text-indigo-600 text-base me-2"/>
                                    <span>500 team members</span>
                                </li>
                                <li className="flex items-center my-1 text-slate-400 m-0">
                                    <BsCheckCircle className="text-indigo-600 text-base me-2"/>
                                    <span>Free Support</span>
                                </li>
                            </ul>
                        </div>

                        <div className="shadow-sm rounded-md p-6 bg-gradient-to-t bg-indigo-600">
                            <div className="pb-8">
                                <h3 className="mb-6 text-xl font-medium text-white">Business</h3>
                                <div className="mb-6 text-white/50">
                                    <span className="relative h6 -top-5 text-xl">$</span>
                                    <span className="text-5xl h6 font-bold text-white">10</span>
                                    <span className="inline-block h6 ml-1">/ month</span>
                                </div>
                                <p className="mb-6 text-white">Basic features for up to 10 users.</p>
                                <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-md w-full">Started Now</Link>
                            </div>
                            <div className="border-b border-slate-200/10"></div>
                            <ul className="self-start pt-8">
                                <li className="flex items-center mb-1 text-white/80 m-0">
                                    <BsCheckCircle className="text-orange-500 text-base me-2"/>
                                    <span>Complete documentation</span>
                                </li>
                                <li className="flex items-center my-1 text-white/80 m-0">
                                    <BsCheckCircle className="text-orange-500 text-base me-2"/>
                                    <span>Working materials in Figma</span>
                                </li>
                                <li className="flex items-center my-1 text-white/80 m-0">
                                    <BsCheckCircle className="text-orange-500 text-base me-2"/>
                                    <span>100GB cloud storage</span>
                                </li>
                                <li className="flex items-center my-1 text-white/80 m-0">
                                    <BsCheckCircle className="text-orange-500 text-base me-2"/>
                                    <span>500 team members</span>
                                </li>
                                <li className="flex items-center my-1 text-white/80 m-0">
                                    <BsCheckCircle className="text-orange-500 text-base me-2"/>
                                    <span>Free Support</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6">
                            <div className="pb-8">
                                <h3 className="mb-6 text-xl font-medium dark:text-white">Corporate</h3>
                                <div className="mb-6 dark:text-white/50">
                                    <span className="relative h6 -top-5 text-xl">$</span>
                                    <span className="text-5xl h6 font-medium dark:text-white">49</span>
                                    <span className="inline-block h6 ml-1">/ month</span>
                                </div>
                                <p className="mb-6 text-slate-400">Corporate features for up to 100 users.</p>
                                <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Signup Now</Link>
                            </div>
                            <div className="border-b border-slate-200 dark:border-slate-200/5"></div>
                            <ul className="self-start pt-8">
                                <li className="flex items-center mb-1 text-slate-400 m-0">
                                    <BsCheckCircle className="text-indigo-600 text-base me-2"/>
                                    <span>Complete documentation</span>
                                </li>
                                <li className="flex items-center my-1 text-slate-400 m-0">
                                    <BsCheckCircle className="text-indigo-600 text-base me-2"/>
                                    <span>Working materials in Figma</span>
                                </li>
                                <li className="flex items-center my-1 text-slate-400 m-0">
                                    <BsCheckCircle className="text-indigo-600 text-base me-2"/>
                                    <span>100GB cloud storage</span>
                                </li>
                                <li className="flex items-center my-1 text-slate-400 m-0">
                                    <BsCheckCircle className="text-indigo-600 text-base me-2"/>
                                    <span>500 team members</span>
                                </li>
                                <li className="flex items-center my-1 text-slate-400 m-0">
                                <BsCheckCircle className="text-indigo-600 text-base me-2"/>
                                    <span>Free Support</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div id="accordion-collapse" data-accordion="collapse" className="grid md:grid-cols-2 grid-cols-1 mt-8 md:gap-[30px]">
                        <div>
                            {accordionData1.map((item, index) => (
                                <div key={index} className="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                    <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                        <button type="button" onClick={() => toggleAccordion(item.id)} className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === item.id ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''}`} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span>{item.title}</span>
                                            <svg data-accordion-icon className={`${activeIndex === item.id ? "rotate-180" : "rotate-270" } size-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    {activeIndex === item.id && (
                                        <div>
                                            <div className="p-5">
                                                <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            ))}
                        </div>

                        <div>
                            {accordionData2.map((item, index) => (
                                <div key={index} className="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                    <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                        <button type="button" onClick={() => toggleAccordion(item.id)} className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === item.id ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''}`} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span>{item.title}</span>
                                            <svg data-accordion-icon className={`${activeIndex === item.id ? "rotate-180" : "rotate-270" } size-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    {activeIndex === item.id && (
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
                <MobileApp/>
            </section>

            <Footer />
            <CookieModal />
        </>
    )
}

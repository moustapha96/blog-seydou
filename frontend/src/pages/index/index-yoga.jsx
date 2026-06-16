import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import ab03 from '../../assets/images/yoga/ab03.jpg';
import ab02 from '../../assets/images/yoga/ab02.jpg';
import ab01 from '../../assets/images/yoga/ab01.jpg';
import cta from '../../assets/images/yoga/cta.jpg';

import Navbar from '../../component/Navbar/navbar'
import CookieModal from '../../component/cookieModal';
import FooterTwo from '../../component/Footer/footerTwo';

import TinySlider from 'tiny-slider-react';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import * as Icon from 'react-feather';

import { yogaImage,meditationData,yogaWork,yogaTimeTable,yogaTeam } from '../../data/dataFive';
import { FaArrowRight } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';

export default function IndexYoga() {

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });

    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    let [isOpenLightbox, setisOpen] = useState(false);
    let [isOpenTab, setisOpenTab] = useState(0);
    let [isOpen, setOpen] = useState(false)

    let settings = {
        container: '.tiny-twelve-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            1025: {
                items: 12
            },
    
            992: {
                items: 8
            },
    
            767: {
                items: 6
            },
    
            320: {
                items: 2
            },
        },
    }

    let handleTabClick = (index) => {
        setisOpenTab(index);
    };

    const slides = yogaImage.map((image) => ({ src: image }));

    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };
    return (
        <>
            <Navbar navClass="nav-light" />
            <section className="relative lg:pt-64 py-36 bg-[url('../../assets/images/yoga/bg.jpg')] bg-center bg-cover">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/70 z-2"></div>
                <div className="container relative z-3">
                    <div className="grid grid-cols-1 mt-24">
                        <div className="text-center">
                            <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="lightbox size-24 rounded-full inline-flex items-center justify-center bg-white/10 hover:bg-white/40 text-white dark:bg-slate-900/10 dark:hover:bg-slate-900/40 transition-all duration-500">
                                <i className="mdi mdi-play inline-flex items-center justify-center text-3xl"></i>
                            </Link>

                            <h4 className="font-bold text-white text-2xl mt-6">Body & Mind</h4>
                            <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Fitness Classes for Every Goal</h1>
                            <p className="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                            <div className="mt-8">
                                <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Join Our Classes</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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

            <section className="relative overflow-hidden md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="grid grid-cols-12 gap-6 items-center relative">
                                <div className="col-span-6">
                                    <div className="grid grid-cols-1 gap-6">
                                        <img src={ab03} className="shadow-sm rounded-md" alt="" />
                                        <img src={ab02} className="shadow-sm rounded-md" alt="" />
                                    </div>
                                </div>

                                <div className="col-span-6">
                                    <div className="grid grid-cols-1 gap-6">
                                        <img src={ab01} className="shadow-sm rounded-md" alt="" />
                                    </div>
                                </div>
                                <div className="overflow-hidden after:content-[''] after:absolute after:size-[512px] after:bg-indigo-600/5 after:top-0 after:-end-5 after:-z-1 after:rounded-full"></div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 md:col-span-6">
                            <div className="lg:ms-5">
                                <h3 className="mb-6 md:text-4xl md:leading-normal text-3xl leading-normal font-semibold">The Techwind Yoga <br /> & Meditation</h3>

                                <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with &apos;real&apos; content.</p>

                                <div className="mt-6">
                                    <Link to="#" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 font-semibold text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Learn more <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-center">
                        <div className="md:col-span-6">
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Most Popular Meditation Therapy</h3>
                        </div>

                        <div className="md:col-span-6">
                            <p className="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mt-8 gap-[30px]">
                        {meditationData.map((item,index)=>{
                            let Icon = item.Icon
                            return(
                                <div key={index} className="group rounded-md shadow-md dark:shadow-gray-800 relative overflow-hidden">
                                    <img src={item.image} className="" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-t to-transparent via-slate-900/60 group-hover:via-slate-900/40 from-slate-900 top-3/4 group-hover:top-0 transition-all duration-500"></div>

                                    <div className="absolute bottom-0 mx-auto start-0 end-0 group-hover:bottom-0 transition-all duration-500 px-6 pb-6 text-center">
                                        <Icon className="size-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 mx-auto"></Icon>

                                        <div className="mt-6">
                                            <Link to="#" className="text-xl font-semibold text-white transition-all duration-500">{item.title}</Link>

                                            <p className="text-white/50 hidden group-hover:block transition-all duration-500 ease-in-out mt-4">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">How It Work ?</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {yogaWork.map((item,index)=>{
                            return(
                                <div key={index} className="group relative lg:px-6 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                                    <div className="relative overflow-hidden text-transparent -m-3">
                                        <Icon.Hexagon className="size-32 fill-indigo-600/5 mx-auto"></Icon.Hexagon>
                                        <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                            <img src={item.image} className="size-14" alt="" />
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Link to="#" className="text-xl font-medium transition-all duration-500 ease-in-out hover:text-indigo-600">{item.title}</Link>
                                        <p className="text-slate-400 transition-all duration-500 ease-in-out mt-3">{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1">
                        <div className="relative overflow-hidden bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-700">
                            <div className="grid md:grid-cols-2 items-center gap-[30px]">
                                <div className="relative">
                                    <img src={cta} alt="" />
                                    <div className="absolute md:bottom-1/2 md:translate-y-1/2 md:-end-10 ltr:md:translate-x-0 rtl:md:translate-x-0 -bottom-10 end-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 text-center">
                                        <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-white p-4">
                                        <h4 className="leading-normal text-4xl mb-3 font-semibold">Check out some of our <br /> Yoga Poses Videos.</h4>

                                        <p className="text-white/70 text-lg max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                                        <ul className="list-none  text-white/50 mt-4">
                                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Digital Marketing Solutions for Tomorrow</li>
                                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 w-full table relative bg-[url('../../assets/images/yoga/bg02.jpg')] bg-center bg-fixed bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-slate-900/70"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-4 md:text-4xl text-3xl text-white font-semibold">Yoga is the journey of the self <br /> through the self</h3>

                        <p className="text-white/80 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                        <div className="mt-8">
                            <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Join Our Classes</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Yoga Schedule</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-5">
                            <div className="sticky top-20">
                                <ul className="flex-column text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(0)} className={`${isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} shadow-sm dark:shadow-gray-800 px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`}>Monday</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} shadow-sm dark:shadow-gray-800 px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`}>Tuesday</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(2)} className={`${isOpenTab === 2 ?'text-white bg-indigo-600 hover:text-white' : ''} shadow-sm dark:shadow-gray-800 px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`}>Wednesday</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(3)} className={`${isOpenTab === 3 ?'text-white bg-indigo-600 hover:text-white' : ''} shadow-sm dark:shadow-gray-800 px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`}>Thursday</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(4)} className={`${isOpenTab === 4 ?'text-white bg-indigo-600 hover:text-white' : ''} shadow-sm dark:shadow-gray-800 px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`}>Friday</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(5)} className={`${isOpenTab === 5 ?'text-white bg-indigo-600 hover:text-white' : ''} shadow-sm dark:shadow-gray-800 px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`}>Saturday</button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-8 md:col-span-7">
                            <div id="myTabContent" className="bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md">
                                {isOpenTab === 0 ?
                                    <div className="relative overflow-hidden">
                                        {yogaTimeTable.map((item,index)=>{
                                            return(
                                                <div key={index} className="md:flex items-center p-6 relative z-1">
                                                    <h5 className="text-xl font-semibold w-24">{item.time}</h5>

                                                    <div className="flex items-center md:ms-4 md:mt-0 mt-4">
                                                        <img src={item.image} className="size-10 rounded-full shadow-sm dark:shadow-gray-800" alt="" />

                                                        <div className="ms-4">
                                                            <h5 className="text-lg font-semibold">{item.title}</h5>

                                                            <p className="text-slate-400">{item.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                        <div className="absolute inset-0 bg-[url('../../assets/images/yoga/ab01.jpg')] bg-center bg-cover opacity-5"></div>
                                    </div>:""
                                }
                                {isOpenTab === 1 ?
                                    <div className="relative overflow-hidden">
                                        {yogaTimeTable.slice(0,5).map((item,index)=>{
                                            return(
                                                <div key={index} className="md:flex items-center p-6 relative z-1">
                                                    <h5 className="text-xl font-semibold w-24">{item.time}</h5>

                                                    <div className="flex items-center md:ms-4 md:mt-0 mt-4">
                                                        <img src={item.image} className="size-10 rounded-full shadow-sm dark:shadow-gray-800" alt="" />

                                                        <div className="ms-4">
                                                            <h5 className="text-lg font-semibold">{item.title}</h5>

                                                            <p className="text-slate-400">{item.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                        <div className="absolute inset-0 bg-[url('../../assets/images/yoga/ab02.jpg')] bg-center bg-cover opacity-5"></div>
                                    </div>:""
                                }
                                {isOpenTab === 2 ?
                                    <div className="relative overflow-hidden" >
                                        {yogaTimeTable.slice(0,5).map((item,index)=>{
                                            return(
                                                <div key={index} className="md:flex items-center p-6 relative z-1">
                                                    <h5 className="text-xl font-semibold w-24">{item.time}</h5>

                                                    <div className="flex items-center md:ms-4 md:mt-0 mt-4">
                                                        <img src={item.image} className="size-10 rounded-full shadow-sm dark:shadow-gray-800" alt="" />

                                                        <div className="ms-4">
                                                            <h5 className="text-lg font-semibold">{item.title}</h5>

                                                            <p className="text-slate-400">{item.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                        <div className="absolute inset-0 bg-[url('../../assets/images/yoga/ab03.jpg')] bg-center bg-cover opacity-5"></div>
                                    </div>:""
                                }
                                {isOpenTab === 3 ? 
                                    <div className="relative overflow-hidden">
                                        {yogaTimeTable.slice(0,4).map((item,index)=>{
                                            return(
                                                <div key={index} className="md:flex items-center p-6 relative z-1">
                                                    <h5 className="text-xl font-semibold w-24">{item.time}</h5>

                                                    <div className="flex items-center md:ms-4 md:mt-0 mt-4">
                                                        <img src={item.image} className="size-10 rounded-full shadow-sm dark:shadow-gray-800" alt="" />

                                                        <div className="ms-4">
                                                            <h5 className="text-lg font-semibold">{item.title}</h5>

                                                            <p className="text-slate-400">{item.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                        <div className="absolute inset-0 bg-[url('../../assets/images/yoga/i9.jpg')] bg-center bg-cover opacity-5"></div>
                                    </div>:""
                                }
                                {isOpenTab === 4 ? 
                                    <div className="relative overflow-hidden">
                                        {yogaTimeTable.slice(0,6).map((item,index)=>{
                                            return(
                                                <div key={index} className="md:flex items-center p-6 relative z-1">
                                                    <h5 className="text-xl font-semibold w-24">{item.time}</h5>

                                                    <div className="flex items-center md:ms-4 md:mt-0 mt-4">
                                                        <img src={item.image} className="size-10 rounded-full shadow-sm dark:shadow-gray-800" alt="" />

                                                        <div className="ms-4">
                                                            <h5 className="text-lg font-semibold">{item.title}</h5>

                                                            <p className="text-slate-400">{item.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                        <div className="absolute inset-0 bg-[url('../../assets/images/yoga/bg.jpg')] bg-center bg-cover opacity-5"></div>
                                    </div>:""
                                }
                                {isOpenTab === 5 ?
                                    <div className="relative overflow-hidden">
                                        {yogaTimeTable.slice(0,3).map((item,index)=>{
                                            return(
                                                <div key={index} className="md:flex items-center p-6 relative z-1">
                                                    <h5 className="text-xl font-semibold w-24">{item.time}</h5>

                                                    <div className="flex items-center md:ms-4 md:mt-0 mt-4">
                                                        <img src={item.image} className="size-10 rounded-full shadow-sm dark:shadow-gray-800" alt="" />

                                                        <div className="ms-4">
                                                            <h5 className="text-lg font-semibold">{item.title}</h5>

                                                            <p className="text-slate-400">{item.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                        <div className="absolute inset-0 bg-[url('../../assets/images/yoga/i11.jpg')] bg-center bg-cover opacity-5"></div>
                                    </div>:""
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Expert Teachers</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                        {yogaTeam.map((item,index)=>{
                            return(
                                <div key={index} className="lg:col-span-3 md:col-span-6">
                                    <div className="group text-center">
                                        <div className="relative inline-block mx-auto size-52 rounded-full overflow-hidden shadow-md dark:shadow-gray-800">
                                            <img src={item.image} className="" alt="" />
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black size-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                            <ul className="list-none space-x-1 absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out flex justify-center">
                                                <li><Link to="" className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook size-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></Link></li>
                                                <li><Link to="" className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram size-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></Link></li>
                                                <li><Link to="" className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin size-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></Link></li>
                                            </ul>
                                        </div>

                                        <div className="content mt-3">
                                            <Link to="" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.name}</Link>
                                            <p className="text-slate-400">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <div className="container-fluid relative">
                <div className="grid grid-cols-1 relative">
                    <div className="tiny-twelve-item">
                        <TinySlider settings={settings}>
                            {yogaImage.map((item, index) => (
                                <div className="tiny-slide" key={index}>
                                    <div className="card border-0 rounded-0">
                                        <div className="card-body p-0">
                                            <div className="lightbox d-inline-block" title="">
                                                <img src={item} className="" onClick={() => handleImageClick(index)} alt="Yoga Asana" />
                                                <div className="overlay bg-dark"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </TinySlider>

                    </div>

                    <Lightbox
                        open={isOpenLightbox}
                        close={() => setisOpen(false)}
                        slides={slides}
                        index={currentImageIndex} // Show the clicked image first
                    />

                    <div className="absolute top-2/4 -translate-y-2/4 start-2/4 ltr:-translate-x-2/4 rtl:translate-x-2/4 text-center hidden md:block">
                        <Link to="https://www.instagram.com/shreethemes/" target="_blank"className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Follow Now</Link>
                    </div>
                </div>
            </div>
            <FooterTwo/>
            <CookieModal />
        </>
    )
}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import imageP from '../../assets/images/hosting/2.png';
import image1 from '../../assets/images/hosting/1.png';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import UserFeedBack from '../../component/userFeedBack';
import CookieModal from '../../component/cookieModal';

import * as Icon from 'react-feather';
import TinySlider from 'tiny-slider-react';

import { hosting, hostingData,hostingServices,hostingAbout } from '../../data/dataFour';
import { BsCheckCircle } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';

const settings = {
    container: '.tiny-six-item',
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
            items: 6
        },
        
        992: {
            items: 4
        },
        
        767: {
            items: 3
        },
        
        320: {
            items: 1
        },
    },
}
export default function IndexHosting() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [isOpenTab, setisOpen] = useState(0);
    const [isOpenTab1, setisOpen1] = useState(0);
    const [isOpenTab2, setisOpen2] = useState(0);

    const handleTabClick = (index) => {
        setisOpen(index);
    };
    const handleTabClick1 = (index) => {
        setisOpen1(index);
    };
    const handleTabClick2 = (index) => {
        setisOpen2(index);
    };
    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index);
        }
    }

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });
    
    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="relative table w-full py-36 lg:py-52 bg-[url('../../assets/images/hosting/bg-hosting.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h5 className="text-lg text-white font-medium mb-3">Bring your ideas to life</h5>
                        <h3 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Powerful Web Hosting Services</h3>

                        <p className="text-slate-300 text-lg max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>

                        <div className="mt-8">
                            <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Get Started</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:py-24 py-16 pt-5">
                <div className="container-fluid relative">
                    <div className="grid grid-cols-1">
                        <div className="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[200px] -mt-[140px] m-0">
                            <div className="grid grid-cols-1 mt-8">
                                <div className="tiny-six-item">
                                    <TinySlider settings={settings}>
                                        {hostingServices.map((item, index) =>{
                                            return (
                                                <div className="tiny-slide" key={index}>
                                                    <Link className="group bg-white dark:bg-slate-900 block rounded-md overflow-hidden relative shadow-sm dark:shadow-gray-800 m-2">
                                                        <span className="p-4 block bg-white dark:bg-slate-900 text-center">
                                                            <img src={item.image} className="rounded-full shadow-md mx-auto size-16 mb-3" alt="" />
    
                                                            <span className="text-xl font-medium group-hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.extension}</span>
                                                            <span className="text-slate-400 block">{item.description}</span>
                                                        </span>
                                                        <span className={`p-4 block text-center ${item.background}`}>
                                                            <span className="text-white font-medium uppercase block">{item.sale}</span>
                                                            <span className="flex justify-center mt-2">
                                                                <span className="text-base text-white/70 font-semibold">$</span>
                                                                <span className="text-lg text-white font-semibold mx-1">{item.price}</span>
                                                                <span className="text-base text-white/70 font-semibold self-end">{item.time}</span>
                                                            </span>
                                                        </span>
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </TinySlider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 items-end">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Hosting Services</h3>
                        <p className="text-slate-400 max-w-xl">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {hosting.map((Data,index) => {
                            const Icons = Data.icon
                            return (
                                <div key={index} className="group relative p-6 shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                                    <div className="relative overflow-hidden text-transparent -m-3">
                                        <Icon.Hexagon className="size-24 fill-indigo-600/5 group-hover:fill-white/10"></Icon.Hexagon>
                                        <div className="absolute top-2/4 -translate-y-2/4 start-8 text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                            <Icons className="size-7"/>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Link className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">{Data.role}</Link>
                                        <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                        <div className="lg:col-span-6 md:order-2 order-1">
                            <div className="lg:ms-8">
                                <img src={imageP} alt="" />
                            </div>
                        </div>
                        <div className="lg:col-span-6 md:order-1 order-2">
                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Quick Responce <br /> and Secure Server</h3>
                            <p className="text-slate-400 max-w-xl">You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>

                            <ul className="list-none text-slate-400 mt-4  space-x-1">
                                <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                            </ul>

                            <div className="mt-4">
                                <Link to="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/> </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                        <div className="lg:col-span-6">
                            <div className="lg:me-8">
                                <img src={image1} alt="" />
                            </div>
                        </div>
                        <div className="lg:col-span-6">
                            <div className="grid grid-cols-1 gap-[30px]">
                                {hostingAbout.map((item,index)=>{
                                    let Icons = item.icon
                                    return(
                                        <div key={index} className="group flex items-center relative overflow-hidden p-6 rounded-md shadow-sm dark:shadow-gray-800 bg-gray-50 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out">
                                        <span className="text-indigo-600 group-hover:text-white text-5xl font-semibold transition-all duration-500 ease-in-out">
                                            <Icons className='size-10'/>
                                        </span>
                                        <div className="flex-1 ms-3">
                                            <h5 className="group-hover:text-white text-xl font-semibold transition-all duration-500 ease-in-out">{item.title}</h5>
                                            <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-2">{item.desc}</p>
                                        </div>
                                        <div className="absolute start-1 top-5 text-slate-900/[0.03] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.04] duration-500">
                                            <Icons className='size-20'/>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:pt-24 md:pb-36 pt-16 pb-24 bg-indigo-600">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">Hosting / Server Rates</h3>

                        <p className="text-slate-400 max-w-xl mx-auto text-white/70">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid grid-cols-1">
                        <div className="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[200px] -mt-[140px] m-0">
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                                <div className="group relative rounded-md overflow-hidden hover:shadow-sm dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out h-fit">
                                    <div className="p-6 py-8 border-b border-gray-100 dark:border-gray-700">
                                        <h5 className="text-lg font-semibold uppercase">Starter</h5>
                                        <p className="text-slate-400 mt-4">We offers a <b className="text-black dark:text-white">free month</b> of service for new customers.</p>
                                    </div>

                                    <div className="p-6 hosting-price">
                                        <ul className="inline-block flex-wrap justify-center text-center p-1 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-full" >
                                            <li className="inline-block">
                                                <button onClick={() => handleTabClick(0)} className={`${isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out`} id="dashboard-tab" >Monthly</button>
                                            </li>
                                            <li className="inline-block">
                                                <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out`} >Monthly</button>
                                                
                                            </li>
                                        </ul>

                                        <div id="StarterContent" className="mt-6">
                                            {isOpenTab === 0 ? 
                                                <div className="flex justify-center">
                                                    <span className="text-sm text-slate-400 font-semibold">$</span>
                                                    <span className="text-3xl font-semibold mx-1">3.99</span>
                                                    <span className="text-sm text-slate-400 font-semibold self-end">/month</span>
                                                </div>:""
                                            }
                                            {isOpenTab === 1 ? 
                                                <div className="flex justify-center">
                                                    <span className="text-sm text-slate-400 font-semibold">$</span>
                                                    <span className="text-3xl font-semibold mx-1">15.99</span>
                                                    <span className="text-sm text-slate-400 font-semibold self-end">/year</span>
                                                </div>:""
                                            }
                                        </div>

                                        <div className="mt-6">
                                            <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Add Cart</Link>
                                        </div>
                                    </div>

                                    <div className="py-3 px-2 bg-gray-50 dark:bg-slate-800">
                                        <p className="text-slate-400 mb-0">Great Start For A <b className="text-black dark:text-white">Single</b> Site.</p>
                                    </div>

                                    <div className="p-6 border-b border-gray-100 dark:border-gray-700 text-start">
                                        <ul className="list-none">
                                            <li className="text-slate-400 my-1 ml-0"><i className="mdi mdi-check me-2 text-emerald-600"></i><b className="text-black dark:text-white">1</b> Website</li>
                                            <li className="text-slate-400 my-1 ml-0"><i className="mdi mdi-check me-2 text-amber-500"></i><b className="text-black dark:text-white">1</b> Email Account</li>
                                            <li className="text-slate-400 my-1 ml-0"><i className="mdi mdi-check me-2 text-amber-500"></i><b className="text-black dark:text-white">Limited</b> Bandwidth (100 GB)</li>
                                            <li className="text-slate-400 my-1 ml-0"><i className="mdi mdi-check me-2 text-amber-500"></i><b className="text-black dark:text-white">1X Processing</b> Power &amp; Memory</li>
                                        </ul>
                                    </div>

                                    <div className="p-4">
                                        <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                                    </div>
                                </div>


                                <div className="group relative rounded-md overflow-hidden hover:shadow-sm dark:shadow-gray-800 hover:shadow-indigo-600 border-[3px] border-indigo-600 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out">
                                    <div className="p-6 py-8 border-b border-gray-100 dark:border-gray-700">
                                        <h5 className="text-lg font-semibold uppercase">Premium</h5>
                                        <p className="text-slate-400 mt-4">We offers a <b className="text-black dark:text-white">free month</b> of service for new customers.</p>
                                    </div>

                                    <div className="p-6 hosting-price">
                                        <ul className="inline-block flex-wrap justify-center text-center p-1 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-full" id="myTabtwo" data-tabs-toggle="#PremiumContent" role="tablist">
                                        <li className="inline-block">
                                                <button onClick={() => handleTabClick1(0)} className={`${isOpenTab1 === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out`} id="dashboard-tab" >Monthly</button>
                                            </li>
                                            <li className="inline-block">
                                                <button onClick={() => handleTabClick1(1)} className={`${isOpenTab1 === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out`} >Monthly</button>
                                            </li>
                                        </ul>

                                        <div id="PremiumContent" className="mt-6">
                                            {isOpenTab1 === 0 ? 
                                                <div className="flex justify-center">
                                                    <span className="text-sm text-slate-400 font-semibold">$</span>
                                                    <span className="text-3xl font-semibold mx-1">14.99</span>
                                                    <span className="text-sm text-slate-400 font-semibold self-end">/month</span>
                                                </div>:""
                                            }
                                            {isOpenTab1 === 1 ? 
                                                <div className="flex justify-center">
                                                    <span className="text-sm text-slate-400 font-semibold">$</span>
                                                    <span className="text-3xl font-semibold mx-1">149.99</span>
                                                    <span className="text-sm text-slate-400 font-semibold self-end">/year</span>
                                                </div>:""
                                            }
                                        </div>

                                        <div className="mt-6">
                                            <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Add Cart</Link>
                                        </div>
                                    </div>

                                    <div className="py-3 px-2 bg-gray-50 dark:bg-slate-800">
                                        <p className="text-slate-400 mb-0">More Sites & <b className="text-black dark:text-white">2X</b> Resources.</p>
                                    </div>

                                    <div className="p-6 border-b border-gray-100 dark:border-gray-700 text-start">
                                        <ul className="list-none">
                                            <li className="text-slate-400 my-1 ml-0"><i className="mdi mdi-check me-2 text-emerald-600"></i><b className="text-black dark:text-white">Unlimited</b> Number of Websites</li>
                                            <li className="text-slate-400 my-1 ml-0"><i className="mdi mdi-check me-2 text-emerald-600"></i><b className="text-black dark:text-white">Unlimited</b> Email Accounts</li>
                                            <li className="text-slate-400 my-1 ml-0"><i className="mdi mdi-check me-2 text-emerald-600"></i><b className="text-black dark:text-white">Unlimited</b> Bandwidth</li>
                                            <li className="text-slate-400 my-1 ml-0"><i className="mdi mdi-check me-2 text-amber-400"></i><b className="text-black dark:text-white">2X Processing</b> Power &amp; Memory</li>
                                        </ul>
                                    </div>

                                    <div className="p-4">
                                        <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                                    </div>

                                    <div className="p-4 bg-indigo-600">
                                        <p className="text-white text-sm">The most frequently chosen package</p>
                                    </div>
                                </div>


                                <div className="group relative rounded-md overflow-hidden hover:shadow-sm dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out h-fit">
                                    <div className="p-6 py-8 border-b border-gray-100 dark:border-gray-700">
                                        <h5 className="text-lg font-semibold uppercase">Business</h5>
                                        <p className="text-slate-400 mt-4">We offers a <b className="text-black dark:text-white">free month</b> of service for new customers.</p>
                                    </div>

                                    <div className="p-6 hosting-price">
                                        <ul className="inline-block flex-wrap justify-center text-center p-1 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-full" id="myTabthree" data-tabs-toggle="#BusinessContent" role="tablist">
                                             <li className="inline-block">
                                                <button onClick={() => handleTabClick2(0)} className={`${isOpenTab2 === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out`} id="dashboard-tab" >Monthly</button>
                                            </li>
                                            <li className="inline-block">
                                                <button onClick={() => handleTabClick2(1)} className={`${isOpenTab2 === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out`} >Monthly</button>
                                            </li>
                                        </ul>

                                        <div id="BusinessContent" className="mt-6">
                                        {isOpenTab2 === 0 ?
                                            <div className="flex justify-center">
                                                <span className="text-sm text-slate-400 font-semibold">$</span>
                                                <span className="text-3xl font-semibold mx-1">29.99</span>
                                                <span className="text-sm text-slate-400 font-semibold self-end">/month</span>
                                            </div>:""
                                        }
                                        {isOpenTab2 === 1 ? 
                                            <div className="flex justify-center">
                                                <span className="text-sm text-slate-400 font-semibold">$</span>
                                                <span className="text-3xl font-semibold mx-1">259.99</span>
                                                <span className="text-sm text-slate-400 font-semibold self-end">/year</span>
                                            </div>:""
                                        }
                                        </div>

                                        <div className="mt-6">
                                            <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Add Cart</Link>
                                        </div>
                                    </div>

                                    <div className="py-3 px-2 bg-gray-50 dark:bg-slate-800">
                                        <p className="text-slate-400 mb-0">Boost Servers <b className="text-black dark:text-white">+ More Power</b></p>
                                    </div>

                                    <div className="p-6 border-b border-gray-100 dark:border-gray-700 text-start">
                                        <ul className="list-none">
                                            <li className="text-slate-400 my-1 ml-0"><i className="mdi mdi-check me-2 text-emerald-600"></i><b className="text-black dark:text-white">All Benefits From Premium</b></li>
                                            <li className="text-slate-400 my-1 ml-0"><i className="mdi mdi-check me-2 text-emerald-600"></i><b className="text-black dark:text-white">Daily</b> Backups</li>
                                            <li className="text-slate-400 my-1 ml-0"><i className="mdi mdi-check me-2 text-emerald-600"></i><b className="text-black dark:text-white">Free</b> SSL Certificate</li>
                                            <li className="text-slate-400 my-1 ml-0"><i className="mdi mdi-check me-2 text-emerald-600"></i><b className="text-black dark:text-white">4X Processing</b> Power &amp; Memory</li>
                                        </ul>
                                    </div>

                                    <div className="p-4">
                                        <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16 bg-[url('../../assets/images/hosting/bg.png')] bg-bottom bg-no-repeat bg-cover">
                <UserFeedBack />
                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="md:flex justify-center">
                        <div className="lg:w-2/3 md:w-full">
                            <div id="accordion-collapse" data-accordion="collapse" className="mt-6">

                                {
                                    hostingData.map((data, index) => {
                                        return(
                                            <div className="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                                <h2 className="text-base font-semibold bg-white dark:bg-slate-900">
                                                    <button type="button" onClick={() => toggleAccordion(data.id)} className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === data.id ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''}`} data-accordion-target={`#${data.target}`} aria-expanded={data.ariaExpanded} aria-controls={data.target}>
                                                        <span>{data.que}</span>
                                                        <svg className={data.svgClass} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </button>
                                                </h2>
                                                {activeIndex === data.id && (
                                                    <div className={` bg-white dark:bg-slate-900`}>
                                                        <div className="p-5">
                                                            <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                    )
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <CookieModal />
        </>
    )
}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import hero from '../../assets/images/insurance/hero.png';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import Blog from '../../component/blog';
import CookieModal from '../../component/cookieModal';
import CompanyLogo from '../../component/companyLogo';

import TinySlider from 'tiny-slider-react';
import CountUp from 'react-countup';

import { accordionData } from '../../data/dataTwo';
import { insuranceTeam, insuranceservices,insuranceTab } from '../../data/dataFour';
import { FaArrowRight } from 'react-icons/fa';


const settings2 = {
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
const settings = {
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
export default function IndexInsurance() {

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });

    let [isOpen, setOpen] = useState(false)
    let [activeIndex, setActiveIndex] = useState(0);
    let [isOpenTab, setisOpen] = useState(0);

    let handleTabClick = (index) => {
        setisOpen(index);
    };

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
            <section className="relative table w-full md:py-44 py-36 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                        <div className="md:col-span-7">
                            <div className="md:me-6">
                                <div className="bg-white dark:bg-slate-900 text-slate-400 py-2 px-4 inline-flex items-center font-medium rounded-full shadow-sm dark:shadow-gray-800"><span className="bg-indigo-600 text-white text-[12px] font-bold px-2.5 py-0 rounded-full me-2">Techwind</span> Get an insurance</div>
                                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 mt-4">Insurance makes <br /> your life your better</h4>
                                <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                <div className="mt-6">
                                    <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">Request a Quote</Link>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-5">
                            <div className="relative">
                                <img src={hero} className="rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                    <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610"
                                        className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </Link>
                                </div>
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

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 items-end">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold"><span className="text-indigo-600">Get the right protection</span> <br /> and move forward</h3>
                        <p className="text-slate-400 max-w-xl">Explore and learn more about everything from machine learning and global payments to scaling your team.</p>
                    </div>
                </div>

                <div className="container-fluid relative mt-8">
                    <div className="grid grid-cols-1 mt-8">

                        <div className="tiny-six-item">
                            <TinySlider settings={settings2}>
                                {insuranceservices.map((item, index) => (

                                    <div className="tiny-slide" key={index}>
                                        <div className="mx-2">
                                            <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                                <Link title="">
                                                    <img src={item.image} className="transition-all duration-500 group-hover:scale-105" alt="" />
                                                    <div className="absolute inset-0 group-hover:bg-indigo-600 opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
                                                </Link>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <Link to="#" className="relative inline-block font-semibold tracking-wide align-middle text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 hover:text-indigo-600 after:bg-indigo-600 text-xl duration-500 ease-in-out">{item.title}</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </TinySlider>

                        </div>
                    </div>
                </div>
            </section>


            <section className="py-36 w-full table relative bg-indigo-600">
                <div className="absolute inset-0 bg-[url('../../assets/images/insurance/cta.png')] bg-bottom bg-no-repeat bg-cover"></div>
                <div className="container relative">
                    <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                        <div className="order-2 lg:order-1 lg:mt-0 mt-8">
                            <div className="lg:me-6 text-center lg:text-start">
                                <h3 className="mb-4 md:text-4xl text-3xl lg:leading-normal leading-normal text-white font-semibold">Compare insurance packages <br /> and obtain the best offer</h3>

                                <p className="text-white/80 max-w-xl mx-auto lg:ms-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                <div className="mt-6">
                                    <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-slate-100 hover:bg-slate-200 border-slate-100 hover:border-slate-200 text-indigo-600 rounded-md me-2 mt-2">Get a custom plan</Link>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="grid grid-cols-2 gap-[30px]">
                                <div className="counter-box text-center">
                                    <h1 className="lg:text-5xl text-4xl font-bold mb-2 text-white"><CountUp className="counter-value" end={145} start={101} />M</h1>
                                    <h5 className="text-white text-xl font-medium">Insured Customers</h5>
                                </div>

                                <div className="counter-box text-center">
                                    <h1 className="lg:text-5xl text-4xl font-bold mb-2 text-white"><CountUp className="counter-value" end={99} start={2} />%</h1>
                                    <h5 className="text-white text-xl font-medium">Clients Satisfaction</h5>
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
                <div className="container relative">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                        <div className="relative">
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold"><span className="text-indigo-600">Insurance</span> for your <br /> everyday needs</h3>
                            <p className="text-slate-400 max-w-xl">Explore and learn more about everything from machine learning and global payments to scaling your team.</p>

                            <div className="mt-6">
                                <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">Get started</Link>
                            </div>
                        </div>

                        <div className="lg:ms-8 md:mt-0 mt-8">
                            <div id="accordion-collapseone" data-accordion="collapse">
                                {accordionData.slice(0,3).map((item, index) => (
                                    <div key={index} className="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                        <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                            <button type="button" onClick={() => toggleAccordion(index)} className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === index ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''}`} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                                <span>{item.title}</span>
                                                <svg data-accordion-icon className={`${activeIndex === item.id ? "rotate-180" : "rotate-270" } size-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-5">
                            <div className="sticky top-20">
                                <ul className="flex-column text-center p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                    <li role="presentation">
                                        <button className={`${ isOpenTab === 0 ?'text-white bg-indigo-600' : ''} px-4 py-2 text-base font-semibold rounded-md w-full hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true"
                                        onClick={() => handleTabClick(0)}
                                        >Wealth Management</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600' : ''} px-4 py-2 text-base font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Retirement Planning</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(2)} className={`${isOpenTab === 2 ?'text-white bg-indigo-600' : ''} px-4 py-2 text-base font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Business Insurance</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(3)} className={`${isOpenTab === 3 ?'text-white bg-indigo-600' : ''} px-4 py-2 text-base font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Life Insurance</button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-8 md:col-span-7">
                            <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md">
                                {
                                    insuranceTab.map((item, index) => (
                                        <div className={`${isOpenTab === index  ? '': 'hidden'}`} id="profile" role="tabpanel" aria-labelledby="profile-tab" key={index}>
                                        <img src={item.image} className="shadow-sm rounded-md" alt="" />
                                        <div className="mt-6">
                                            <h5 className="text-lg font-semibold mb-4">{item.title}</h5>
                                            <p className="text-slate-400 mb-2">{item.description}</p>
                                            <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 w-full relative bg-[url('../../assets/images/insurance/bg.jpg')] bg-center bg-no-repeat bg-cover jarallax" data-jarallax data-speed="0.5">
                <div className="container relative">
                    <div className="md:flex">
                        <div className="lg:w-1/3 md:w-1/2 px-6 py-8 rounded-md shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900">
                            <div className="tiny-single-item">

                                <TinySlider settings={settings}>
                                    {insuranceTeam.map((item, index) => {
                                        return(
                                            <div className="tiny-slide" key={index}>
                                                <div className="text-center">
                                                    <p className="text-lg text-slate-400 italic"> {item.feedback} </p>
    
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
            </section>

            <Blog className="container relative md:mt-24 mt-16 mb-16" id={""} />
            <Footer />
            <CookieModal />
        </>
    )
}

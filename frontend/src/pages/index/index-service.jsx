import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import image from '../../assets/images/client/01.jpg';
import image1 from '../../assets/images/client/02.jpg';
import image2 from '../../assets/images/client/03.jpg';
import image3 from '../../assets/images/client/04.jpg';
import image4 from '../../assets/images/client/05.jpg';
import image5 from '../../assets/images/client/06.jpg';
import svg from '../../assets/images/illustrator/services.svg';

import Navbar from '../../component/Navbar/navbar'
import CompanyLogo from '../../component/companyLogo';
import Footer from '../../component/Footer/footer';
import CookieModal from '../../component/cookieModal';

import * as Icon from 'react-feather';

import TinySlider from 'tiny-slider-react';
import CountUp from 'react-countup';
import GetInTuch from '../../component/getInTuch';
import { accordionData } from '../../data/dataTwo';
import { HiArrowTrendingUp } from 'react-icons/hi2';
import { FaDribbble, FaRegComments } from 'react-icons/fa';
import { FiAirplay } from 'react-icons/fi';
import { LiaDocker, LiaMoneyBillAltSolid, LiaUniversitySolid } from 'react-icons/lia';
import { TfiTruck } from 'react-icons/tfi';

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
export default function IndexService() {

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });

    const [activeIndex, setActiveIndex] = useState(1);

    const services = [
        {
            feedback: '" Techwind made the processes so easy. Techwind instantly increased the amount of interest and ultimately saved us over $10,000. " ',
            name: 'Christa Smith',
            role: 'Manager',
            image: image
        },
        {
            feedback: '" I highly recommend Techwind as the new way to sell your home "by owner". My home sold in 24 hours for the asking price. Best $400 you could spend to sell your home. "',
            name: 'Christa Smith',
            role: 'Manager',
            image: image1

        },
        {
            feedback: '" My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable! "',
            name: 'Christa Smith',
            role: 'Manager',
            image: image2
        },
        {
            feedback: '" Great experience all around! Easy to use and efficient. "',
            name: 'Christa Smith',
            role: 'Manager',
            image: image3
        },
        {
            feedback: '" Techwind made selling my home easy and stress free. They went above and beyond what is expected. "',
            name: 'Christa Smith',
            role: 'Manager',
            image: image4
        },
        {
            feedback: '" Techwind is fair priced, quick to respond, and easy to use. I highly recommend their services! "',
            name: 'Christa Smith',
            role: 'Manager',
            image: image5
        }
    ]
    const discoverData = [
        {
            icon:HiArrowTrendingUp,
            title:'Business Service',
            desc:'One advantage everything you need to generate',
        },
        {
            icon:FaDribbble,
            title:'Social Service',
            desc:'One advantage everything you need to generate',
        },
        {
            icon:FiAirplay,
            title:'Personal Service',
            desc:'One advantage everything you need to generate',
        },
        {
            icon:LiaUniversitySolid,
            title:'Banking Service',
            desc:'One advantage everything you need to generate',
        },
        {
            icon:LiaMoneyBillAltSolid,
            title:"Insurance Service",
            desc:'One advantage everything you need to generate',
        },
        {
            icon:TfiTruck,
            title:'Transportation Service',
            desc:'One advantage everything you need to generate',
        },
        {
            icon:LiaDocker,
            title:'Transportation Service',
            desc:'One advantage everything you need to generate',
        },
        {
            icon:FaRegComments,
            title:'Transportation Service',
            desc:'One advantage everything you need to generate',
        },
    ]
    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index);
        }
    }

    const accordionData1 = accordionData.filter((x) => x.id < 5);
    const accordionData2 = accordionData.filter((x) => x.id > 4)

  
    return (
        <>
            <Navbar />

            <section className="relative table w-full pt-36 lg:pt-44 pb-32 bg-[url('../../assets/images/home-shape.png')] bg-top bg-no-repeat bg-cover">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                        <div className="md:col-span-7">
                            <div className="md:me-6">
                                <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Find the perfect <br /> <span className="text-indigo-600">Professional</span> for you</h4>
                                <p className="text-slate-400 text-xl max-w-xl">Get free quotes within minutes</p>

                                <div className="subcribe-form z-1 mt-8">
                                    <form className="relative mx-auto max-w-2xl">
                                        <Icon.Search className="size-5 absolute top-[47%] -translate-y-1/2 start-4"></Icon.Search>
                                        <input type="text" id="search_name" name="name" className="pt-4 pe-40 pb-4 w-full h-[50px] outline-none text-black dark:text-white rounded-md bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 ps-12" placeholder="What service are you looking for?" />
                                        <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Search</button>
                                    </form>
                                    <p className="text-slate-400 max-w-xl mt-3"><span className="font-semibold">Popular:</span> House Cleaning, Web Design, Personal Trainers</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-5">
                            <img src={svg} alt="" />
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                   <CompanyLogo/>
                </div>
            </section>

            <section className="relative md:pb-24 pb-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">Discover Area</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {discoverData.map((item,index)=>{
                            let Icons = item.icon
                            return(
                                <div key={index} className="group transition-all duration-500 ease-in-out text-center">
                                    <div className="flex align-middle mx-auto justify-center items-center size-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                                        <Icons className="size-6"/>
                                    </div>
                                    <div className="mt-4">
                                        <Link  className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                        <p className="text-slate-400 mt-2">{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16 lg:pt-24 pt-16">
                    <div className="absolute inset-0 opacity-25 dark:opacity-50 bg-[url('../../assets/images/map.png')] bg-no-repeat bg-center bg-cover"></div>
                    <div className="relative grid grid-cols-1 pb-8 text-center z-1">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">Trusted by more than 10K users</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" end={1548} start={1010}/>+</h1>
                            <h5 className="counter-head text-lg font-medium">Properties Sell</h5>
                        </div>

                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" end={25} start={2}/>+</h1>
                            <h5 className="counter-head text-lg font-medium">Award Gained</h5>
                        </div>

                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" end={9} start={0}/>+</h1>
                            <h5 className="counter-head text-lg font-medium">Years Experience</h5>
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
                                    {services.map((item, index) => (
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
                                    ))}
                                </TinySlider>
                            </div>
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

               <GetInTuch/>
            </section>

            <Footer />
         <CookieModal/>
        </>
    )
}

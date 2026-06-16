import { Link } from 'react-router-dom';

import shree_logo from '../../assets/images/client/shree-logo.png';
import skype from '../../assets/images/client/skype.png';
import snapchat from '../../assets/images/client/snapchat.png';
import spotify from '../../assets/images/client/spotify.png';
import telegram from '../../assets/images/client/telegram.png';
import whatsapp from '../../assets/images/client/whatsapp.png';
import android from '../../assets/images/client/android.png';
import facebook_logo_2019 from '../../assets/images/client/facebook-logo-2019.png';
import linkedin from '../../assets/images/client/linkedin.png';
import google_logo from '../../assets/images/client/google-logo.png';
import ab03 from '../../assets/images/about/ab03.jpg';
import ab02 from '../../assets/images/about/ab02.jpg';
import ab01 from '../../assets/images/about/ab01.jpg';

import Navbar from '../../component/Navbar/navbar'
import CookieModal from '../../component/cookieModal';
import UserFeedBack2 from '../../component/userFeedBack2';
import JobFooter from '../../component/Footer/jobFooter';
import MobileApp from '../../component/mobileApp';

import TinySlider from 'tiny-slider-react';
import CountUp from 'react-countup';
import Select from 'react-select'
import { jobGrid } from '../../data/data';


import { jobServices } from '../../data/dataFour';
import { LuSearch } from 'react-icons/lu';
import { AiOutlineDollar, AiOutlineHome } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';
import { GoClock } from 'react-icons/go';
import { useEffect } from 'react';
 
export default function IndexJob() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });

    let settings = {
        container: '.tiny-five-item',
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
                items: 5
            },
    
            992: {
                items: 4
            },
    
            767: {
                items: 3
            },
    
            425: {
                items: 1
            },
        },
    }
    let country = [
        { value: '1', label: 'Afghanistan' },
        { value: '2', label: 'Azerbaijan' },
        { value: '3', label: 'Bahamas' },
        { value: '4', label: 'Bahrain' },
        { value: '5', label: 'Canada' },
        { value: '5', label: 'Denmark' },
        { value: '5', label: 'Djibouti' },
        { value: '5', label: 'Eritrea' },
        { value: '5', label: 'Estonia' },
        { value: '5', label: 'Gambia' },
    ]
    let time = [
        { value: '1', label: 'Part Time' },
        { value: '2', label: 'Freelancer' },
        { value: '3', label: 'Remote Work' },
        { value: '4', label: 'Office Work' },
    ]
   
    return (
        <>
            <Navbar navClass="nav-sticky" bg={true}/>
            <section className="md:h-screen py-36 h-auto relative flex items-center background-effect overflow-hidden bg-[url('../../assets/images/job/job.jpg')] bg-cover">
                <div className="container-fluid">
                    <div className="absolute inset-0 z-0 bg-[url('../../assets/images/job/curve-shape.png')] dark:bg-[url('../../assets/images/job/curve-shape-dark.png')] bg-cover"></div>
                </div>

                <div className="container relative z-1">
                    <div className="grid grid-cols-1 mt-10">
                        <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">Make The Best Move to <br /> Choose Your <span className="text-indigo-600">New Job</span></h4>
                        <p className="text-slate-400 text-lg max-w-xl">Find Jobs, Employment & Career Opportunities. Some of the companies we&apos;ve helped recruit excellent applicants over the years.</p>

                        <div className="grid lg:grid-cols-12 grid-cols-1" id="reserve-form">
                            <div className="lg:col-span-10 mt-8">
                                <div className="bg-white dark:bg-slate-900 border-0 shadow-sm rounded p-3">
                                    <form action="#">
                                        <div className="registration-form text-dark text-start">
                                             <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6 lg:divide-x-[1px] lg:divide-gray-200 lg:dark:divide-gray-700">
                                                <div>
                                                    <div className="filter-search-form relative">
                                                        <LuSearch  className="icons  absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"/>
                                                        <input name="name" type="text" id="job-keyword" className="form-input lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0" placeholder="Search your Keywords" />
                                                    </div>
                                                </div>

                                                <div>                                                        
                                                    <div className="filter-search-form relative">
                                                        <AiOutlineHome className="icons  absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"/>
                                                        <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={country} />

                                                     </div>
                                                 </div>

                                                <div>                                                       
                                                    <div className="filter-search-form relative">
                                                        <AiOutlineDollar className="icons  absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"/>
                                                         <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={time} />

                                                    </div>
                                                 </div>

                                                <div>
                                                    <input type="submit" id="search-buy" name="search" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white searchbtn lg:rounded-t-none lg w-full" value="Search" style={{height:"60px"}} />
                                                </div>
                                             </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <span className="text-slate-400"><span className="text-dark">Popular Searches :</span> Designer Developer Web IOS PHP Senior Engineer</span>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 bg-indigo-600/5"></div>
                <ul className="circles p-0 mb-0">
                    <li className="brand-img"><img src={shree_logo} className="size-9" alt="" /></li>
                    <li className="brand-img"><img src={skype} className="size-9" alt="" /></li>
                    <li className="brand-img"><img src={snapchat} className="size-9" alt="" /></li>
                    <li className="brand-img"><img src={spotify} className="size-9" alt="" /></li>
                    <li className="brand-img"><img src={telegram} className="size-9" alt="" /></li>
                    <li className="brand-img"><img src={whatsapp} className="size-9" alt="" /></li>
                    <li className="brand-img"><img src={android} className="size-9" alt="" /></li>
                    <li className="brand-img"><img src={facebook_logo_2019} className="size-9" alt="" /></li>
                    <li className="brand-img"><img src={linkedin} className="size-9" alt="" /></li>
                    <li className="brand-img"><img src={google_logo} className="size-9" alt="" /></li>
                </ul>
            </section>


            <div className="relative">
                <div className="absolute block w-full h-auto bottom-[25px] z-1 start-0">
                    <Link ><i className="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 size-12 mx-auto shadow-md dark:shadow-gray-800"></i></Link>
                </div>

                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>


            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                        <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Search by Categories</h3>
                            <p className="text-slate-400 max-w-xl">Search your career opportunity with our categories</p>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                            <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">All Categories <FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>
                </div>

                <div className="container relative">
                    <div className="grid grid-cols-1 relative">
                        <div className="tiny-five-item">
                            <TinySlider settings={settings}>
                                {jobServices.map((item, index) => {
                                    let Icons = item.icon
                                    return(
                                        <div className="tiny-slide" key={index}>
                                            <div className="px-3 py-10 rounded-md shadow-sm dark:shadow-gray-800 group text-center bg-white dark:bg-slate-900 hover:bg-indigo-600/5 dark:hover:bg-indigo-600/5 transition duration-500 m-2">
                                                <div className="w-[84px] h-[84px] bg-indigo-600/5 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white rounded-full text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition duration-500 mx-auto">
                                                     <Icons className='size-7'/>
                                                </div>
    
                                                <div className="content mt-6">
                                                    <Link to="/page-job-grid" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title} <br /> {item.title2}</Link>
                                                    <p className="text-slate-400 mt-3">{item.jobs} Jobs</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </TinySlider>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                        <div className="md:col-span-12 text-center">
                            <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">All Categories <FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="grid grid-cols-12 gap-6 items-center">
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
                            </div>
                        </div>

                        <div className="lg:col-span-7 md:col-span-6">
                            <div className="lg:ms-5">
                                <h3 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">We are Largest Job <br /> Site in The World</h3>

                                <p className="text-slate-400 max-w-xl mb-2">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind css html page.</p>
                                <p className="text-slate-400 max-w-xl">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>

                                <div className="mt-6">
                                    <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative mt-12">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        <div className="counter-box relative text-center">
                            <h3 className="font-extrabold lg:text-[72px] text-[50px] opacity-5"><CountUp className="counter-value" start={3} end={200} />+K</h3>
                            <span className="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">Total User</span>
                        </div>

                        <div className="counter-box relative text-center">
                            <h3 className="font-extrabold lg:text-[72px] text-[50px] opacity-5"><CountUp className="counter-value" start={1} end={15} />+</h3>
                            <span className="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">Years of Experience</span>
                        </div>

                        <div className="counter-box relative text-center">
                            <h3 className="font-extrabold lg:text-[72px] text-[50px] opacity-5"><CountUp className="counter-value" start={5} end={54} /></h3>
                            <span className="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">Offices in the World</span>
                        </div>

                        <div className="counter-box relative text-center">
                            <h3 className="font-extrabold lg:text-[72px] text-[50px] opacity-5"><CountUp className="counter-value" start={12} end={125} />K</h3>
                            <span className="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">No. of Job Positions</span>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Popular Jobs</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {jobGrid.slice(0,6).map((item,index)=>{
                            return(
                                <div className="rounded-md shadow-sm dark:shadow-gray-800" key={index}>
                                    <div className="p-6">
                                        <Link to={`/page-job-detail/${item.id}`} className="title h5 text-lg font-semibold hover:text-indigo-600">{item.title}</Link>
                                        <p className="text-slate-400 mt-2 flex items-center"><GoClock className="me-1 text-indigo-600"/>{item.date}</p>
        
                                        <div className="flex justify-between items-center mt-4">
                                            <span className="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">{item.duration}</span>
        
                                            <p className="text-slate-400 flex items-center"><AiOutlineDollar className="me-2 text-indigo-600 text-lg"/>{item.money}</p>
                                        </div>
                                    </div>
        
                                    <Link to={`/page-job-company-detail/${item.id}`} className="flex items-center p-6 border-t border-gray-100 dark:border-gray-700">
                                        <img src={item.image} className="size-12 shadow-md dark:shadow-gray-800 rounded-md p-2 bg-white dark:bg-slate-900" alt="" />
        
                                        <div className="ms-3">
                                            <h6 className="mb-0 font-semibold text-base">{item.company}</h6>
                                            <span className="text-slate-400 text-sm">{item.city},{item.place}</span>
                                        </div>
                                    </Link>
                                 </div>
                            )
                        })}
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                        <div className="md:col-span-12 text-center">
                            <Link to="/page-job-grid" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More Jobs <FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Users Say</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                    </div>

                    <UserFeedBack2 />
                </div>
                <MobileApp/>
            </section>
            <JobFooter/>
         <CookieModal/>
        </>
    )
}

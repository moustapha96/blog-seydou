import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import aboutImage from '../../assets/images/coach/about.jpg'
import dotsImage from '../../assets/images/illustrator/dots.svg'

import Navbar from "../../component/Navbar/navbar";
import Blog from '../../component/blog';
import Footer from '../../component/Footer/footer';
import CookieModal from '../../component/cookieModal';
import UserFeedBack from '../../component/userFeedBack';

import { coachServices, coursesData } from "../../data/dataFive";

import CountUp from "react-countup";

import { LuBookOpen } from 'react-icons/lu';
import { FiArrowRight, FiClock, FiEye } from 'react-icons/fi';


export default function LifeCoach(){

    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });

    return(
        <>
        <Navbar navClass="nav-light" navJustify="justify-end"/>
        <section className="relative flex md:h-screen md:py-0 py-36 items-center  bg-[url('../../assets/images/coach/bg.jpg')] lg:bg-left-top bg-center bg-no-repeat bg-cover">
            <div className="container relative z-3">
                <div className="grid grid-cols-1 mt-10">
                    <div className="md:text-start text-center">
                        <span className="bg-indigo-600 inline-block text-white text-sm font-semibold px-2.5 rounded mb-4">Life Coach</span>
                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Unleash Your Real <br/> Potential and Live <br/> Limitless!</h1>
                        <p className="text-white/70 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                        
                        <div className="mt-8">
                            <Link to="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact us <i className="mdi mdi-arrow-right align-middle"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Services For My Clients</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[24px]">
                    {coachServices.map((item,index) =>{
                        return(
                            <div key={index} className="group relative overflow-hidden p-6 rounded-lg shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center duration-500">
                                <img src={item.image1} className="size-16 mx-auto" alt=""/>

                                <div className="content mt-7">
                                    <h2 className="title text-xl font-semibold">{item.title}</h2>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
                                </div>

                                <div className="opacity-0 group-hover:opacity-100 duration-500">
                                    <div className="absolute inset-0">
                                        <img src={item.image2} alt=""/>
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                                    </div>

                                    <div className="absolute bottom-0 start-0 end-0 mb-6">
                                        <Link to="" className="text-white text-xl font-bold">{item.title}</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="py-20 w-full table relative bg-[url('../../assets/images/team.jpg')] bg-top bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
                <div className="relative grid md:grid-cols-4 grid-cols-1 items-center gap-[30px]">
                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-medium mb-2 text-white"><CountUp className="counter-value" start={0} end={1548}/>+</h1>
                        <h5 className="counter-head text-white/70 font-semibold">Happy Clients</h5>
                    </div>
                    
                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-medium mb-2 text-white"><CountUp className="counter-value" start={0} end={100}/>%</h1>
                        <h5 className="counter-head text-white/70 font-semibold">24/7 Support</h5>
                    </div>
                    
                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-medium mb-2 text-white"><CountUp className="counter-value" start={0} end={9}/>+</h1>
                        <h5 className="counter-head text-white/70 font-semibold">Courses</h5>
                    </div>
                    
                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-medium mb-2 text-white"><CountUp className="counter-value" start={0} end={9}/>%</h1>
                        <h5 className="counter-head text-white/70 font-semibold">Satisfaction</h5>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="relative">
                            <img src={aboutImage} className="rounded-full" alt=""/>
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

                            <div className="absolute top-0 start-0 -z-1">
                                <img src={dotsImage} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="lg:ms-5">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">About Me</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Unleash Your Real <br/> Potential and <br/> Live Limitless!</h3>

                            <p className="text-slate-400 max-w-xl">I am glad that you have made it here to send a distress signal, and inform the Senate that all on board were killed. Dantooine.  I’m not going to Alderaan. I really got to go.</p>
                            <p className="text-slate-400 max-w-xl mt-2">But that to me. Send a distress signal, and inform the Senate that all on board were killed. Dantooine. They’re on Dantooine. The plans you refer to will soon be back in our hands. Alderaan? I’m not going to Alderaan. I got to go home.</p>
                            <img src="assets/images/sign.png" className="mt-3" alt=""/>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:mt-24 mt-16'>
                <UserFeedBack/>
            </div>
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Popular Courses</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                    {coursesData.map((item,index) =>{
                        return(
                            <div key={index} className="group relative rounded-md shadow-sm hover:shadow-lg dark:shadow-gray-800 duration-500 ease-in-out overflow-hidden">
                                <div className="relative overflow-hidden">
                                    <img src={item.image} className="group-hover:scale-110 duration-500 ease-in-out" alt=""/>
                                    <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>

                                    <div className="absolute start-0 bottom-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                        <div className="pb-4 ps-4 flex items-center">
                                            <img src={item.clientImage} className="size-12 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt=""/>
                                            <div className="ms-3">
                                                <Link to="" className="font-semibold text-white block">{item.clientName}</Link>
                                                <span className="text-white/70 text-sm">{item.possition}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="content p-6 relative">
                                    <Link to="/course-detail" className="font-medium block text-indigo-600">{item.name}</Link>
                                    <Link to="/course-detail" className="text-lg font-medium block hover:text-indigo-600 duration-500 ease-in-out mt-2">{item.title}</Link>
                                    <p className="text-slate-400 mt-3 mb-4">{item.desc}</p>
                                    
                                    <ul className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center list-none text-slate-400">
                                        <li className="flex items-center me-4">
                                            <LuBookOpen className="text-lg leading-none me-2 text-slate-900 dark:text-white"/>
                                            <span>{item.lectures}</span>
                                        </li>

                                        <li className="flex items-center me-4">
                                            <FiClock className="text-lg leading-none me-2 text-slate-900 dark:text-white"/>
                                            <span>{item.time}</span>
                                        </li>

                                        <li className="flex items-center">
                                            <FiEye className="text-lg leading-none me-2 text-slate-900 dark:text-white"/>
                                            <span>{item.view}</span>
                                        </li>
                                    </ul>

                                    <div className="absolute -top-7 end-6 z-1 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                        <div className="flex justify-center items-center size-14 bg-white dark:bg-slate-900 rounded-full shadow-lg dark:shadow-gray-800 text-indigo-600 dark:text-white">
                                            <span className="font-semibold">$11</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <Link to="/course-listing" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See All Courses <FiArrowRight className="align-middle ms-1"/></Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20 w-full table relative bg-[url('../../assets/images/coach/cta.jpg')] bg-top bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 md:text-3xl text-2xl text-white font-medium">Self Development Course</h3>

                    <p className="text-white/80 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                
                    <div className="mt-8">
                        <Link to="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">JOIN FOR FREE</Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
           <Blog className="container relative"/>
        </section>
        <Footer/>
        <CookieModal/>
        </>
    )
}
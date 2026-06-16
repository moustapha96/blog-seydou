import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import app from '../../assets/images/app/app.png';
import playstore from '../../assets/images/app/playstore.png';
import classic02 from '../../assets/images/app/classic02.png';
import imageP from '../../assets/images/client/05.jpg';
import avatar from '../../assets/images/avatar.jpg';
import notification from '../../assets/images/notification.jpg';
import ab02 from '../../assets/images/about/ab02.jpg';
import ab01 from '../../assets/images/about/ab01.jpg';
import sales_chart from '../../assets/images/sales-chart.jpg';
import classic04 from '../../assets/images/app/classic04.png';
import image7 from '../../assets/images/client/01.jpg';

import Navbar from '../../component/Navbar/navbar'
import UserFeedBack2 from '../../component/userFeedBack2';
import CookieModal from '../../component/cookieModal';
import TransparentFooter from '../../component/Footer/transparentFooter';
import MobileApp from '../../component/mobileApp';
import KeyFeatureTwo from '../../component/keyFeatureTwo';

import * as Icon from 'react-feather'

import CountUp from 'react-countup';

import { accordionData } from '../../data/dataTwo';
import { partnerImage } from '../../data/dataTwo';
import { BiTrendingDown } from 'react-icons/bi';
import { HiArrowTrendingUp } from 'react-icons/hi2';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsCheckCircle } from 'react-icons/bs';


export default function IndexClassicApp() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });

    const [isOpen, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index);
        }
    }
    return (
        <>
            <span className="fixed blur-[200px] size-[600px] rounded-full top-1/2 -translate-y-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 bg-indigo-600/20"></span>

            <Navbar />

            <section className="relative overflow-hidden md:pt-44 pt-36 md:pb-24 pb-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-8 gap-[30px] relative">
                        <div className="md:me-6">
                            <ul className="list-none mb-0 text-amber-400 text-xl space-x-1">
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                            </ul>
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Making <span className="after:absolute after:end-0 after:start-0 after:bottom-3 after:-rotate-6 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/20 relative text-indigo-600">everybody</span> <br /> feel valued at work</h4>
                            <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                            <div className="mt-6">
                                <Link to="#"><img src={app} className="inline-block m-1" alt="" /></Link>
                                <Link to="#"><img src={playstore} className="inline-block m-1" alt="" /></Link>
                            </div>
                        </div>

                        <div className="relative">
                            <img src={classic02} className="mx-auto" alt="" />
                            <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-indigo-600/20 via-indigo-600/70 from-indigo-600 bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 -z-1 shadow-md shadow-indigo-600/10 rounded-full"></div>

                            <div className="overflow-hidden after:content-[''] after:absolute after:size-10 after:bg-indigo-600/20 after:top-0 after:start-0 after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>

                            <div className="absolute flex justify-between items-center top-16 md:-start-10 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
                                <div className="flex items-center">
                                    <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-indigo-600/5 text-indigo-600 text-center rounded-full me-3">
                                        <Icon.Monitor className="size-6"></Icon.Monitor>
                                    </div>
                                    <div className="flex-1">
                                        <h6 className="text-slate-400">Visitor</h6>
                                        <p className="text-xl font-bold"><CountUp className="counter-value" start={2100} end={4589} /></p>
                                    </div>
                                </div>

                                <span className="text-red-600 inline-flex items-center"><BiTrendingDown className="me-1"/> 0.5%</span>
                            </div>

                            <div className="absolute bottom-1/2 translate-y-1/2 lg:-end-7 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-48 m-3">
                                <h5 className="text-lg font-semibold mb-3">Manage Software</h5>
                                <div className="flex justify-between mt-3 mb-2">
                                    <span className="text-slate-400">Progress</span>
                                    <span className="text-slate-400">84%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-indigo-600 h-[6px] rounded-full" style={{ "width": "84%" }}></div>
                                </div>
                            </div>

                            <div className="absolute flex justify-between items-center bottom-16 md:start-10 -start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-44 m-3">
                                <div className="flex items-center">
                                    <img src={imageP} className="size-14 rounded-full shadow-md dark:shadow-gray-800 me-3" alt="" />
                                    <div className="flex-1">
                                        <h6 className="text-lg font-semibold">Cristina</h6>
                                        <p className="text-slate-400">Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative animate-[spin_30s_linear_infinite] -z-1">
                            <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-indigo-600/20 relative after:z-10"></span>
                            <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-indigo-600/20 relative after:z-10"></span>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
                        {partnerImage.map((item,index)=>{
                            return(
                                <div className="mx-auto py-4" key={index}>
                                    <img src={item} className="h-20" alt="" />
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                        <div className="relative">
                            <div className="relative">
                                <img src={avatar} className="mx-auto md:max-w-xs lg:max-w-sm rounded-lg shadow-md dark:shadow-gray-800" alt="" />

                                <div className="absolute top-4 md:end-14 -end-2 text-center">
                                    <Link to="#" data-type="youtube" onClick={() => setOpen(true)} data-id="S_CGed6E610"
                                        className="lightbox size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center text-white bg-indigo-600">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </Link>
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

                            <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tr to-indigo-600/20 via-indigo-600/70 from-indigo-600 bottom-1/2 translate-y-1/2 md:end-0 end-1/2 md:translate-x-0 translate-x-1/2 -z-1 shadow-md shadow-indigo-600/10 rounded-full"></div>

                            <div className="absolute flex justify-between items-center bottom-16 md:-start-10 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-64 m-3">
                                <div className="flex items-center">
                                    <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-indigo-600/5 text-indigo-600 text-center rounded-full me-3">
                                        <Icon.DollarSign className="size-6"></Icon.DollarSign>
                                    </div>
                                    <div className="flex-1">
                                        <h6 className="text-slate-400">Revenue</h6>
                                        <p className="text-xl font-bold">$<CountUp className="counter-value" start={39548} end={45485} /></p>
                                    </div>
                                </div>

                                <span className="text-green-600 inline-flex items-center"><HiArrowTrendingUp className="me-1"/> 3.85%</span>
                            </div>
                        </div>

                        <div className="lg:ms-8">
                            <h4 className="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">Ready to kick off <br /> your startup journey?</h4>
                            <p className="text-slate-400 mb-6">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>

                            <div className="pt-6 flex items-center border-t border-gray-200 dark:border-gray-700">
                                <img src={imageP} className="size-20 rounded-full shadow-md dark:shadow-gray-800 me-3" alt="" />
                                <div className="flex-1">
                                    <h6 className="text-lg text-slate-400 italic font-semibold">&quot; Human perception is tuned to recognize certain patterns and repetitions in texts. &quot;</h6>
                                    <p className="font-semibold">Owner & CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                        <div className="relative order-1 md:order-2">
                            <div className="grid grid-cols-12 items-center gap-4 lg:gap-0">
                                <div className="col-span-6">
                                    <div className="grid grid-cols-1 lg:gap-6 gap-4">
                                        <img src={notification} className="shadow-sm rounded-md lg:max-w-[240px] mx-auto" alt="" />
                                        <img src={ab02} className="shadow-sm rounded-md lg:max-w-[240px] mx-auto" alt="" />
                                    </div>
                                </div>

                                <div className="col-span-6">
                                    <div className="grid grid-cols-1">
                                        <img src={ab01} className="shadow-sm rounded-md lg:max-w-[240px] mx-auto" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-indigo-600/20 via-indigo-600/70 from-indigo-600 bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 -z-1 shadow-md shadow-indigo-600/10 rounded-full"></div>

                            <div className="absolute flex justify-between items-center md:bottom-16 bottom-0 end-5 rounded-lg shadow-md dark:shadow-gray-800 lg:w-72 w-48 m-3">
                                <img src={sales_chart} className="rounded-lg shadow-sm dark:shadow-gray-800" alt="" />
                            </div>
                        </div>

                        <div className="lg:me-8 order-2 md:order-1">
                            <h4 className="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">If you need help, <br /> we&apos;re here for you</h4>

                            <div id="accordion-collapseone" data-accordion="collapse" className="mt-6">
                                {accordionData.slice(0,4).map((item, index) => (
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

                            <div className="mt-4">
                                <Link to="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                        <div className="relative">
                            <img src={classic04} className="mx-auto" alt="" />
                            <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tr to-indigo-600/20 via-indigo-600/70 from-indigo-600 bottom-1/2 translate-y-1/2 md:end-0 end-1/2 md:translate-x-0 translate-x-1/2 -z-1 shadow-md shadow-indigo-600/10 rounded-full"></div>

                            <div className="absolute bottom-1/2 translate-y-1/2 lg:-end-7 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-52 m-3">
                                <div className="flex">
                                    <div className="text-center min-w-[75px]">
                                        <span className="text-2xl font-bold">4.90</span>
                                        <ul className="list-none mb-0 text-amber-400 text-xs space-x-1">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                        <span className="text-xs"><span className="font-semibold">950</span> <span className="text-slate-400">Ratings</span></span>
                                    </div>

                                    <span className="font-bold ms-3">Trusted by over <span className="text-indigo-600">50000</span> members</span>
                                </div>
                            </div>

                            <div className="absolute flex justify-between items-center bottom-16 md:start-10 -start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 m-3">
                                <div className="flex items-center">
                                    <img src={image7} className="size-14 rounded-full shadow-md dark:shadow-gray-800 me-3" alt="" />
                                    <div className="flex-1">
                                        <h6 className="text-lg font-semibold">Advin</h6>
                                        <p className="text-slate-400">Owner & CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:ms-8">
                            <h4 className="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">Plan in front program for your needs</h4>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                            <ul className="list-none text-slate-400 mt-4">
                                <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/>  Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/>  Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/>  Create your own skin to match your brand</li>
                            </ul>

                            <div className="mt-4">
                                <Link to="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Key Features</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                    </div>

                   <KeyFeatureTwo/>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-indigo-600 text-base mb-2">Testimonial</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Users Say</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                    </div>

                    <UserFeedBack2 />
                </div>
                <MobileApp/>
            </section>
            <TransparentFooter/>
            <CookieModal />
        </>
    )
}

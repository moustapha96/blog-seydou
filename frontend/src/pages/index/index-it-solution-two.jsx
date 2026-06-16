import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import aboutImage from '../../assets/images/it/about.jpg';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import UserFeedBack from '../../component/userFeedBack';
import Blog from '../../component/blog';
import CookieModal from '../../component/cookieModal';
import CompanyLogo from '../../component/companyLogo';
import Cta from '../../component/cta';

import * as Icon from 'react-feather';

import CountUp from 'react-countup';

import { about } from '../../data/dataTwo';
import { MdOutlineEventNote } from 'react-icons/md';

export default function IndexItSolutionTwo() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });

    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Navbar />
            <section className="relative table w-full py-36 lg:py-64 ltr:bg-[url('../../assets/images/it/bg.jpg')] rtl:bg-[url('../../assets/images/it/bg-rtl.jpg')] bg-no-repeat sm:bg-left bg-right overflow-hidden bg-cover">
                <div className="container relative z-1">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                        <div className="md:col-span-7">
                            <div className="md:me-6">
                                <span className="text-xl font-semibold">IT Company</span>
                                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5 text-black dark:text-white"><span className="after:absolute after:end-0 after:start-0 after:bottom-2 after:h-1.5 after:w-auto after:bg-gradient-to-l after:to-indigo-600 after:from-green-600 relative">Consultant</span> & <br /> Find Bright <span className="after:absolute after:end-0 after:start-0 after:bottom-2 after:h-1.5 after:w-auto after:bg-gradient-to-l after:to-indigo-600 after:from-green-600 relative">Solutions</span></h4>
                                <p className="text-slate-400 text-lg max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                <div className="mt-6">
                                    <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact Us</Link>
                                    <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white m-1 lightbox"><Icon.Video className="size-4"></Icon.Video></Link><span className="font-semibold ms-1 align-middle"></span>
                                </div>
                            </div>
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

                <div className="absolute md:w-3/4 w-full top-1/2 -translate-y-1/2">
                    <div className="absolute w-full h-[5000px] bg-slate-50 dark:bg-slate-800 md:opacity-100 opacity-90 top-1/2 -translate-y-1/2 md:-start-[10%] -start-[25%] ltr:rotate-12 rtl:-rotate-12"></div>
                    <div className="absolute md:w-48 w-20 h-[5000px] bg-indigo-600 top-1/2 -translate-y-1/2 md:end-[10%] -end-[1%] ltr:rotate-12 rtl:-rotate-12"></div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-2 grid-cols-1 pb-8 items-center">
                        <div>
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Services</h6>
                            <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold mb-4 md:mb-0">It was a very common<br /> question that What IT Service<br /> We Provide now!</h3>
                        </div>
                        <p className="text-slate-400 max-w-xl">Explore and learn more about everything from machine learning and global payments to scaling your team.</p>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {
                            about.map((data, index) => {
                                const Icons = data.icon
                                return (

                                    <div key={index} className="group relative p-6 shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                                        <div className="relative overflow-hidden text-transparent -m-3">
                                            <Icon.Hexagon className="size-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto rotate-90"></Icon.Hexagon>
                                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                                <Icons width={30} height={30}/>
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <Link to="#" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">{data.title}</Link>
                                            <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">It is a long established fact that a reader.</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="md:col-span-6">
                            <div className="lg:me-8">
                                <div className="relative">
                                    <img src={aboutImage} className="rounded-full shadow-lg dark:shadow-gray-800" alt="" />

                                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto lg:size-72 size-56 flex justify-center items-center bg-white dark:bg-slate-900 rounded-full shadow-lg dark:shadow-gray-800">
                                        <div className="text-center">
                                            <span className="text-indigo-600 text-2xl font-bold mb-0 block"><CountUp className="counter-value text-6xl font-bold" end={15} start={1} />+</span>
                                            <span className="font-semibold block mt-2">Years <br /> Experience</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-6">
                            <div className="lg:ms-8">
                                <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Fast & Effective</h6>
                                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">We&apos;re a global stakeholder <br /> relations and partnership <br /> building consultancy.</h3>

                                <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                                <Link to="/page-services" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><MdOutlineEventNote className="me-2 text-lg"/> Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           <Cta/>

            <section className="relative md:pb-24 pb-16">
                <div className="container relative lg:pt-24 pt-16">
                    <div className="absolute inset-0 opacity-25 dark:opacity-50 bg-[url('../../assets/images/map.png')] bg-no-repeat bg-center bg-cover"></div>
                    <div className="relative grid grid-cols-1 pb-8 text-center z-1">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">We&apos;ve Built This Site With Content Management In Mind.</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" end={1548} start={1010} />+</h1>
                            <h5 className="counter-head text-lg font-medium">Properties Sell</h5>
                        </div>

                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" end={25} start={2} />+</h1>
                            <h5 className="counter-head text-lg font-medium">Award Gained</h5>
                        </div>

                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" end={9} start={0} />+</h1>
                            <h5 className="counter-head text-lg font-medium">Years Experience</h5>
                        </div>
                    </div>
                </div>

                <div className=" md:mt-24 mt-16" >
                  <UserFeedBack />
               </div>

                <Blog className="container relative md:mt-24 mt-16" />
            </section>

            <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700">
                <div className="container relative">
                    <CompanyLogo/>
                </div>
            </section>

            <Footer />
            <CookieModal />
        </>
    )
}

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import BannerImage from '../../assets/images/saas/light-dash.png'
import About1 from '../../assets/images/saas/1.png'
import About2 from '../../assets/images/saas/2.png'
import client1 from '../../assets/images/client/01.jpg'
import client2 from '../../assets/images/client/02.jpg'
import client3 from '../../assets/images/client/03.jpg'
import client4 from '../../assets/images/client/04.jpg'
import client5 from '../../assets/images/client/05.jpg'
import client6 from '../../assets/images/client/06.jpg'
import client7 from '../../assets/images/client/07.jpg'
import client8 from '../../assets/images/client/08.jpg'

import { TypeAnimation } from 'react-type-animation';

import Navbar from '../../component/Navbar/navbar';
import CompanyLogo from '../../component/companyLogo';
import MobileApp from '../../component/mobileApp';
import CookieModal from '../../component/cookieModal';

import { accordionData, priceData } from '../../data/dataTwo';
import { FaArrowRight, FaRegEnvelope } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsCheckCircle } from 'react-icons/bs';
import TransparentFooter from '../../component/Footer/transparentFooter';

export default function IndexAi(){
    const [activeIndex, setActiveIndex] = useState(0);
   
    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index);
        }
    }

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('dark');
        htmlTag.classList.remove('light')
    });
    return(
        <>
         <span className="fixed blur-[200px] lg:size-[600px] size-[400px] rounded-full top-[10%] md:start-[10%] -start-[20%] bg-indigo-600/20"></span>
        <span className="fixed blur-[200px] lg:size-[600px] size-[400px] rounded-full bottom-[10%] md:end-[10%] -end-[20%] bg-red-600/20"></span>
        <Navbar/>
          <section className="relative table w-full lg:py-40 md:py-36 pt-36 pb-24 overflow-hidden bg-white dark:bg-slate-900">
            <div className="absolute inset-0 bg-[url('../../assets/images/overlay.png')] bg-repeat opacity-10 dark:opacity-60"></div>
            <div className="container relative z-1">
                <div className="relative grid lg:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="lg:col-span-7">
                        <div className="lg:me-6 lg:text-start text-center">
                            <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5">Access powerful AI <br/>For 
                            <TypeAnimation
                            sequence={[
                                ' Ai Content',
                                2000,
                                ' Blog Writing',
                                2000,
                                ' Technical Writing',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="typewrite bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"
                            repeat={Infinity}
                        />
                        </h1>
                            <p className="text-lg max-w-xl lg:ms-0 mx-auto">Beatae cum eius, animi itaque aliquid ducimus facere dicta, vitae ipsam maiores nam sit blanditiis, quisquam expedita?</p>
                        
                            <div className="subcribe-form mt-6 mb-3">
                                <form className="relative max-w-md mx-auto lg:ms-0">
                                    <div className="relative">
                                        <FaRegEnvelope  className="me-2 text-base  absolute top-4 left-5"/>
                                        <input type="email" id="aiemail" name="email" className="py-4 pe-40 ps-12 w-full h-[50px] outline-none text-black dark:text-white rounded-md bg-white/60 dark:bg-slate-900/60 shadow-sm dark:shadow-gray-800" placeholder="support@techwind.com"/>
                                    </div>
                                    <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-md">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="relative after:content-[''] after:absolute lg:after:-top-0 after:-top-10 after:-right-32 after:size-[36rem] after:border-2 after:border-dashed after:border-slate-200 dark:after:border-slate-700 after:rounded-full after:animate-[spin_120s_linear_infinite] after:-z-1 before:content-[''] before:absolute lg:before:-top-24 before:-top-36 before:-right-56 before:w-[48rem] before:h-[48rem] before:border-2 before:border-dashed before:border-slate-200 dark:before:border-slate-700 before:rounded-full before:animate-[spin_240s_linear_infinite] before:-z-1">
                            <div className="relative after:content-[''] after:absolute lg:after:-top-0 after:-top-10 after:-right-40 after:size-[36rem] after:bg-gradient-to-tl after:to-indigo-600/30  after:from-red-600/30 dark:after:to-indigo-600/50 dark:after:from-red-600/50 after: after:blur-[200px] after:rounded-full after:-z-1">
                                <img src={BannerImage} className="lg:max-w-none lg:ms-14" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>

        <section className="pt-6">
            <div className="container relative">
                <CompanyLogo/>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-3 grid-cols-1 shadow-sm shadow-gray-300 dark:shadow-gray-500 rounded-lg md:divide-x-[1px] divide-y-[1px] divide-gray-200 dark:divide-gray-700">
                    <div className="relative p-6 md:p-8">
                        <i className="mdi mdi-account-search-outline bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text text-[45px]"></i>

                        <h5 className="text-xl font-semibold my-5">Search & Write Content</h5>

                        <p className="text-slate-400">If the distribution of letters and &apos;words&apos; is random, the reader will not be distracted from making.</p>

                        <MdKeyboardArrowRight className="size-8 p-1 bg-indigo-600 text-white rounded-full flex justify-center items-center absolute md:top-2/4 md:-translate-y-2/4 -bottom-4 md:-end-0 end-2/4 ltr:translate-x-2/4 rtl:-translate-x-2/4 rtl:rotate-180 z-1"/>
                    </div>

                    <div className="relative p-6 md:p-8">
                        <i className="mdi mdi-wallet-bifold-outline bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text text-[45px]"></i>

                        <h5 className="text-xl font-semibold my-5">Discribe Content</h5>

                        <p className="text-slate-400">If the distribution of letters and &apos;words&apos; is random, the reader will not be distracted from making.</p>

                        <MdKeyboardArrowRight className="size-8 p-1 bg-indigo-600 text-white rounded-full flex justify-center items-center absolute md:top-2/4 md:-translate-y-2/4 -bottom-4 md:-end-0 end-2/4 ltr:translate-x-2/4 rtl:-translate-x-2/4 rtl:rotate-180 z-1"/>
                    </div>

                    <div className="relative p-6 md:p-8">
                        <i className="mdi mdi-home-plus-outline bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text text-[45px]"></i>

                        <h5 className="text-xl font-semibold my-5">Generate Content</h5>

                        <p className="text-slate-400">If the distribution of letters and &apos;words&apos; is random, the reader will not be distracted from making.</p>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="relative overflow-hidden rounded-lg border border-indigo-600/40 bg-indigo-600/10 dark:bg-indigo-600/20 lg:ps-12 ps-8 lg:pt-12 pt-8 lg:me-8">
                        <img src={About1} className="ltr:rounded-tl-lg rtl:rounded-tr-lg" alt=""/>
                    </div>

                    <div className="">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Create Content In Single <br/> Click With AI Power</h3>
                        <p className="text-slate-400 max-w-xl">You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>

                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Create your own skin to match your brand</li>
                        </ul>

                        <div className="mt-4">
                            <Link to="page-aboutus.html" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Find Out More <MdKeyboardArrowRight className='ms-1 text-lg'/></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="relative order-1 md:order-2">
                        <div className="relative overflow-hidden rounded-lg border border-indigo-600/40 bg-indigo-600/10 dark:bg-indigo-600/20 lg:pe-12 pe-8 lg:pt-12 pt-8 lg:ms-8">
                            <img src={About2} className="ltr:rounded-tr-lg rtl:rounded-tl-lg" alt=""/>
                        </div>
                    </div>

                    <div className="order-2 md:order-1">
                        <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Write Blog Posts, <br/> Stories, & Even Books</h4>
                        <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2" />Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Create your own skin to match your brand</li>
                        </ul>

                        <div className="mt-4">
                            <Link to="page-aboutus.html" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Find Out More <MdKeyboardArrowRight className='ms-1 text-lg'/></Link>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] relative">
                    <div className="lg:col-span-8 md:col-span-12">
                        <div className="grid grid-cols-1 pb-8">
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">AI Generate Content In Seconds</h3>
        
                            <p className="text-slate-400 max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                        </div>
                    
                        <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                            <div className="px-6 py-10 shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                               
                                <span className="mdi mdi-flip-horizontal text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
        
                                <div className="content mt-7">
                                    <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Plagiarism checker</Link>
                                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                    
                                    <div className="mt-5">
                                        <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-10 shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                                <span className="mdi mdi-email-edit-outline text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
        
                                <div className="content mt-7">
                                    <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Content Generator</Link>
                                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                    
                                    <div className="mt-5">
                                        <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-10 shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                                <span className="mdi mdi-star-outline text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
                                <div className="content mt-7">
                                    <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Search Engine Optimization</Link>
                                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                    
                                    <div className="mt-5">
                                        <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-10 shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                                <span className="mdi mdi-bookmark-outline text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
                                <div className="content mt-7">
                                    <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Digital name generator</Link>
                                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                    
                                    <div className="mt-5">
                                        <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 md:col-span-12">
                        <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-[30px]">
                            <div className="px-6 py-10 shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                                <span className="mdi mdi-account-check-outline text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
                                <div className="content mt-7">
                                    <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Ad Targeting tips</Link>
                                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                    
                                    <div className="mt-5">
                                        <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-10 shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                                <span className="mdi mdi-comment-multiple-outline text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
                                <div className="content mt-7">
                                    <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Content Rewriter</Link>
                                    <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                    
                                    <div className="mt-5">
                                        <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Users Say</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>

            <div className="container-fluid relative overflow-hidden">
                <div className="grid grid-cols-1 mt-8">
                    <div className="slider relative overflow-hidden m-auto mb-4 before:content-[''] before:absolute before:top-0 before:start-0 before:z-2 after:content-[''] after:absolute after:top-0 after:end-0 after:z-2">
                        <div className="slide-track flex items-center">
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client1} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Thomas Israel</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I didn&apos;t know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client2} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">There are so many things I had to do with my old software that I just don&apos;t do at all with Techwind. Suspicious but I can&apos;t say I don&apos;t love it.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client2} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Carl Oliver</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">The best part about Techwind is every time I pay my employees, my bank balance doesn&apos;t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client3} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Jill Webb</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I&apos;m trying to get a hold of someone in support, I&apos;m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client4} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I used to have to remit tax to the EU and with Techwind I somehow don&apos;t have to do that anymore. Nervous to travel there now though.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client5} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Janisha Doll</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">This is the fourth email I&apos;ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client6} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Thomas Israel</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I didn&apos;t know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client7} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">There are so many things I had to do with my old software that I just don&apos;t do at all with Techwind. Suspicious but I can&apos;t say I don&apos;t love it.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client8} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Carl Oliver</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">The best part about Techwind is every time I pay my employees, my bank balance doesn&apos;t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client1} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Jill Webb</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I&apos;m trying to get a hold of someone in support, I&apos;m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client2} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I used to have to remit tax to the EU and with Techwind I somehow don&apos;t have to do that anymore. Nervous to travel there now though.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client3} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Janisha Doll</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">This is the fourth email I&apos;ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client4} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Thomas Israel</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I didn&apos;t know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client5} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">There are so many things I had to do with my old software that I just don&apos;t do at all with Techwind. Suspicious but I can&apos;t say I don&apos;t love it.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client6} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Carl Oliver</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">The best part about Techwind is every time I pay my employees, my bank balance doesn&apos;t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client7} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Jill Webb</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I&apos;m trying to get a hold of someone in support, I&apos;m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client8} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I used to have to remit tax to the EU and with Techwind I somehow don&apos;t have to do that anymore. Nervous to travel there now though.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client1} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Janisha Doll</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">This is the fourth email I&apos;ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client2} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Thomas Israel</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I didn&apos;t know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client3} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">There are so many things I had to do with my old software that I just don&apos;t do at all with Techwind. Suspicious but I can&apos;t say I don&apos;t love it.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client4} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Carl Oliver</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">The best part about Techwind is every time I pay my employees, my bank balance doesn&apos;t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client5} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Jill Webb</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I&apos;m trying to get a hold of someone in support, I&apos;m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client6} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I used to have to remit tax to the EU and with Techwind I somehow don&apos;t have to do that anymore. Nervous to travel there now though.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client7} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Janisha Doll</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">This is the fourth email I&apos;ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client8} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Thomas Israel</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I didn&apos;t know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client1} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">There are so many things I had to do with my old software that I just don&apos;t do at all with Techwind. Suspicious but I can&apos;t say I don&apos;t love it.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client2}className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Carl Oliver</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">The best part about Techwind is every time I pay my employees, my bank balance doesn&apos;t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client3} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Jill Webb</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I&apos;m trying to get a hold of someone in support, I&apos;m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client4} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I used to have to remit tax to the EU and with Techwind I somehow don&apos;t have to do that anymore. Nervous to travel there now though.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client5} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Janisha Doll</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">This is the fourth email I&apos;ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client6} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Thomas Israel</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I didn&apos;t know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client7} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">There are so many things I had to do with my old software that I just don&apos;t do at all with Techwind. Suspicious but I can&apos;t say I don&apos;t love it.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client8} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Carl Oliver</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">The best part about Techwind is every time I pay my employees, my bank balance doesn&apos;t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client1} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Jill Webb</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I&apos;m trying to get a hold of someone in support, I&apos;m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client2} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I used to have to remit tax to the EU and with Techwind I somehow don&apos;t have to do that anymore. Nervous to travel there now though.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <img src={client3} className="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link to="#" className="text-lg hover:text-indigo-600 duration-500 ease-in-out">Janisha Doll</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">This is the fourth email I&apos;ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center md:gap-[30px]">
                    <div className="lg:col-span-4 md:mb-0 mb-8">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>

                        <p className="text-slate-400 max-w-xl mx-auto mb-6">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>

                        <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-gray-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 text-slate-900 dark:text-white hover:text-white rounded-full">Contact Us</Link>
                    </div>

                    <div className="lg:col-span-8 md:mt-0 mt-8" id="accordion-collapse">
                        {accordionData.slice(0,4).map((item, index) => (
                            <div key={index} className="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                    <button type="button" onClick={() => toggleAccordion(index)} className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === index ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''}`} >
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
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Our Pricing Plans</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind css html page.</p>
                </div>

                <div className="grid grid-cols-1 mt-8 gap-[30px]">
                    {priceData.map((item, index)=>{
                        return(
                            <div className="group md:flex items-center justify-between p-6 rounded-lg shadow-sm dark:shadow-gray-700" key={index}>
                                <div className="lg:flex items-center justify-between lg:w-2/4">
                                    <div className="lg:mb-0 mb-5">
                                        <h5 className="text-2xl font-semibold">{item.title}</h5>
                                        <p className="text-slate-400 lg:w-[200px] md:w-[300px] mt-2">{item.desc}</p>
                                    </div>
            
                                    <ul className="list-none text-slate-400 md:mb-0 mb-5">
                                        {item.features.map((el,index)=>{
                                            return(
                                                <li key={index} className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2" /> {el}</li>
                                            )
                                        })}
                                    </ul>
                                </div>

                                <div className="flex md:mb-0 mb-5">
                                    <span className="text-xl font-semibold">$</span>
                                    <span className="price text-4xl font-semibold mb-0">{item.plan}</span>
                                    <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                </div>

                                <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-gray-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 text-slate-900 dark:text-white hover:text-white rounded-full">{item.btn}</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <MobileApp/>
        </section>
          <TransparentFooter/>
          <CookieModal/>
        </>
    )
}
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import banner1 from '../../assets/images/podcast/h2.jpg'
import banner2 from '../../assets/images/podcast/h1.jpg'
import banner3 from '../../assets/images/podcast/h3.jpg'
import banner4 from '../../assets/images/podcast/h4.jpg'
import aboutImage from '../../assets/images/podcast/ab.jpg'
import logoIcon from '../../assets/images/logo-icon-30.png'
import clientImage from '../../assets/images/client/01.jpg'

import Navbar from "../../component/Navbar/navbar";
import UserFeedBack from '../../component/userFeedBack'
import Footer from '../../component/Footer/footer'
import CookieModal from '../../component/cookieModal'
import GetInTuch from '../../component/getInTuch'

import CountUp from 'react-countup';
import TinySlider from 'tiny-slider-react';


import { podcastCategorie,posdcastData } from '../../data/dataFour'
import { BiArrowToLeft, BiArrowToRight, BiBookmark, BiMicrophone } from 'react-icons/bi'
import { TbPlayerPause } from 'react-icons/tb'
import { FaArrowRight } from 'react-icons/fa'
import { BsCheckCircle } from 'react-icons/bs'

const settings = {
    container: '.tiny-three-item',
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i className="mdi mdi-chevron-left "></i>', '<i className="mdi mdi-chevron-right"></i>'],
    speed: 400,
    gutter: 12,
    responsive: {
        992: {
            items: 3
        },

        767: {
            items: 2
        },

        320: {
            items: 1
        },
    },
}

export default function IndexPodcast(){
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    },[]);

    let [isOpen, setOpen] = useState(false)
    
    return(
        <>
        <Navbar/>
        <section className="relative table w-full py-36 lg:py-44 bg-gradient-to-br from-indigo-600/20 to-yellow-500/20 dark:from-indigo-600/20 dark:to-yellow-500/20">
            <div className="container relative">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="lg:col-span-7">
                        <div className="me-6">
                            <BiMicrophone className="text-indigo-600 text-4xl"/>
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-[54px] my-5 text-black dark:text-white">Find and Listen on <br/> your <span className="text-indigo-600">favorite podcast</span></h4>
                            <p className="text-slate-500 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                        
                            <div className="mt-8">
                                <Link to="#!" onClick={() => setOpen(true)}  className="lightbox py-1.5 ps-5 pe-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">Listen Now <span className="size-8 inline-flex items-center justify-center rounded-full bg-white border border-white text-indigo-600 ms-3"><i className="mdi mdi-play"></i></span></Link>
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
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="grid grid-cols-2 items-center md:gap-4 gap-3">
                            <div className="md:space-y-4 space-y-3">
                                <img src={banner1} className="border-[3px] border-gray-100 dark:border-gray-800 rounded-lg" alt=""/>
                                <img src={banner2} className="border-[3px] border-gray-100 dark:border-gray-800 rounded-lg" alt=""/>
                            </div>
    
                            <div className="md:space-y-4 space-y-3">
                                <img src={banner3} className="border-[3px] border-gray-100 dark:border-gray-800 rounded-lg" alt=""/>
                                <img src={banner4} className="border-[3px] border-gray-100 dark:border-gray-800 rounded-lg" alt=""/>
                            </div>
                        </div>

                        <span className="size-24 bg-yellow-500 border-[3px] border-gray-100 dark:border-gray-800 rounded-full absolute bottom-0 -end-4 flex items-center justify-center">
                            <span className="text-white text-xl text-center font-semibold">
                                <CountUp className="counter-value block" start={100} end={551} />
                                <span className="text-white font-semibold text-sm block">Podcasts</span>
                            </span>
                        </span>

                        <div className="absolute top-1/2 -translate-y-1/2 -start-4 py-2 px-3 flex items-center rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-fit my-3">
                            <BiMicrophone className="text-indigo-600 text-xl align-middle"/> <span className="font-semibold ms-1">Amazing Conversation</span>
                        </div>

                        <div className="absolute -top-4 start-1/2 -translate-x-1/2 text-center">
                            <Link to="#!" onClick={() => setOpen(true)}  className="lightbox size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center text-white bg-indigo-600">
                               <BiMicrophone className="inline-flex items-center justify-center text-2xl"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center md:gap-[30px] gap-12">
                    <div className="md:col-span-5">
                        <div className="relative">
                            <div className="shadow-md dark:shadow-gray-800 rounded-t-full border-8 border-gray-200 dark:border-gray-900">
                                <img src={aboutImage} className="shadow-md rounded-t-full" alt=""/>
                            </div>

                            <div className="absolute -bottom-6 -end-2">
                                <div className="bg-white dark:bg-slate-800 w- rounded-xl shadow-md dark:shadow-gray-800 w-[300px] border-b border-gray-100 dark:border-gray-600">
                                    <div className="p-6 space-y-6">
                                        <div className="flex items-center space-x-3">
                                            <img src={logoIcon} alt=""/>
                                            <h5 className="text-xl font-semibold">Techwind Podcast</h5>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="relative">
                                                <div className="bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                                    <div className="bg-indigo-600 w-1/2 h-1.5" role="progressbar" aria-label="music progress"></div>
                                                </div>
                                                <div className="ring-indigo-600 ring-2 absolute left-1/2 top-1/2 size-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow-sm">
                                                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
                                                <div className="text-indigo-600">24:16</div>
                                                <div className="text-slate-400">75:50</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 dark:bg-slate-700 flex items-center rounded-b-xl">
                                        <div className="flex-auto flex items-center justify-evenly">
                                            <button type="button" aria-label="Add to favorites">
                                                <BiBookmark className="text-xl text-slate-400 hover:text-indigo-600"/>
                                            </button>
                                            <button type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Previous">
                                                <BiArrowToLeft className="text-2xl text-slate-400 hover:text-indigo-600"/>
                                            </button>
                                        </div>
                                        <button type="button" className="bg-white dark:bg-slate-800 flex-none -my-2 mx-auto size-20 rounded-full border border-gray-100 dark:border-gray-600 shadow-md flex items-center justify-center" aria-label="Pause">
                                            <TbPlayerPause className="text-4xl text-slate-400 hover:text-indigo-600"/> 
                                        </button>
                                        <div className="flex-auto flex items-center justify-evenly">
                                            <button type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Next">
                                                <BiArrowToRight className="text-2xl text-slate-400 hover:text-indigo-600"/>
                                            </button>
                                            <button type="button" className="text-slate-400 hover:text-indigo-600">1x</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-7">
                        <div className="lg:ms-4">
                            <h4 className="mb-6 md:text-4xl text-3xl lg:leading-normal leading-normal font-bold">Listen podcast anytime <br/> and anyware you want</h4>
                            <p className="text-slate-400 max-w-xl mb-2">Techwind Homes developed a platform for the Real Estate marketplace that allows buyers and sellers to easily execute a transaction on their own.</p>
                            <p className="text-slate-400 max-w-xl">The platform drives efficiency, cost transparency and control into the hands of the consumers. Techwind Homes is Real Estate Redefined.</p>
                            
                            <div className="mt-4">
                                <Link to="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-3">Learn More </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Explore Podcast Categories</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="flex justify-center items-center text-center mt-8">
                    <ul className="list-none space-x-3 space-y-4">
                        {podcastCategorie.map((item, index) => {
                            const Icons = item.icon
                            return(
                            <li className="inline-block" key={index}>
                                <Link to="" className="group flex items-center bg-white dark:bg-slate-900 hover:text-indigo-600 shadow-sm hover:shadow-md dark:shadow-gray-800 hover:dark:shadow-gray-800 border-4 border-double border-gray-100 hover:border-indigo-600/30 dark:border-gray-800 hover:dark:border-indigo-600/50 py-1.5 px-4 rounded-full align-middle duration-500">
                                    <Icons className="me-2 text-[18px]"/>
                                    <span className="text-[18px] font-medium">{item.title}</span>
                                </Link>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                    <div className="md:col-span-6">
                        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Podcasts</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">All Podcasts from <br/> Audio & Video</h3>
                    </div>

                    <div className="md:col-span-6">
                        <p className="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 relative mt-8">
                    <div className="tiny-three-item-icon">
                    <TinySlider settings={settings}>
                        {posdcastData.map((item, index)=>{
                            return(
                                <div className="tiny-slide" key={index}>
                                    <div className="group relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden m-3">
                                        <div className="relative">
                                            <img src={item.image} alt=""/>
        
                                            <Link to="#!" onClick={() => setOpen(true)} className="lightbox size-8 inline-flex items-center justify-center rounded-full bg-white border border-white text-indigo-600 absolute top-3 end-3"><i className="mdi mdi-play"></i></Link>
        
                                            <div className="absolute start-0 bottom-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                                <div className="pb-4 ps-4 flex items-center">
                                                    <img src={clientImage} className="size-10 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt=""/>
                                                    <div className="ms-3">
                                                        <Link to="" className="font-semibold text-white block">Calvin Carlo</Link>
                                                        <span className="text-white/70 text-sm">4k Subscribe</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="content p-6">
                                            <audio controls className="block w-full max-w-md mx-auto mb-3">
                                                <source src="assets/images/audio.mp3" type="audio/mpeg"/>
                                            </audio>
        
                                            <Link to="blog-youtube-post.html" className="title h5 text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                            <p className="text-slate-400 mt-3">{item.desc}</p>
                                            
                                            <div className="mt-4">
                                                <Link to="blog-youtube-post.html" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Watch Now <FaArrowRight className='ms-1 text-[10px]'/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </TinySlider>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Choose Pricing Plan</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
                    <div className="group border-b-[3px] border-gray-200 dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Free</h6>

                        <div className="flex mb-5">
                            <span className="text-xl font-semibold">$</span>
                            <span className="price text-4xl font-semibold mb-0">0</span>
                            <span className="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Full Access</li>
                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Source Files</li>
                        </ul>
                        <Link to="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Signup</Link>
                    </div>

                    <div className="group border-b-[3px] border-gray-200 dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Starter</h6>

                        <div className="flex mb-5">
                            <span className="text-xl font-semibold">$</span>
                            <span className="price text-4xl font-semibold mb-0">9</span>
                            <span className="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Full Access</li>
                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Source Files</li>
                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/>Enhanced Security</li>
                        </ul>
                        <Link to="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Buy Now</Link>
                    </div>

                    <div className="group border-b-[3px] border-indigo-600 p-6 py-8 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                        <span className="absolute -end-11 -top-[10px] ltr:rotate-[45deg] rtl:-rotate-[45deg] w-32 h-16 pt-4 px-2 pb-0 flex items-center justify-center text-white bg-amber-500 font-semibold text-lg">Best</span>
                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Business</h6>

                        <div className="flex mb-5">
                            <span className="text-xl font-semibold">$</span>
                            <span className="price text-4xl font-semibold mb-0">74</span>
                            <span className="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Full Access</li>
                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Source Files</li>
                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Free Appointments</li>
                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Enhanced Security</li>
                        </ul>
                        <Link to="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Try it Now</Link>
                    </div>

                    <div className="group border-b-[3px] border-gray-200 dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Professional</h6>

                        <div className="flex mb-5">
                            <span className="text-xl font-semibold">$</span>
                            <span className="price text-4xl font-semibold mb-0">99</span>
                            <span className="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Full Access</li>
                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Source Files</li>
                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Free Appointments</li>
                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Enhanced Security</li>
                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className=" text-indigo-600 text-xl me-2"/> Free Installment</li>
                        </ul>
                        <Link to="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Started Now</Link>
                    </div>
                </div>
            </div>

            <div className="relative md:mt-24 mt-16">
                <UserFeedBack/>
            </div>

            <GetInTuch title={true}/>
        </section>
        <Footer/>
        <CookieModal/>
        </>
    )
}
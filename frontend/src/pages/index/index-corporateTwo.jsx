import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import experience_wall from '../../assets/images/corporate/experience-wall.jpg';
import imageP from '../../assets/images/portfolio/01.jpg';
import image1 from '../../assets/images/portfolio/02.jpg';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import Blog from '../../component/blog';
import CookieModal from '../../component/cookieModal';
import Cta from '../../component/cta';

import TinySlider from 'tiny-slider-react';

import { feedback } from '../../data/data';
import { corporateAbout2, corporateServices2 } from '../../data/dataTwo';
import { FaArrowRight } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';

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
export default function IndexCorporateTwo() {
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });

    return (
        <div>
            <Navbar navClass="nav-light" />
            <section className="relative table w-full py-36 lg:py-64 bg-[url('../../assets/images/corporate/bg.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-gradient-to-b to-transparent via-gray-900/50 from-gray-900"></div>
                <div className="absolute inset-0 bg-[url('../../assets/images/overlay.png')] bg-repeat bg-center bg-cover"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <span className="text-white/60 font-bold text-sm mb-3">HAVE YOU NOTICED</span>
                        <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Small Details Create <br /> The Big Picture</h4>
                        <p className="text-white/60 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                        <div className="mt-8">
                            <Link to="href" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-gray-50 hover:bg-indigo-600 border-gray-50 hover:border-indigo-600 text-slate-900 hover:text-white rounded-md">Learn More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-indigo-600">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>


            <section className="relative bg-indigo-600 py-10">
                <div className="container relative">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                        {corporateAbout2.map((item,index) => {
                             let Icons = item.icon
                            return(
                                <div key={index} className="group px-6 py-8 hover:bg-indigo-700 duration-500 ease-in-out">
                                    <Icons className="size-10 stroke-1 text-white"/>
        
                                    <div className="content mt-6">
                                        <Link to="#" className="text-lg font-semibold text-white/80 hover:text-white">{item.title}</Link>
                                        <p className="text-white/50 mt-4">{item.desc}</p>
        
                                        <div className="mt-5">
                                            <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-white hover:text-white after:bg-white duration-500 ease-in-out">Learn More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-6 lg:order-1 order-2 lg:text-center">
                            <Link to="#" onClick={() => setOpen(true)} data-id="S_CGed6E610" className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white duration-500 ease-in-out mx-auto">
                                <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                            </Link>

                            <h6 className="text-indigo-600 text-sm font-bold uppercase mt-8 mb-2">About Us</h6>
                            <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-bold">Who we are ?</h3>
                            <p className="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6 lg:order-2 order-1">
                            <img src={experience_wall} className="shadow-md dark:shadow-gray-800" alt="" />
                        </div>

                        <div className="lg:col-span-4 md:col-span-12 lg:order-3 order-2">
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                            <ul className="list-none text-slate-400 mt-4 space-x-1">
                                <li className="mb-1 flex items-center"><AiOutlineCheckCircle className="text-indigo-600 text-xl me-2"/>  Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex items-center"><AiOutlineCheckCircle className="text-indigo-600 text-xl me-2"/>  Our Talented &amp; Experienced Marketing Agency</li>
                                <li className="mb-1 flex items-center"><AiOutlineCheckCircle className="text-indigo-600 text-xl me-2"/>  Create your own skin to match your brand</li>
                            </ul>
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

                <div className="container relative md:mt-24 mt-16 pt-16">
                    <div className="absolute inset-0 opacity-25 dark:opacity-50 bg-[url('../../assets/images/map.png')] bg-no-repeat bg-center bg-cover"></div>

                    <div className="relative grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">The Industries We Serve</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {corporateServices2.map((item, index)=>{
                            let Icons = item.icon
                            return(
                            <div key={ index } className="group px-6 py-8 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out border-t-[3px] border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600">
                                 <Icons className="size-7 text-indigo-600"/>

                                <div className="content mt-6">
                                    <Link className="text-xl font-semibold hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                    <p className="text-slate-400 mt-4">{item.desc}</p>

                                    <div className="mt-5">
                                        <Link className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More<FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <Cta/>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                        <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Explore Latest Works</h3>
                            <p className="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                            <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>

                    <div className="sm:flex mt-4">
                        <div className="sm:w-1/2 picture-item p-4 rounded-md">
                            <div className="">
                                <div className="relative">
                                    <div className="shadow-sm dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                                        <img src={imageP} className="rounded-t-md shadow-sm" alt="" />
                                    </div>
                                </div>

                                <div className="pt-4 px-3">
                                    <h5 className="mb-1 font-semibold text-xl"><Link to="#" className="hover:text-indigo-600 transition-all duration-500 ease-in-out">Techwind Personal Portfolio</Link></h5>
                                    <span className="text-slate-400">Creative</span>
                                </div>
                            </div>
                        </div>

                        <div className="sm:w-1/2 picture-item p-4 rounded-md">
                            <div className="">
                                <div className="relative">
                                    <div className="shadow-sm dark:shadow-gray-800 p-5 pb-0 rounded-md bg-emerald-600/5 dark:bg-emerald-600/30">
                                        <img src={image1} className="rounded-t-md shadow-sm" alt="" />
                                    </div>
                                </div>

                                <div className="pt-4 px-3">
                                    <h5 className="mb-1 font-semibold text-xl"><Link to="#" className="hover:text-emerald-600 transition-all duration-500 ease-in-out">Techwind Minimal Portfolio</Link></h5>
                                    <span className="text-slate-400">Minimal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">What Our Client Say ?</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="flex justify-center relative mt-16">
                        <div className="relative md:w-1/2 w-full">
                            <div className="absolute -top-20 md:-start-24 -start-0">
                                <i className="mdi mdi-format-quote-open text-9xl opacity-5"></i>
                            </div>

                            <div className="absolute bottom-28 md:-end-24 -end-0">
                                <i className="mdi mdi-format-quote-close text-9xl opacity-5"></i>
                            </div>

                            <div className="tiny-single-item">
                                <TinySlider settings={settings}>
                                    {feedback.map((item, index) => {
                                        return(
                                            <div className="tiny-slide" key={index}>
                                                <div className="text-center">
                                                    <p className="text-lg text-slate-400 italic"> {item.description} </p>
    
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

                <Blog className="container relative md:mt-24 mt-16" id={""} />
            </section>
            <Footer />
            <CookieModal />
        </div>
    )
}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import ab1 from '../../assets/images/spa/ab1.jpg';
import ab2 from '../../assets/images/spa/ab2.jpg';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import UserFeedBack2 from '../../component/userFeedBack2';
import CookieModal from '../../component/cookieModal';

import * as Icon from 'react-feather';

import { team } from '../../data/data';
import { spaData,spaBlog,spaAabout } from '../../data/dataTwo';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';

export default function IndexSpa() {

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });

    let [isOpen, setOpen] = useState(false)

    return (
        <div className='spa-css'>
            <Navbar navClass="nav-light" />

            <section className="relative md:py-60 py-36 bg-[url('../../assets/images/spa/bg.jpg')] bg-center bg-no-repeat bg-cover jarallax bg-fixed" >
                <div className="absolute inset-0 bg-slate-900/10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-transparent"></div>

                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h5 className="!font-ebgaramond text-white text-xl font-medium wow animate__animated animate__fadeInUp" data-wow-delay=".1s">Discover a truly relaxing experience</h5>
                        <h4 className="!font-alex lg:text-9xl lg:leading-tight text-7xl text-white mt-4 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">Beauty spa and wellness</h4>
                        <p className="text-white/70 max-w-xl mx-auto mt-6 wow animate__animated animate__fadeInUp" data-wow-delay=".5s">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>

                        <div className="mt-8">
                            <Link className="py-2 px-5 inline-block tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-transparent hover:bg-white border-white text-white hover:text-slate-900 font-normal wow animate__ animate__fadeInUp animated" data-wow-delay=".5s">Explore Now</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-3 gap-[30px]">
                        {spaAabout.map((item,index)=>{
                            return(
                                <div className="relative overflow-hidden h-fit" key={index}>
                                <img src={item.image} className="" alt="" />
                                <div className="absolute inset-0 size-full bg-gradient-to-t to-transparent via-slate-900/50 from-slate-900 "></div>
    
                                <div className="absolute p-6 bottom-0 start-0 end-0">
                                    <h6 className="text-white/70 mb-1">{item.name}</h6>
                                    <Link className="font-semibold !font-ebgaramond text-white uppercase tracking-wide inline-flex items-center">{item.title} <FiArrowUpRight className="ms-1 w-5"/></Link>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="relative">
                                <div className="relative">
                                    <img src={ab1} className="lg:w-[400px] w-[280px]" alt="" />
                                    <div className="absolute top-0 translate-y-2/4 end-0 text-center">
                                        <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="absolute -end-5 -bottom-16">
                                    <img src={ab2} className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900" alt="" />
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

                        <div className="lg:col-span-7 md:col-span-6 mt-8 md:mt-0">
                            <div className="lg:ms-6">
                                <h4 className="!font-alex text-3xl">Our Story</h4>
                                <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal !font-ebgaramond font-medium">Incredible Experience</h3>
                                <p className="text-slate-400 max-w-xl mb-2">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>
                                <p className="text-slate-400 max-w-xl">We must now retrace our way a little. It was mentioned that upon first breaking ground in the whale&apos;s back, the blubber-hook was inserted into the original hole there cut by the spades of the mates.</p>

                                <div className="mt-8">
                                    <Link className="py-2 px-5 inline-block tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white font-normal">Explore Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16 pt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h4 className="!font-alex text-3xl">Spa & Massage</h4>
                        <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal !font-ebgaramond font-medium">Our Services</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>
                    </div>

                    <div className="grid md:grid-cols-2 mt-8 gap-[30px]">
                        {
                            spaData.map((data,index) => {
                                return (
                                    <div className="flex " key={index}>
                                        <img src={data.image} className="size-16" alt="" />
                                        <div className="ms-2 w-full">
                                            <div className="flex justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
                                                <Link className="!font-ebgaramond hover:text-indigo-600 text-xl font-semibold">{data.type}</Link>
                                                <h6 className="text-indigo-600">$140</h6>
                                            </div>
                                            <p className="text-slate-400 mt-2">Your athletic spa experience and recovery.</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className="py-20 w-full table relative bg-[url('../../assets/images/spa/cta.jpg')] bg-center bg-no-repeat bg-cover jarallax" data-jarallax data-speed="0.5">
                <div className="absolute inset-0 bg-slate-900/70"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-6 md:text-4xl text-3xl !font-ebgaramond text-white font-medium">Stop leaving money on the table.</h3>

                        <p className="text-white/80 max-w-xl mx-auto">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>

                        <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10">
                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h4 className="!font-alex text-3xl">Testimonial</h4>
                        <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal !font-ebgaramond font-medium">What Our Users Say</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>
                    </div>

                    <UserFeedBack2 />
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h4 className="!font-alex text-3xl">Our Minds</h4>
                        <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal !font-ebgaramond font-medium">Management Team</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                        {team.map((item,index)=>{
                            return(
                                <div key={index} className="lg:col-span-3 md:col-span-6">
                                    <div className="group text-center">
                                        <div className="relative inline-block mx-auto size-52 overflow-hidden">
                                            <img src={item.image} className="" alt="" />
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black size-52 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                            <ul className="list-none space-x-1 absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out flex justify-center">
                                                <li><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Facebook className="size-4"></Icon.Facebook></Link></li>
                                                <li><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Instagram className="size-4"></Icon.Instagram></Link></li>
                                                <li><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Linkedin className="size-4"></Icon.Linkedin></Link></li>
                                            </ul>
                                        </div>

                                        <div className="content mt-3">
                                            <Link className="text-xl font-semibold !font-ebgaramond hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.name}</Link>
                                            <p className="text-slate-400">Thai Massage</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h4 className="!font-alex text-3xl">Blog</h4>
                        <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal !font-ebgaramond font-medium">Blog Or News</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                        {spaBlog.map((item,index)=>{
                            return(
                                <div key={index} className="blog relative shadow-sm dark:shadow-gray-800 overflow-hidden">
                                    <img src={item.image} alt="" />

                                    <div className="content p-6">
                                        <Link to="/blog-detail" className="title h5 text-xl font-semibold !font-ebgaramond hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                        <p className="text-slate-400 mt-3">{item.desc}</p>

                                        <div className="mt-4">
                                            <Link to="/blog-detail" className="relative inline-flex items-center font-normal tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <Footer />
            <CookieModal />
        </div>
    )
}

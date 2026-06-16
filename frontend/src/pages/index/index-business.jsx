import { Link } from 'react-router-dom';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import UserFeedBack from '../../component/userFeedBack';
import Blog from '../../component/blog';
import CookieModal from '../../component/cookieModal';
import CompanyLogo from '../../component/companyLogo';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import Cta from '../../component/cta';
import AboutImage from '../../component/abloutImage';
import { businessAbout,priceTwo } from '../../data/dataTwo';
import { FaArrowRight } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';
import { useEffect } from 'react';

export default function IndexBusiness() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });
    return (
        <>
            <Navbar navClass="nav-light" />
            <section  className="relative">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={3000}
                    className='h-screen'
                >
                    <SwiperSlide index={0} className='h-full '>
                        <div className="flex items-center justify-center transition-all duration-700 ease-in-out h-full overflow-hidden">
                            <div className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover bg-[url('../../assets/images/business/bg01.jpg')]"></div>
                            <div className="absolute inset-0 ltr:md:bg-gradient-to-r rtl:md:bg-gradient-to-l md:from-black md:via-black/80 md:bg-black/20 bg-black/70 z-2"></div>
                            <div className="container relative z-3 flex items-center ">
                                <div className="grid grid-cols-1 md:mt-10 mt-14">
                                    <div className="md:text-start text-center">
                                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl md:mb-6 mb-2">Take Care of Your Future</h1>
                                        <p className="text-white/70 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                        <div className="md:mt-8 mt-4">
                                            <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide index={1} className='h-full'>
                        <div className="flex items-center justify-center transition-all duration-700 ease-in-out h-full overflow-hidden">
                            <div className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover  bg-[url('../../assets/images/business/bg02.jpg')]"></div>
                            <div className="absolute inset-0 md:bg-gradient-to-b md:from-transparent md:to-black md:bg-black/20 bg-black/70 z-2"></div>
                            <div className="container relative z-3 flex items-center justify-center">
                                <div className="grid grid-cols-1 mt-10">
                                    <div className="text-center">
                                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Let&apos;s Start With Techwind</h1>
                                        <p className="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                        <div className="mt-8">
                                            <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">See Services</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide index={2} className='h-full'>
                        <div className="flex items-center justify-center transition-all duration-700 ease-in-out h-full overflow-hidden">
                            <div className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover bg-[url('../../assets/images/business/bg03.jpg')] "></div>
                            <div className="absolute inset-0 ltr:md:bg-gradient-to-l rtl:md:bg-gradient-to-r md:from-black md:via-black/80 md:bg-black/20 bg-black/70 z-2"></div>
                            <div className="container relative z-3">
                                <div className="grid grid-cols-1 mt-10">
                                    <div className="md:text-end text-center">
                                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Build and Grow Your Business</h1>
                                        <p className="text-white/70 text-lg max-w-xl md:ms-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                        <div className="mt-8">
                                            <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Pricing Plans</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section className="relative py-8 bg-indigo-600">
                <div className="container relative">
                   <CompanyLogo/>
                </div>
            </section>


            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <AboutImage grid="md:col-span-5"/>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Who We Are ?</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Business strategies and top <br /> permormance ideas</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                        {businessAbout.map((item, index)=>{
                            let Icons = item.icon
                            return(
                                <div className="group text-center" key={index}>
                                    <Icons className="size-10 stroke-1 group-hover:stroke-[1.5px] group-hover:text-indigo-600 transition-all duration-500 ease-in-out mx-auto"/>
                                    <div className="mt-6">
                                        <Link to="#" className="text-xl font-semibold group-hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.title}</Link>

                                        <p className="text-slate-400 mt-4">{item.desc}</p>

                                        <div className="mt-4">
                                            <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
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
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Choose Pricing Plan</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                        {priceTwo.map((item,index) => {
                            return(
                                <div key={index} className="group border-b-[3px] border-gray-200 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative shadow-sm dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900">
                                    <div className="p-6 py-8">
                                        <h6 className="font-bold uppercase mb-5 text-indigo-600">{item.title}</h6>

                                        <div className="flex mb-5">
                                            <span className="text-xl font-semibold">$</span>
                                            <span className="price text-4xl font-semibold mb-0">{item.amount}</span>
                                            <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                        </div>

                                        <ul className="list-none text-slate-400 ">
                                            {item.subData.map((el,index)=>{
                                                return(
                                                    <li className="mb-1 flex ml-0" key={index}><BsCheckCircle className="text-indigo-600 text-base me-2"/> {el} </li>
                                                )
                                            })}
                                        </ul>
                                        <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Get Started</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
               <div className=" md:mt-24 mt-16" >
                  <UserFeedBack />
               </div>

                <Blog className="container relative md:mt-24 mt-16" />
            </section>
            <Footer />
            <CookieModal />
       

         

           

        </>
    )
}

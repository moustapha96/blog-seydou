import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import logo_icon_64 from '../../assets/images/logo-icon-64.png';
import shape_image from '../../assets/images/shape-image.png';
import cta from '../../assets/images/digital/cta.jpg';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import UserFeedBack2 from '../../component/userFeedBack2';
import CookieModal from '../../component/cookieModal';
import Blog2 from '../../component/blog2';

import TinySlider from 'tiny-slider-react';

import * as Icon from 'react-feather';

import { coWorkServices, coworkTab, coworkAbout } from '../../data/dataThree';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

let settings = {
    container: '.tiny-six-item',
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
            items: 6
        },

        992: {
            items: 4
        },

        767: {
            items: 3
        },

        320: {
            items: 1
        },
    },
}
export default function IndexCoworking() {
    let [isOpen, setOpen] = useState(false)
    let [isOpenTab, setisOpen] = useState(0);
    let [modal , setModal] = useState(false)

    let handleTabClick = (index) => {
        setisOpen(index);
    };
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });

    return (
        <>
            <Navbar navClass='nav-light' />
            <section className="relative md:py-60 py-36 items-center">
                <div className="absolute top-0 start-0 size-full z-0 pointer-events-none overflow-hidden">
                    <iframe
                        src="https://www.youtube.com/embed/JsNvHJsufhI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
                        className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"
                        title="Embedded YouTube Video"
                    ></iframe>
                </div>
                <div className="absolute inset-0 opacity-20 bg-[url('../../assets/images/map.svg')] bg-no-repeat bg-center bg-cover"></div>
                <div className="absolute inset-0 bg-slate-900/70"></div>

                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <img src={logo_icon_64} className="block mx-auto animate-[spin_10s_linear_infinite]" alt="" />
                        <h3 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 mt-10 text-white">Coworking Just Feels Right</h3>

                        <p className="text-slate-300 text-lg max-w-2xl mx-auto">Coworking spaces offer a wealth of advantages for self starters, including networking opportunities, daily structure, and increased productivity.</p>

                        <div className="subcribe-form z-1 mt-8">
                            <form className="relative mx-auto max-w-xl">
                                <Icon.MapPin className="size-5 absolute top-[48%] -translate-y-1/2 start-4"></Icon.MapPin>
                                <input type="text" id="search_name" name="name" className="pt-4 pe-40 pb-4 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 ps-12" placeholder="Washington, D.C." />
                                <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Find A Space</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="md:col-span-6">
                            <div className="lg:me-8">
                                <img src={shape_image} alt="" />
                            </div>
                        </div>

                        <div className="md:col-span-6">
                            <div className="lg:me-5">
                                <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Our History</h6>
                                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">“Sweet as the Moment When <br /> the coworking Went &apos;Pop”</h3>

                                <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                                <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-full">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Services</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">
                        {coworkAbout.map((item,index)=>{
                            let Icons = item.icon
                            return(
                                <div key={index} className="group relative lg:px-10 mt-4 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                                    <div className="relative overflow-hidden text-transparent -m-3">
                                        <Icon.Hexagon className="size-32 fill-indigo-600/5 mx-auto"></Icon.Hexagon>
                                        <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                            <Icons className='size-7'/>
                                        </div>
                                    </div>
            
                                    <div className="mt-6">
                                        <Link to="#" className="text-xl font-medium transition-all duration-500 ease-in-out hover:text-indigo-600">{item.title}</Link>
                                        <p className="text-slate-400 transition-all duration-500 ease-in-out mt-3">{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">We provide Different types of office</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>

                <div className="container-fluid relative">
                    <div className="flex justify-center relative mt-8">
                        <div className="relative w-full">
                            <div className="tiny-six-item">
                                <TinySlider settings={settings}>
                                    {coWorkServices.map((item, index) => {
                                        return(
                                            <div className="tiny-slide" key={index}>
                                                <div className="group relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden mx-2">
                                                    <div className="relative">
                                                        <img src={item.iamge} className="group-hover:rotate-3 group-hover:scale-110 duration-500 ease-in-out" alt="" />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
                                                    </div>
    
                                                    <div className="absolute bottom-6 start-6 end-6">
                                                        <Link to="#" className="text-white/70 hover:text-white text-lg block font-semibold duration-500 ease-in-out">{item.name}</Link>
                                                        <span className="text-white/60 block">{item.role}</span>
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
            </section>

            <section className="relative md:py-24 py-16 md:pt-0 pt-0">
                <div className="container relative">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="relative z-1">
                            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                <div className="lg:col-start-2 lg:col-span-10">
                                    <div className="relative">
                                        <img src={cta} className="rounded-md shadow-lg" alt="" />
                                        <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                            <Link to="#" onClick={() => setOpen(true)} data-id="S_CGed6E610"
                                                className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                                <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content md:mt-8">
                                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                    <div className="lg:col-start-2 lg:col-span-10">
                                        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                                            <div className="mt-8">
                                                <div className="section-title text-md-start">
                                                    <h6 className="text-white/50 text-lg font-semibold">Customers needs</h6>
                                                    <h3
                                                        className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">
                                                        Spaces for every size <br /> and type of need.</h3>
                                                </div>
                                            </div>

                                            <div className="section-title text-md-start">
                                                <p className="text-white/50 max-w-xl mx-auto mb-2">Start working with Techwind
                                                    that can provide everything you need to generate awareness, drive
                                                    traffic, connect.</p>
                                                <Link to="#" className="text-white inline-flex items-center">Read More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                                            </div>
                                        </div>
                                    </div>
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
                <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-indigo-500 to-indigo-600"></div>
            </section>
            <section className="realtive md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-5">
                            <div className="sticky top-20">
                                <ul className="flex-column text-center p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                <li role="presentation">
                                        <button className={`${ isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-base font-semibold rounded-md w-full hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true"
                                        onClick={() => handleTabClick(0)}
                                        >Private Office</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-base font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dedicated Office</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(2)} className={`${isOpenTab === 2 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-base font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Kitchen Space</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(3)} className={`${isOpenTab === 3 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-base font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Meeting Rooms</button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-8 md:col-span-7">
                            <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md">
                            {
                                    coworkTab.map((item, index) =>{
                                        return (
                                            <div className={`${isOpenTab === index  ? '': 'hidden'}`} id="profile" role="tabpanel" aria-labelledby="profile-tab" key={index}>
                                            <img src={item.image} className="shadow-sm rounded-md" alt="" />
                                            <div className="mt-6">
                                                <h5 className="text-lg font-semibold mb-4">{item.title}</h5>
                                                <p className="text-slate-400 mb-2">{item.description}</p>
                                                <Link to="#" className="relative inline-flex items-center    font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                            </div>
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
                <Blog2 className="container relative md:mt-24 mt-16"/>
            </section>


            <div className="container-fluid relative">
                <div className="grid grid-cols-1">
                    <div className="relative grayscale w-full leading-[0] border-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                            title="Google Maps Embed"
                            style={{ "border": "0" }}
                            className="w-full h-[500px]"
                            allowFullScreen
                        ></iframe>

                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center">
                        <Link onClick={()=>setModal(!modal)}  className="size-12 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><FiPhone className="me-1 text-lg"/></Link>
                    </div>
                </div>
            </div>

            {modal ? 
            <div id="contactModal" className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 flex items-center justify-center">
                <div className="relative w-full h-auto max-w-md p-4">
                    <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow-sm dark:shadow-gray-800">
                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                            <h5 className="text-xl font-semibold">Contact Form</h5>
                            <button type="button"  onClick={()=>setModal(!modal)}  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                                <svg className="size-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className="p-6 text-center">
                            <form>
                                <div className="grid lg:grid-cols-12 lg:gap-6">
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-start">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.User className="size-4 absolute top-3 start-4"></Icon.User>
                                                <input name="name" id="name" type="text" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name :" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-start">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.Mail className="size-4 absolute top-3 start-4"></Icon.Mail>
                                                <input name="email" id="email" type="email" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email :" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <div className="text-start">
                                            <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.Book className="size-4 absolute top-3 start-4"></Icon.Book>
                                                <input name="subject" id="subject" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Subject :" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <div className="text-start">
                                            <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.MessageCircle className="size-4 absolute top-3 start-4"></Icon.MessageCircle>
                                                <textarea name="comments" id="comments" className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="submit" name="send" className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>:""
            }
            <Footer />
            <CookieModal />
        </>
    )
}

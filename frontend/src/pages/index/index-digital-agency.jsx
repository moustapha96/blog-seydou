import { useState } from 'react'
import { Link } from 'react-router-dom';

import logo_icon_40 from '../../assets/images/logo-icon-40.png';
import imageP from '../../assets/images/digital/02.jpg';
import image1 from '../../assets/images/digital/01.jpg';
import image2 from '../../assets/images/digital/03.jpg';
import image3 from '../../assets/images/digital/04.jpg';
import cta from '../../assets/images/digital/cta.jpg';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import UserFeedBack from '../../component/userFeedBack';
import CookieModal from '../../component/cookieModal';
import CompanyLogo from '../../component/companyLogo';

import * as Icon from 'react-feather'

import { TypeAnimation } from 'react-type-animation';
import { portfolioData, digitalServices } from '../../data/dataThree';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

export default function IndexDigitalAgency() {
    let [isOpen, setOpen] = useState(false)
    let [isModal, setIsmodal] = useState(false)
    return (
        <>
            <Navbar />

            <section className="relative table w-full py-36 lg:py-44">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                        <div className="md:col-span-6">
                            <div className="md:me-6">
                                <img src={logo_icon_40} className="mb-5" alt="" />
                                <p className="text-indigo-600 text-lg font-medium mb-4">We are a very dedicated team</p>
                                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">We are a full-service digital agency</h4>
                                <p className="text-slate-400 text-lg max-w-xl">We collaborate with people, teams, and businesses to develop design systems, strategies, and processes to do a better creative work everyday.</p>

                                <div className="mt-6">
                                    <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white lightbox"><Icon.Video className="size-4"></Icon.Video></Link><span className="font-semibold ms-2 align-middle">Watch Now</span>
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

                        <div className="md:col-span-6">
                            <div className="grid grid-cols-12 gap-4 items-center">
                                <div className="col-span-5">
                                    <div className="grid grid-cols-1 gap-4">
                                        <img src={imageP} className="shadow-sm rounded-lg" alt="" />

                                        <div className="ms-auto">
                                            <div className="size-28 bg-indigo-600/10 rounded-lg"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-7">
                                    <div className="grid grid-cols-1 gap-4">
                                        <img src={image1} className="shadow-sm rounded-lg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="container relative mb-16 mt-8">
                <div className="grid grid-cols-1 pb-4 text-center">
                    <h6 className="text-slate-400 text-lg">We are very fortunate to work with these amazing partners</h6>
                </div>

               <CompanyLogo/>
            </div>


            <section className="py-20 w-full table relative bg-[url('../../assets/images/digital/bg01.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="container relative">
                    <div className="flex">
                        <div className="lg:w-1/3 md:1/2 sm:w-2/3 p-6 rounded-md shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900">
                            <h6 className="text-indigo-600 font-semibold mb-2">Techwind Digital Agency</h6>
                            <h4 className="mb-4 md:text-[28px]] text-2xl leading-normal font-bold">Leading Digital <br /> Business For <span className="text-indigo-600 typewrite" data-period="2000" data-type='[ "Agency", "Software", "Technology", "Studio", "Webapps" ]'> <span className="wrap"></span> </span>
                            <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        'Agency',
                                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        'Software',
                                        1000,
                                        'Technology',
                                        1000,
                                        'Studio',
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{  display: 'inline-block' }}
                                    className='text-2xl text-indigo-600 '
                                    repeat={Infinity}
                                    cursor={false}
                                    />
                             <br /> Solution.</h4>
                            <p className="text-slate-400 mb-0">Certain internet providers exploit the fact that fill text cannot be recognized by automatic search engines - meaningful information cannot be distinguished from meaningless.</p>

                            <div className="mt-4">
                                <Link onClick={()=>setIsmodal(!isModal)} data-modal-toggle="contactModal" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Get a project?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Services</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
                        {digitalServices.map((item, index)=>{
                            const Icons = item.icon
                            return(
                                <div className="text-center md:px-6" key={index}>
                                    <div className={`${item.background} size-28  rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto`}>
                                         <Icons className='size-8'/>
                                    </div>
        
                                    <div className="content mt-7">
                                        <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                        <p className="text-slate-400 mt-3">{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="md:col-span-6">
                            <div className="grid grid-cols-12 gap-4 items-center">
                                <div className="col-span-7">
                                    <div className="grid grid-cols-1 gap-4">
                                        <img src={image2} className="shadow-sm rounded-lg" alt="" />
                                    </div>
                                </div>

                                <div className="col-span-5">
                                    <div className="grid grid-cols-1 gap-4">
                                        <img src={image3} className="shadow-sm rounded-lg" alt="" />

                                        <div className="size-28 bg-indigo-600/10 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-6">
                            <div className="md:ms-6">
                                <p className="text-indigo-600 text-lg font-medium mb-4">Web and mobile development</p>
                                <h4 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Analyze your entire market <br /> pricing & stock availability</h4>
                                <p className="text-slate-400 max-w-xl">We collaborate with people, teams, and businesses to develop design systems, strategies, and processes to do a better creative work everyday.</p>

                                <div className="mt-6">
                                    <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact Us</Link>
                                </div>
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
                                            <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610"
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
                                        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                                            <div className="mt-8">
                                                <div className="section-title text-md-start">
                                                    <h6 className="text-white/50 text-lg font-semibold">Techwind Agency</h6>
                                                    <h3
                                                        className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">
                                                        We are a full-service <br /> digital company</h3>
                                                </div>
                                            </div>

                                            <div className="mt-8">
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

                </div>


                <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-indigo-500 to-indigo-600"></div>
            </section>


            <section className="relative md:py-24 py-16">
                <UserFeedBack />
                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                        <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
                            <h6 className="text-indigo-600 font-semibold mb-2">Portfolio</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Digital Product</h3>
                            <p className="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                            <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="text-sm ms-1"/></Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-4" id="grid">
                        {portfolioData.map((item,index)=>{
                            return(
                            <div className="picture-item p-4 rounded-md" key={index}>
                                <div className="">
                                    <div className="relative">
                                        <div className="shadow-sm dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                                            <img src={item.image} className="rounded-t-md shadow-sm" alt="" />
                                        </div>
                                    </div>

                                    <div className="pt-4 px-3">
                                        <h5 className="mb-1 font-semibold text-lg"><Link to="https://1.envato.market/techwind-react" target="_blank" className="hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.title}</Link></h5>
                                        <span className="text-slate-400">{item.name}</span>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                        <div className="md:col-span-12 text-center">
                            <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 text-center">
                        <h6 className="text-indigo-600 text-sm font-bold mb-2">Available for freelance projects</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Do you have digital project? <br /> Let&apos;s talk.</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                        <div className="mt-6">
                            <Link to="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4"><FiPhone className="me-1 text-lg"/> Contact us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {isModal ? 
                <div id="contactModal"className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 flex items-center justify-center">
                    <div className="relative w-full h-auto max-w-md p-4">
                        <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow-sm dark:shadow-gray-800">
                            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                                <h5 className="text-xl font-semibold">Contact Form</h5>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={()=>setIsmodal(!isModal)}>
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

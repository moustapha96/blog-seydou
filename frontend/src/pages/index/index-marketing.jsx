import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import marketing from '../../assets/images/marketing.png';
import shape_image from '../../assets/images/shape-image.png';
import SEO_SVG from '../../assets/images/illustrator/SEO_SVG.svg';
import feature from '../../assets/images/feature.png';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import UserFeedBack2 from '../../component/userFeedBack2';
import CookieModal from '../../component/cookieModal';

import * as Icon from 'react-feather';

import CountUp from 'react-countup';

import { marketingContact } from '../../data/dataFour';
import { FaArrowRight } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';

export default function IndexMarketing() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });

    let [isOpen, setOpen] = useState(false)
    return (
        <>
            <Navbar />
            <section className="relative table w-full md:py-44 py-36">
                <div className="absolute inset-0 bg-indigo-600/5"></div>
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                        <div className="md:col-span-7">
                            <div className="md:me-6">
                                <span className="text-indigo-600 font-medium">Techwind Marketing</span>
                                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Increase Your Business <br /> With Techwind</h4>
                                <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                <div className="subcribe-form mt-6 mb-3">
                                    <form className="relative max-w-xl">
                                        <input type="email" id="subcribe" name="email" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800" placeholder="Your Email Address :" />
                                        <button type="submit" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Try it for free <FaArrowRight className="ms-2 text-[10px]"/></button>
                                    </form>
                                </div>

                                <span className="text-slate-400 font-medium">Looking for help? <Link to="#" className="text-indigo-600">Get in touch with us</Link></span>
                            </div>
                        </div>

                        <div className="md:col-span-5">
                            <div className="relative">
                                <img src={marketing} alt="" />
                                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                    <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610"
                                        className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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

            <section className="py-10 bg-indigo-600">
                <div className="container relative">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        <div className="counter-box relative text-center">
                            <h3 className="font-extrabold lg:text-[72px] text-[50px] text-white opacity-10"><CountUp className="counter-value" end={3452} start={3000} />+</h3>
                            <span className="counter-head font-semibold text-xl text-white absolute top-2/4 start-0 end-0">Investment Projects</span>
                        </div>

                        <div className="counter-box relative text-center">
                            <h3 className="font-extrabold lg:text-[72px] text-[50px] text-white opacity-10"><CountUp className="counter-value" end={15} start={1} />+</h3>
                            <span className="counter-head font-semibold text-xl text-white absolute top-2/4 start-0 end-0">Years of Experience</span>
                        </div>

                        <div className="counter-box relative text-center">
                            <h3 className="font-extrabold lg:text-[72px] text-[50px] text-white opacity-10"><CountUp className="counter-value" end={54} start={5} /></h3>
                            <span className="counter-head font-semibold text-xl text-white absolute top-2/4 start-0 end-0">Offices in the World</span>
                        </div>

                        <div className="counter-box relative text-center">
                            <h3 className="font-extrabold lg:text-[72px] text-[50px] text-white opacity-10"><CountUp className="counter-value" end={247} start={12} />+</h3>
                            <span className="counter-head font-semibold text-xl text-white absolute top-2/4 start-0 end-0">Successful Cases</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] relative">
                        <div className="lg:col-span-8 md:col-span-12">
                            <div className="grid grid-cols-1 pb-8">
                                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Instant Smart Solutions <br /> With Techwind</h3>

                                <p className="text-slate-400 max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                            </div>

                            <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                                <div className="px-6 py-10 shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                    <Icon.Codesandbox className="size-12 stroke-1 text-indigo-600"></Icon.Codesandbox>

                                    <div className="content mt-7">
                                        <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">User Friendly</Link>
                                        <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                        <div className="mt-5">
                                            <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-6 py-10 shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                    <Icon.Send className="size-12 stroke-1 text-indigo-600"></Icon.Send>

                                    <div className="content mt-7">
                                        <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Super Fast</Link>
                                        <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                        <div className="mt-5">
                                            <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-6 py-10 shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                    <Icon.Star className="size-12 stroke-1 text-indigo-600"></Icon.Star>

                                    <div className="content mt-7">
                                        <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Insightful Analytics</Link>
                                        <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                        <div className="mt-5">
                                            <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-6 py-10 shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                    <Icon.Bookmark className="size-12 stroke-1 text-indigo-600"></Icon.Bookmark>

                                    <div className="content mt-7">
                                        <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">Highly Rated</Link>
                                        <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                        <div className="mt-5">
                                            <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-12">
                            <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-[30px]">
                                <div className="px-6 py-10 shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                    <Icon.Users className="size-12 stroke-1 text-indigo-600"></Icon.Users>

                                    <div className="content mt-7">
                                        <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">User Forum Forum</Link>
                                        <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                        <div className="mt-5">
                                            <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-6 py-10 shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                    <Icon.MessageCircle className="size-12 stroke-1 text-indigo-600"></Icon.MessageCircle>

                                    <div className="content mt-7">
                                        <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">24/7 Support</Link>
                                        <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                        <div className="mt-5">
                                            <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden after:content-[''] after:absolute after:h-40 after:w-40 after:bg-red-600/5 after:top-2/4 after:start-0 after:-z-1 after:rounded-3xl after:animate-[spin_10s_linear_infinite]"></div>
                        <div className="overflow-hidden after:content-[''] after:absolute after:size-[512px] after:bg-indigo-600/5 after:top-1/4 after:end-0 after:-z-1 after:rounded-full"></div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="md:col-span-6">
                            <div className="lg:me-8">
                                <img src={shape_image} alt="" />
                            </div>
                        </div>

                        <div className="md:col-span-6">
                            <div className="lg:ms-5">
                                <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Fast & Effective</h6>
                                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Powerful Digitalization <br /> With Techwind</h3>

                                <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Dys aute irure.</p>

                                <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-full">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="md:col-span-6 order-1 md:order-2">
                            <div className="lg:ms-8">
                                <img src={SEO_SVG} alt="" />
                            </div>
                        </div>

                        <div className="md:col-span-6 order2 md:order-1">
                            <div className="lg:me-5">
                                <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Easy To Track</h6>
                                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Techwind Marketing <br /> Analytics For All Expenses</h3>

                                <p className="text-slate-400 max-w-xl">You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>

                                <ul className="list-none text-slate-400 my-6">
                                    <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                                    <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                                </ul>

                                <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-full">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Users Say</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <UserFeedBack2 />
                </div>
            </section>
            <section className="relative md:py-24 py-16 overflow-hidden">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="lg:me-8">
                                <div className="relative">
                                    <img src={feature} alt="" />
                                    <div className="overflow-hidden absolute size-[512px] bg-indigo-600/5 top-1/4 start-0 end-0 align-middle -z-1 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 md:col-span-6">
                            <div className="lg:ms-5">
                                <div className="bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-800 p-6">
                                    <h3 className="mb-6 text-2xl leading-normal font-medium">Get in touch !</h3>

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
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        {marketingContact.map((item, index)=>{
                            const Icons = item.icon
                            return(
                                <div className="text-center px-6" key={index}>
                                    <div className="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                        <Icons/>
                                    </div>

                                    <div className="content mt-7">
                                        <h5 className="text-xl font-semibold">{item.name}</h5>
                                        <p className="text-slate-400 mt-3">{item.desc}</p>

                                        <div className="mt-5">
                                            <Link to="/tel:+152534-468-854" className="text-indigo-600 font-medium">{item.title}</Link>
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
        </>
    )
}

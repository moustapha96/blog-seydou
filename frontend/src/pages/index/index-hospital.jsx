import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import logo_icon_40 from '../../assets/images/logo-icon-40.png';
import about_2 from '../../assets/images/hospital/about-2.png';

import imageP from '../../assets/images/client/01.jpg';
import image1 from '../../assets/images/client/03.jpg';
import image2 from '../../assets/images/client/02.jpg';
import image3 from '../../assets/images/client/05.jpg';
import image4 from '../../assets/images/client/04.jpg';
import image5 from '../../assets/images/client/06.jpg';
import bg from '../../assets/images/hospital/bg.jpg';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import UserFeedBack2 from '../../component/userFeedBack2';
import CookieModal from '../../component/cookieModal';
import CompanyLogo from '../../component/companyLogo';

import CountUp from 'react-countup';

import * as Icon from 'react-feather';
import {IoMedkitOutline} from 'react-icons/io5'

import { hospitalService,doctors, drBlog } from '../../data/dataThree';
import { FaArrowRight } from 'react-icons/fa';
import { RiHospitalLine } from 'react-icons/ri';
import { AiOutlineClockCircle } from 'react-icons/ai';

export default function IndexHospital() {
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });

    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="relative table w-full py-36 lg:py-64 bg-[url('../../assets/images/hospital/bg.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/75"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 mt-10">
                        <img src={logo_icon_40} alt="" />

                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6 mt-3">Meet The <br /> Best Doctor</h1>
                        <p className="text-white/60 text-lg max-w-xl">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>

                        <div className="mt-8">
                            <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Make Appointment</Link>

                            <p className="text-white/60 text-base mt-2">T&C apply. Please read <Link  className="text-white inline-flex items-center">Terms and Conditions <FaArrowRight className="ms-2 text-[10px]"/></Link></p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="flex justify-center">
                        <div className="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[200px] -mt-[140px] m-0 lg:w-10/12 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md p-6">
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-[24px]">
                                <div>
                                    <div
                                        className="size-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                       <RiHospitalLine className ="size-6"/>
                                    </div>

                                    <div className="content mt-6">
                                        <h5 className="text-lg font-medium">Emergency Cases</h5>
                                        <p className="text-slate-400 mt-3">This is required when, for example, the is not yet available. Dummy text is also known as &apos;fill text&apos;.</p>

                                        <div className="mt-5">
                                            <Link 
                                                className="relative inline-flex items-center  font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read
                                                More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        className="size-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                        <IoMedkitOutline className='size-6'/>
                                    </div>

                                    <div className="content mt-6">
                                        <h5 className="text-lg font-medium">Doctors Timetable</h5>
                                        <p className="text-slate-400 mt-3">This is required when, for example, the is not yet available. Dummy text is also known as &apos;fill text&apos;.</p>

                                        <div className="mt-5">
                                            <Link 
                                                className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read
                                                More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <div
                                        className="size-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                       <AiOutlineClockCircle className="size-6"/>
                                    </div>

                                    <div className="content mt-6">
                                        <h5 className="text-lg font-medium">Opening Hours</h5>
                                        <ul className="list-none mt-3 space-x-1">
                                            <li className="flex justify-between">
                                                <p className="text-slate-400">Monday - Friday</p>
                                                <p className="text-indigo-600">8.00 - 20.00</p>
                                            </li>
                                            <li className="flex justify-between">
                                                <p className="text-slate-400">Saturday</p>
                                                <p className="text-indigo-600">8.00 - 18.00</p>
                                            </li>
                                            <li className="flex justify-between">
                                                <p className="text-slate-400">Sunday</p>
                                                <p className="text-indigo-600">8.00 - 14.00</p>
                                            </li>
                                        </ul>

                                        <div className="mt-5">
                                            <Link 
                                                className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read
                                                More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="md:col-span-5">
                            <div className="relative">
                                <img src={about_2} className="rounded-md" alt="" />
                                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                    <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610"
                                        className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
                                    </Link>
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

                        <div className="md:col-span-7">
                            <div className="lg:ms-4">
                                <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">About Our Treatments</h4>
                                <p className="text-slate-400 max-w-xl">Great doctor if you need your family member to get effective immediate assistance, examination, emergency treatment or a simple consultation. Thank you.</p>
                                <p className="text-slate-400 max-w-xl mt-3">The most well-known dummy text is the &apos;Lorem Ipsum&apos;, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to &apos;proper&apos; Latin. It contains a series of real Latin words.</p>
                                <Link  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-3">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Medical Services</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
                        {hospitalService.map((item,index)=>{
                            let Icons = item.icon
                            return(
                                <div className="text-center md:px-6" key={index}>
                                    <div className="size-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                        <Icons className='size-7'/>
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
            </section>
            <section className="relative md:py-24 py-16 md:pb-0 pb-0 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Doctors Time Table</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                    </div>
                </div>

                <div className="container-fluid relative">
                    <div className="grid grid-cols-1 mt-8">
                        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                            <table className="w-full text-sm text-start">
                                <thead
                                    className="text-lg">
                                    <tr>
                                        <th className="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[120px]">Time Table</th>
                                        <th className="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Monday</th>
                                        <th className="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Tuesday</th>
                                        <th className="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Wednesday</th>
                                        <th className="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Thursday</th>
                                        <th className="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Friday</th>
                                        <th className="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Saturday</th>
                                        <th className="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Sunday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="text-center border border-gray-100 dark:border-gray-700 py-5">09:00AM</th>
                                        <td className="p-3 border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center mb-3">
                                                <img src={imageP} className="size-12 rounded-full shadow-sm" alt="" />
                                                <div className="ms-3">
                                                    <h6 className="block font-medium text-lg">Calvin Carlo</h6>
                                                    <span className="text-slate-400">Eye Care</span>
                                                </div>
                                            </div>
                                            <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">09:00AM - 10:00AM</span>
                                        </td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="p-3 border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center mb-3">
                                                <img src={image1} className="size-12 rounded-full shadow-sm" alt="" />
                                                <div className="ms-3">
                                                    <h6 className="block font-medium text-lg">Alia Reddy</h6>
                                                    <span className="text-slate-400">Psychotherapy</span>
                                                </div>
                                            </div>
                                            <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">09:00AM - 01:00PM</span>
                                        </td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                    </tr>

                                    <tr>
                                        <th className="text-center border border-gray-100 dark:border-gray-700 py-5">11:00AM</th>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="p-3 border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center mb-3">
                                                <img src={image2} className="size-12 rounded-full shadow-sm" alt="" />
                                                <div className="ms-3">
                                                    <h6 className="block font-medium text-lg">Cristino Murphy</h6>
                                                    <span className="text-slate-400">Gynecology</span>
                                                </div>
                                            </div>
                                            <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">11:00AM - 04:00PM</span>
                                        </td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="p-3 border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center mb-3">
                                                <img src={image3} className="size-12 rounded-full shadow-sm" alt="" />
                                                <div className="ms-3">
                                                    <h6 className="block font-medium text-lg">Jennifer Ballance</h6>
                                                    <span className="text-slate-400">Cardiology</span>
                                                </div>
                                            </div>
                                            <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">11:00AM - 12:00PM</span>
                                        </td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="p-3 border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center mb-3">
                                                <img src={image4} className="size-12 rounded-full shadow-sm" alt="" />
                                                <div className="ms-3">
                                                    <h6 className="block font-medium text-lg">Toni Kovar</h6>
                                                    <span className="text-slate-400">Orthopedic</span>
                                                </div>
                                            </div>
                                            <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">09:00AM - 10:00AM</span>
                                        </td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                    </tr>

                                    <tr>
                                        <th className="text-center border border-gray-100 dark:border-gray-700 py-5">02:00PM</th>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="p-3 border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center mb-3">
                                                <img src={image5} className="size-12 rounded-full shadow-sm" alt="" />
                                                <div className="ms-3">
                                                    <h6 className="block font-medium text-lg">Tara Arrington</h6>
                                                    <span className="text-slate-400">Neurology</span>
                                                </div>
                                            </div>
                                            <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">02:00PM - 04:00PM</span>
                                        </td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="p-3 border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center mb-3">
                                                <img src={image3} className="size-12 rounded-full shadow-sm" alt="" />
                                                <div className="ms-3">
                                                    <h6 className="block font-medium text-lg">Jennifer Ballance</h6>
                                                    <span className="text-slate-400">Cardiology</span>
                                                </div>
                                            </div>
                                            <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">11:00AM - 12:00PM</span>
                                        </td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                    </tr>

                                    <tr>
                                        <th className="text-center border border-gray-100 dark:border-gray-700 py-5">04:00PM</th>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="p-3 border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center mb-3">
                                                <img src={image5} className="size-12 rounded-full shadow-sm" alt="" />
                                                <div className="ms-3">
                                                    <h6 className="block font-medium text-lg">Tara Arrington</h6>
                                                    <span className="text-slate-400">Neurology</span>
                                                </div>
                                            </div>
                                            <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">04:00PM - 05:00PM</span>
                                        </td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="p-3 border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center mb-3">
                                                <img src={image5} className="size-12 rounded-full shadow-sm" alt="" />
                                                <div className="ms-3">
                                                    <h6 className="block font-medium text-lg">Tara Arrington</h6>
                                                    <span className="text-slate-400">Neurology</span>
                                                </div>
                                            </div>
                                            <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">04:30PM - 06:00PM</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th className="text-center border border-gray-100 dark:border-gray-700 py-5">06:00PM</th>
                                        <td className="p-3 border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center mb-3">
                                                <img src={image1} className="size-12 rounded-full shadow-sm" alt="" />
                                                <div className="ms-3">
                                                    <h6 className="block font-medium text-lg">Alia Reddy</h6>
                                                    <span className="text-slate-400">Psychotherapy</span>
                                                </div>
                                            </div>
                                            <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">06:00PM - 09:00PM</span>
                                        </td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="p-3 border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center mb-3">
                                                <img src={image4} className="size-12 rounded-full shadow-sm" alt="" />
                                                <div className="ms-3">
                                                    <h6 className="block font-medium text-lg">Toni Kovar</h6>
                                                    <span className="text-slate-400">Orthopedic</span>
                                                </div>
                                            </div>
                                            <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">07:00PM - 08:00PM</span>
                                        </td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="p-3 border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center mb-3">
                                                <img src={image3} className="size-12 rounded-full shadow-sm" alt="" />
                                                <div className="ms-3">
                                                    <h6 className="block font-medium text-lg">Jennifer Ballance</h6>
                                                    <span className="text-slate-400">Cardiology</span>
                                                </div>
                                            </div>
                                            <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">06:00PM - 07:00PM</span>
                                        </td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="p-3 border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center mb-3">
                                                <img src={image1} className="size-12 rounded-full shadow-sm" alt="" />
                                                <div className="ms-3">
                                                    <h6 className="block font-medium text-lg">Alia Reddy</h6>
                                                    <span className="text-slate-400">Psychotherapy</span>
                                                </div>
                                            </div>
                                            <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">06:00PM - 07:00PM</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th className="text-center border border-gray-100 dark:border-gray-700 py-5">09:00PM</th>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="p-3 border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center mb-3">
                                                <img src={image4} className="size-12 rounded-full shadow-sm" alt="" />
                                                <div className="ms-3">
                                                    <h6 className="block font-medium text-lg">Toni Kovar</h6>
                                                    <span className="text-slate-400">Orthopedic</span>
                                                </div>
                                            </div>
                                            <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">09:00PM - 10:00PM</span>
                                        </td>
                                        <td className="p-3 border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center mb-3">
                                                <img src={image3} className="size-12 rounded-full shadow-sm" alt="" />
                                                <div className="ms-3">
                                                    <h6 className="block font-medium text-lg">Jennifer Ballance</h6>
                                                    <span className="text-slate-400">Cardiology</span>
                                                </div>
                                            </div>
                                            <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">09:00PM - 10:00PM</span>
                                        </td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="p-3 border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center mb-3">
                                                <img src={image4} className="size-12 rounded-full shadow-sm" alt="" />
                                                <div className="ms-3">
                                                    <h6 className="block font-medium text-lg">Toni Kovar</h6>
                                                    <span className="text-slate-400">Orthopedic</span>
                                                </div>
                                            </div>
                                            <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">09:00PM - 10:00PM</span>
                                        </td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                        <td className="border border-gray-100 dark:border-gray-700"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Doctors Team</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                        {doctors.map((item,index)=>{
                            return(
                                <div className="lg:col-span-3 md:col-span-6" key={index}>
                                <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
                                    <img src={item.image} className="size-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
    
                                    <div className="content mt-4">
                                        <Link  className="text-lg font-medium hover:text-indigo-600 block">{item.name}</Link>
                                        <span className="text-slate-400 block">{item.title}</span>
    
                                        <p className="text-slate-400 mt-4">{item.desc}</p>
    
                                        <ul className="list-none  space-x-1 mt-4 flex">
                                            <li><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><Icon.Facebook className="size-4"></Icon.Facebook></Link></li>
                                            <li><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><Icon.Instagram className="size-4"></Icon.Instagram></Link></li>
                                            <li><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><Icon.Twitter className="size-4"></Icon.Twitter></Link></li>
                                            <li><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><Icon.Linkedin className="size-4"></Icon.Linkedin></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
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
                                        <img src={bg} className="rounded-md shadow-lg" alt="" />
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
                                        <div className="grid md:grid-cols-3 grid-cols-1 items-center">

                                            <div className="counter-box text-center">
                                                <h1 className="text-white text-4xl font-semibold mb-2"><CountUp className="counter-value" end={99} start={10} />%</h1>
                                                <h5 className="counter-head text-white text-lg font-semibold mb-2">Positive feedback</h5>
                                                <p className="text-white/50">From Doctors</p>
                                            </div>


                                            <div className="counter-box text-center">
                                                <h1 className="text-white text-4xl font-semibold mb-2"><CountUp className="counter-value" end={25} start={2} />+</h1>
                                                <h5 className="counter-head text-white text-lg font-semibold mb-2">Experienced Clinics</h5>
                                                <p className="text-white/50">High Qualified</p>
                                            </div>


                                            <div className="counter-box text-center">
                                                <h1 className="text-white text-4xl font-semibold mb-2"><CountUp className="counter-value" end={1251} start={95} />+</h1>
                                                <h5 className="counter-head text-white text-lg font-semibold mb-2">Questions & Answers</h5>
                                                <p className="text-white/50">Your Questions</p>
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
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Patients Says</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                    </div>

                    <UserFeedBack2 />
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Latest News & Blogs</h3>
                        <p className="text-slate-400 max-w-xl mx-auto"></p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        {drBlog.map((item,index)=>{
                            return(
                                <div className="blog relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden" key={index}>
                                    <img src={item.image} alt="" />

                                    <div className="content p-6">
                                        <Link to="/blog-detail" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                        <p className="text-slate-400 mt-3">{item.desc}</p>

                                        <div className="mt-4">
                                            <Link to="/blog-detail" className="relative inline-flex items-center font-normal tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className='ms-2 text-xs'/></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="py-6 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <CompanyLogo/>
                </div>
            </section>
            <Footer />
      <CookieModal/>
        </>
    )
}

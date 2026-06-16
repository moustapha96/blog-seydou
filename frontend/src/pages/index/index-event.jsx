import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import imageP from '../../assets/images/event/1.jpg';
import image1 from '../../assets/images/event/2.jpg';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import Blog2 from '../../component/blog2';
import CookieModal from '../../component/cookieModal';

import * as Icon from 'react-feather'

import { team } from '../../data/data';
import { eventOne,eventTwo, eventThree } from '../../data/dataThree';
import { FaArrowRight, FaRegEnvelope } from 'react-icons/fa';
import { PiMapPinLight } from 'react-icons/pi';
import { GoClock } from 'react-icons/go';
import { BsCheckCircle } from 'react-icons/bs';

export default function IndexEvent() {
    const [isOpen, setOpen] = useState(false);
    let [days,setDays] = useState();
    let [hours,setHours] = useState();
    let [minutes,setMinutes] = useState();
    let [seconds,setSeconds] = useState();

    let deadline = "December, 31, 2025";
  
    let getTime = () => {
      let time = Date.parse(deadline) - Date.now();
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
    let interval = setInterval(() => getTime(deadline), 1000);
      return () => clearInterval(interval);
      }, []);
     const [isOpenTab, setisOpen] = useState(0);

    const handleTabClick = (index) => {
        setisOpen(index);
    };

    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('light')
        document.documentElement.classList.remove('dark')
    }, []);
    
    
    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="relative table w-full py-36 lg:py-64 bg-[url('../../assets/images/event/bg.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/90 to-fuchsia-600/90"></div>
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-7 md:order-1 order-2">
                            <h5 className="text-xl text-white/60 mb-3">October 11, 2022</h5>
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Join Our <br /> Web Design Seminar</h4>
                            <p className="text-white/60 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                            <div className="mt-8">
                                <Link to="/#ticket" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><FaRegEnvelope  className="me-2 text-sm"/> Buy Ticket</Link>
                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-5 md:text-center md:order-2 order-1">
                            <Link to="#" onClick={() => setOpen(true)} data-id="S_CGed6E610" className="lightbox lg:size-24 size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white duration-500 ease-in-out mx-auto">
                                <i className="mdi mdi-play inline-flex items-center justify-center text-3xl"></i>
                            </Link>
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

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="md:col-span-6">
                            <div className="grid grid-cols-12 gap-4 items-center">
                                <div className="col-span-7">
                                    <div className="grid grid-cols-1 gap-4">
                                        <img src={imageP} className="shadow-sm rounded-lg" alt="" />
                                    </div>
                                </div>

                                <div className="col-span-5">
                                    <div className="grid grid-cols-1 gap-4">
                                        <img src={image1} className="shadow-sm rounded-lg" alt="" />

                                        <div className="size-28 bg-indigo-600/10 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-6">
                            <div className="lg:ms-5">
                                <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Outpace Your Competition</h6>
                                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Get access to the full <br /> conference experience.</h3>

                                <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                                <div className="flex mt-6">
                                    <PiMapPinLight className="text-indigo-600 text-4xl me-4 mt-2"/>
                                    <div className="">
                                        <h5 className="text-xl font-semibold mb-0">Location</h5>
                                        <p className="text-slate-400 mt-2">C/54 Northwest Freeway, <br /> Suite 558, Houston, <br /> USA 485</p>
                                    </div>
                                </div>

                                <div className="flex mt-6">
                                    <GoClock className="text-indigo-600 text-3xl me-4 mt-2"/>
                                    <div className="">
                                        <h5 className="text-xl font-semibold mb-0">Time</h5>
                                        <p className="text-slate-400 mt-2">October 11, 2022 <br /> 9:00A.M. - 12:00P.M.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Event Speakers</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Meet Our Speakers</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                        {
                            team.map((item, index)=>{
                                return(
                                    <div className="lg:col-span-3 md:col-span-6" key={index}>
                                    <div className="group text-center">
                                        <div className="relative inline-block mx-auto size-52 rounded-full overflow-hidden">
                                            <img src={item.image} className="" alt="" />
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black size-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
        
                                            <ul className="list-none space-x-1 absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                            <li className="inline"><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Facebook className="size-4"></Icon.Facebook></Link></li>
                                                    <li className="inline"><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Instagram className="size-4"></Icon.Instagram></Link></li>
                                                    <li className="inline"><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Linkedin className="size-4"></Icon.Linkedin></Link></li>
                                            </ul>
                                        </div>
        
                                        <div className="content mt-3">
                                            <Link to="/" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.name}</Link>
                                            <p className="text-slate-400">Speaker</p>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className="relative table w-full py-36 bg-[url('../../assets/images/event/bg3.jpg')] bg-no-repeat bg-bottom bg-cover">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/90 to-fuchsia-600/90"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <div className="pb-8">
                            <h6 className="text-white/50 text-sm font-bold uppercase mb-2">Hurry up & Register</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">Not yet registered? <br /> Hurry up!</h3>
                            <p className="text-white/50 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                        <div id="countdown">
                            <ul className="count-down list-none inline-block text-white text-center mt-8">
                                <li id="days" className="text-[40px] leading-[110px] size-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{days} <p className="count-head">Days</p></li>
                                <li id="hours" className="text-[40px] leading-[110px] size-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{hours}<p className="count-head">Hours</p></li>
                                <li id="mins" className="text-[40px] leading-[110px] size-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{minutes}<p className="count-head">Mins</p></li>
                                <li id="secs" className="text-[40px] leading-[110px] size-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{seconds}<p className="count-head">Secs</p></li>
                                <li id="end" className="h1"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Event Schedules</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid grid-cols-1 mt-8">
                        <ul className="md:w-fit w-full mx-auto flex-wrap justify-center text-center p-3 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                            <li role="presentation" className="md:inline-block block md:w-fit w-full">
                                <button onClick={() => handleTabClick(0)} className={`${isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Tuesday</button>
                            </li>
                            <li role="presentation" className="md:inline-block block md:w-fit w-full">
                                <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Wednesday</button>
                            </li>
                            <li role="presentation" className="md:inline-block block md:w-fit w-full">
                                <button onClick={() => handleTabClick(2)} className={`${isOpenTab === 2 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Thursday</button>
                            </li>
                            <li role="presentation" className="md:inline-block block md:w-fit w-full">
                                <button onClick={() => handleTabClick(3)} className={`${isOpenTab === 3 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Friday</button>
                            </li>
                        </ul>

                        <div id="StarterContent" className="mt-1">
                            {isOpenTab === 0 ?
                                <div>
                                    <div className="grid grid-cols-1">
                                        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                                            <table className="w-full text-start">
                                                <tbody>
                                                    {eventOne.map((item,index)=>{
                                                        return(
                                                        <tr key={index}>
                                                            <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">{item.time}</td>
                                                            <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                                                                <div className="flex items-center">
                                                                    <img src={item.image} width={96} height={96} className="rounded-full size-24 shadow-md dark:shadow-gray-700" alt="" />
                                                                    <div className="ms-4">
                                                                        <Link to="#" className="hover:text-indigo-600 text-lg font-semibold">{item.title}</Link>
                                                                        <p className="text-slate-400 mt-2">{item.desc}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                                                                <span className="block">Speaker</span>
                                                                <span className="block text-black dark:text-white text-md mt-1">{item.speaker}</span>
                                                            </td>
                                                            <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                                                                <Link to="#" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Buy Ticket <FaArrowRight className='ms-2 text-xs'/></Link>
                                                            </td>
                                                        </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>:""
                            }
                            {isOpenTab === 1 ?
                                <div>
                                    <div className="grid grid-cols-1">
                                        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                                            <table className="w-full text-start">
                                                <tbody>
                                                    {eventTwo.map((item,index)=>{
                                                            return(
                                                            <tr key={index}>
                                                                <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">{item.time}</td>
                                                                <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                                                                    <div className="flex items-center">
                                                                        <img src={item.image} width={96} height={96} className="rounded-full size-24 shadow-md dark:shadow-gray-700" alt="" />
                                                                        <div className="ms-4">
                                                                            <Link to="#" className="hover:text-indigo-600 text-lg font-semibold">{item.title}</Link>
                                                                            <p className="text-slate-400 mt-2">{item.desc}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                                                                    <span className="block">Speaker</span>
                                                                    <span className="block text-black dark:text-white text-md mt-1">{item.speaker}</span>
                                                                </td>
                                                                <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                                                                    <Link to="#" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Buy Ticket <FaArrowRight className='ms-2 text-xs'/></Link>
                                                                </td>
                                                            </tr>
                                                            )
                                                        })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>:""
                            }
                            {isOpenTab === 2 ?
                                <div>
                                    <div className="grid grid-cols-1">
                                        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                                            <table className="w-full text-start">
                                                <tbody>
                                                    {eventThree.map((item,index)=>{
                                                            return(
                                                            <tr key={index}>
                                                                <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">{item.time}</td>
                                                                <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                                                                    <div className="flex items-center">
                                                                        <img src={item.image} width={96} height={96} className="rounded-full size-24 shadow-md dark:shadow-gray-700" alt="" />
                                                                        <div className="ms-4">
                                                                            <Link to="#" className="hover:text-indigo-600 text-lg font-semibold">{item.title}</Link>
                                                                            <p className="text-slate-400 mt-2">{item.desc}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                                                                    <span className="block">Speaker</span>
                                                                    <span className="block text-black dark:text-white text-md mt-1">{item.speaker}</span>
                                                                </td>
                                                                <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                                                                    <Link to="#" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Buy Ticket <FaArrowRight/></Link>
                                                                </td>
                                                            </tr>
                                                            )
                                                        })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>:""
                            }
                            {isOpenTab === 3 ?
                                <div>
                                    <div className="grid grid-cols-1">
                                        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                                            <table className="w-full text-start">
                                                <tbody>
                                                {eventTwo.map((item,index)=>{
                                                    return(
                                                    <tr key={index}>
                                                        <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">{item.time}</td>
                                                        <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                                                            <div className="flex items-center">
                                                                <img src={item.image} width={96} height={96} className="rounded-full size-24 shadow-md dark:shadow-gray-700" alt="" />
                                                                <div className="ms-4">
                                                                    <Link to="#" className="hover:text-indigo-600 text-lg font-semibold">{item.title}</Link>
                                                                    <p className="text-slate-400 mt-2">{item.desc}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                                                            <span className="block">Speaker</span>
                                                            <span className="block text-black dark:text-white text-md mt-1">{item.speaker}</span>
                                                        </td>
                                                        <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                                                            <Link to="#" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Buy Ticket <FaArrowRight/></Link>
                                                        </td>
                                                    </tr>
                                                    )
                                                })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>:""
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative table w-full py-36 bg-[url('../../assets/images/event/bg2.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/90 to-fuchsia-600/90"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <Link to="#" onClick={() => setOpen(true)} data-id="S_CGed6E610" className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mb-12">
                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                        </Link>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">Let&apos;s Make Something Together</h3>
                        <p className="text-white/80 max-w-xl mx-auto">The Biggest Event Ever</p>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16" id="ticket">
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-5">
                            <div className="lg:text-start text-center">
                                <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Secure Your Place Now</h6>

                                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">This event is for you. <br /> Buy tickets now!</h3>

                                <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            </div>
                        </div>

                        <div className="lg:col-span-7 mt-8 lg:mt-0">
                            <div className="lg:ms-8">
                                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-[30px]">
                                    <div className="group border-b-[3px] border-gray-200 dark:border-gray-700 relative shadow-sm dark:shadow-gray-800 rounded-md md:scale-110 z-3 bg-white dark:bg-slate-900">
                                        <div className="p-6 py-8">
                                            <h6 className="font-bold uppercase mb-5 text-indigo-600">Personal</h6>

                                            <div className="flex mb-5">
                                                <span className="text-xl font-semibold">$</span>
                                                <span className="price text-4xl font-semibold mb-0">09</span>
                                                <span className="text-xl font-semibold self-end mb-1">/event</span>
                                            </div>

                                            <ul className="list-none text-slate-400">
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Full Access</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Free Appointments</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Enhanced Security</li>
                                            </ul>
                                            <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Get Started</Link>
                                        </div>
                                    </div>

                                    <div className="group border-b-[3px] border-gray-200 dark:border-gray-700 relative shadow-sm dark:shadow-gray-800 rounded-md z-2 bg-gray-50 dark:bg-slate-800">
                                        <div className="p-6 py-8 md:ps-10">
                                            <h6 className="font-bold uppercase mb-5 text-indigo-600">Business</h6>

                                            <div className="flex mb-5">
                                                <span className="text-xl font-semibold">$</span>
                                                <span className="price text-4xl font-semibold mb-0">149</span>
                                                <span className="text-xl font-semibold self-end mb-1">/event</span>
                                            </div>

                                            <ul className="list-nonetext-slate-400">
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Full Access</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Free Appointments</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Enhanced Security</li>
                                            </ul>
                                            <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Try it Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Blog2 className={"container relative md:mt-24 mt-16"} id={""} />
            </section>
            <Footer />
            <CookieModal />
        </>
    )
}

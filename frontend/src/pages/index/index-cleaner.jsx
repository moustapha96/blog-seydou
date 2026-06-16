import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import bg from '../../assets/images/cleaner/bg.png'
import bg1 from '../../assets/images/cleaner/bg1.png'
import bg2 from '../../assets/images/cleaner/bg2.png'
import bg3 from '../../assets/images/cleaner/bg3.png'
import about1 from '../../assets/images/cleaner/ab1.jpg'
import about2 from '../../assets/images/cleaner/ab2.jpg'
import cta from '../../assets/images/cleaner/bg.jpg'

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import CompanyLogo from "../../component/companyLogo";
import CookieModal from '../../component/cookieModal';

import { FiArrowRight, FiFacebook, FiThumbsUp, FiUserCheck, FiInstagram, FiLinkedin } from "react-icons/fi";


import CountUp from 'react-countup';

import { cleaningServices, cleanerCounter, clenerServices, clenerTeam, clenerBlog} from "../../data/data-six";

export default function IndexCleaner() {
    const images = [
        bg1,
        bg2,
        bg3,
      ];
      const [currentImageIndex, setCurrentImageIndex] = useState(0); 
      let [isOpen, setOpen] = useState(false)
    
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')

        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % images.length 
          );
        }, 5000);
    
        return () => clearInterval(interval);
      }, [images.length]);


  return (
    <>
    <Navbar navClass="nav-light"/>
    <section className="relative flex items-center w-full py-36 lg:py-0 lg:h-screen" id="home" style={{backgroundImage:`url(${images[currentImageIndex]})`}}>
        <div className="absolute inset-0 bg-yellow-400 -z-2"></div>
        <div className="absolute inset-0 bg-center bg-no-repeat bg-cover -z-1" style={{backgroundImage:`url(${bg})`}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
        <div className="container relative">
            <div className="grid grid-cols-1 pb-8 text-center mt-14">
                <h5 className="text-lg text-white font-medium mb-3">Your Home is Your Heaven</h5>
                <h3 className="font-bold lg:leading-normal leading-normal text-5xl lg:text-7xl mb-5 text-white">Clean Your Way to Happiness</h3>

                <p className="text-slate-300 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
            
                <div className="mt-8">
                    <Link to="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 text-white rounded-md">Get an Quote</Link>
                </div>
            </div>
        </div>
    </section>

    <section className="relative md:py-24 py-16">
        <div className="container relative pb-10">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="lg:col-span-5 md:col-span-6">
                    <div className="relative">
                        <div className="relative">
                            <img src={about1} className="lg:w-[400px] w-[280px] rounded-md" alt=""/>
                            <div className="absolute top-0 translate-y-2/4 end-0 text-center">
                                <Link to="#!" onClick={() => setOpen(true)} className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </Link>
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
                        <div className="absolute -end-5 -bottom-16 rounded-md">
                            <img src={about2} className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 md:col-span-6 mt-8 md:mt-0">
                    <div className="lg:ms-6">
                        <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-semibold">We Make Places <br/> Clean & Bright</h3>
                        <p className="text-slate-400 max-w-xl">You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>

                        <div className="grid lg:grid-cols-2 gap-6 mt-6">
                            <div className="group flex duration-500 xl:p-3">
                                <div className="flex align-middle justify-center items-center size-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl shadow-sm dark:shadow-gray-800 duration-500">
                                    <FiUserCheck className="size-5"/>
                                </div>
                                <div className="flex-1 ms-4">
                                    <h4 className="mb-0 text-lg font-medium">Customer Service</h4>
                                    <p className="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin.</p>
                                </div>
                            </div>

                            <div className="group flex duration-500 xl:p-3">
                                <div className="flex align-middle justify-center items-center size-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl shadow-sm dark:shadow-gray-800 duration-500">
                                    <FiThumbsUp className="size-5"/>
                                </div>
                                <div className="flex-1 ms-4">
                                    <h4 className="mb-0 text-lg font-medium">Quality Cleaning</h4>
                                    <p className="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative mt-4">
                            <div className="relative p-6 border-2 border-indigo-600 rounded-[30px] before:content-[''] before:absolute before:w-28 before:border-[6px] before:border-white dark:before:border-slate-900 before:-bottom-1 before:start-16 before:z-2 after:content-[''] after:absolute after:border-2 after:border-indigo-600 after:rounded-none after:rounded-e-[50px] after:w-20 after:h-20 after:-bottom-[80px] after:start-[60px] after:z-3 after:border-s-0 after:border-b-0">
                                <span className="font-semibold text-2xl leading-normal">
                                    Cleanliness is a state of purity, clarity, and precision.
                                </span>

                                <div className="absolute text-8xl -top-0 start-4 text-indigo-600/10 dark:text-indigo-600/20 -z-1">
                                    <i className="mdi mdi-format-quote-open"></i>
                                </div>
                            </div>

                            <div className="text-lg font-semibold mt-6 ms-44">
                                    - Shreethemes
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Cleaning Services</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">
                {cleaningServices.map((item,index)=>{
                    let Icon = item.icon
                    return(
                        <div key={index} className="group relative overflow-hidden px-6 py-10 shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-2xl bg-white dark:bg-slate-900">
                            <Icon className="size-12 stroke-1 text-indigo-600"/>

                            <div className="content mt-7">
                                <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                <p className="text-slate-400 mt-3">{item.desc}</p>
                                
                                <div className="mt-5">
                                    <Link to="/page-services" className="relative inline-flex font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out items-center">Read More <FiArrowRight className=""/></Link>
                                </div>
                            </div>

                            <span className="absolute bottom-0 end-0 text-9xl font-bold opacity-[0.03] group-hover:opacity-10 duration-500">{item.id}</span>
                        </div>
                    )
                })}
            </div>
        </div>
        
        <div className="container relative mt-6">
            <CompanyLogo/>
        </div>
    </section>

    <section className="py-20 w-full table relative bg-fixed bg-center bg-no-repeat bg-cover" style={{backgroundImage:`url(${cta})`}}>
        <div className="absolute inset-0 bg-slate-900/75"></div>
        <div className="container relative">
            <div className="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
                {cleanerCounter.map((item,index)=>{
                    return(
                        <div className="counter-box text-center" key={index}>
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-white"><CountUp end={item.value}/>+</h1>
                            <h5 className="counter-head text-lg font-medium text-white/50">{item.title}</h5>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>

    <section className="relative md:py-24 py-16">
        <div className="container relative">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Featured Services</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                {clenerServices.map((item,index)=>{
                    return(
                        <div className="group relative" key={index}>
                            <div className="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-800">
                                <img src={item.image} className="group-hover:scale-110 duration-500" alt=""/>
                            </div>

                            <div className="relative -mt-6 px-6">
                                <div className="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 p-6">
                                    <Link to="#" className="title h5 text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>

                                    <ul className="list-none mt-4">
                                        {item.feature.map((el,index)=>{
                                            return(
                                                <li key={index} className="flex text-slate-400 ms-0"><i className="mdi mdi-check text-indigo-600 align-middle me-2"></i> {el}</li>
                                            )
                                        })}
                                    </ul>

                                    <div className="mt-4">
                                        <Link to="#" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <FiArrowRight className="ms-1"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Expert Team</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>

            <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                {clenerTeam.map((item,index)=>{
                    return(
                        <div className="lg:col-span-3 md:col-span-6" key={index}>
                            <div className="group text-center">
                                <div className="relative inline-block mx-auto size-52 rounded-full overflow-hidden">
                                    <img src={item.image} className="" alt=""/>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black size-52 rounded-full opacity-0 group-hover:opacity-100 duration-500"></div>

                                    <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                                        <li className="inline"><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><FiFacebook className="size-4"/></Link></li>
                                        <li className="inline mx-1"><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><FiInstagram className="size-4"/></Link></li>
                                        <li className="inline"><Link to="" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><FiLinkedin className="size-4"/></Link></li>
                                    </ul>
                                </div>

                                <div className="content mt-3">
                                    <Link to="#" className="text-lg font-semibold hover:text-indigo-600 duration-500">{item.name}</Link>
                                    <p className="text-slate-400">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Blog Or News</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                {clenerBlog.map((item,index)=>{
                    return(
                        <div className="blog relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden" key={index}>
                            <img src={item.image} alt=""/>

                            <div className="content p-6">
                                <Link to="/blog-detail" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                
                                <div className="mt-4">
                                    <Link to="/blog-detail" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <FiArrowRight className="ms-1"/></Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
    <Footer/>
    <CookieModal/>
    </>
  )
}

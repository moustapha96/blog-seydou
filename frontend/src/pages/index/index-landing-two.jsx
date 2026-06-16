import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import logo_icon_64 from '../../assets/images/logo-icon-64.png';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import UserFeedBack from '../../component/userFeedBack';
import Blog2 from '../../component/blog2';
import CookieModal from '../../component/cookieModal';
import GetInTuch from '../../component/getInTuch';
import AboutImage from '../../component/abloutImage';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { servicesTwo,portfolioImage,portfolioData } from '../../data/dataFour';
import { FaArrowRight } from 'react-icons/fa';
import { FiCamera } from 'react-icons/fi';

export default function IndexLandingTwo() {

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });

    let [isOpen, setOpen] = useState(false)
    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    let [isImage, setIsImage] = useState(false);

    const slides = portfolioImage.map((image) => ({ src: image }));

    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsImage(true);
    };

    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="py-36 md:py-64 w-full table relative bg-[url('../../assets/images/bg-video.png')] bg-center bg-no-repeat bg-cover">
                <div className="absolute top-0 start-0 size-full z-0 pointer-events-none overflow-hidden">
                    <iframe
                        src="https://player.vimeo.com/video/33955001?background=1&autoplay=1&loop=1&byline=0&title=0"
                        className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"
                        title="Vimeo Video"
                    ></iframe>

                </div>
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <img src={logo_icon_64} className="mx-auto" alt="" />
                        <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium my-6 position-relative">We Collaboration Easy & Fast</h4>

                        <p className="text-white opacity-50 mb-0 max-w-xl text-lg mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>

                        <div className="relative mt-8">
                            <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Get Started</Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative">
                <div className="absolute block w-full h-auto bottom-[25px] z-1 start-0">
                    <Link to="#"><i className="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 size-12 mx-auto shadow-md dark:shadow-gray-800"></i></Link>
                </div>

                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <AboutImage grid="md:col-span-5"/>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Services</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What we offer ?</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Obviously Im a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
                        {servicesTwo.map((item,index)=>{
                            let Icons = item.icon
                            return(
                                <div key={index} className={item.shadow}>
                                    <div className="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                        <Icons className='size-7'/>
                                    </div>
        
                                    <div className="content mt-7">
                                        <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                        <p className="text-slate-400 mt-3">{item.desc}</p>
        
                                        <div className="mt-5">
                                            <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container-fluid relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 py-36 bg-[url('../../assets/images/team.jpg')] bg-center bg-no-repeat bg-cover">
                        <div className="absolute inset-0 bg-slate-900/70"></div>
                        <div className="container relative">
                            <div className="grid grid-cols-1 text-center">
                                <h3 className="mb-4 md:text-3xl text-2xl text-white font-medium">Stop leaving money on the table.</h3>

                                <p className="text-white/80 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                <Link to="#" onClick={() => setOpen(true)} data-id="S_CGed6E610" className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10">
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
                    </div>
                </div>
                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Portfolio</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Works & Projects</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Obviously I&apos;m a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
                        {portfolioData.map((item,index)=>{
                            return(
                                <div key={index} className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                    <img src={item.image} className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500" alt="" />
                                    <div className="absolute inset-0 group-hover:bg-dark opacity-50 transition duration-500 z-0"></div>
        
                                    <div className="content">
                                        <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-4 end-4 transition-all duration-500">
                                            <Link onClick={() => handleImageClick(index)} className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"><FiCamera className="size-4"/></Link>
                                        </div>
        
                                        <div className="title absolute z-10 opacity-0 group-hover:opacity-100 bottom-4 start-4 transition-all duration-500">
                                            <Link to="/portfolio-detail-one" className="h6 text-md font-medium text-white hover:text-indigo-600 duration-500 ease-in-out">{item.name}</Link>
                                            <p className="text-slate-100 tag mb-0">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        
                        <Lightbox
                            open={isImage}
                            close={() => setIsImage(false)}
                            slides={slides}
                            index={currentImageIndex} 
                        />
                    </div>
                </div>

                <div className=" md:mt-24 mt-16" >
                  <UserFeedBack />
               </div>

                <Blog2 className={"container relative md:mt-24 mt-16"} id={""} />


               <GetInTuch title={true}/>
            </section>
            <Footer />
            <CookieModal />
        </>
    )
}

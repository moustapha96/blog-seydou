import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import amazon from '../../assets/images/client/amazon.svg';
import google from '../../assets/images/client/google.svg';
import lenovo from '../../assets/images/client/lenovo.svg';
import paypal from '../../assets/images/client/paypal.svg';
import shopify from '../../assets/images/client/shopify.svg';
import spotify from '../../assets/images/client/spotify.svg';
import cta_bg from '../../assets/images/cta-bg.jpg';
import image from '../../assets/images/client/01.jpg';
import image1 from '../../assets/images/client/02.jpg';
import image2 from '../../assets/images/client/03.jpg';
import image3 from '../../assets/images/client/04.jpg';
import hero2 from '../../assets/images/hero2.png';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';

import TinySlider from 'tiny-slider-react';
import * as Icon from 'react-feather';
import CompanyLogo from '../../component/companyLogo';
import KeyFeature from '../../component/keyFeature';
import WhoWeAre from '../../component/whoWeAre';
import { MdKeyboardArrowRight } from 'react-icons/md';

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
export default function PageAboutus() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    },[]);

    const [isOpen, setOpen] = useState(false)

    const services = [
        {
            description: `" If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
            name: 'Thomas Israel',
            image: amazon
        },
        {
            description: `" If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
            name: 'Carl Oliver',
            image: google

        },
        {
            description: `" If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
            name: 'Barbara McIntosh',
            image: lenovo
        },
        {
            description: `" If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
            name: 'Jill Webb',
            image: paypal
        },
        {
            description: `" If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
            name: 'Dean Tolle',
            image: shopify
        },
        {
            description: `" If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
            name: 'Christa Smith',
            image: spotify
        }
    ]
    const teamData = [
        {
            image:image,
            name:"Ronny Jofra",
            title:"C.E.O.",
            desc:"If the distribution of letters and 'words' is random"
        },
        {
            image:image1,
            name:"Aliana Rosy",
            title:"HR",
            desc:"If the distribution of letters and 'words' is random"
        },
        {
            image:image2,
            name:"Sofia Razaq",
            title:"C.O.O.",
            desc:"If the distribution of letters and 'words' is random"
        },
        {
            image:image3,
            name:"Micheal Carlo",
            title:"Director",
            desc:"If the distribution of letters and 'words' is random"
        },
    ]
    return (
        <>
            <Navbar navClass="nav-light" />
            <section className="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/company/aboutus.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/75"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">About Us</h3>

                        <p className="text-slate-300 text-lg max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className=" tracking-[0.5px]  mb-0 inline-flex items-center space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Techwind</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link >Company</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Aboutus</li>
                    </ul>
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
                <WhoWeAre/>
                <div className="container relative mt-8">
                    <CompanyLogo/>
                </div>

            </section>

            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Key Features</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <KeyFeature/>

                    <div className="grid grid-cols-1 justify-center">
                        <div className="mt-6 text-center">
                            <Link to="/page-services" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">See More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 md:pt-0 pt-0">
                <div className="container relative">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="relative z-1">
                            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                <div className="lg:col-start-2 lg:col-span-10">
                                    <div className="relative">
                                        <img src={cta_bg} className="rounded-md shadow-lg" alt="" />
                                        <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                            <Link to="#" onClick={() => setOpen(true)}  data-type="youtube" data-id="S_CGed6E610"
                                                className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                                <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                            </Link>
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

                            <div className="content md:mt-8">
                                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                    <div className="lg:col-start-2 lg:col-span-10">
                                        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                                            <div className="mt-8">
                                                <div className="section-title text-md-start">
                                                    <h6 className="text-white/50 text-lg font-semibold">Team</h6>
                                                    <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">Meet Experience <br /> Team Member</h3>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="section-title text-md-start">
                                                    <p className="text-white/50 max-w-xl mx-auto mb-2">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                                    <Link  className="text-white inline-flex items-center">Read More <MdKeyboardArrowRight className="text-xl"/></Link>
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

            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 md:pb-0 pb-0" id="team">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Professional Team</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                        {teamData.map((item,index)=>{
                            return(
                                <div key={index} className="lg:col-span-3 md:col-span-6">
                                    <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
                                        <img src={item.image} className="size-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
        
                                        <div className="content mt-4">
                                            <Link  className="text-lg font-medium hover:text-indigo-600 block">{item.name}</Link>
                                            <span className="text-slate-400 block">{item.title}</span>
        
                                            <p className="text-slate-400 mt-4">{item.desc}</p>
        
                                            <ul className="list-none mt-4 space-x-1">
                                                <li className="inline"><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><Icon.Facebook className="size-4"></Icon.Facebook></Link></li>
                                                <li className="inline"><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><Icon.Instagram className="size-4"></Icon.Instagram></Link></li>
                                                <li className="inline"><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><Icon.Twitter className="size-4"></Icon.Twitter></Link></li>
                                                <li className="inline"><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><Icon.Linkedin className="size-4"></Icon.Linkedin></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                        <div className="lg:col-span-5 md:col-span-6 md:order-1 order-2">
                            <div className="relative overflow-hidden after:content-[''] after:absolute after:h-40 after:w-40 after:bg-red-600/5 after:top-5 after:start-0 after:end-0 after:mx-auto after:-z-0 after:rounded-3xl after:animate-[spin_10s_linear_infinite]">
                                <img src={hero2} className="relative z-1" alt="" />
                            </div>
                        </div>

                        <div className="lg:col-span-7 md:col-span-6 md:order-2 order-1">
                            <div className="tiny-single-item">

                                <TinySlider settings={settings}>
                                    {services.map((item, index) => (
                                        <div className="tiny-slide text-center" key={index}>
                                            <img src={item.image} className="h-6 mx-auto" alt="" />
                                            <p className="text-slate-400 mt-6">{item.description}</p>
                                            <h6 className="text-indigo-600 font-semibold mt-3">- {item.name}</h6>
                                        </div>
                                    ))}
                                </TinySlider>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

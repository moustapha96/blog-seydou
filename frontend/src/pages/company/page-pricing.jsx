import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import UserFeedBack2 from '../../component/userFeedBack2';

import GetInTuch from '../../component/getInTuch';

import { accordionData } from '../../data/dataTwo';
import { BiWater } from 'react-icons/bi';
import { LiaDropbox } from 'react-icons/lia';
import { MdCenterFocusWeak, MdKeyboardArrowRight } from 'react-icons/md';
import { BsCheckCircle } from 'react-icons/bs';

export default function PagePricing() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    },[]);

    const [activeIndex, setActiveIndex] = useState(1);
    const [isOpenTab, setisOpenTab] = useState(0);
    
    const handleTabClick = (index) => {
        setisOpenTab(index);
    };

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index);
        }
    }

    const accordionData1 = accordionData.filter((x) => x.id < 5);
    const accordionData2 = accordionData.filter((x) => x.id > 4);
    
  const aboutData = [
    {
        icon:BiWater,
        title:"24/7 Support",
        desc:"The phrasal sequence of the is now so that many campaign and benefit"
    },
    {
        icon:LiaDropbox,
        title:"Take Ownership",
        desc:"The phrasal sequence of the is now so that many campaign and benefit"
    },
    {
        icon:MdCenterFocusWeak,
        title:"Team Work",
        desc:"The phrasal sequence of the is now so that many campaign and benefit"
    },
  ]
    return (
        <>
            <Navbar navClass="nav-light" />
            <section className="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/services.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/75"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h5 className="text-white/50 text-lg font-medium">Our Comfortable Rates</h5>
                        <h3 className="mt-2 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Pricing / Plans</h3>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className=" tracking-[0.5px]  mb-0 inline-flex items-center space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Techwind</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link >Company</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Pricing</li>
                    </ul>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-gray-50 dark:text-slate-800">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="relative py-16 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                        {aboutData.map((item,index)=>{
                            let Icons = item.icon
                            return(
                                <div key={index} className="flex">
                                    <div className="flex align-middle justify-center items-center min-w-[56px] h-[56px] bg-indigo-600/5 border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-xl shadow-sm dark:shadow-gray-800">
                                        <Icons className='size-6'/>
                                    </div>

                                    <div className="content ms-6">
                                        <Link className="text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                        <p className="text-slate-400 mt-3">{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Choose Pricing Plan</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid grid-cols-1">
                        <ul className="inline-block w-fit mx-auto flex-wrap justify-center text-center p-2 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-full">
                            <li role="presentation" className="inline-block">
                                <button onClick={() => handleTabClick(0)} className={`${isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-1 text-sm font-semibold rounded-full w-full hover:text-indigo-600 transition-all duration-500 ease-in-out`}>Monthly</button>
                            </li>
                            <li role="presentation" className="inline-block">
                                <button onClick={() => handleTabClick(1)}  className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out`}>Yearly <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full h-5 ms-1">Save 25%</span></button>
                            </li>
                        </ul>

                        <div id="StarterContent" className="mt-6">
                            {isOpenTab === 0 ?
                                <div>
                                    <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
                                        <div className="group border-b-[3px] border-gray-200 dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                                            <h6 className="font-bold uppercase mb-5 text-indigo-600">Free</h6>

                                            <div className="flex mb-5">
                                                <span className="text-xl font-semibold">$</span>
                                                <span className="price text-4xl font-semibold mb-0">0</span>
                                                <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                            </div>

                                            <ul className="list-none text-slate-400">
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Full Access</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                                            </ul>
                                            <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Signup</Link>
                                        </div>

                                        <div className="group border-b-[3px] border-gray-200 dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                                            <h6 className="font-bold uppercase mb-5 text-indigo-600">Starter</h6>

                                            <div className="flex mb-5">
                                                <span className="text-xl font-semibold">$</span>
                                                <span className="price text-4xl font-semibold mb-0">9</span>
                                                <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                            </div>

                                            <ul className="list-none text-slate-400">
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Full Access</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Enhanced Security</li>
                                            </ul>
                                            <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Buy Now</Link>
                                        </div>

                                        <div className="group border-b-[3px] border-indigo-600 p-6 py-8 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                                            <span className="absolute -end-11 -top-[10px] ltr:rotate-[45deg] rtl:-rotate-[45deg] w-32 h-16 pt-4 px-2 pb-0 flex items-center justify-center text-white bg-amber-500 font-semibold text-lg">Best</span>
                                            <h6 className="font-bold uppercase mb-5 text-indigo-600">Business</h6>

                                            <div className="flex mb-5">
                                                <span className="text-xl font-semibold">$</span>
                                                <span className="price text-4xl font-semibold mb-0">74</span>
                                                <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                            </div>

                                            <ul className="list-none text-slate-400">
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Full Access</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Free Appointments</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Enhanced Security</li>
                                            </ul>
                                            <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Try it Now</Link>
                                        </div>

                                        <div className="group border-b-[3px] border-gray-200 dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                                            <h6 className="font-bold uppercase mb-5 text-indigo-600">Professional</h6>

                                            <div className="flex mb-5">
                                                <span className="text-xl font-semibold">$</span>
                                                <span className="price text-4xl font-semibold mb-0">99</span>
                                                <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                            </div>

                                            <ul className="list-none text-slate-400">
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Full Access</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Free Appointments</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Enhanced Security</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Free Installment</li>
                                            </ul>
                                            <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Started Now</Link>
                                        </div>
                                    </div>
                                </div>:""
                             }
                             {isOpenTab === 1 ?
                                <div >
                                    <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
                                        <div className="group border-b-[3px] border-gray-200 dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                                            <h6 className="font-bold uppercase mb-5 text-indigo-600">Free</h6>

                                            <div className="flex mb-5">
                                                <span className="text-xl font-semibold">$</span>
                                                <span className="price text-4xl font-semibold mb-0">0</span>
                                                <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                            </div>

                                            <ul className="list-none text-slate-400">
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Full Access</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                                            </ul>
                                            <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Signup</Link>
                                        </div>

                                        <div className="group border-b-[3px] border-gray-200 dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                                            <h6 className="font-bold uppercase mb-5 text-indigo-600">Starter</h6>

                                            <div className="flex mb-5">
                                                <span className="text-xl font-semibold">$</span>
                                                <span className="price text-4xl font-semibold mb-0">39</span>
                                                <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                            </div>

                                            <ul className="list-none text-slate-400">
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Full Access</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Enhanced Security</li>
                                            </ul>
                                            <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Buy Now</Link>
                                        </div>

                                        <div className="group border-b-[3px] border-indigo-600 p-6 py-8 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                                            <span className="absolute -end-11 -top-[10px] ltr:rotate-[45deg] rtl:-rotate-[45deg] w-32 h-16 pt-4 px-2 pb-0 flex items-center justify-center text-white bg-amber-500 font-semibold text-lg">Best</span>
                                            <h6 className="font-bold uppercase mb-5 text-indigo-600">Business</h6>

                                            <div className="flex mb-5">
                                                <span className="text-xl font-semibold">$</span>
                                                <span className="price text-4xl font-semibold mb-0">274</span>
                                                <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                            </div>

                                            <ul className="list-none text-slate-400">
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Full Access</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Free Appointments</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Enhanced Security</li>
                                            </ul>
                                            <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Try it Now</Link>
                                        </div>

                                        <div className="group border-b-[3px] border-gray-200 dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                                            <h6 className="font-bold uppercase mb-5 text-indigo-600">Professional</h6>

                                            <div className="flex mb-5">
                                                <span className="text-xl font-semibold">$</span>
                                                <span className="price text-4xl font-semibold mb-0">599</span>
                                                <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                            </div>

                                            <ul className="list-none text-slate-400">
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Full Access</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Free Appointments</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Enhanced Security</li>
                                                <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Free Installment</li>
                                            </ul>
                                            <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Started Now</Link>
                                        </div>
                                    </div>
                                </div>:""
                             }
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div id="accordion-collapse" data-accordion="collapse" className="grid md:grid-cols-2 grid-cols-1 mt-8 md:gap-[30px]">
                        <div>
                            {accordionData1.map((item, index) => (
                                <div key={index} className="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                    <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                        <button type="button" onClick={() => toggleAccordion(item.id)} className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === item.id ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''}`} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span>{item.title}</span>
                                            <svg data-accordion-icon className={`${activeIndex === item.id ? "rotate-180" : "rotate-270" } size-4 shrink-01`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    {activeIndex === item.id && (
                                        <div>
                                            <div className="p-5">
                                                <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            ))}
                        </div>

                        <div>
                            {accordionData2.map((item, index) => (
                                <div key={index} className="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                    <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                        <button type="button" onClick={() => toggleAccordion(item.id)} className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === item.id ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''}`} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span>{item.title}</span>
                                            <svg data-accordion-icon className={`${activeIndex === item.id ? "rotate-180" : "rotate-270" } size-4 shrink-01`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    {activeIndex === item.id && (
                                        <div>
                                            <div className="p-5">
                                                <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            ))}
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Users Say</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <UserFeedBack2 />
                </div>

                <GetInTuch title={true}/>
            </section>

            <Footer />
        </>
    )
}

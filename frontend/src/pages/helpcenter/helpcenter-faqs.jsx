import { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom';
import { Link as Link2 } from 'react-scroll';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';

import GetInTuch from '../../component/getInTuch';
import { accordionData } from '../../data/dataTwo';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function HelpcenterFaqs() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    },[]);

    const initialState = {
        activeIndex: 0,
        activeGeneral: 0,
        activePayment: 0,
        activeSupport: 0
    };

    const toggleAccordion = (category, index) => {
        dispatch({ type: 'SELECT_CATEGORY', payload: { category: category, index: index } });
    };

    const reducerMethod = (state, action) => {
        switch (action.payload.category) {
            case 'active':
                return {
                    ...state,
                    activeIndex: action.payload.index
                };
            case 'general':
                return {
                    ...state,
                    activeGeneral: action.payload.index
                };
            case 'payments':
                return {
                    ...state,
                    activePayment: action.payload.index
                };
            case 'support':
                return {
                    ...state,
                    activeSupport: action.payload.index
                };
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducerMethod, initialState);

    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="relative table w-full py-36 bg-[url('../../assets/images/helpcenter.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">Frequently Asked Questions</h3>

                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-flex items-center space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Techwind</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/helpcenter-overview">Helpcenter</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">FAQs</li>
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
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-5">
                            <div className="rounded-md shadow-sm dark:shadow-gray-800 p-6 sticky top-20">
                                <ul className=" list-none sidebar-nav mb-0 py-0" id="navmenu-nav">
                                    <li className="navbar-item p-0 ml-0"><Link2 to="tech"  spy={true} activeClass="active"
                                        smooth={true} className="text-base font-medium navbar-link">Buying Questions</Link2></li>
                                    <li className="navbar-item mt-3 p-0 ml-0"><Link2 to="general"  spy={true} activeClass="active"
                                        smooth={true} className="text-base font-medium navbar-link">General Questions</Link2></li>
                                    <li className="navbar-item mt-3 p-0 ml-0"><Link2 to="payment"  spy={true} activeClass="active"
                                        smooth={true} className="text-base font-medium navbar-link">Payments Questions</Link2></li>
                                    <li className="navbar-item mt-3 p-0 ml-0"><Link2 to="support"  spy={true} activeClass="active"
                                        smooth={true} className="text-base font-medium navbar-link">Support Questions</Link2></li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-8 md:col-span-7">
                            <div id="tech">
                                <h5 className="text-2xl font-semibold">Buying Product</h5>

                                <div id="accordion-collapseone" data-accordion="collapse" className="mt-6">
                                    {accordionData.slice(0,4).map((item, index) => (
                                        <div key={index} className="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                            <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                                <button onClick={() => toggleAccordion('active', index)} type="button"
                                                    className={`flex justify-between items-center p-5 w-full font-semibold text-start ${state.activeIndex === index ? 'bg-gray-50 dark:bg-slate-800 text-violet-600' : ''}`}
                                                    data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                                    <span>{item.title}</span>
                                                    <svg data-accordion-icon className={`${state.activeIndex === index ? "rotate-180" : "rotate-270" } size-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </h2>
                                            {state.activeIndex === index && (
                                                <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                                                    <div className="p-5">
                                                        <p className="text-slate-400 dark:text-gray-400">{item.content}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div id="general" className="mt-8">
                                <h5 className="text-2xl font-semibold">General Questions</h5>

                                <div id="accordion-collapsetwo" data-accordion="collapse" className="mt-6">
                                    {accordionData.slice(0,4).map((item, index) => (
                                        <div key={index} className={`relative shadow-sm dark:shadow-gray-700 rounded-md overflow-hidden mt-4`}>
                                            <h2 className="text-base font-medium">
                                                <button onClick={() => toggleAccordion('general', index)} type="button" className={`flex justify-between items-center p-5 w-full font-semibold text-start ${state.activeGeneral === index ? 'bg-gray-50 dark:bg-slate-800 text-violet-600' : ''} `} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                                    <span>{item.title}</span>
                                                    <svg data-accordion-icon className={`${state.activeIndex === index ? "rotate-180" : "rotate-270" } size-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </h2>
                                            {state.activeGeneral === index && (
                                                <div aria-labelledby="accordion-collapse-heading-1">
                                                    <div className="p-5">
                                                        <p className="text-slate-400 dark:text-gray-400">{item.content}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div id="payment" className="mt-8">
                                <h5 className="text-2xl font-semibold">Payments Questions</h5>

                                <div id="accordion-collapsethree" data-accordion="collapse" className="mt-6">
                                    {accordionData.slice(0,4).map((item, index) => (
                                        <div key={index} className={`relative shadow-sm dark:shadow-gray-700 rounded-md overflow-hidden mt-4`}>
                                            <h2 className="text-base font-medium">
                                                <button onClick={() => toggleAccordion('payments', index)} type="button" className={`flex justify-between items-center p-5 w-full font-semibold text-start ${state.activePayment === index ? 'bg-gray-50 dark:bg-slate-800 text-violet-600' : ''} `} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                                    <span>{item.title}</span>
                                                    <svg data-accordion-icon className={`${state.activeIndex === index  ? "rotate-180" : "rotate-270" } size-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </h2>
                                            {state.activePayment === index && (
                                                <div aria-labelledby="accordion-collapse-heading-1">
                                                    <div className="p-5">
                                                        <p className="text-slate-400 dark:text-gray-400">{item.content}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div id="support" className="mt-8">
                                <h5 className="text-2xl font-semibold">Support Questions</h5>

                                <div id="accordion-collapsefour" data-accordion="collapse" className="mt-6">
                                    {accordionData.slice(0,4).map((item, index) => (
                                        <div key={index} className={`relative shadow-sm dark:shadow-gray-700 rounded-md overflow-hidden mt-4`}>
                                            <h2 className="text-base font-medium">
                                                <button onClick={() => toggleAccordion('support', index)} type="button" className={`flex justify-between items-center p-5 w-full font-semibold text-start ${state.activeSupport === index ? 'bg-gray-50 dark:bg-slate-800 text-violet-600' : ''} `} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                                    <span>{item.title}</span>
                                                    <svg data-accordion-icon className={`${state.activeIndex === index  ? "rotate-180" : "rotate-270" } size-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </h2>
                                            {state.activeSupport === index && (
                                                <div aria-labelledby="accordion-collapse-heading-1">
                                                    <div className="p-5">
                                                        <p className="text-slate-400 dark:text-gray-400">{item.content}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <GetInTuch/>
            </section>

            <Footer />

        </>
    )
}

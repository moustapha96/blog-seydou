import { Link } from 'react-router-dom';

import ab03 from '../../assets/images/about/ab03.jpg';
import ab02 from '../../assets/images/about/ab02.jpg';
import ab01 from '../../assets/images/about/ab01.jpg';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import CookieModal from '../../component/cookieModal';
import ManagementTeam from '../../component/managementTeam';
import CompanyLogo from '../../component/companyLogo';


import TinySlider from 'tiny-slider-react';
import CountUp from 'react-countup';
import { feedback } from '../../data/data';
import { consultingAbout, consultingProduct, consultingServices } from '../../data/dataTwo';
import { FaArrowRight } from 'react-icons/fa';
import { FiAirplay } from 'react-icons/fi';
import { useEffect } from 'react';

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
export default function IndexConsulting() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });
    return (
        <>
            <Navbar navClass="nav-light" />
            <section className="relative md:py-60 py-36 bg-[url('../../assets/images/consulting/bg.jpg')] bg-right bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-slate-900/70"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 items-center mt-10">
                        <span className="text-white/80 font-semibold mb-4 text-lg">Turn Your Skills And Expertise Into A Successful Business</span>
                        <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Grow your business <br /> with focus & clarity.</h4>
                        <p className="text-white/60 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                        <div className="mt-8">
                            <Link to="#" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Learn More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700">
                <div className="container relative">
                    <CompanyLogo/>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Business Consulting Services</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {consultingServices.map((item,index)=>{
                            return(
                                <div className="group relative" key={index}>
                                    <div className="relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden">
                                        <img src={item.image} className="" alt="" />
                                        <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                                    </div>

                                    <div className="mt-6">
                                        <Link to="#" className="text-xl font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.title}</Link>

                                        <p className="text-slate-400 mt-4">{item.desc}</p>

                                        <div className="mt-4">
                                            <Link to="#" className="hover:text-indigo-600 duration-500 ease-in-out font-semibold"><span className="hidden group-hover:inline-block">Read More</span> <FaArrowRight className="ms-2 text-[10px] inline"/></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="relative bg-gray-50 dark:bg-slate-800 md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="grid grid-cols-12 gap-6 items-center">
                                <div className="col-span-6">
                                    <div className="grid grid-cols-1 gap-6">
                                        <img src={ab03} className="shadow-sm rounded-md" alt="" />
                                        <img src={ab02} className="shadow-sm rounded-md" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <div className="grid grid-cols-1 gap-6">
                                        <img src={ab01} className="shadow-sm rounded-md" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7 md:col-span-6">
                            <div className="lg:ms-5">
                                <div className="flex mb-4">
                                    <span className="text-indigo-600 text-2xl font-bold mb-0"><CountUp className="counter-value text-6xl font-bold"start={1} end={15}></CountUp>+</span>
                                    <span className="self-end font-semibold ms-2">Years <br /> Experience</span>
                                </div>

                                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Business and technology <br /> consulting for growth</h3>

                                <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with &apos;real&apos; content.</p>

                                <div className="mt-6">
                                    <Link to="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-2"><FiAirplay className="me-1"/> Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container relative mt-16">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                        {consultingAbout.map((item, index) => {
                            let Icons = item.icon
                            return(
                                <div key={index} className="group px-6 py-8 hover:bg-white dark:hover:bg-slate-900 hover:shadow-sm dark:hover:shadow-gray-800 duration-500 ease-in-out border-b-[3px] border-transparent hover:border-indigo-600">
                                     <Icons className="size-10 stroke-1 text-indigo-600"/>

                                    <div className="content mt-6">
                                        <Link to="/page-services" className="title h5 text-xl font-semibold hover:text-indigo-600">{item.title}</Link>
                                        <p className="text-slate-400 mt-4">{item.desc}</p>

                                        <div className="mt-5">
                                            <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Learn More<FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                        <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Digital Product</h3>
                            <p className="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                            <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-2">
                        {consultingProduct.map((item, index) => {
                            return(
                            <div className="picture-item p-4 rounded-md" key={index}>
                                <div className="">
                                    <div className="relative">
                                        <div className="shadow-sm dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                                            <img src={item.image} className="rounded-t-md shadow-sm" alt="" />
                                        </div>
                                    </div>

                                    <div className="pt-4 px-3">
                                        <h5 className="mb-1 font-semibold text-lg"><Link to="https://1.envato.market/techwind-react" target='_blank' className="hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.title}</Link></h5>
                                        <span className="text-slate-400">{item.name}</span>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                        <div className="md:col-span-12 text-center">
                            <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16 lg:pt-24 pt-16">
                    <div className="absolute inset-0 opacity-25 dark:opacity-50 bg-[url('../../assets/images/map.png')] bg-no-repeat bg-center bg-cover"></div>
                    <div className="relative grid grid-cols-1 pb-8 text-center z-1">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">Trusted by more than 10K users</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" start={1010} end={1548} />+</h1>
                            <h5 className="counter-head text-lg font-medium">Properties Sell</h5>
                        </div>

                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" start={2} end={25} />+</h1>
                            <h5 className="counter-head text-lg font-medium">Award Gained</h5>
                        </div>

                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" start={0} end={9} />+</h1>
                            <h5 className="counter-head text-lg font-medium">Years Experience</h5>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">What Our Client Say ?</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="flex justify-center relative mt-16">
                        <div className="relative md:w-1/2 w-full">
                            <div className="absolute -top-20 md:-start-24 -start-0">
                                <i className="mdi mdi-format-quote-open text-9xl opacity-5"></i>
                            </div>

                            <div className="absolute bottom-28 md:-end-24 -end-0">
                                <i className="mdi mdi-format-quote-close text-9xl opacity-5"></i>
                            </div>

                            <div className="tiny-single-item">

                                <TinySlider settings={settings}>
                                    {feedback.map((item, index) => {
                                        return(
                                            <div className="tiny-slide" key={index}>
                                                <div className="text-center">
                                                    <p className="text-lg text-slate-400 italic"> {item.description} </p>
    
                                                    <div className="text-center mt-5">
                                                        <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                        </ul>
    
                                                        <img src={item.image} className="size-14 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt="" />
                                                        <h6 className="mt-2 font-semibold">{item.name}</h6>
                                                        <span className="text-slate-400 text-sm">{item.role}</span>
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
                <ManagementTeam className="relative md:mt-24 mt-16" id={""} />
            </section>
            <Footer />
            <CookieModal />
        </>
    )
}

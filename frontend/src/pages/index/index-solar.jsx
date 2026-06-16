import Navbar from "../../component/Navbar/navbar";
import bg from '../../assets/images/solar/bg/2.jpg'
import bg1 from '../../assets/images/solar/bg/1.jpg'
import solar1 from '../../assets/images/solar/1.jpg'
import solar2 from '../../assets/images/solar/2.jpg'
import solar3 from '../../assets/images/solar/3.jpg'
import solar4 from '../../assets/images/solar/4.jpg'

import TinySlider from 'tiny-slider-react';
import CountUp from 'react-countup';

import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { solarAbout, solarBlog, solarPorject } from "../../data/data-six";
import { FiArrowRight, FiHexagon } from "react-icons/fi";
import { feedback } from "../../data/data";
import Footer from "../../component/Footer/footer";
import { useState } from "react";

export default function IndexSolar() {
    const [isOpen, setOpen] = useState(false)

    let settings = {
        container: '.tiny-one-item',
        items: 1,
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
    }
    const settings2 = {
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
  return (
    <>
        <Navbar/>

        <section className="relative overflow-hidden table w-full py-36 lg:py-44">
            <div className="image-wrap absolute -top-[350px] -bottom-[350px] -start-[100px] -end-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}></div>
            <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80"></div>
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="md:col-span-7">
                        <div className="me-6">
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5 text-slate-900 dark:text-white">Sustainable Energy Empowering The Customer</h4>
                            <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                        
                            <div className="mt-6">
                                <a href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded me-2 mt-2">Get a Free Quote <i className="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-5">
                        <div className="relative">
                            <div className="relative md:shrink-0">
                                <img className="object-cover md:w-[400px] w-84 lg:h-[550px] md:h-[400px] h-[550px] rounded-full shadow-md dark:shadow-gyay-700 ms-auto" src={solar4} alt=""/>
                            </div>
    
                            <div className="absolute bottom-16 md:-start-10 md-start-5 start-1 flex items-center p-2 rounded shadow-md dark:shadow-gray-800 bg-white/90 dark:bg-slate-900/90 max-w-80">
                                <div className="min-w-28 w-28 relative">
                                    <div className="grid grid-cols-1">
                                        <div className="tiny-one-item">
                                        <TinySlider settings={settings}>
                                            <div className="tiny-slide">
                                                <div className="m-2">
                                                    <img src={solar1} className="rounded" alt=""/>
                                                </div>
                                            </div>
        
                                            <div className="tiny-slide">
                                                <div className="m-2">
                                                    <img src={solar2} className="rounded" alt=""/>
                                                </div>
                                            </div>
        
                                            <div className="tiny-slide">
                                                <div className="m-2">
                                                    <img src={solar3} className="rounded" alt=""/>
                                                </div>
                                            </div>
                                        </TinySlider>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="ms-3">
                                    <h5 className="text-lg font-semibold">View Our Success Stories With Renewable Energy</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:pb-24 pb-16">
            <div className="container relative">
                <div className="md:flex justify-center">
                    <div className="lg:w-3/4 md:w-full relative -mt-16">
                        <div className="p-6 relative z-3 bg-white dark:bg-slate-900 rounded shadow-sm shadow-slate-200 dark:shadow-slate-800">
                            <div className="md:flex justify-center">
                                <div className="md:w-1/3">
                                    <div className="text-center">
                                        <h6 className="text-slate-400 mb-0">Worldwide Customer</h6>
                                        <h2 className="mb-0 text-4xl mt-3 font-bold"><CountUp className="counter-value" end={24}/>K+</h2>
                                    </div>
                                </div>

                                <div className="md:w-1/3 mt-8 md:mt-0">
                                    <div className="text-center">
                                        <h6 className="text-slate-400 mb-0">Solar Panels</h6>
                                        <h2 className="mb-0 text-4xl mt-3 font-bold"><CountUp className="counter-value" end={2840}/>+</h2>
                                    </div>
                                </div>

                                <div className="md:w-1/3 mt-8 md:mt-0">
                                    <div className="text-center">
                                        <h6 className="text-slate-400 mb-0">Customer Satisfaction</h6>
                                        <h2 className="mb-0 text-4xl mt-3 font-bold"><CountUp className="counter-value" end={99}/>%</h2>
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
                            <div className="relative md:shrink-0 lg:me-0 me-10">
                                <img className="object-cover md:w-96 w-84 h-[500px] rounded shadow-md dark:shadow-gyay-700" src={solar2} alt=""/>
                            </div>

                            <div className="absolute bottom-16 end-0">
                                <div className="relative md:shrink-0">
                                    <img className="object-cover size-48 rounded shadow-md dark:shadow-gyay-700" src={solar3} alt=""/>
                                </div>
                                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                    <Link to="#!" onClick={() => setOpen(true)} className="lightbox size-14 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
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

                    <div className="md:col-span-7">
                        <div className="lg:ms-4">
                            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Solar Energy Squad: <br/> Illuminating a Sustainable Future</h4>
                            <p className="text-slate-400 max-w-xl">At Esoler Solar Energy, we are dedicated to providing sustainable and renewable energy solutions to empower individuals, businesses, and communities. With a passion for harnessing the power of the sun, we strive to make a positive impact on the environment while helping our clients reduce their carbon footprint and energy costs.</p>
                            <p className="text-slate-400 max-w-xl mt-3">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today one can now find slightly different versions.</p>
                            <div className="mt-6">
                                <Link to="#" className="py-2 px-5 inline-flex font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded items-center">Read More <MdKeyboardArrowRight className="uil uil-angle-right-b align-middle"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What we do ?</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {solarAbout.map((item,index)=>{
                        let Icon = item.icon
                        return(
                            <div key={index} className="group relative p-6 shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 duration-500 rounded bg-white dark:bg-slate-900 overflow-hidden text-center">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <FiHexagon className="size-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"></FiHexagon>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded group-hover:text-white duration-500 text-3xl flex align-middle justify-center items-center">
                                        <Icon />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <Link to="#" className="text-xl font-medium group-hover:text-white duration-500">{item.title}</Link>
                                    <p className="text-slate-400 group-hover:text-white/50 duration-500 mt-3">{item.desc}</p>

                                    <div className="mt-3">
                                        <Link to="#" className="font-medium group-hover:text-white/80 group-hover:hover:text-white duration-500">Read More <i className="uil uil-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16 pt-16">
                <div className="absolute inset-0 opacity-25 dark:opacity-50 bg-[url('../../assets/images/map.png')] bg-no-repeat bg-center bg-cover"></div>
                <div className="relative grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-slate-900 dark:text-white">What Our Client Say ?</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="flex justify-center relative mt-6">
                    <div className="relative md:w-1/2 w-full">
                        <div className="absolute -top-20 md:-start-24 -start-0">
                            <i className="mdi mdi-format-quote-open text-9xl opacity-5"></i>
                        </div>

                        <div className="absolute bottom-28 md:-end-24 -end-0">
                            <i className="mdi mdi-format-quote-close text-9xl opacity-5"></i>
                        </div>

                        <div className="tiny-single-item">
                            <TinySlider settings={settings2}>
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

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Solar & Renewable Projects</h4>
                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {solarPorject.map((item,index)=>{
                        return(
                            <div key={index} className="group relative overflow-hidden rounded shadow-sm shadow-slate-100 dark:shadow-slate-800">
                                <div className="relative md:shrink-0">
                                    <img className="object-cover md:w-96 w-full h-96 group-hover:scale-105 duration-500" src={item.image} alt=""/>
                                </div>

                                <div className="p-6 absolute bottom-0 -start-72 group-hover:start-0 duration-500">
                                    <div className="bg-white dark:bg-slate-900 py-3 px-4 w-fit rounded">
                                        <Link to="#" className="hover:text-indigo-600 text-lg font-semibold">{item.title}</Link>
                                        
                                        <p className="text-slate-400">{item.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 bg-no-repeat bg-fixed bg-top bg-cover" style={{backgroundImage:`url(${bg1})`}} id="table">
            <div className="absolute inset-0 bg-slate-900/60"></div>
            <div className="container relative">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div>
                        <h4 className="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-semibold text-white">Best Solution for <br/> Your Home Service</h4>

                        <p className="text-white/70 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>

                        <div className="grid md:grid-cols-2 mt-4">
                            <ul className="list-none">
                                <li className="mt-2 ml-0"><i className="mdi mdi-arrow-right text-[14px] text-white"></i> <span className="text-white/50">Solar Panel Installation</span></li>
                                <li className="mt-2 ml-0"><i className="mdi mdi-arrow-right text-[14px] text-white"></i> <span className="text-white/50">Solar System Design</span></li>
                                <li className="mt-2 ml-0"><i className="mdi mdi-arrow-right text-[14px] text-white"></i> <span className="text-white/50">Solar Energy Consultation</span></li>
                            </ul>

                            <ul className="list-none">
                                <li className="mt-2 ml-0"><i className="mdi mdi-arrow-right text-[14px] text-white"></i> <span className="text-white/50">Solar System Maintenance</span></li>
                                <li className="mt-2 ml-0"><i className="mdi mdi-arrow-right text-[14px] text-white"></i> <span className="text-white/50">Solar Energy Storage</span></li>
                                <li className="mt-2 ml-0"><i className="mdi mdi-arrow-right text-[14px] text-white"></i> <span className="text-white/50">Solar Financing</span></li>
                            </ul>
                        </div>

                        <div className="mt-6">
                            <Link to="#" className="h-10 px-5 tracking-wide inline-flex items-center justify-center font-medium rounded bg-indigo-600 text-white">Learn More <i className="mdi mdi-arrow-right ms-1"></i></Link>
                        </div>

                        <div className="flex items-center mt-8">
                            <i className="mdi mdi-phone me-2 text-white text-5xl"></i>
                            <div className="content">
                                <h6 className="text-base font-medium text-white/70">Received and acurate quote within in 3-5 days</h6>
                                <a href="tel:+152534-468-854" className="text-white font-semibold">+152 534-468-854</a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded lg:p-12 p-6 lg:ms-12">
                        <div className="section-title mb-4">
                            <h4 className="text-2xl font-bold uppercase mb-4">Request A Quote</h4>
                            <p className="text-slate-400 mx-auto para-desc">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>

                        <form>
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-4 mt-6">
                                <div className="md:col-span-6">
                                    <label className="font-semibold">Your Name:</label>
                                    <input name="name" id="name" type="text" className="w-full py-2 px-3 border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 bg-transparent focus:outline-none rounded h-10 mt-1 focus:ring-0" placeholder="First Name:"/>
                                </div>

                                <div className="md:col-span-6">
                                    <label className="font-semibold">Your Email:</label>
                                    <input name="email" id="email" type="email" className="w-full py-2 px-3 border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 bg-transparent focus:outline-none rounded h-10 mt-1 focus:ring-0" placeholder="Your email:"/>
                                </div> 

                                <div className="md:col-span-6">
                                    <label className="font-semibold">Phone no.:</label>
                                    <input name="number" type="number" id="phone-number" className="w-full py-2 px-3 border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 bg-transparent focus:outline-none rounded h-10 mt-1 focus:ring-0" placeholder="Phone no.:"/>
                                </div> 

                                <div className="md:col-span-6">
                                    <label className="font-semibold">Electricity usage in kWh?</label>
                                    <input name="name" id="kWh" type="text" className="w-full py-2 px-3 border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 bg-transparent focus:outline-none rounded h-10 mt-1 focus:ring-0" placeholder="kWh"/>
                                </div>

                                <div className="md:col-span-12">
                                    <label className="font-semibold">System Type:</label>
                                    <select className="form-select w-full py-2 px-3 border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 bg-transparent focus:outline-none rounded h-10 mt-1 focus:ring-0">
                                        <option value="USA">Solar for water</option>
                                        <option value="CAD">Solar Panels</option>
                                    </select>
                                </div>

                                <div className="md:col-span-12">
                                    <h6 className="font-semibold">Select Contact Method:</h6>

                                    <ul className="list-none mt-1">
                                        <li className="inline-block me-2">
                                            <div className="flex items-center mb-0">
                                                <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="ViaCall"/>
                                                <label className="form-checkbox-label text-slate-400" htmlFor="ViaCall">Phone</label>
                                            </div>
                                        </li>
                                        <li className="inline-block">
                                            <div className="flex items-center mb-0">
                                                <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="ViaEmail"/>
                                                <label className="form-checkbox-label text-slate-400" htmlFor="ViaEmail">Email</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 mt-4">
                                <input type="submit" id="submit" name="send" className="h-10 px-5 tracking-wide inline-flex items-center justify-center font-medium rounded bg-indigo-600 text-white" value="Submit Request"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Latest Blogs & News</h4>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {solarBlog.map((item,index)=>{
                        return(
                            <div key={index} className="blog relative rounded shadow-sm dark:shadow-gray-800 overflow-hidden">
                                <img src={item.image} alt="" />
                                <div className="content p-6">
                                    <Link to="/blog-detail" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
                                    
                                    <div className="mt-4">
                                        <Link to="/blog-detail" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <FiArrowRight/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <Footer/>

    </>
  )
}

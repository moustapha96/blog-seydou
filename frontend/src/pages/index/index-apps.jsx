import { Link } from 'react-router-dom';

import app from '../../assets/images/app/app.png';
import playstore from '../../assets/images/app/playstore.png';
import imageP from '../../assets/images/app/1.png';
import classic01 from '../../assets/images/app/classic01.png';
import classic02 from '../../assets/images/app/classic02.png';
import classic04 from '../../assets/images/app/classic04.png';
import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import UserFeedBack2 from '../../component/userFeedBack2';
import CookieModal from '../../component/cookieModal';
import MobileApp from '../../component/mobileApp';
import KeyFeatureTwo from '../../component/keyFeatureTwo';

import { appFeature } from '../../data/dataTwo';
import { FaArrowRight } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useEffect } from 'react';

export default function IndexApps() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });
  
    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="relative table w-full py-36 md:py-56 md:pb-0 overflow-hidden bg-[url('../../assets/images/app/bg.png')] bg-top bg-no-repeat bg-fixed bg-cover">
                <div className="absolute inset-0 bg-indigo-600 opacity-80"></div>
                <div className="container relative z-2">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-7 md:mb-16">
                            <div className="md:me-6">
                                <h4 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Make Faster, <br /> More Confident <br /> Decision</h4>
                                <p className="text-white/70 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                <div className="mt-6">
                                    <Link ><img src={app} className="inline-block m-1" alt="" /></Link>
                                    <Link ><img src={playstore} className="inline-block m-1" alt="" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-5 md:mt-0">
                            <div className="relative after:content-[''] after:absolute after:h-40 after:wz-40 after:bg-indigo-600 after:bottom-0 after:end-0  after:-z-0 after:rounded-3xl after:animate-[spin_10s_linear_infinite]">
                                <img src={imageP} className="relative z-1" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>



            <section className="relative md:py-24 py-16 overflow-hidden">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Features</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What We Do ?</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                        {appFeature.map((item,index)=>{
                            let Icons = item.icon
                            return(
                                <div key={index} className="group p-6 md:px-4 rounded-lg shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out">
                                    <div
                                        className="size-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                        <Icons width={30}/>
                                    </div>
        
                                    <div className="content mt-7">
                                        <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                        <p className="text-slate-400 mt-3">{item.desc}</p>
        
                                        <div className="mt-5">
                                            <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                        <div className="relative">
                            <img src={classic01} className="mx-auto" alt="" />
                            <div className="overflow-hidden absolute lg:size-[400px] size-[320px] bg-indigo-600/5 bottom-2/4 translate-y-2/4 start-0 rotate-45 -z-1 shadow-md shadow-indigo-600/10 rounded-[100px]"></div>
                        </div>

                        <div className="lg:ms-8">
                            <h4 className="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">We Build High Performing <br /> Application</h4>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                            <ul className="list-none text-slate-400 mt-4">
                                <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                            </ul>

                            <div className="mt-4">
                                <Link to="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                        <div className="relative order-1 md:order-2">
                            <img src={classic02} className="mx-auto" alt="" />
                            <div className="overflow-hidden absolute lg:size-[400px] size-[320px] bg-indigo-600/5 bottom-2/4 translate-y-2/4 end-0 rotate-45 -z-1 shadow-md shadow-indigo-600/10 rounded-[100px]"></div>
                        </div>

                        <div className="lg:me-8 order-2 md:order-1">
                            <h4 className="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">Easy And Best Solution <br /> For Your App</h4>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                            <ul className="list-none text-slate-400 mt-4">
                                <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                            </ul>

                            <div className="mt-4">
                                <Link to="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                        <div className="relative">
                            <img src={classic04} className="mx-auto" alt="" />
                            <div className="overflow-hidden absolute lg:size-[400px] size-[320px] bg-indigo-600/5 bottom-2/4 translate-y-2/4 start-0 rotate-45 -z-1 shadow-md shadow-indigo-600/10 rounded-[100px]"></div>
                        </div>

                        <div className="lg:ms-8">
                            <h4 className="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">Beautiful, Simple & <br /> Easy to Use</h4>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                            <ul className="list-none text-slate-400 mt-4">
                                <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                            </ul>

                            <div className="mt-4">
                                <Link to="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Key Features</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                    </div>

                    <KeyFeatureTwo/>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-indigo-600 text-base mb-2">Testimonial</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Users Say</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                    </div>

                    <UserFeedBack2 />
                </div>
                <MobileApp/>
            </section>


            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-slate-900 dark:text-slate-800">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>


            <Footer />
            <CookieModal />
        </>
    )
}

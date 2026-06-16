import { useEffect, useState } from 'react';
import { Link,useParams } from 'react-router-dom';

import image from '../../assets/images/client/01.jpg';
import shree_logo from '../../assets/images/client/shree-logo.png';
import circle_logo from '../../assets/images/client/circle-logo.png';

import JobFooter from '../../component/Footer/jobFooter';
import Navbar from '../../component/Navbar/navbar'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import MobileApp from '../../component/mobileApp';

import { candidates } from '../../data/data';
import { portfolioTwo ,portfolioImageTwo} from '../../data/portfolio';

import * as Icon from 'react-feather';
import { FiCamera } from 'react-icons/fi';

export default function PageJobCandidateDetail() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    },[]);

    let params = useParams();
    let id = params.id
    let data = candidates.find((jobData) => jobData.id === parseInt(id))
    
    let [isOpen, setisOpen] = useState(false);
    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };

    const slides = portfolioImageTwo.map((image) => ({ src: image }));

    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="relative table w-full py-72 bg-[url('../../assets/images/job/job.jpg')] bg-no-repeat bg-top bg-cover">
                <div className="absolute inset-0 bg-slate-900/80"></div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-5">
                            <div className="lg:-mt-[330px] -mt-[299px]">
                                <div className="rounded-md bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                    <div className="text-center py-8 p-6 border-b border-gray-100 dark:border-gray-700">
                                        <img src={data?.image ? data?.image : image} className="size-24 p-1 shadow-md dark:shadow-gray-800 mx-auto rounded-full block" alt="" />
                                        <h5 className="mt-5 text-xl font-semibold mb-0">{data?.name ? data?.name : 'Thomas Brewer'}</h5>
                                        <p className="text-slate-400 mb-0">{data?.job ? data?.job : 'Senior Web Developer'}</p>
                                    </div>

                                    <div className="p-6">
                                        <h5 className="font-semibold">Company Details :</h5>
                                        <ul className="list-none   mt-4 ">
                                            <li className="flex mt-2 items-center font-medium"><Icon.Mail className="size-4 text-amber-500 me-3"></Icon.Mail><span className="text-slate-400 me-3">Email  :</span> thomas@mail.com</li>
                                            <li className="flex mt-2 items-center font-medium"><Icon.Gift className="size-4 text-amber-500 me-3"></Icon.Gift><span className="text-slate-400 me-3">D.O.B. :</span> 31st Dec, 1996</li>
                                            <li className="flex mt-2 items-center font-medium"><Icon.Home className="size-4 text-amber-500 me-3"></Icon.Home><span className="text-slate-400 me-3">Address :</span> 15 Razy street</li>
                                            <li className="flex mt-2 items-center font-medium"><Icon.MapPin className="size-4 text-amber-500 me-3"></Icon.MapPin><span className="text-slate-400 me-3">City :</span> London</li>
                                            <li className="flex mt-2 items-center font-medium"><Icon.Globe className="size-4 text-amber-500 me-3"></Icon.Globe><span className="text-slate-400 me-3">Country :</span> UK</li>
                                            <li className="flex mt-2 items-center font-medium"><Icon.Server className="size-4 text-amber-500 me-3"></Icon.Server><span className="text-slate-400 me-3">Postal Code :</span> 521452</li>
                                            <li className="flex mt-2 items-center font-medium"><Icon.Phone className="size-4 text-amber-500 me-3"></Icon.Phone><span className="text-slate-400 me-3">Mobile :</span> (+125) 1542-8452</li>
                                        </ul>

                                        <ul className="list-none mt-5 space-x-1 space-y-1">
                                            <li className="inline"><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Facebook className="size-4"></Icon.Facebook></Link></li>
                                            <li className="inline"><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Instagram className="size-4"></Icon.Instagram></Link></li>
                                            <li className="inline"><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Twitter className="size-4"></Icon.Twitter></Link></li>
                                            <li className="inline"><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Linkedin className="size-4"></Icon.Linkedin></Link></li>
                                            <li className="inline"><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.GitHub className="size-4"></Icon.GitHub></Link></li>
                                            <li className="inline"><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Youtube className="size-4"></Icon.Youtube></Link></li>
                                            <li className="inline"><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Gitlab className="size-4"></Icon.Gitlab></Link></li>
                                        </ul>

                                        <Link to="/contact-one" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-6">Contact Me</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-8 md:col-span-7">
                            <h4 className="text-xl font-semibold">About us :</h4>
                            <p className="text-slate-400 mt-4">Obviously I&apos;M Web Developer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using &apos;Content here, content here&apos;, making it look like readable English.</p>
                            <p className="text-slate-400 mt-4">Data Structures and Algorithms are the heart of programming. Initially most of the developers do not realize its importance but when you will start your career in software development, you will find your code is either taking too much time or taking too much space.</p>

                            <h4 className="mt-8 text-xl font-semibold">Skills :</h4>
                            <div className="mt-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400">WordPress</span>
                                    <span className="text-slate-400">84%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-indigo-600 h-[6px] rounded-full" style={{ "width": "84%" }}></div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400">JavaScript</span>
                                    <span className="text-slate-400">79%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-indigo-600 h-[6px] rounded-full" style={{ "width": "79%" }}></div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400">HTML</span>
                                    <span className="text-slate-400">95%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-indigo-600 h-[6px] rounded-full" style={{ "width": "95%" }}></div>
                                </div>
                            </div>

                            <h4 className="mt-8 text-xl font-semibold">Experience :</h4>

                            <div className="flex mt-6">
                                <div className="text-slate-400 font-semibold min-w-[80px] text-center">
                                    <img src={shree_logo} className="size-16 mx-auto mb-2 block" alt="" /> 2019-22
                                </div>

                                <div className="ms-4">
                                    <h5 className="text-lg font-medium mb-0">Full Stack Developer</h5>
                                    <span className="text-slate-400 company-university">Shreethemes - India</span>
                                    <p className="text-slate-400 mt-2 mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. </p>
                                </div>
                            </div>

                            <div className="flex mt-6">
                                <div className="text-slate-400 font-semibold min-w-[80px] text-center">
                                    <img src={circle_logo} className="size-16 mx-auto mb-2 block" alt="" /> 2017-19
                                </div>

                                <div className="ms-4">
                                    <h5 className="text-lg font-medium mb-0">Back-end Developer</h5>
                                    <span className="text-slate-400 company-university">CircleCI - U.S.A.</span>
                                    <p className="text-slate-400 mt-2 mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. </p>
                                </div>
                            </div>

                            <h4 className="mt-8 text-xl font-semibold">Projects :</h4>

                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-8">
                                {portfolioTwo.slice(0,4).map((item,index)=>{
                                    return(
                                        <div key={index} className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                            <img src={item.image} className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500" alt="" />
                                            <div className="absolute inset-0 group-hover:bg-dark opacity-50 transition duration-500 z-0"></div>

                                            <div className="content">
                                                <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-4 end-4 transition-all duration-500">
                                                    <Link to="#"  onClick={() => handleImageClick(index)}  className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"><FiCamera/></Link>
                                                </div>

                                                <div className="title absolute z-10 opacity-0 group-hover:opacity-100 bottom-4 start-4 transition-all duration-500">
                                                    <Link to="/portfolio-detail-one" className="h6 text-md font-medium text-white hover:text-indigo-600 duration-500 ease-in-out">{item.name}</Link>
                                                    <p className="text-slate-100 tag mb-0">{item.category}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                 
                             <Lightbox
                                open={isOpen}
                                close={() => setisOpen(false)}
                                slides={slides}
                                index={currentImageIndex} // Show the clicked image first
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <MobileApp/>
            </section>
            <JobFooter/>
        </>
    )
}

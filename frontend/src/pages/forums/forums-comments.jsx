import { Link } from 'react-router-dom';

import imageP from '../../assets/images/client/01.jpg';
import image1 from '../../assets/images/client/03.jpg';
import image2 from '../../assets/images/client/02.jpg';
import image3 from '../../assets/images/blog/06.jpg';
import image4 from '../../assets/images/blog/07.jpg';
import image5 from '../../assets/images/blog/08.jpg';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import * as Icon from 'react-feather'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { GoClock } from 'react-icons/go';
import { useEffect } from 'react';


export default function ForumsComments() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    },[]);
    return (
        <>
            <Navbar />

            <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="text-3xl leading-normal font-medium">Changelog</h3>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link to="/">Techwind</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link to="/index-forums">Forums</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link to ="/forums-topic">Topic</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600"aria-current="page">Changelog</li>
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
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8">
                            <div className="rounded shadow-sm dark:shadow-slate-800">
                                <div className="p-6 bg-gray-50 dark:bg-slate-800 flex items-center justify-between">
                                    <span className="text-lg font-semibold">Author</span>
                                    <span className="text-lg font-semibold">Date</span>
                                </div>

                                <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                                    <div className="sm:flex items-center justify-between">
                                        <div className="flex items-center">
                                            <img src={imageP} className="h-10 rounded-full shadow-sm dark:shadow-slate-800" alt="" />

                                            <div className="ms-3">
                                                <Link  className="hover:text-indigo-600 font-semibold">Calvin Carlo</Link>
                                                <p className="text-slate-400 text-sm font-normal flex items-center"><AiOutlineUser className="me-2"/> Author</p>
                                            </div>
                                        </div>
                                        <p className="text-slate-400 text-sm font-normal mt-3 sm:mt-0 flex items-center"><GoClock className="w-4"/> 16th Januanry, 2023 at 03:44 pm</p>
                                    </div>

                                    <p className="text-slate-400 mt-4">&quot; Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with &apos;real&apos; content. This is required when, for example, the final text is not yet available.&quot;</p>
                                </div>

                                <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                                    <div className="sm:flex items-center justify-between">
                                        <div className="flex items-center">
                                            <img src={image1} className="h-10 rounded-full shadow-sm dark:shadow-slate-800" alt="" />

                                            <div className="ms-3">
                                                <Link  className="hover:text-indigo-600 font-semibold">Alia Reddy</Link>
                                                <p className="text-slate-400 text-sm font-normal items-center flex"><AiOutlineUser className="me-2"/> Author</p>
                                            </div>
                                        </div>
                                        <p className="text-slate-400 text-sm font-normal mt-3 sm:mt-0 flex items-center"><GoClock className="w-4"/> 16th Januanry, 2023 at 03:44 pm</p>
                                    </div>

                                    <p className="text-slate-400 mt-4">&quot; Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with &apos;real&apos; content. This is required when, for example, the final text is not yet available.&quot;</p>
                                </div>

                                <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                                    <div className="sm:flex items-center justify-between">
                                        <div className="flex items-center">
                                            <img src={image2} className="h-10 rounded-full shadow-sm dark:shadow-slate-800" alt="" />

                                            <div className="ms-3">
                                                <Link  className="hover:text-indigo-600 font-semibold">Cristino Murphy</Link>
                                                <p className="text-slate-400 text-sm font-normal flex items-center"><AiOutlineUser className="me-2"/>  Author</p>
                                            </div>
                                        </div>
                                        <p className="text-slate-400 text-sm font-normal mt-3 sm:mt-0 flex items-center"><GoClock className="w-4"/> 16th Januanry, 2023 at 03:44 pm</p>
                                    </div>

                                    <p className="text-slate-400 mt-4">&quot; Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with &apos;real&apos; content. This is required when, for example, the final text is not yet available.&quot;</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6">
                            <div className="sticky top-20">
                                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center">Sign In</h5>
                                <form className="text-start mt-8">
                                    <div className="grid grid-cols-1">
                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="LoginEmail">Email Address:</label>
                                            <input id="LoginEmail" type="email" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="name@example.com" />
                                        </div>

                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="LoginPassword">Password:</label>
                                            <input id="LoginPassword" type="password" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Password:" />
                                        </div>

                                        <div className="flex justify-between mb-4">
                                            <label htmlFor="RememberMe" className="inline-flex items-center">
                                                <input type="checkbox" className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" />
                                                <span className="text-slate-400 ms-2">Remember me</span>
                                            </label>
                                            <p className="text-slate-400 mb-0"><Link to="/auth-re-password" className="text-slate-400">Forgot password ?</Link></p>
                                        </div>

                                        <div className="mb-4">
                                            <input type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Login / Sign in" />
                                        </div>

                                        <div className="text-center">
                                            <span className="text-slate-400 me-2">Don&apos;t have an account ?</span> <Link to="/auth-signup" className="text-black dark:text-white font-bold inline-block">Sign Up</Link>
                                        </div>
                                    </div>
                                </form>

                                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Recent Reply</h5>
                                <div className="flex items-center mt-8">
                                    <img src={image3} className="h-16 rounded-md shadow-sm dark:shadow-gray-800" alt="" />

                                    <div className="ms-3">
                                        <Link  className="font-semibold hover:text-indigo-600">Consultant Business</Link>
                                        <p className="text-sm text-slate-400">1st May 2022</p>
                                    </div>
                                </div>

                                <div className="flex items-center mt-4">
                                    <img src={image4} className="h-16 rounded-md shadow-sm dark:shadow-gray-800" alt="" />

                                    <div className="ms-3">
                                        <Link  className="font-semibold hover:text-indigo-600">Grow Your Business</Link>
                                        <p className="text-sm text-slate-400">1st May 2022</p>
                                    </div>
                                </div>

                                <div className="flex items-center mt-4">
                                    <img src={image5} className="h-16 rounded-md shadow-sm dark:shadow-gray-800" alt="" />

                                    <div className="ms-3">
                                        <Link  className="font-semibold hover:text-indigo-600">Look On The Glorious Balance</Link>
                                        <p className="text-sm text-slate-400">1st May 2022</p>
                                    </div>
                                </div>

                                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
                                <ul className="list-none text-center mt-8 space-x-1">
                                    <li className="inline"><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Facebook className="size-4"></Icon.Facebook></Link></li>
                                    <li className="inline"><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Instagram className="size-4"></Icon.Instagram></Link></li>
                                    <li className="inline"><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Twitter className="size-4"></Icon.Twitter></Link></li>
                                    <li className="inline"><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Linkedin className="size-4"></Icon.Linkedin></Link></li>
                                    <li className="inline"><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.GitHub className="size-4"></Icon.GitHub></Link></li>
                                    <li className="inline"><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Youtube className="size-4"></Icon.Youtube></Link></li>
                                    <li className="inline"><Link  className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Gitlab className="size-4"></Icon.Gitlab></Link></li>
                                </ul>

                                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Tagscloud</h5>
                                <ul className="list-none text-center mt-8 space-x-1">
                                    <li className="inline-block m-2"><Link  className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">Business</Link></li>
                                    <li className="inline-block m-2"><Link  className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">Finance</Link></li>
                                    <li className="inline-block m-2"><Link  className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">Marketing</Link></li>
                                    <li className="inline-block m-2"><Link  className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">Fashion</Link></li>
                                    <li className="inline-block m-2"><Link  className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">Bride</Link></li>
                                    <li className="inline-block m-2"><Link  className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">Lifestyle</Link></li>
                                    <li className="inline-block m-2"><Link  className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">Travel</Link></li>
                                    <li className="inline-block m-2"><Link  className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">Beauty</Link></li>
                                    <li className="inline-block m-2"><Link  className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">Video</Link></li>
                                    <li className="inline-block m-2"><Link  className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">Audio</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

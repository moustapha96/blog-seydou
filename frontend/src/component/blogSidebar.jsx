import { Link } from "react-router-dom";

import image4 from '../assets/images/client/05.jpg';

import * as Icon from 'react-feather';

import { RecentPostData } from "../data/data";

export default function BlogSidebar(){
    return(
        <div className="lg:col-span-4 md:col-span-6">
            <div className="sticky top-20">
                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center">Author</h5>
                <div className="text-center mt-8">
                    <img src={image4} className="size-24 mx-auto rounded-full shadow-sm mb-4" alt="" />

                    <Link  className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Cristina Romsey</Link>
                    <p className="text-slate-400">Content Writer</p>
                </div>

                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Recent post</h5>
                {RecentPostData.map((item,index)=>{
                    return(
                        <div className={item.Class} key={index}>
                            <img src={item.Image} className="h-16 rounded-md shadow-sm dark:shadow-gray-800" alt="" />
            
                            <div className="ms-3">
                                <Link  className="font-semibold hover:text-indigo-600">{item.Title}</Link>
                                <p className="text-sm text-slate-400">{item.Date}</p>
                            </div>
                        </div>
                    )
                })}

                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
                <ul className="list-none text-center space-x-1 mt-8" >
                <li className="inline"><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Facebook className="size-4"></Icon.Facebook></Link></li>
                    <li className="inline"><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Instagram className="size-4"></Icon.Instagram></Link></li>
                    <li className="inline"><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Twitter className="size-4"></Icon.Twitter></Link></li>
                    <li className="inline"><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Linkedin className="size-4"></Icon.Linkedin></Link></li>
                    <li className="inline"><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.GitHub className="size-4"></Icon.GitHub></Link></li>
                    <li className="inline"><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Youtube className="size-4"></Icon.Youtube></Link></li>
                    <li className="inline"><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Gitlab className="size-4"></Icon.Gitlab></Link></li>
                </ul>

                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Tagscloud</h5>
                <ul className="list-none space-x-1 text-center mt-8">
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
    )
}
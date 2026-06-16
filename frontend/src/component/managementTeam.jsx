/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import * as Icon from 'react-feather'

import { blogData, team } from '../data/data';
import { FaArrowRight } from 'react-icons/fa';

export default function ManagementTeam(props) {
    return (
        <section className={props.className} id={props.id}>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h6 className="text-indigo-600 text-base mb-2">Our Minds</h6>
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Management Team</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">

                    {team.map((data,index) => {
                        return(
                            <div className="lg:col-span-3 md:col-span-6" key={index}>
                                <div className="group text-center">
                                    <div className="relative inline-block mx-auto size-52 rounded-full overflow-hidden">
                                        <img src={data.image} className="" alt="" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black size-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
    
                                        <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out space-x-1">
                                            <li className="inline"><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Facebook className="size-4"></Icon.Facebook></Link></li>
                                            <li className="inline"><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Instagram className="size-4"></Icon.Instagram></Link></li>
                                            <li className="inline"><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Linkedin className="size-4"></Icon.Linkedin></Link></li>
                                        </ul>
                                    </div>
                                    <div className="content mt-3">
                                        <Link to="#" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">{data.name}</Link>
                                        <p className="text-slate-400">{data.role}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h6 className="text-indigo-600 text-base mb-2">Blog</h6>
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Blog Or News</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">

                    {blogData.slice(11,14).map((data,index) => {
                        return(
                            <div className="blog relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden" key={index}>
                                <img src={data.image} alt="" />
    
                                <div className="content p-6">
                                    <Link to="/blog-detail" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{data.title}</Link>
                                    <p className="text-slate-400 mt-3">{data.desc}</p>
    
                                    <div className="mt-4">
                                        <Link to="/blog-detail" className="relative inline-flex items-center font-normal tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

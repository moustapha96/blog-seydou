import { Link } from 'react-router-dom';

import Navbar from '../../component/Navbar/navbar'
import JobFooter from '../../component/Footer/jobFooter';
import MobileApp from '../../component/mobileApp';
import { jobGrid } from '../../data/data';
import Select from 'react-select'
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { LuSearch } from 'react-icons/lu';
import { AiOutlineDollar, AiOutlineHome } from 'react-icons/ai';
import { GoClock } from 'react-icons/go';
import { useEffect } from 'react';

export default function PageJobGrid() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    },[]);
    let country = [
        { value: '1', label: 'Afghanistan' },
        { value: '2', label: 'Azerbaijan' },
        { value: '3', label: 'Bahamas' },
        { value: '4', label: 'Bahrain' },
        { value: '5', label: 'Canada' },
        { value: '5', label: 'Denmark' },
        { value: '5', label: 'Djibouti' },
        { value: '5', label: 'Eritrea' },
        { value: '5', label: 'Estonia' },
        { value: '5', label: 'Gambia' },
    ]
    let time = [
        { value: '1', label: 'Part Time' },
        { value: '2', label: 'Freelancer' },
        { value: '3', label: 'Remote Work' },
        { value: '4', label: 'Office Work' },
    ]
    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/job/job.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="mb-4 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Job Listings</h3>

                        <ul className="tracking-[0.5px] mb-0 inline-flex items-center justify-center space-x-1">
                            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Techwind</Link></li>
                            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/index-job">Job</Link></li>
                            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">All Jobs</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 grid-cols-1" id="reserve-form">
                        <div className="lg:col-start-2 lg:col-span-10">
                            <div className="bg-white dark:bg-slate-900 border-0 shadow-sm dark:shadow-gray-800 rounded p-3 -mt-[150px]">
                                    <form action="#">
                                        <div className="registration-form text-dark text-start">
                                             <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                                <div>
                                                    <div className="filter-search-form relative lg:before:content-[''] lg:before:absolute lg:before:top-[10px] lg:before:end-0 lg:before:h-10 lg:before:z-1 lg:before:border-r lg:before:border-inherit lg:before:rounded-md lg:before:outline-0 lg:dark:before:border-gray-700">
                                                        <LuSearch className="icons  absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]" />
                                                        <input name="name" type="text" id="job-keyword" className="form-input lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0" placeholder="Search your Keywords" />
                                                    </div>
                                                </div>

                                                <div>                                                        
                                                    <div className="filter-search-form relative lg:before:content-[''] lg:before:absolute lg:before:top-[10px] lg:before:end-0 lg:before:h-10 lg:before:z-1 lg:before:border-r lg:before:border-inherit lg:before:rounded-md lg:before:outline-0 lg:dark:before:border-gray-700">
                                                        <AiOutlineHome className="icons  absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"/>
                                                        <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={country} />

                                                     </div>
                                                 </div>

                                                <div>                                                       
                                                    <div className="filter-search-form relative lg:before:content-[''] lg:before:absolute lg:before:top-[10px] lg:before:end-0 lg:before:h-10 lg:before:z-1 lg:before:border-r lg:before:border-inherit lg:before:rounded-md lg:before:outline-0 lg:dark:before:border-gray-700">
                                                        <AiOutlineDollar className="icons  absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"/>
                                                         <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={time} />

                                                    </div>
                                                 </div>

                                                <div>
                                                    <input type="submit" id="search-buy" name="search" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white searchbtn lg:rounded-t-none lg w-full" value="Search" style={{height:"60px"}} />
                                                </div>
                                             </div>
                                        </div>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {
                            jobGrid.map((data,index) => {
                                return (

                                    <div key={index} className="rounded-md shadow-sm dark:shadow-gray-800">
                                        <div className="p-6">
                                            <Link to={`/page-job-detail/${data.id}`} className="title h5 text-lg font-semibold hover:text-indigo-600">{data.title}</Link>
                                            <p className="text-slate-400 mt-2 flex items-center"><GoClock className="me-1 text-indigo-600"/> {data.date}</p>

                                            <div className="flex justify-between items-center mt-4">
                                                <span className="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">{data.duration}</span>

                                                <p className="text-slate-400 flex items-center"><AiOutlineDollar className="me-1 text-lg text-indigo-600"/> {data.money}</p>
                                            </div>
                                        </div>

                                        <Link to={`/page-job-company-detail/${data.id}`} className="flex items-center p-6 border-t border-gray-100 dark:border-gray-700">
                                                <img src={data.image} className="size-12 shadow-md dark:shadow-gray-800 rounded-md p-2 bg-white dark:bg-slate-900" alt="" />
                                            <div className="ms-3">
                                                <h6 className="mb-0 font-semibold text-base">{data.company}</h6>
                                                <span className="text-slate-400 text-sm">{data.city},{data.place}</span>
                                            </div>
                                        </Link>
                                    </div>

                                )
                            })
                        }
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                        <div className="md:col-span-12 text-center">
                            <nav aria-label="Page navigation example">
                                <ul className="inline-flex items-center -space-x-px">
                                    <li>
                                        <Link to="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                            <MdOutlineKeyboardArrowLeft className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">1</Link>
                                    </li>
                                    <li>
                                        <Link to="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">2</Link>
                                    </li>
                                    <li>
                                        <Link to="/#" aria-current="page" className="z-10 size-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600">3</Link>
                                    </li>
                                    <li>
                                        <Link to="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">4</Link>
                                    </li>
                                    <li>
                                        <Link to="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">5</Link>
                                    </li>
                                    <li>
                                        <Link to="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                            <MdKeyboardArrowRight className="text-xl rtl:rotate-180 rtl:-mt-1"/>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

              <MobileApp/>
            </section>
            <JobFooter/>
        </>
    )
}

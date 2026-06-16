import { Link } from 'react-router-dom';

import Navbar from '../../component/Navbar/navbar'


import Select from 'react-select'
import Footer from '../../component/Footer/footer';

import { propertyListing } from '../../data/data';
import { LuBath, LuBedDouble, LuSearch } from 'react-icons/lu';
import { AiOutlineDollar, AiOutlineHome } from 'react-icons/ai';
import { LiaCompressArrowsAltSolid } from 'react-icons/lia';
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { useEffect } from 'react';

let project = [
    { value: '1', label: 'Houses' },
    { value: '2', label: 'Apartment' },
    { value: '3', label: 'Offices' },
    { value: '4', label: 'Townhome' },
]
let minPrice = [
    { value: '1', label: '500' },
    { value: '2', label: '1000' },
    { value: '3', label: '2000' },
    { value: '4', label: '3000' },
    { value: '5', label: '4000' },
    { value: '5', label: '5000' },
    { value: '5', label: '6000' },
    { value: '5', label: '7000' },
    { value: '5', label: '8000' },
    { value: '5', label: '9000' },
]
let maxPrice = [
    { value: '1', label: '500' },
    { value: '2', label: '1000' },
    { value: '3', label: '2000' },
    { value: '4', label: '3000' },
    { value: '5', label: '4000' },
    { value: '5', label: '5000' },
    { value: '5', label: '6000' },
    { value: '5', label: '7000' },
    { value: '5', label: '8000' },
    { value: '5', label: '9000' },
]
export default function PropertyListing() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    },[]);
   
    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/real/bg/01.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Grid View Layout</h3>
                    </div>
                </div>
            </section>

            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <div className="container relative -mt-16 z-1">
                <div className="grid grid-cols-1">
                    <div>
                               <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md dark:shadow-gray-700">
                                    <div className="registration-form text-dark text-start">
                                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6 lg:divide-x-[1px] lg:divide-gray-200 lg:dark:divide-gray-700">
                                    <div>
                                        <div className="filter-search-form relative">
                                            <LuSearch className="absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"/>
                                            <input name="name" type="text" id="job-keyword" className="form-input lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0" placeholder="Search your Keywords" />
                                        </div>
                                    </div>

                                    <div>                                                      
                                        <div className="filter-search-form relative">
                                            <AiOutlineHome className="absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"/>
                                            <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={project} />

                                        </div>
                                    </div>

                                    <div>                                                       
                                        <div className="filter-search-form relative">
                                            <AiOutlineDollar className="absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"/>
                                            <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={minPrice} />

                                        </div>
                                    </div>

                                    <div>                                                       
                                        <div className="filter-search-form relative">
                                            <AiOutlineDollar className="absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"/>
                                            <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={maxPrice} />

                                        </div>
                                    </div>

                                    <div className="lg:mt-6">
                                        <input type="submit" id="search-buy" name="search" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white searchbtn submit-btn w-full !h-12 rounded" value="Search" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <section className="relative lg:py-24 py-16">
                <div className="container relative">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">

                        {propertyListing.map((data,index) => {
                            return (
                                <div key={index} className="group rounded-md bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-800 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                                    <div className="relative">
                                        <img src={data.image} alt="" />

                                        <div className="absolute top-6 end-6">
                                            <Link className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-lg text-center bg-white dark:bg-slate-900 border-0 shadow-sm dark:shadow-gray-800 rounded-full text-red-600"><i className="mdi mdi-heart"></i></Link>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="pb-6">
                                            <Link to={`/property-detail/${data.id}`} className="text-lg hover:text-indigo-600 font-medium ease-in-out duration-500">{data.address}</Link>
                                        </div>

                                        <ul className="py-6 border-y border-gray-100 dark:border-gray-800 flex items-center list-none">
                                            <li className="flex items-center me-4">
                                                <LiaCompressArrowsAltSolid className=" text-2xl me-2 text-indigo-600"/>
                                                <span>{data.sqrt}</span>
                                            </li>

                                            <li className="flex items-center me-4">
                                                <LuBedDouble className="text-2xl me-2 text-indigo-600"/>
                                                <span>{data.beds}</span>
                                            </li>

                                            <li className="flex items-center">
                                                <LuBath className="text-2xl me-2 text-indigo-600"/>
                                                <span>{data.bath}</span>
                                            </li>
                                        </ul>

                                        <ul className="pt-6 flex justify-between items-center list-none">
                                            <li>
                                                <span className="text-slate-400">Price</span>
                                                <p className="text-lg font-medium">$5000</p>
                                            </li>

                                            <li>
                                                <span className="text-slate-400">Rating</span>
                                                <ul className="text-lg font-medium text-amber-400 list-none">
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline text-black dark:text-white">5.0(30)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                        <div className="md:col-span-12 text-center">
                            <nav>
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
            </section>

            <Footer/>
        </>
    )
}

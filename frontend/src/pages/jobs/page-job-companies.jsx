import { Link } from 'react-router-dom';
import Navbar from '../../component/Navbar/navbar';
import JobFooter from '../../component/Footer/jobFooter';
import MobileApp from '../../component/mobileApp';
import { jobGrid } from '../../data/data';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { RiMapPinLine } from 'react-icons/ri';
import { useEffect } from 'react';

export default function PageJobCompanies() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    },[]);
  
    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/job/job.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">Company List</h3>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-flex items-center space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Techwind</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/index-job">Job</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Companies</li>
                    </ul>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-gray-50 dark:text-slate-800">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
                        {
                            jobGrid.map((data,index) => {
                                return (
                                    <Link key={index} to={`/page-job-company-detail/${data.id}`} className="group bg-white dark:bg-slate-900 p-6 rounded shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 border-4 border-white dark:border-slate-900 hover:border-b-indigo-600 dark:hover:border-b-indigo-600 text-center duration-500 ease-in-out">
                                        <img src={data.image} className="size-16 mx-auto p-3 rounded-full bg-gray-50 dark:bg-slate-800 shadow-md dark:shadow-gray-800" alt="" />

                                        <div className="content mt-3">
                                            <span className="text-lg font-semibold group-hover:text-indigo-600 transition duration-500 block">{data.company}</span>

                                            <span className="text-base text-slate-400 inline-flex items-center"><RiMapPinLine className="text-indigo-600 me-1"/>{data.place}</span>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                <MobileApp/>
            </section>
            <JobFooter/>
        </>
    )
}

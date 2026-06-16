import { Link, useParams } from 'react-router-dom';

import Navbar from '../../component/Navbar/navbar'

import JobFooter from '../../component/Footer/jobFooter';
import MobileApp from '../../component/mobileApp';

import { jobGrid } from '../../data/data';
import * as Icon from 'react-feather';

import {jobDuties,jobRequirements, jobNice,jobBenefits} from "../../data/dataFive"
import { RiMapPinLine } from 'react-icons/ri';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useEffect } from 'react';

export default function PageJobDetail() {

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    },[]);

    const params = useParams();
    const id = params.id
    const data = jobGrid.find((job) => job.id === parseInt (id));

    return (
        <>
            <Navbar navClass="nav-light" />
            <section className="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/job/job.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-12">
                        <h3 className="mb-4 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">{data?.title ? data?.title : 'Senior Web Developer'}</h3>

                        <ul className="list-none">
                            <li className="inline-flex items-center text-slate-400 me-3"><RiMapPinLine className="text-white h6 me-2" width={18}/><span className='me-1'>{data?.city ? data?.city : 'London'},</span>{data?.place ? data?.place : 'UK'} - <span className="text-white  px-1">{data?.duration ? data?.duration : "Full Time"}</span></li>
                        </ul>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-flex items-center space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Techwind</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="index-job">Job</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Job Detail</li>
                    </ul>
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
                            <h5 className="mb-4 font-medium text-xl">Description:</h5>

                            <p className="text-slate-400 mb-4">Our vision is to provide the next billion people with access to products that exemplify the ideals of Techwind. These ideals - which include peer-to-peer transactions, decentralization, censorship resistance, and permissionless-ness - support economic freedom.</p>

                            <p className="text-slate-400 mb-4">Our approach is to develop and promote widely accessible products that support economic freedom. For example, our digital wallet - which has 16 million downloads - provides people with an easy-to-use, non-custodial method for buying, selling, storing, sending, receiving, and trading cryptocurrencies.</p>

                            <h5 className="mb-4 mt-6 font-medium text-xl">Duties:</h5>

                            <ul className="list-none mb-0">
                                {
                                    jobDuties.map((data , index) => {
                                        return (
                                            <li className="text-slate-400 flex mt-2 ml-0" key={index}><Icon.ArrowRight width={16} className="text-indigo-600 h5 mb-0 me-2"></Icon.ArrowRight> {data.desc}</li>
                                        )
                                    })
                                }
                            </ul>

                            <h5 className="mb-4 mt-6 font-medium text-xl">Requirements</h5>

                            <ul className="list-none mb-0">
                                {
                                    jobRequirements.map((data , index) => {
                                        return (
                                            <li key={index} className="text-slate-400 flex mt-2 ml-0"><Icon.ArrowRight width={16} className="text-indigo-600 h5 mb-0 me-2"></Icon.ArrowRight> {data.desc}</li>
                                        )
                                    })
                                }
                            </ul>

                            <h5 className="mb-4 mt-6 font-medium text-xl">Nice To Have</h5>

                            <ul className="list-none mb-0">
                                {
                                    jobNice.map((data,index) => {
                                        return (
                                            <li key={index} className="text-slate-400 flex mt-2 ml-0"><Icon.ArrowRight width={16} className="text-indigo-600 h5 mb-0 me-2"></Icon.ArrowRight> {data.desc}</li>
                                        )
                                    })
                                }
                            </ul>

                            <h5 className="mb-4 mt-6 font-medium text-xl">Benefits</h5>
                            <p className="text-slate-400 mb-4">Bitcoin.com is paving the way for the next generation of financial technology products and platforms. We&apos;re bringing cryptocurrency and the future of money to the masses. We’d love to have you on board.</p>

                            <p className="text-slate-400 mb-4">We are serious about what we do, but more importantly, we have a lot of fun doing it. Our work culture is modern, meaning we strive for work experiences based on transparency, productivity, trust, and passion. For all employees, benefits include:</p>
                            <ul className="list-none mb-4">
                                {
                                    jobBenefits.map((data, index) => {
                                        return (
                                            <li key={index} className="text-slate-400 flex mt-2 ml-0"><Icon.ArrowRight width={16} className="text-indigo-600 h5 mb-0 me-2"></Icon.ArrowRight> {data.desc}</li>
                                        )
                                    })
                                }
                            </ul>

                            <p className="text-slate-400 mb-4">For employees residing in Japan, we offer &quot;permanent employment&quot; status (正社員) and the option to be paid in yen.</p>

                            <p className="text-slate-400 mb-4">Employees residing outside of Japan are classified as Independent Contractors and are paid in the cryptocurrency of their choice.</p>

                            <div className="mt-6">
                                <Link to="page-job-apply" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Apply now</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <MobileApp/>
            </section >
            <JobFooter/>
        </ >
    )
}

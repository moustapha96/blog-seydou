import {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';

import slide02 from '../../assets/images/blog/slide02.jpg';
import image from '../../assets/images/client/05.jpg';

import Footer from '../../component/Footer/footer';
import NftNavbar from '../../component/Navbar/nftNavbar';
import { creatorsData } from '../../data/data';
import { nftData } from '../../data/data';
import { GoClock } from 'react-icons/go';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export default function NftCreatorProfile() {

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    },[]);

    const params = useParams();
    const id = params.id
    const data = creatorsData.find((creatorr) => creatorr.id === parseInt (id));

    const [productData, setProductData] = useState(nftData);
    useEffect(() => {
        const interval = setInterval(() => {
            remainingDays();
        }, 1000);

        return () => clearInterval(interval);
    });

    const remainingDays = () => {
        const formattedData = nftData.map((item) => ({
            ...item,
            remaining: calculateDays(item.date),
        }));
        setProductData(formattedData);
    }

    const calculateDays = (date) => {
        let startDate = new Date(date);
        let currentDate = new Date();
        const diff = startDate.getTime() - currentDate.getTime();

        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        return { hours, minutes, seconds, days }
    }
    return (
        <>
            <NftNavbar />
            <section className="relative md:pb-24 pb-16 lg:mt-24 mt-[74px]">
                <div className="container relative lg:!px-3 !px-0">
                    <div className="group profile-banner relative overflow-hidden text-transparent lg:rounded-xl shadow-sm dark:shadow-gray-700">
                        <input id="pro-banner" name="profile-banner" type="file" className="hidden"/>
                        <div className="relative shrink-0">
                            <img src={slide02} className="h-80 w-full object-cover" id="profile-banner" alt="" />
                            <div className="absolute inset-0 bg-slate/10 group-hover:bg-slate-900/10 transition duration-500"></div>
                            <label className="absolute inset-0 cursor-pointer" htmlFor="pro-banner"></label>
                        </div>
                    </div>

                    <div className="md:flex justify-center">
                        <div className="md:w-full">
                            <div className="relative -mt-[60px] text-center">
                                <div className="group profile-pic w-[112px] mx-auto">
                                    <input id="pro-img" name="profile-image" type="file" className="hidden"/>
                                    <div>
                                        <div className="relative size-28 mx-auto rounded-full shadow-sm dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800 overflow-hidden">
                                            <img src={data?.image ? data?.image  : image} className="rounded-full" id="profile-image" alt="" />
                                            <div className="absolute inset-0 group-hover:bg-slate-900/10 transition duration-500"></div>
                                            <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h5 className="text-xl font-semibold">{data?.name ? data.name : "Cristina Murfy"} <i className="mdi mdi-check-decagram text-emerald-600 align-middle text-lg"></i></h5>
                                    <p className="text-slate-400 text-[16px] mt-1">Created by <Link to="/" className="text-indigo-600 font-semibold">1x5484dcdvcdscds56c4</Link></p>

                                    <div className="mt-4 space-x-1">
                                        <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-plus"></i> Follow me</Link>
                                        <Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-account-plus"></i></Link>
                                        <Link to="/nft-creator-profile-edit" className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><i className="mdi mdi-cog"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative mt-16">
                    <div id="" className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]">
                            {productData.map((item,index)=>{
                                return(
                                        <div key={index} className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out">
                                            <div className="relative">
                                                <img src={item.image} alt="" />
                                                <div className="absolute end-0 top-0 mt-6 me-6 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                                    <Link to="/#!" className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow-sm dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                                </div>
                
                                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 duration-500 ease-in-out">
                                                    <Link to={`/nft-detail/${item.id}`} className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Place Bid</Link>
                                                </div>
                                                {item.date ?  <div className="absolute bottom-0 start-0 ms-6 mb-6 text-lg ltr:bg-gradient-to-r rtl:bg-gradient-to-l to-indigo-600 from-fuchsia-600 text-white rounded-full px-3 inline-flex items-center">
                                                <GoClock className='text-base me-1'/><small id="auction-item-1" className="font-semibold"> {item.remaining?.days} : {item.remaining?.hours}: {item.remaining?.minutes}: {item.remaining?.seconds}</small>
                                                </div> :''}
                                            
                                            </div>
                
                                            <div className="p-6 relative">
                                                <Link to={`/nft-detail/${item.id}`} className="text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                
                                                <div className="flex items-center justify-between mt-2">
                                                    <div className="flex items-center">
                                                        <i className="mdi mdi-ethereum text-xl leading-none text-indigo-600 me-1"></i>
                                                        <span className="block font-semibold text-indigo-600">{item.amount}</span>
                                                    </div>
                
                                                    <div>
                                                        <i className="mdi mdi-heart text-red-600"></i> <span className="text-slate-400">{item.like}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                )
                            })}
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                        <div className="md:col-span-12 text-center">
                            <nav aria-label="Page navigation example">
                                <ul className="inline-flex items-center -space-x-px">
                                    <li>
                                        <Link to="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                         <MdKeyboardArrowLeft className=" text-[20px] rtl:rotate-180 rtl:-mt-1"/>
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
            <Footer />
        </>
    )
}

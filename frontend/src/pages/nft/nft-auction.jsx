import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import Footer from '../../component/Footer/footer';
import NftNavbar from '../../component/Navbar/nftNavbar';
import { nftData } from '../../data/data';
import { MdKeyboardArrowRight, MdOutlineRestartAlt } from 'react-icons/md';
import { GoClock } from 'react-icons/go';

export default function NftAuction() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    },[]);
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
            remaining: calculateDays(item.auction),
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
            <section className="relative table w-full py-32 lg:py-40 bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="text-3xl leading-normal font-medium">Auction</h3>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-flex items-center space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link to="/">Techwind</Link></li>
                        <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link to="index-nft">NFT</Link></li>
                        <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600" aria-current="page">Auction</li>
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
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
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
                                            {item.auction ?  <div className="absolute bottom-0 start-0 ms-6 mb-6 text-lg ltr:bg-gradient-to-r rtl:bg-gradient-to-l to-indigo-600 from-fuchsia-600 text-white rounded-full px-3 inline-flex items-center">
                                            <GoClock className="me-1"/> <small id="auction-item-1" className="font-semibold"> {item.remaining?.days} : {item.remaining?.hours}: {item.remaining?.minutes}: {item.remaining?.seconds}</small>
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

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                        <div className="md:col-span-12 text-center">
                            <Link to="/" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><MdOutlineRestartAlt className="mdi-spin me-1 animate-[spin_10s_linear_infinite] size-5"/> Load More</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

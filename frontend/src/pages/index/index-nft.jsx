import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import Footer from '../../component/Footer/footer';
import Blog2 from '../../component/blog2';
import CookieModal from '../../component/cookieModal';
import NftNavbar from '../../component/Navbar/nftNavbar';

import { nftData } from '../../data/data';
import {creatorsData} from '../../data/data'

import * as Icon from 'react-feather';
import TinySlider from 'tiny-slider-react';
import { nftCollection,nftAbout } from '../../data/dataFour';
import { FaArrowRight } from 'react-icons/fa';
import { GoClock } from 'react-icons/go';

const settings = {
    container: '.tiny-five-item',
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
        1025: {
            items: 5
        },

        992: {
            items: 4
        },

        767: {
            items: 3
        },

        425: {
            items: 1
        },
    },
}

export default function IndexNft() {
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
            <NftNavbar navJustify="justify-start" />
            <section className="relative md:py-52 py-36 items-center overflow-hidden bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
                <div className="absolute inset-0 ltr:bg-[url('../../assets/images/nft/hero.png')] rtl:bg-[url('../../assets/images/nft/hero-rtl.png')] bg-no-repeat bg-bottom bg-cover"></div>

                <div className="container relative">
                    <div className="grid grid-cols-1 items-center mt-10">
                        <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Discover Exclusive <br /> Digital collectibles</h4>
                        <p className="text-lg max-w-xl">We are a huge marketplace dedicated to connecting great artists of all Techwind with their fans and unique token collectors!</p>

                        <div className="mt-8">
                            <Link  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Discover</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                        {nftAbout.map((item,index)=>{
                             let Icons = item.icon
                            return(
                                <div key={index} className="group relative px-6 py-10 shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                                    <div className="relative overflow-hidden text-transparent -m-3">
                                        <Icon.Hexagon className="size-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"></Icon.Hexagon>
                                        <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                            <Icons className='size-7'/>
                                        </div>
                                    </div>
        
                                    <div className="mt-6">
                                        <Link  className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">{item.title}</Link>
                                        <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">{item.desc}</p>
                                    </div>
                                </div>    
                            )
                        })}
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                        <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Best Creators & Sellers</h3>
                            <p className="text-slate-400 max-w-xl">Best sellers of the week&apos;s NFTs</p>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                            <Link to="/nft-creators" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-2 md:mt-6 relative">
                        <div className="tiny-five-item">

                            <TinySlider settings={settings}>
                                {creatorsData.map((item, index) => (
                                    <div className="tiny-slide" key={index}>
                                        <div className="group relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out m-2 mb-5">
                                            <div className="py-10 bg-gradient-to-r to-orange-600/70 from-indigo-600/70"></div>
                                            <div className="p-6 pt-0 -mt-10 text-center">
                                                <img src={item.image} className="size-20 rounded-full shadow-lg dark:shadow-gray-800 mx-auto" alt="" />

                                                <div className="mt-4">
                                                    <Link to={`/nft-creator-profile/${item.id}`} className="text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out block">{item.name}</Link>
                                                    <span className="text-slate-400">@{item.name}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </TinySlider>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 md:hidden">
                        <div className="md:col-span-12 text-center">
                            <Link to="/nft-creators" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"></FaArrowRight></Link>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Explore Hot Products</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Techwind with their fans and unique token collectors!</p>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                          {productData.slice(0,8).map((item,index)=>{
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
                                            <GoClock className="me-1"/>  <small id="auction-item-1" className="font-semibold"> {item.remaining?.days} : {item.remaining?.hours}: {item.remaining?.minutes}: {item.remaining?.seconds}</small>
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
                            <Link to="/nft-explore" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Explore All Items <FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16 bg-gradient-to-br to-orange-600/30 via-fuchsia-600/30 from-indigo-600/30">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Join the fastest growing Techwind NFTs <br /> with more than 2000+ NFTs</h3>

                        <p className="max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Techwind with their fans and unique token collectors!</p>
                    </div>

                    <div className="grid md:grid-cols-2 mt-8 gap-[30px]">
                        <div className="rounded-md bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 p-6">
                            <h5 className="text-2xl font-semibold mb-4">Join our community</h5>
                            <p className="text-slate-400 mb-4">We are a huge marketplace dedicated to connecting great artists of all Techwind.</p>
                            <Link  className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>

                        <div className="rounded-md bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 p-6">
                            <h5 className="text-2xl font-semibold mb-4">Learn more about Techwind</h5>
                            <p className="text-slate-400 mb-4">We are a huge marketplace dedicated to connecting great artists of all Techwind.</p>
                            <Link  className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Collections</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Techwind with their fans and unique token collectors!</p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                          {nftCollection.slice(0,3).map((item,index)=>{
                            return(
                                <div key={index} className="group relative overflow-hidden bg-gray-50 dark:bg-slate-800 rounded-md shadow-sm dark:shadow-gray-800">
                                    <div className="p-2 rounded-md shadow-sm dark:shadow-gray-800 bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
                                        <div className="flex items-center">
                                            <div className="w-full p-1">
                                                <img src={item.image1} className="rounded-md" alt="" />
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            {item.subImage.map((el, index)=>{
                                                return(
                                                    <div className="w-1/3 p-1" key={index}>
                                                        <img src={el} className="rounded-md" alt="" />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className="p-6 pt-0 -mt-10 text-center">
                                        <img src={item.image5} className="size-20 rounded-full shadow-lg dark:shadow-gray-800 mx-auto" alt="" />

                                        <div className="mt-4">
                                            <Link  to="#" className="text-xl leading-none font-semibold hover:text-indigo-600 duration-500 ease-in-out block">{item.title}</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                          })}
                    </div>
                </div>

                <Blog2 className={"container relative md:mt-24 mt-16"} id={""} />
            </section>
            <Footer />
         <CookieModal/>
        </>
    )
}

import { useEffect, useState } from 'react'
import { Link } from "react-scroll";
import bg1 from "../../assets/images/christmas/bg-hero.jpg"
import bg2 from "../../assets/images/christmas/bg2.jpg"
import logoLight from "../../assets/images/logo-light.png"

import { christmasFeature } from '../../data/dataFive';
import { productData,productCategories } from '../../data/dataTwo';
import MobileApp from '../../component/mobileApp';
import ShopFooter from '../../component/Footer/shopFooter';
import { FiHexagon } from 'react-icons/fi';

export default function IndexChristmas(){
    let [days,setDays] = useState();
    let [hours,setHours] = useState();
    let [minutes,setMinutes] = useState();
    let [seconds,setSeconds] = useState();

    let deadline = "December, 31, 2025";
  
    let getTime = () => {
      let time = Date.parse(deadline) - Date.now();
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')

        let interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);
      }, []);
    return(
        <>
         <section className="relative overflow-hidden md:h-screen py-36 flex justify-center items-center  bg-center bg-no-repeat bg-cover" style={{backgroundImage:`url(${bg1})`}} id="home">
            <div className="absolute inset-0" id="particles-snow"></div>
            <div className="absolute inset-0 bg-gradient-to-t to-transparent from-slate-900"></div>

            <Link to="/" className="absolute top-10 end-0 start-0 text-center justify-center mx-auto"><img src={logoLight} className="mx-auto block" alt=""/></Link>
            <div className="container relative z-1">
                <div className="grid grid-cols-1 justify-center text-center">
                    <h4 className="font-bold lg:leading-normal leading-normal text-white uppercase text-5xl lg:text-7xl">Christmas Offers</h4>

                    <div id="countdown">
                        <ul className="count-down list-none inline-block text-white text-center mt-8">
                            <li id="days" className="text-[48px] font-bold leading-[110px] size-[130px] rounded-md shadow-md bg-slate-950/40 backdrop-opacity-30 inline-block m-2">{days}<p className='count-head'>Days</p></li>
                            <li id="hours" className="text-[48px] font-bold leading-[110px] size-[130px] rounded-md shadow-md bg-slate-950/40 backdrop-opacity-30 inline-block m-2">{hours}<p className='count-head'>Hours</p></li>
                            <li id="mins" className="text-[48px] font-bold leading-[110px] size-[130px] rounded-md shadow-md bg-slate-950/40 backdrop-opacity-30 inline-block m-2">{minutes}<p className='count-head'>Mins</p></li>
                            <li id="secs" className="text-[48px] font-bold leading-[110px] size-[130px] rounded-md shadow-md bg-slate-950/40 backdrop-opacity-30 inline-block m-2">{seconds}<p className='count-head'>Secs</p></li>
                            <li id="end" className="h1"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <div className="relative">
            <div className="absolute block w-full h-auto bottom-[25px] z-1 start-0">
                <Link to="#"><i className="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 size-12 mx-auto shadow-md dark:shadow-gray-800"></i></Link>
            </div>

            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section className="relative lg:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Features</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">
                    {christmasFeature.map((item,index)=>{
                        let Icon = item.icon
                        return(
                            <div className="group relative lg:px-6 mt-4 duration-500 rounded-xl overflow-hidden text-center" key={index}>
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <FiHexagon className="size-28 fill-indigo-600/5 mx-auto rotate-[30deg]"/>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl duration-500 text-3xl flex align-middle justify-center items-center">
                                        <Icon/>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <Link to="#" className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                    <p className="text-slate-400 duration-500 mt-3">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className="relative bg-cover w-full"  style={{backgroundImage:`url(${bg2})`}}>
        
            <div className="pt-36 pb-10">
                <div className="absolute inset-0 size-full bg-gradient-to-t to-transparent from-slate-900"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">Today&apos;s Offer Products</h3>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative lg:py-24 py-16">
            <div className="container relative">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
                    {productData.slice(0,8).map((item,index)=>{
                        return(
                            <div className="group" key={index}>
                                <div className="relative overflow-hidden shadow-sm dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md transition-all duration-500">
                                    <img src={item.image} alt="" />
    
                                    <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 transition-all duration-500">
                                        <Link to="/shop-cart" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-slate-900 border-slate-900 text-white w-full rounded-md">Add to Cart</Link>
                                    </div>
    
                                    <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <li><Link to='#' className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-heart"></i></Link></li>
                                        <li className="mt-1 ml-0"><Link to={`/shop-item-detail/${item.id}`} className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-eye-outline"></i></Link></li>
                                        <li className="mt-1 ml-0"><Link to='#' className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-bookmark-outline"></i></Link></li>
                                    </ul>
                                    {item.tag ? <ul className="list-none absolute top-[10px] start-4">
                                        <li><Link to='#' className={`${item.tagBg} text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5`}>{item.tag}</Link></li>
                                    </ul> :""}
                                    
                                </div>
    
                                <div className="mt-4">
                                    <Link to={`/shop-item-detail/${item.id}`} className="hover:text-indigo-600 text-lg font-semibold">{item.name}</Link>
                                    <div className="flex justify-between items-center mt-1">
                                        <p className="text-green-600">{item.descAmount} <del className="text-red-600">{item.amount}</del></p>
                                        <ul className="font-medium text-amber-400 list-none">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative mt-16">
                <div className="grid grid-cols-1 items-center">
                    <h3 className="text-2xl leading-normal font-semibold">Top Categories</h3>
                </div>

                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 mt-8 gap-[30px]">
                    {productCategories.map((item,index)=>{
                        return(
                            <div key={index} className="group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 rounded-md transition-all duration-500 p-6 text-center">
                                <img src={item.image} className="rounded-full shadow-md dark:shadow-gray-800 size-20 block mx-auto mb-2" alt="" />
    
                                <Link to='#' className="font-semibold hover:text-indigo-600 text-lg">{item.title}</Link>
                            </div>
                        )
                    })}
                </div>
            </div>

            <MobileApp/>
        </section>
        <ShopFooter/>
        </>
    )
}
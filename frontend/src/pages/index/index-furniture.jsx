import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import fea1 from '../../assets/images/furniture/fea1.jpg';
import fea2 from '../../assets/images/furniture/fea2.jpg';

import Navbar from '../../component/Navbar/navbar'
import SmallFooter from '../../component/Footer/smallFooter';

import * as Icon from 'react-feather'

import TinySlider from 'tiny-slider-react';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { furnitureImage, furnitureProduct,featuredCollection,furnitureAbout } from '../../data/dataThree';
import { FaArrowRight } from 'react-icons/fa';

const settings = {
    container: '.tiny-ten-item',
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
            items: 10
        },

        992: {
            items: 7
        },

        767: {
            items: 5
        },

        320: {
            items: 2
        },
    },
}

export default function IndexFurniture() {

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });

    const [isOpen, setOpen] = useState(false)
    const [lightBox, setLightbox] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const slides = furnitureImage.map((image) => ({ src: image }));
 
    const handleImageClick = (index) => {
        console.log(index);
        setCurrentImageIndex(index);
        setLightbox(true);
    };
    return (
        <>
            <Navbar navClass="nav-light"/>
            <section id="controls-carousel" className="relative" data-carousel="static">
                <div className="overflow-hidden relative h-screen inset-0">
                <Swiper
                        className='swiper-wrapper'
                        spaceBetween={50}
                        slidesPerView={1}
                        onSwiper={(swiper) => console.log(swiper)}
                        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                        navigation={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                    >
                        <SwiperSlide>
                            <div className="flex items-center justify-center transition-all h-screen duration-700 bg-[url('../../assets/images/furniture/bg01.jpg')] bg-center bg-no-repeat bg-cover" data-carousel-item="active">
                                <div className="absolute md:end-0 md:start-auto bottom-0 w-full lg:w-[700px] md:w-[500px] h-fit bg-white dark:bg-slate-900 md:p-20 p-10">
                                    <h5 className="uppercase font-bold mb-4 text-sm">New Arrivals</h5>
                                    <h1 className="font-bold dark:text-white lg:leading-normal leading-normal text-3xl lg:text-5xl">Modern <br /> Furniture</h1>

                                    <div className="mt-8">
                                        <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Shop Now <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex items-center justify-center transition-all h-screen duration-700 bg-[url('../../assets/images/furniture/bg02.jpg')] bg-center bg-no-repeat bg-cover" data-carousel-item="">
                                <div className="absolute md:end-0 md:start-auto bottom-0 w-full lg:w-[700px] md:w-[500px] h-fit bg-white dark:bg-slate-900 md:p-20 p-10">
                                    <h5 className="uppercase font-bold mb-4 text-sm">New Arrivals</h5>
                                    <h1 className="font-bold dark:text-white lg:leading-normal leading-normal text-3xl lg:text-5xl">Dream <br /> Sofa Design</h1>

                                    <div className="mt-8">
                                        <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Shop Now <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex items-center justify-center transition-all h-screen duration-700 bg-[url('../../assets/images/furniture/bg03.jpg')] bg-center bg-no-repeat bg-cover" data-carousel-item="">
                                <div className="absolute md:end-0 md:start-auto bottom-0 w-full lg:w-[700px] md:w-[500px] h-fit bg-white dark:bg-slate-900 md:p-20 p-10">
                                    <h5 className="uppercase font-bold mb-4 text-sm">New Arrivals</h5>
                                    <h1 className="font-bold dark:text-white lg:leading-normal leading-normal text-3xl lg:text-5xl">Look <br /> Modern House</h1>

                                    <div className="mt-8">
                                        <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Shop Now <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="flex items-center justify-center transition-all h-screen duration-700 bg-[url('../../assets/images/furniture/bg01.jpg')] bg-center bg-no-repeat bg-cover" data-carousel-item="active">
                        <div className="absolute md:end-0 md:start-auto bottom-0 w-full lg:w-[700px] md:w-[500px] h-fit bg-white dark:bg-slate-900 md:p-20 p-10">
                            <h5 className="uppercase font-bold mb-4 text-sm">New Arrivals</h5>
                            <h1 className="font-bold dark:text-white lg:leading-normal leading-normal text-3xl lg:text-5xl">Modern <br /> Furniture</h1>

                            <div className="mt-8">
                                <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Shop Now <FaArrowRight className="ms-2 text-[10px]"/></Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center transition-all duration-700 bg-[url('../../assets/images/furniture/bg02.jpg')] bg-center bg-no-repeat bg-cover" data-carousel-item="">
                        <div className="absolute md:end-0 md:start-auto bottom-0 w-full lg:w-[700px] md:w-[500px] h-fit bg-white dark:bg-slate-900 md:p-20 p-10">
                            <h5 className="uppercase font-bold mb-4 text-sm">New Arrivals</h5>
                            <h1 className="font-bold dark:text-white lg:leading-normal leading-normal text-3xl lg:text-5xl">Dream <br /> Sofa Design</h1>

                            <div className="mt-8">
                                <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Shop Now <FaArrowRight className="ms-2 text-[10px]"/></Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center transition-all duration-700 bg-[url('../../assets/images/furniture/bg03.jpg')] bg-center bg-no-repeat bg-cover" data-carousel-item="">
                        <div className="absolute md:end-0 md:start-auto bottom-0 w-full lg:w-[700px] md:w-[500px] h-fit bg-white dark:bg-slate-900 md:p-20 p-10">
                            <h5 className="uppercase font-bold mb-4 text-sm">New Arrivals</h5>
                            <h1 className="font-bold dark:text-white lg:leading-normal leading-normal text-3xl lg:text-5xl">Look <br /> Modern House</h1>

                            <div className="mt-8">
                                <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Shop Now <FaArrowRight className="ms-2 text-[10px]"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
                        <div className="group relative overflow-hidden shadow-sm dark:shadow-gray-800">
                            <img src={fea1} className="group-hover:scale-105 transition-all duration-500" alt="" />

                            <div className="absolute top-1/2 -translate-y-1/2 p-6">
                                <Link to="#" className="font-semibold text-2xl text-slate-950 hover:text-indigo-600 transition-all duration-500">Sofa Set for House</Link>

                                <p className="mt-2 text-slate-950 font-medium">Dispatched within a week, from $125</p>

                                <div className="mt-6">
                                    <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Shop Now <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden shadow-sm dark:shadow-gray-800">
                            <img src={fea2} className="group-hover:scale-105 transition-all duration-500" alt="" />

                            <div className="absolute top-1/2 -translate-y-1/2 p-6">
                                <Link to="#" className="font-semibold text-2xl text-slate-950 hover:text-indigo-600 transition-all duration-500">Lighting on Express</Link>

                                <p className="mt-2 text-slate-950 font-medium">Dispatched within a week, from $125</p>

                                <div className="mt-6">
                                    <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Shop Now <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                        <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Featured Products</h3>
                            <p className="text-slate-400 max-w-xl">Please check the below our latest or popular items</p>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                            <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {furnitureProduct.map((item,index)=>{
                            return(
                                <div className="group" key={index}>
                                    <div className="relative overflow-hidden shadow-sm dark:shadow-gray-800">
                                        <img src={item.iamge} className="group-hover:scale-105 transition-all duration-500" alt="" />

                                        <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 transition-all duration-500">
                                            <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-slate-900 border-slate-900 text-white w-full">Add to Cart</Link>
                                        </div>

                                        <span className="absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <Link to="#" className="text-slate-900 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"><i className="mdi mdi-heart"></i></Link>
                                        </span>
                                    </div>

                                    <div className="p-4 pb-0 text-center">
                                        <Link to="#" className="text-lg font-semibold hover:text-indigo-600">{item.name}</Link>

                                        <p className="text-slate-400 font-semibold">{item.amount}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                        <div className="md:col-span-12 text-center">
                            <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-28 w-full table relative bg-[url('../../assets/images/furniture/bg04.jpg')] bg-center bg-no-repeat bg-cover jarallax bg-fixed" >
                <div className="absolute inset-0 bg-slate-900/30"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-4 md:text-4xl text-3xl text-white font-bold">Comfort Seating</h3>

                        <p className="text-white/80 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                        <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10">
                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                        </Link>
                    </div>

                    {isOpen && 
                        <div className="flex bg-[#00000099] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div className="relative p-1 w-full max-w-2xl max-h-full">
                                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                                    <div className="flex items-center justify-between p-1 border-b rounded-t dark:border-gray-600 border-gray-200">
                                        <button type="button" onClick={()=>setOpen(!isOpen)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <div className="p-1 md:p-1 space-y-4">
                                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/yba7hPeTSjk?playlist=yba7hPeTSjk&loop=1"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Featured Collections</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                        {featuredCollection.map((item,index) => {
                           return(
                            <div className="group relative overflow-hidden shadow-sm dark:shadow-gray-800" key={index}>
                                <img src={item.image} className="group-hover:scale-105 transition-all duration-500" alt="" />

                                <div className="absolute top-0 start-0 end-0 p-6">
                                    <Link to="#" className="font-semibold text-2xl text-slate-950 hover:text-indigo-600 transition-all duration-500">{item.title}</Link>

                                    <p className="mt-2 text-slate-950 font-medium">{item.desc}</p>

                                    <div className="mt-4">
                                        <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See Collections <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                           )
                        })}
                    </div>
                </div>
                <div className="container relative md:mt-24 mt-16">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30]">
                        {furnitureAbout.map((item, index)=>{
                            const Icons = item.icon
                            return(
                            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center" key={index}>
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <Icon.Hexagon className="size-32 fill-indigo-600/5 mx-auto"></Icon.Hexagon>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                        <Icons className="size-8"/>
                                    </div>
                                </div>
    
                                <div className="mt-6">
                                    <Link to="#" className="text-xl font-medium transition-all duration-500 ease-in-out hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 transition-all duration-500 ease-in-out mt-3">{item.desc}</p>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <div className="container-fluid relative">
                <div className="grid grid-cols-1 relative">
                    <div className="tiny-ten-item">
                        <TinySlider settings={settings}>
                            {furnitureImage.map((item, index) => {
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="card border-0 rounded-0">
                                            <div className="card-body p-0">
                                                <Link onClick={() => handleImageClick(index)} className="lightbox d-inline-block" title="">
                                                    <img src={item} className="" alt="Furniture" />
                                                    <div className="overlay bg-dark"></div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </TinySlider>
                    </div>
                    
                    <Lightbox
                        open={lightBox}
                        close={() => setLightbox(false)}
                        slides={slides}
                        index={currentImageIndex} // Show the clicked image first
                    />

                    <div className="absolute top-2/4 -translate-y-2/4 start-2/4 ltr:-translate-x-2/4 rtl:translate-x-2/4 text-center hidden md:block">
                        <Link to="https://www.instagram.com/shreethemes/" target="_blank" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Follow Now</Link>
                    </div>
                </div>
            </div>
            <SmallFooter/>
        </>
    )
}

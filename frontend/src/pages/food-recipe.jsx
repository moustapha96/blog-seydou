import {useEffect, useState} from 'react'
import { Link,useParams } from 'react-router-dom';

import imageP from '../assets/images/client/05.jpg';
import f1 from '../assets/images/food/blog/f1.jpg';
import f2 from '../assets/images/food/blog/f2.jpg';
import image1 from '../assets/images/client/01.jpg';
import image2 from '../assets/images/client/02.jpg';
import image3 from '../assets/images/client/03.jpg';
import image4 from '../assets/images/client/04.jpg';
import image5 from '../assets/images/food/blog/6.jpg';
import image6 from '../assets/images/food/blog/7.jpg';
import image7 from '../assets/images/food/blog/8.jpg';

import Navbar from '../component/Navbar/navbar'
import SmallFooter from '../component/Footer/smallFooter';

import { foodBlogData } from '../data/data';

import TinySlider from 'tiny-slider-react';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import { foodImage } from '../data/dataThree';

import * as Icon from 'react-feather';
import { MdOutlineCalendarMonth } from 'react-icons/md';

export default function FoodRecipe() {

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    },[]);

    let settings = {
        container: '.tiny-twelve-item',
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
                items: 12
            },
    
            992: {
                items: 8
            },
    
            767: {
                items: 6
            },
    
            320: {
                items: 2
            },
        },
    }
    let params = useParams();
    let id = params.id
    let data = foodBlogData.find((blog) => blog.id === parseInt (id));

    let [isOpen, setOpen] = useState(false)
    let [lightBox, setLightbox] = useState(false);
    let [currentImageIndex, setCurrentImageIndex] = useState(0);

    const slides = foodImage.map((image) => ({ src: image }));
  
    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setLightbox(true);
    };
    
    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="relative table w-full py-40 lg:py-64 bg-[url('../../assets/images/food/blog/recipe.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/75"></div>
            </section>
            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="relative md:pb-24 pb-16">
                <div className="container relative">
                    <div className="md:flex">
                        <div className="relative lg:w-2/3 w-full -mt-32">
                            <div className="px-6 py-12 bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-800 text-center">
                                <Link to="#" className="bg-indigo-600/10 text-indigo-600 font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">Food & Recipes</Link>
                                <h5 className="font-semibold text-2xl mt-5">{data?.title ?data?.title  :'Recipes Creamy Garlic Parmesan Chicken Salad' }</h5>

                                <div className="flex items-center justify-center mt-5">
                                    <div className="flex items-center mx-2">
                                        <img src={imageP} className="size-7 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                                        <Link to="#" className="font-medium text-slate-400 block ms-2">Cristina Romsey</Link>
                                    </div>

                                    <span className="text-slate-400 flex items-center mx-2"><MdOutlineCalendarMonth  width={18} className="me-1"/> {data?.date ? data?.date :'14th July 2022'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-6">
                            <div>
                                <Link to="#" className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5 me-1">Food</Link>
                                <Link to="#" className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5 me-1">Drinks</Link>
                                <Link to="#" className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5 me-1">Recipes</Link>

                                <p className="text-slate-400 mb-4 mt-5">Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
                                <p className="text-slate-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                <p className="text-slate-400 mb-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>

                                <div className="grid md:grid-cols-2 grid-cols-1 mt-6 gap-[30px]">
                                    <img src={f1} className="rounded-md shadow-sm" alt="" />

                                    <div className="relative">
                                        <img src={f2} className="rounded-md shadow-sm" alt="" />

                                        <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                          <Link to="#" onClick={() => setOpen(true)}  data-type="youtube" data-id="S_CGed6E610"
                                                className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                                <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
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
                            <div className="p-6 rounded-md shadow-sm dark:shadow-gray-800 mt-8">
                                <h5 className="text-lg font-semibold">Comments:</h5>

                                <div className="mt-8">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <img src={image1} className="size-11 rounded-full shadow-sm" alt="" />

                                            <div className="ms-3 flex-1">
                                                <Link to="#" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Calvin Carlo</Link>
                                                <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                                            </div>
                                        </div>

                                        <Link to="#" className="text-slate-400 hover:text-indigo-600 transition-all duration-500 ease-in-out ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                    <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow-sm dark:shadow-gray-800 mt-6">
                                        <p className="text-slate-400 italic">&quot; There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour &quot;</p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <img src={image2} className="size-11 rounded-full shadow-sm" alt="" />

                                            <div className="ms-3 flex-1">
                                                <Link to="#" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Calvin Carlo</Link>
                                                <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                                            </div>
                                        </div>

                                        <Link to="#" className="text-slate-400 hover:text-indigo-600 transition-all duration-500 ease-in-out ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                    <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow-sm dark:shadow-gray-800 mt-6">
                                        <p className="text-slate-400 italic">&quot; There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour &quot;</p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <img src={image3} className="size-11 rounded-full shadow-sm" alt="" />

                                            <div className="ms-3 flex-1">
                                                <Link to="#" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Calvin Carlo</Link>
                                                <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                                            </div>
                                        </div>

                                        <Link to="#" className="text-slate-400 hover:text-indigo-600 transition-all duration-500 ease-in-out ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                    <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow-sm dark:shadow-gray-800 mt-6">
                                        <p className="text-slate-400 italic">&quot; There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour &quot;</p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <img src={image4} className="size-11 rounded-full shadow-sm" alt="" />

                                            <div className="ms-3 flex-1">
                                                <Link to="#" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Calvin Carlo</Link>
                                                <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                                            </div>
                                        </div>

                                        <Link to="#" className="text-slate-400 hover:text-indigo-600 transition-all duration-500 ease-in-out ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                    <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow-sm dark:shadow-gray-800 mt-6">
                                        <p className="text-slate-400 italic">&quot; There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour &quot;</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-md shadow-sm dark:shadow-gray-800 mt-8">
                                <h5 className="text-lg font-semibold">Leave A Comment:</h5>

                                <form className="mt-8">
                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-start">
                                                <label htmlFor="name" className="font-semibold">Your Name:</label>
                                                <div className="form-icon relative mt-2">
                                                    <Icon.User className="size-4 absolute top-3 start-4"></Icon.User>
                                                    <input name="name" id="name" type="text" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name :" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-start">
                                                <label htmlFor="email" className="font-semibold">Your Email:</label>
                                                <div className="form-icon relative mt-2">
                                                    <Icon.Mail className="size-4 absolute top-3 start-4"></Icon.Mail>
                                                    <input name="email" id="email" type="email" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email :" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <div className="text-start">
                                                <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                                <div className="form-icon relative mt-2">
                                                    <Icon.MessageCircle className="size-4 absolute top-3 start-4"></Icon.MessageCircle>
                                                    <textarea name="comments" id="comments" className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Send Message</button>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6">
                            <div className="sticky top-20">
                                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center">Author</h5>
                                <div className="text-center mt-8">
                                    <img src={imageP} className="size-24 mx-auto rounded-full shadow-sm mb-4" alt="" />

                                    <Link to="#" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Cristina Romsey</Link>
                                    <p className="text-slate-400">Content Writer</p>
                                </div>

                                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Recent post</h5>
                                <div className="flex items-center mt-8">
                                    <img src={image5} className="h-16 rounded-md shadow-sm dark:shadow-gray-800" alt="" />

                                    <div className="ms-3">
                                        <Link to="#" className="font-semibold hover:text-indigo-600">Consultant Business</Link>
                                        <p className="text-sm text-slate-400">1st May 2022</p>
                                    </div>
                                </div>

                                <div className="flex items-center mt-4">
                                    <img src={image6} className="h-16 rounded-md shadow-sm dark:shadow-gray-800" alt="" />

                                    <div className="ms-3">
                                        <Link to="#" className="font-semibold hover:text-indigo-600">Grow Your Business</Link>
                                        <p className="text-sm text-slate-400">1st May 2022</p>
                                    </div>
                                </div>

                                <div className="flex items-center mt-4">
                                    <img src={image7} className="h-16 rounded-md shadow-sm dark:shadow-gray-800" alt="" />

                                    <div className="ms-3">
                                        <Link to="#" className="font-semibold hover:text-indigo-600">Look On The Glorious Balance</Link>
                                        <p className="text-sm text-slate-400">1st May 2022</p>
                                    </div>
                                </div>

                                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
                                <ul className="list-none text-center mt-8 space-x-1">
                                    <li className="inline"><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Facebook className="size-4"></Icon.Facebook></Link></li>
                                    <li className="inline"><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Instagram className="size-4"></Icon.Instagram></Link></li>
                                    <li className="inline"><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Twitter className="size-4"></Icon.Twitter></Link></li>
                                    <li className="inline"><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Linkedin className="size-4"></Icon.Linkedin></Link></li>
                                    <li className="inline"><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.GitHub className="size-4"></Icon.GitHub></Link></li>
                                    <li className="inline"><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Youtube className="size-4"></Icon.Youtube></Link></li>
                                    <li className="inline"><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Gitlab className="size-4"></Icon.Gitlab></Link></li>
                                </ul>

                                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Tagscloud</h5>
                                <ul className="list-none text-center mt-8 space-x-1">
                                    <li className="inline-block m-2"><Link to="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">Food</Link></li>
                                    <li className="inline-block m-2"><Link to="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">Chicken</Link></li>
                                    <li className="inline-block m-2"><Link to="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">Recipe</Link></li>
                                    <li className="inline-block m-2"><Link to="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">Enjoy</Link></li>
                                    <li className="inline-block m-2"><Link to="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">Restra</Link></li>
                                    <li className="inline-block m-2"><Link to="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">Sunday</Link></li>
                                    <li className="inline-block m-2"><Link to="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">Offer</Link></li>
                                    <li className="inline-block m-2"><Link to="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">Holiday</Link></li>
                                    <li className="inline-block m-2"><Link to="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">Cake</Link></li>
                                    <li className="inline-block m-2"><Link to="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">Burns</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-start">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Recent Blogs</h3>

                        <p className="text-slate-400 max-w-xl">Write your own food blog with techwind that can provide everything you need to blog, news, article, etc.</p>
                    </div>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200:4}} >
                    <Masonry columnsCount={4}>
                        {foodBlogData.slice(0,8).map((item,index)=>{
                            return(
                                <div className="picture-item p-2 pb-5" key={index}>
                                <div className="group relative">
                                    <div className="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-800">
                                        <img src={item.image} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                        <div className="absolute top-0 start-0 pt-3 ps-3">
                                            <Link to="#" className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">{item.tag}</Link>
                                        </div>
                                    </div>
    
                                    <div className="p-3">
                                        <Link to={`/food-recipe/${item.id}`} className="block hover:text-indigo-600 text-lg font-semibold">{item.title}</Link>
    
                                        <ul className="list-none flex items-center justify-between mt-2">
                                            <li>
                                                <span className="text-slate-400 flex items-center"><MdOutlineCalendarMonth  width={18} className="me-1"/> {item.date}</span>
                                            </li>
    
                                            <li className="">
                                                <Link to="/#!" className="text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link> <span className="text-slate-400">22</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </Masonry>
                </ResponsiveMasonry>
                </div>
            </section>

            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="md:flex justify-center">
                        <div className="lg:w-2/3 text-center">
                            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold mb-6">Subscribe our weekly subscription</h3>

                            <p className="text-slate-400 max-w-xl mx-auto">Add some text to explain benefits of subscripton on your services. We&apos;ll send you the best of our blog just once a weekly.</p>

                            <div className="mt-8">
                                <div className="text-center subcribe-form">
                                    <form className="relative mx-auto max-w-xl">
                                        <input type="email" id="subemail" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700" placeholder="Enter your email id.." />
                                        <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Subcribe Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="container-fluid relative">
                <div className="grid grid-cols-1 relative">
                    <div className="tiny-twelve-item">
                        <TinySlider settings={settings}>
                            {foodImage.map((item, index) => (
                                <div className="tiny-slide" key={index}>
                                    <div className="card border-0 rounded-0">
                                        <div className="card-body p-0">
                                            <Link onClick={() => handleImageClick(index)} className="lightbox d-inline-block" title="">
                                                <img src={item} className="" alt="Insta Post" />
                                                <div className="overlay bg-dark"></div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </TinySlider>
                             
                            <Lightbox
                                open={lightBox}
                                close={() => setLightbox(false)}
                                slides={slides}
                                index={currentImageIndex} // Show the clicked image first
                            />

                    </div>

                    <div className="absolute top-2/4 -translate-y-2/4 start-2/4 ltr:-translate-x-2/4 rtl:translate-x-2/4 text-center hidden md:block">
                        <Link to="https://www.instagram.com/shreethemes/" target="_blank"className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Follow Now</Link>
                    </div>
                </div>
            </div>
            <SmallFooter/>
        </>
    )
}

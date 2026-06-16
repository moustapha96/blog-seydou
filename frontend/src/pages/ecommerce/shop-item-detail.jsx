import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import s1 from '../../assets/images/shop/single/single-2.jpg';
import s2 from '../../assets/images/shop/single/single-3.jpg';
import s3 from '../../assets/images/shop/single/single-4.jpg';
import s4 from '../../assets/images/shop/single/single-5.jpg';
import single_6 from '../../assets/images/shop/single/single-6.jpg';

import EcommerceNavbar from '../../component/Navbar/ecommerceNavbar';
import ShopFooter from '../../component/Footer/shopFooter';



import * as Icon from 'react-feather';

import TinySlider from 'tiny-slider-react';
import MobileApp from '../../component/mobileApp';

import { productData, shopItem } from '../../data/dataTwo';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsCheckCircle } from 'react-icons/bs';

const settings = {
    container: '.tiny-single-item',
    items: 1,
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 16,
}
export default function ShopItemDetail() {

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });

    const services = [
        {
            image: s1
        },
        {
            image: s2
        },
        {
            image: s3
        },
        {
            image: s4
        },
        {
            image: single_6
        }
    ]
    const [isOpenTab, setisOpen] = useState(0);

    const handleTabClick = (index) => {
        setisOpen(index);
    };
    const handleStepDown = (e) => {
        const input = e.target.parentNode.querySelector('input[type="number"]')
        if (input) {
            input.stepDown();
        }
    };

    const handleStepUp = (e) => {
        const input = e.target.parentNode.querySelector('input[type="number"]')
        if (input) {
            input.stepUp();
        }
    };
    return (
        <>

            <EcommerceNavbar />

            <section className="relative table w-full py-20 lg:py-24 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid grid-cols-1 mt-14">
                        <h3 className="text-3xl leading-normal font-semibold">Product / Item Detail</h3>
                    </div>

                    <div className="relative mt-3">
                        <ul className="tracking-[0.5px] mb-0 inline-flex items-center space-x-1">
                            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link to="/index-shop">Techwind</Link></li>
                            <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5"><MdKeyboardArrowRight className="text-xl"/></li>
                            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600" aria-current="page">Item Detail</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] items-center">
                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="tiny-single-item">
                                <TinySlider settings={settings}>
                                    {services.map((item, index) => (
                                        <div className="tiny-slide" key={index}>
                                            <img src={item.image} className="rounded-md shadow-sm dark:shadow-gray-800" alt="" />
                                        </div>
                                    ))}
                                </TinySlider>
                            </div>
                        </div>

                        <div className="lg:col-span-7 md:col-span-6">
                            <div className="lg:ms-6">
                                <h5 className="text-2xl font-semibold">Branded T-Shirts</h5>
                                <div className="mt-2">
                                    <span className="text-slate-400 font-semibold me-1">$16USD <del className="text-red-600">$21USD</del></span>

                                    <ul className="list-none inline-block text-orange-400 space-x-1">
                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                        <li className="inline text-slate-400 font-semibold">4.8 (45)</li>
                                    </ul>
                                </div>

                                <div className="mt-4">
                                    <h5 className="text-lg font-semibold">Overview :</h5>
                                    <p className="text-slate-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem, unde molestiae sint quae inventore atque minima natus fugiat nihil quisquam voluptates ea omnis. Modi laborum soluta tempore unde accusantium.</p>

                                    <ul className="list-none text-slate-400 mt-4 ">
                                        <li className="mb-1 flex items-center ml-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                        <li className="mb-1 flex items-center ml-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                                        <li className="mb-1 flex items-center ml-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                                    </ul>
                                </div>

                                <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px] mt-4">
                                    <div className="flex items-center">
                                        <h5 className="text-lg font-semibold me-2">Size:</h5>
                                        <div className="space-x-1">
                                            <Link className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white">S</Link>
                                            <Link className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white">M</Link>
                                            <Link className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white">L</Link>
                                            <Link className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white">XL</Link>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <h5 className="text-lg font-semibold me-2">Quantity:</h5>
                                        <div className="qty-icons ms-3 space-x-1">
                                            <button onClick={handleStepDown} className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white minus"                                            >
                                                -
                                            </button>
                                            <input min="0" readOnly name="quantity" value="0" type="number" className="h-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white pointer-events-none w-16 ps-4 quantity" />
                                            <button onClick={handleStepUp} className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white plus" >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">Shop Now</Link>
                                    <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white mt-2">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-10 gap-[30px]">
                        <div className="lg:col-span-3 md:col-span-5">
                            <div className="sticky top-20">
                                <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(0)} className={`${isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-start font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Description</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-start font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Additional Information</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(2)} className={`${isOpenTab === 2 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-start font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Review</button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-9 md:col-span-7">
                            <div id="" className=" p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md">
                                {isOpenTab === 0 ? <div className="myTabContent active" id="description" role="tabpanel" aria-labelledby="profile-tab">
                                    <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and &apos;words&apos; is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>
                                </div> :""}
                                
                                {isOpenTab === 1 ? <div className="myTabContent " id="addinfo" role="tabpanel" aria-labelledby="addinfo-tab">
                                    <table className="w-full text-start">
                                        <tbody>
                                            <tr className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-700">
                                                <td className="font-semibold py-4" style={{ width: '100px' }}>Color</td>
                                                <td className="text-slate-400 py-4">Red, White, Black, Orange</td>
                                            </tr>

                                            <tr className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-700">
                                                <td className="font-semibold py-4">Material</td>
                                                <td className="text-slate-400 py-4">Cotton</td>
                                            </tr>

                                            <tr className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-700">
                                                <td className="font-semibold py-4">Size</td>
                                                <td className="text-slate-400 py-4">S, M, L, XL, XXL</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>:""}
                                
                                {isOpenTab === 2 ?
                                    <div className="myTabContent" id="review" role="tabpanel" aria-labelledby="review-tab">

                                    {
                                        shopItem.map((data,index) => {
                                            return (
                                            <div className={data.class} key={index}>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <img src={data.image} className="size-11 rounded-full shadow-sm" alt="" />

                                                        <div className="ms-3 flex-1">
                                                            <Link className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">{data.name}</Link>
                                                            <p className="text-sm text-slate-400">{data.time}</p>
                                                        </div>
                                                    </div>

                                                    <Link className="text-slate-400 hover:text-indigo-600 transition-all duration-500 ease-in-out ms-5"><i className="mdi mdi-reply"></i> {data.reply}</Link>
                                                </div>
                                                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow-sm dark:shadow-gray-800 mt-6">
                                                    <ul className="list-none inline-block text-orange-400">
                                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                                        <li className="inline text-slate-400 font-semibold">5.0</li>
                                                    </ul>

                                                    <p className="text-slate-400 italic">{data.desc}</p>
                                                </div>
                                            </div>)
                                        })
                                    }


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
                                </div> :"" 
                               }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative mt-16">
                    <div className="grid grid-cols-1 items-center">
                        <h3 className="text-2xl leading-normal font-semibold">Recent Products</h3>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {productData.slice(0,4).map((item,index)=>{
                            return(
                                <div className="group" key={index}>
                                <div className="relative overflow-hidden shadow-sm dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md transition-all duration-500">
                                    <img src={item.image} alt="" />
    
                                    <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 transition-all duration-500">
                                        <Link to="/shop-cart" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-slate-900 border-slate-900 text-white w-full rounded-md">Add to Cart</Link>
                                    </div>
    
                                    <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <li className='ml-0'><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-heart"></i></Link></li>
                                        <li className="mt-1 ml-0"><Link to={`/shop-item-detail/${item.id}`}className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-eye-outline"></i></Link></li>
                                        <li className="mt-1 ml-0"><Link className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-bookmark-outline"></i></Link></li>
                                    </ul>
                                    {item.tag ? <ul className="list-none absolute top-[10px] start-4">
                                        <li><Link className={`${item.tagBg} text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5`}>{item.tag}</Link></li>
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
                <MobileApp/>
            </section>
         <ShopFooter/>
        </>
    )
}

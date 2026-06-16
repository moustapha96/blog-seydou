/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { portfolioTwo, portfolioImageTwo } from '../data/portfolio';
import { FiCamera, FiPhone } from 'react-icons/fi';
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';


export default function PortfolioFilter(props) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const slides = portfolioImageTwo.map((image) => ({ src: image }));
  
    const handleImageClick = (index) => {
        setOpen(true);
        setCurrentImageIndex(index)
    };

    const matchCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory
        ? portfolioTwo.filter((item) => item.category === selectedCategory)
        : portfolioTwo;
    return (
                <section className="relative md:py-24 py-16">
                    {props.containerClass === true ? <div className="container-fluid relative">
                        <div className="grid grid-cols-1 items-center gap-[30px]">
                            <div className="filters-group-wrap text-center">
                                <div className="filters-group">
                                    <ul className="mb-0 list-none container-filter-border-bottom filter-options">
                                        <li className={`${selectedCategory === null ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                        <li className={`${selectedCategory === 'branding' ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="branding" onClick={() => matchCategory('branding')} >Branding</li>
                                        <li className={`${selectedCategory === 'designing' ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="designing" onClick={() => matchCategory('designing')}>Designing</li>
                                        <li className={`${selectedCategory === 'photography' ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                                        <li className={`${selectedCategory === 'development' ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={props.className}>
                                {
                                    filteredData.map((data, index) => {
                                        return (

                                            <div key={index} className="picture-item" data-groups='["branding"]'>
                                                <div className="group relative block overflow-hidden rounded-md transition-all duration-500">

                                                    <img src={data.image} className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500" alt="work" onClick={() => handleImageClick(data.id)} />

                                                    <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 transition duration-500 z-0 rounded-md"></div>

                                                    <div className="content transition-all duration-500">
                                                        <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-6 end-6 transition-all duration-500">
                                                            <Link onClick={() => handleImageClick(data.id)} className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"><FiCamera className ="size-4"/></Link>
                                                        </div>

                                                        <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-6 start-6 transition-all duration-500">
                                                            <Link to="/portfolio-detail-three" className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">Mockup Collection</Link>
                                                            <p className="text-slate-400 mb-0">Abstract</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            <Lightbox open={open} close={() => setOpen(false)} slides={slides} index={currentImageIndex}/>
                        </div>
                        <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                            <div className="md:col-span-12 text-center">
                                <nav aria-label="Page navigation example">
                                    <ul className="inline-flex items-center -space-x-px">
                                        <li>
                                            <Link to="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                                <MdOutlineKeyboardArrowLeft className=" text-[20px] rtl:rotate-180 rtl:-mt-1"/>
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
                    </div> : <div className="container relative">
                        <div className="grid grid-cols-1 items-center gap-[30px]">
                            <div className="filters-group-wrap text-center">
                                <div className="filters-group">
                                    <ul className="mb-0 list-none container-filter-border-bottom filter-options">
                                        <li className={`${selectedCategory === null ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 border-b border-transparent  cursor-pointer relative text-slate-400 transition duration-500`} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                        <li className={`${selectedCategory === 'branding' ? 'active' : ''} inline-block font-medium text-lg mx-2 border-b border-transparent  mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="branding" onClick={() => matchCategory('branding')} >Branding</li>
                                        <li className={`${selectedCategory === 'designing' ? 'active' : ''} inline-block font-medium text-lg mx-2  border-b border-transparent mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="designing" onClick={() => matchCategory('designing')}>Designing</li>
                                        <li className={`${selectedCategory === 'photography' ? 'active' : ''} inline-block font-medium text-lg mx-2 border-b border-transparent  mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                                        <li className={`${selectedCategory === 'development' ? 'active' : ''} inline-block font-medium text-lg mx-2  border-b border-transparent mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={props.className}>
                                {
                                    filteredData.map((data, index) => {
                                        return (

                                            <div key={index} className="picture-item" data-groups='["branding"]'>
                                                <div className="group relative block overflow-hidden rounded-md transition-all duration-500">

                                                    <img src={data.image} className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500" alt="work" onClick={() => handleImageClick(data.id)} />

                                                    <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 transition duration-500 z-0 rounded-md"></div>

                                                    <div className="content transition-all duration-500">
                                                        <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-6 end-6 transition-all duration-500">
                                                            <Link onClick={() => handleImageClick(data.id)} className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"><FiCamera className="size-4"/></Link>
                                                        </div>

                                                        <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-6 start-6 transition-all duration-500">
                                                            <Link to="/portfolio-detail-three" className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">Mockup Collection</Link>
                                                            <p className="text-slate-400 mb-0">Abstract</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            <Lightbox open={open} close={() => setOpen(false)} slides={slides} index={currentImageIndex}/>
                        </div>
                        <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                            <div className="md:col-span-12 text-center">
                                <nav aria-label="Page navigation example">
                                    <ul className="mb-0 list-none container-filter-border-bottom filter-options inline-flex">
                                        <li className="inline">
                                            <Link to="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                                <MdOutlineKeyboardArrowLeft className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                            </Link>
                                        </li>
                                        <li className="inline">
                                            <Link to="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">1</Link>
                                        </li>
                                        <li className="inline">
                                            <Link to="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">2</Link>
                                        </li>
                                        <li className="inline">
                                            <Link to="/#" aria-current="page" className="z-10 size-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600">3</Link>
                                        </li>
                                        <li className="inline">
                                            <Link to="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">4</Link>
                                        </li>
                                        <li className="inline">
                                            <Link to="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">5</Link>
                                        </li>
                                        <li className="inline">
                                            <Link to="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                                <MdKeyboardArrowRight className="text-xl rtl:rotate-180 rtl:-mt-1"/>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div> }
             
                    <div className="container relative md:mt-24 mt-16">
                        <div className="grid grid-cols-1 text-center">
                            <span className="text-slate-400 mb-4">Available for freelance projects</span>
                            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Do you have designing project? <br /> Let's talk.</h3>

                            <div className="mt-6">
                                <Link to="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><FiPhone className="me-1 text-lg"/> Contact us</Link>
                            </div>
                        </div>
                    </div>
        </section>


    )
}

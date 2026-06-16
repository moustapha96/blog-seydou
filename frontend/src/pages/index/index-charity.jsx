import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import about from '../../assets/images/charity/about.jpg';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import CookieModal from '../../component/cookieModal'
import Blog from '../../component/blog';

import * as Icon from 'react-feather';

import CountUp from 'react-countup';

import { team } from '../../data/data';
import { causesData } from '../../data/dataTwo';
import { BiDollarCircle } from 'react-icons/bi';

export default function IndexCharity() {

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });

    let [isOpen, setOpen] = useState(false)
    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="relative lg:py-44 py-36 bg-[url('../../assets/images/charity/bg.jpg')] bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/50"></div>
                <div className="container relative z-1">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                        <div className="lg:col-span-7 md:col-span-6">
                            <div className="md:me-6">
                                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Your Donation Can <br /> Change the World</h4>
                                <p className="text-white/75 text-lg max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                <div className="mt-6">
                                    <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Donate Now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="p-6 rounded-lg border-t-8 border-indigo-600 bg-white dark:bg-slate-900 shadow-lg dark:shadow-gray-800">
                                <div className="mb-6 text-center">
                                    <h4 className="font-bold lg:leading-normal leading-normal text-3xl mb-3">Make a Donation</h4>
                                    <p className="text-slate-400">Your $40.00 monthly donation can give 12 people clean water every year. 100% funds water projects.</p>
                                </div>

                                <form>
                                    <div className="grid grid-cols-1">
                                        <div>
                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div className="mb-5">
                                                    <label className="form-label font-medium">Your Name : <span className="text-red-600">*</span></label>
                                                    <input type="text" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name" name="name" required="" />
                                                </div>

                                                <div className="mb-5">
                                                    <label className="form-label font-medium">Your Email : <span className="text-red-600">*</span></label>
                                                    <input type="email" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email" name="email" required="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-5">
                                            <label className="form-label font-medium">I Want to Donate for</label>
                                            <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                                <option value="Donate For Food">Donate For Food</option>
                                                <option value="Food For Orphan">Food For Orphan</option>
                                                <option value="Home For Homeless">Home For Homeless</option>
                                                <option value="Holyday Gifts In Kind">Holyday Gifts In Kind</option>
                                                <option value="For clean Water in Africa">For clean Water in Africa</option>
                                                <option value="Health and Rights">Health and Rights</option>
                                            </select>
                                        </div>

                                        <div className="mb-5">
                                            <label className="form-label font-medium">How much do you want to donate ?</label>
                                            <div className="relative mt-2">
                                                <span className="absolute top-0.5 start-0.5 size-9 text-xl bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded" id="basic-addon1"><BiDollarCircle className="size-5"/></span>
                                                <input type="number" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" min="1" max="1000" placeholder="Enter Amount" id="amount" aria-describedby="inputGroupPrepend" required />
                                            </div>
                                        </div>

                                        <div className="mb-5">
                                            <div className="flex items-center w-full mb-0">
                                                <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="AcceptT&C" />
                                                <label className="form-check-label text-slate-400" htmlFor=
"AcceptT&C">I Accept <Link to="#" className="text-indigo-600">Terms And Condition</Link></label>
                                            </div>
                                        </div>

                                        <div className="mb-5">
                                            <input type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Donate Now" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative bg-indigo-600 py-12">
                <div className="container relative">
                    <div className="relative grid md:grid-cols-4 grid-cols-2 items-center gap-[30px]">
                        <div className="counter-box text-center">
                            <h1 className="text-4xl font-bold mb-4 text-white"><CountUp className="counter-value" start={1} end={100} />M</h1>
                            <h5 className="counter-head text-xs font-semibold text-white">PEOPLE FACING FOOD INSECURITY</h5>
                        </div>

                        <div className="counter-box text-center">
                            <h1 className="text-4xl font-bold mb-4 text-white"><CountUp className="counter-value" start={2} end={152} />M</h1>
                            <h5 className="counter-head text-xs font-semibold text-white">PEOPLE WFP AIMS TO REACH IN 2022</h5>
                        </div>

                        <div className="counter-box text-center">
                            <h1 className="text-4xl font-bold mb-4 text-white">$<CountUp className="counter-value" start={0} end={1500} />M</h1>
                            <h5 className="counter-head text-xs font-semibold text-white">WFP&apos;S FUNDING NEEDS IN 2022</h5>
                        </div>

                        <div className="counter-box text-center">
                            <h1 className="text-4xl font-bold mb-4 text-white"><CountUp className="counter-value" start={0} end={29} />M</h1>
                            <h5 className="counter-head text-xs font-semibold text-white">MEALS DISTRIBUTED WORLDWIDE</h5>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="md:col-span-6">
                            <div className="lg:me-8">
                                <img src={about} className="rounded-full shadow-lg dark:shadow-gray-800" alt="" />
                            </div>
                        </div>

                        <div className="md:col-span-6">
                            <div className="lg:ms-8">
                                <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">About Us</h6>
                                <h3 className="mb-3 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Highest Ambition <br /> is to Help People</h3>
                                <h3 className="mb-4 text-lg leading-normal font-semibold">Our programs contribute to peace and development through volunteerism worldwide. Take part in changing the lives of young people across the world.</h3>

                                <p className="text-slate-400 max-w-xl mb-6">We’re focused on providing affordable volunteer travel experiences that are responsible. Our programs heighten global awareness and cultural understanding through the skills and expertise taken by volunteers to their host communities, and through the experiences and lessons that volunteers take back to their own countries and cultures.</p>

                                <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Donate Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Causes</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {causesData.map((item,index)=>{
                            return(
                                <div className="group relative rounded hover:-mt-1 shadow-sm hover:shadow-md dark:shadow-gray-800 overflow-hidden transition-all duration-300" key={index}>
                                    <div className="relative overflow-hidden">
                                        <img src={item.image} alt="" />

                                        <div className="absolute p-4 start-0 end-0 text-center bg-slate-900/80 -bottom-24 group-hover:bottom-0 transition-all duration-300">
                                            <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Donate Now</Link>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <Link to="#" className="hover:text-indigo-600 text-lg font-semibold">{item.title}</Link>
                                        <p className="text-slate-400 mt-2">{item.desc}</p>

                                        <div className="mt-3">
                                            <div className="flex justify-between mb-2">
                                                <span className="text-slate-400">Progress</span>
                                                <span className="text-slate-400">{item.Progress}</span>
                                            </div>
                                            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                                <div className="bg-indigo-600 h-[6px] rounded-full" style={{ "width": item.Progress }}></div>
                                            </div>
                                            <ul className="flex list-none justify-between mt-3 mb-2">
                                                <li className="font-semibold">
                                                    <span className="text-indigo-600">Raised: </span>
                                                    <span>$4500</span>
                                                </li>
                                                <li className="text-indigo-600 font-semibold">
                                                    <span>Goal: </span>
                                                    <span>$10000</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </section>


            <section className="py-20 w-full table relative bg-[url('../../assets/images/charity/cta.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-slate-900/70"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-4 md:text-3xl text-2xl text-white font-medium">Senior Citizen Program</h3>

                        <p className="text-white/80 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                        <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10">
                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                        </Link>
                    </div>
                </div>
            </section>
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

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Meet Our Volunteers</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                        {team.map((item,index)=>{
                            return(
                                <div className="lg:col-span-3 md:col-span-6" key={index}>
                                    <div className="group text-center">
                                        <div className="relative inline-block mx-auto size-52 rounded-full overflow-hidden">
                                            <img src={item.image} className="" alt="" />
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black size-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                            <ul className="list-none space-x-1 absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                                <li className="inline"><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Facebook className="size-4"></Icon.Facebook></Link></li>
                                                <li className="inline"><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Instagram className="size-4"></Icon.Instagram></Link></li>
                                                <li className="inline"><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Linkedin className="size-4"></Icon.Linkedin></Link></li>
                                            </ul>
                                        </div>

                                        <div className="content mt-3">
                                            <Link to="#" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.name}</Link>
                                            <p className="text-slate-400">Volunteer</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <Blog className="container relative md:mt-24 mt-16" />
            </section>

            <Footer />

           <CookieModal/>
        </>
    )
}

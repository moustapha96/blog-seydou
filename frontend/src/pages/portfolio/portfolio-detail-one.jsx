import { Link } from 'react-router-dom';
import image from '../../assets/images/portfolio/01.jpg';
import image1 from '../../assets/images/portfolio/02.jpg';
import image2 from '../../assets/images/portfolio/03.jpg';
import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { useEffect } from 'react';

export default function PortfolioDetailOne() {

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    },[]);
    
    return (
        <>
            <Navbar navClass="nav-light"/>

            <section className="relative table w-full py-32 lg:py-40 bg-[url('../../assets/images/portfolio/bg-inner.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="mb-3 text-3xl leading-normal font-medium text-white">New Trends in SEO</h3>

                        <ul className="list-none space-x-1">
                            <li className="inline font-semibold text-white/60 me-2"> <span className="text-white">Client :</span> Calvin Carlo</li>
                            <li className="inline font-semibold text-white/60"> <span className="text-white">Date :</span> 23th May, 2022</li>
                        </ul>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Techwind</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link >Portfolio</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Detail</li>
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
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="grid grid-cols-1 gap-[30px]">
                                <img src={image} className="rounded-md" alt="" />
                                <img src={image1} className="rounded-md" alt="" />
                                <img src={image2} className="rounded-md" alt="" />
                            </div>
                        </div>

                        <div className="lg:col-span-7 md:col-span-6">
                            <div className="sticky top-20">
                                <div className="grid lg:grid-cols-12 grid-cols-1 gap-[30px]">
                                    <div className="lg:col-span-12">
                                        <div className="work-details">
                                            <h4 className="text-xl font-semibold mb-3 border-b border-gray-100 dark:border-gray-700 pb-3">Project Name :</h4>
                                            <p className="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non dolorem consequatur vitae hic.</p>
                                            <p className="text-slate-400 mt-2">Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos.</p>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-7">
                                        <div className="bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 p-6 rounded-md">
                                            <h5 className="text-lg font-semibold border-b border-gray-100 dark:border-gray-700 pb-3 mb-3">Project Info :</h5>
                                            <dl className="grid grid-cols-12 mb-0">
                                                <dt className="md:col-span-4 col-span-5 mt-2">Client :</dt>
                                                <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">Calvin Carlo</dd>

                                                <dt className="md:col-span-4 col-span-5 mt-2">Category :</dt>
                                                <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">Web Design</dd>

                                                <dt className="md:col-span-4 col-span-5 mt-2">Date :</dt>
                                                <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">23rd Sep, 2021</dd>

                                                <dt className="md:col-span-4 col-span-5 mt-2">Website :</dt>
                                                <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">www.yourdomain.com</dd>

                                                <dt className="md:col-span-4 col-span-5 mt-2">Location :</dt>
                                                <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">3/2/64 Mongus Street, UK</dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 text-center">
                        <span className="text-slate-400 mb-4">Available for freelance projects</span>
                        <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Do you have designing project? <br /> Let&apos;s talk.</h3>

                        <div className="mt-6">
                            <Link to="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><FiPhone className="me-1 text-lg"/> Contact us</Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

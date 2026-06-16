import bg from '../../assets/images/blog/bg.jpg';
import image from '../../assets/images/client/05.jpg';

import Navbar from '../../component/Navbar/navbar'
import AccpontTab from '../../component/accountTab';
import Footer from '../../component/Footer/footer';
import { useEffect } from 'react';

export default function UserNotification() {

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    },[]);
   
    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="relative lg:pb-24 pb-16">
                <div className="container-fluid relative">
                    <div className="profile-banner relative text-transparent">
                        <input id="pro-banner" name="profile-banner" type="file" className="hidden"/>
                        <div className="relative shrink-0">
                            <img src={bg} className="h-80 w-full object-cover" id="profile-banner" alt="" />
                            <div className="absolute inset-0 bg-slate-900/75"></div>
                            <label className="absolute inset-0 cursor-pointer" htmlFor="pro-banner"></label>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="md:flex">
                        <div className="lg:w-1/4 md:w-1/3 md:px-3">
                            <div className="relative md:-mt-48 -mt-32">
                                <div className="p-6 rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900">
                                    <div className="profile-pic text-center mb-5">
                                        <input id="pro-img" name="profile-image" type="file" className="hidden"/>
                                        <div>
                                            <div className="relative size-28 mx-auto">
                                                <img src={image} className="rounded-full shadow-sm dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt="" />
                                                <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                                            </div>

                                            <div className="mt-4">
                                                <h5 className="text-lg font-semibold">Jenny Jimenez</h5>
                                                <p className="text-slate-400">jennyhot@hotmail.com</p>
                                            </div>
                                        </div>
                                    </div>

                                    <AccpontTab/>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-[30px] md:mt-0">
                            <div className="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900">
                                <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                                    <h5 className="text-lg font-semibold">Account Notifications :</h5>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between pb-4">
                                        <h6 className="mb-0 font-medium">When someone mentions me</h6>
                                        <div className="">
                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" readOnly id="noti1" />
                                            <label className="form-check-label" htmlFor="noti1"></label>
                                        </div>
                                    </div>
                                    <div className="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                                        <h6 className="mb-0 font-medium">When someone follows me</h6>
                                        <div className="">
                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" readOnly  checked id="noti2" />
                                            <label className="form-check-label" htmlFor="noti2"></label>
                                        </div>
                                    </div>
                                    <div className="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                                        <h6 className="mb-0 font-medium">When shares my activity</h6>
                                        <div className="">
                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" readOnly id="noti3" />
                                            <label className="form-check-label" htmlFor="noti3"></label>
                                        </div>
                                    </div>
                                    <div className="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                                        <h6 className="mb-0 font-medium">When someone messages me</h6>
                                        <div className="">
                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" readOnly type="checkbox"  id="noti4" />
                                            <label className="form-check-label" htmlFor="noti4"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
                                <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                                    <h5 className="text-lg font-semibold">Marketing Notifications :</h5>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between pb-4">
                                        <h6 className="mb-0 font-medium">There is a sale or promotion</h6>
                                        <div className="">
                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" readOnly id="noti5" />
                                            <label className="form-check-label" htmlFor="noti5"></label>
                                        </div>
                                    </div>
                                    <div className="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                                        <h6 className="mb-0 font-medium">Company news</h6>
                                        <div className="">
                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" readOnly  id="noti6" />
                                            <label className="form-check-label" htmlFor="noti6"></label>
                                        </div>
                                    </div>
                                    <div className="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                                        <h6 className="mb-0 font-medium">Weekly jobs</h6>
                                        <div className="">
                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" readOnly  checked id="noti7" />
                                            <label className="form-check-label" htmlFor="noti7"></label>
                                        </div>
                                    </div>
                                    <div className="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                                        <h6 className="mb-0 font-medium">Unsubscribe News</h6>
                                        <div className="">
                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" readOnly  checked id="noti8" />
                                            <label className="form-check-label" htmlFor="noti8"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}

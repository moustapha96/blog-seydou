import { Link } from 'react-router-dom';

import * as Icon from 'react-feather';
import { commentsData } from '../data/data';

export default function BlogComment() {

    return (
       <>
        <div className="p-6 rounded-md shadow-sm dark:shadow-gray-800 mt-8">
            <h5 className="text-lg font-semibold">Comments:</h5>
            {commentsData.map((item,index)=>{
                return(
                    <div className="mt-8" key={index}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img src={item.image} className="size-11 rounded-full shadow-sm" alt="" />
        
                                <div className="ms-3 flex-1">
                                    <Link  className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.name}</Link>
                                    <p className="text-sm text-slate-400">{item.date}</p>
                                </div>
                            </div>
        
                            <Link  className="text-slate-400 hover:text-indigo-600 transition-all duration-500 ease-in-out ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow-sm dark:shadow-gray-800 mt-6">
                            <p className="text-slate-400 italic">{item.desc}</p>
                        </div>
                    </div>
                )
            })}
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
       </>
    )
}

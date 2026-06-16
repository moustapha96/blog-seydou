import { Link } from "react-router-dom";

import classic03 from '../assets/images/saas/classic03.png';
import { BsCheckCircle } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";


export default function AboutTwo(){
    return(
        <div className="container relative md:mt-24 mt-16">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                <div className="relative order-1 md:order-2 wow animate__animated animate__fadeInRight" data-wow-delay=".5s">
                    <img src={classic03} className="rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                    <div className="overflow-hidden absolute lg:size-[400px] size-[320px] bg-indigo-600/5 bottom-0 end-0 rotate-45 -z-1 rounded-3xl"></div>
                </div>

                <div className="lg:me-8 order-2 md:order-1 wow animate__animated animate__fadeInLeft" data-wow-delay=".5s">
                    <h4 className="mb-4 text-2xl leading-normal font-medium">Get Notified About Importent Email</h4>
                    <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                    <ul className="list-none text-slate-400 mt-4">
                        <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Digital Marketing Solutions for Tomorrow</li>
                        <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Our Talented & Experienced Marketing Agency</li>
                        <li className="mb-1 flex items-center m-0"><BsCheckCircle className="text-indigo-600 text-base me-2"/>Create your own skin to match your brand</li>
                    </ul>

                    <div className="mt-4">
                        <Link to="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
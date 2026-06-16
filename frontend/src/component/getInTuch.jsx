/* eslint-disable react/prop-types */
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";


export default function GetInTuch({title}){
    return(
        <div className="container relative md:mt-24 mt-16 ">
          <div className="grid grid-cols-1 text-center">
            {title=== true ? <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Contact Us</h6> :""}
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Have Question ? Get in touch!</h3>

            <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>

            <div className="mt-6">
              <Link to="/contact-one" className="py-2 px-5 inline-flex font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4"><FiPhone className="me-1 text-lg"/> Contact us</Link>
            </div>
          </div>
        </div>
    )
}
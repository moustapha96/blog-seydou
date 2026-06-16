import { Link } from "react-router-dom";
import logo_light from '../../assets/images/logo-light.png';
import { PiShoppingCart } from "react-icons/pi";
import { FaBehance, FaDribbble, FaFacebookF, FaInstagram, FaLinkedin, FaRegEnvelope, FaRegFile, FaTwitter } from "react-icons/fa";

export default function SmallFooter(){
    return(
            <footer className="relative bg-slate-900 dark:bg-slate-800 text-gray-200 dark:text-gray-200">
                <div className="py-[30px] px-0 border border-gray-800 dark:border-gray-700">
                    <div className="container relative text-center">
                        <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
                            <div className="lg:col-span-2 md:text-start text-center">
                                <Link to="/#" className="text-[22px] focus:outline-none">
                                    <img src={logo_light} className="mx-auto md:me-auto md:ms-0" alt="" />
                                </Link>
                            </div>

                            <div className="lg:col-span-6 text-center mt-6 md:mt-0">
                                <p className="mb-0">© {new Date().getFullYear()} Techwind. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>

                            <ul className="lg:col-span-4 list-none space-x-1 md:text-end text-center mt-6 md:mt-0">
                                <li className="inline"><Link to="https://1.envato.market/techwind-react" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-gray-700 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><PiShoppingCart className='text-sm'/></Link></li>
                                <li className="inline"><Link to="https://dribbble.com/shreethemes" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-gray-700 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaDribbble className='text-sm'/></Link></li>
                                <li className="inline"><Link to="https://www.behance.net/shreethemes" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-gray-700 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaBehance className='text-sm'/></Link></li>
                                <li className="inline"><Link to="http://linkedin.com/company/shreethemes" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-gray-700 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaLinkedin className='text-sm'/></Link></li>
                                <li className="inline"><Link to="https://www.facebook.com/shreethemes" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-gray-700 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaFacebookF className='text-sm'/></Link></li>
                                <li className="inline"><Link to="https://www.instagram.com/shreethemes/" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-gray-700 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaInstagram className='text-sm'/></Link></li>
                                <li className="inline"><Link to="https://twitter.com/shreethemes" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-gray-700 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaTwitter className='text-sm'/></Link></li>
                                <li className="inline"><Link to="mailto:support@shreethemes.in" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-gray-700 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaRegEnvelope  className=" text-sm"/></Link></li>
                                <li className="inline"><Link to="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-gray-700 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaRegFile className='text-sm'/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
    )
}
import { Link } from 'react-router-dom';
import logo_light from '../../assets/images/logo-dark.png';
import logo_dark from "../../assets/images/logo-light.png";
import american_ex from '../../assets/images/payments/american-ex.png';
import discover from '../../assets/images/payments/discover.png';
import master_card from '../../assets/images/payments/master-card.png';
import paypal from '../../assets/images/payments/paypal.png';
import visa from '../../assets/images/payments/visa.png';
import * as Icon from 'react-feather';

import { footerCompany, footerLinks } from '../../data/data';
import { PiShoppingCart } from 'react-icons/pi';
import { FaBehance, FaDribbble, FaFacebookF, FaInstagram, FaLinkedin, FaRegEnvelope, FaRegFile, FaTwitter } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function TransparentFooter(){
   return(
    <footer className="footer bg-transparent relative text-slate-400">
        <div className="container relative">
            <div className="grid grid-cols-12">
                <div className="col-span-12">
                    <div className="py-[60px] px-0">
                        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                            <div className="lg:col-span-4 md:col-span-12">
                                <Link to="/#" className="text-[22px] focus:outline-none dark:hidden block">
                                    <img src={logo_light} alt="" />
                                </Link>
                                <Link to="/#" className="text-[22px] focus:outline-none dark:block hidden">
                                    <img src={logo_dark} alt="" />
                                </Link>
                                <p className="mt-6 ">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                <ul className="list-none mt-5 space-x-1 space-y-1">
                                    <li className="inline"><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><PiShoppingCart className='text-sm'/></Link></li>
                                    <li className="inline"><Link to="https://dribbble.com/shreethemes" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaDribbble className='text-sm'/></Link></li>
                                    <li className="inline"><Link to="https://www.behance.net/shreethemes" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaBehance className='text-sm'/></Link></li>
                                    <li className="inline"><Link to="http://linkedin.com/company/shreethemes" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaLinkedin className='text-sm'/></Link></li>
                                    <li className="inline"><Link to="https://www.facebook.com/shreethemes" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaFacebookF className='text-sm'/></Link></li>
                                    <li className="inline"><Link to="https://www.instagram.com/shreethemes/" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaInstagram className='text-sm'/></Link></li>
                                    <li className="inline"><Link to="https://twitter.com/shreethemes" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaTwitter className='text-sm'/></Link></li>
                                    <li className="inline"><Link to="mailto:support@shreethemes.in" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaRegEnvelope  className=" text-sm"/></Link></li>
                                    <li className="inline"><Link to="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaRegFile className='text-sm'/></Link></li>
                                </ul>
                            </div>

                            <div className="lg:col-span-2 md:col-span-4">
                                <h5 className="tracking-[1px] text-black dark:text-white font-semibold">Company</h5>
                                <ul className="list-none footer-list mt-6">
                                    {footerCompany.map((data, index) => (
                                        <li key={index} className={data.liClass}><Link to={data.route} className=" hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> {data.title}</Link></li>
                                    ))}
                                </ul>
                            </div>

                            <div className="lg:col-span-3 md:col-span-4">
                                <h5 className="tracking-[1px] text-black dark:text-white font-semibold">Usefull Links</h5>
                                <ul className="list-none footer-list mt-6">
                                    {footerLinks.map((data, index) => (
                                        <li key={index} className={data.liClass}><Link to={data.route} className=" hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> {data.title}</Link></li>
                                    ))}
                                </ul>
                            </div>

                            <div className="lg:col-span-3 md:col-span-4">
                                <h5 className="tracking-[1px] text-black dark:text-white font-semibold">Newsletter</h5>
                                <p className="mt-6">Sign up and receive the latest tips via email.</p>
                                <form>
                                    <div className="grid grid-cols-1">
                                        <div className="foot-subscribe my-3">
                                            <label className="form-label">Write your email <span className="text-red-600">*</span></label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.Mail className="size-4 absolute top-3 start-4" />
                                                <input type="email" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email" name="email" required="" />
                                            </div>
                                        </div>

                                        <button type="submit" id="submitsubscribe" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-[30px] px-0 border-t border-gray-100 dark:border-slate-800">
            <div className="container relative text-center">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="md:text-start text-center">
                        <p className="mb-0">© {new Date().getFullYear()} Techwind. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                    </div>

                    <ul className="list-none md:text-end text-center mt-6 md:mt-0 space-x-1">
                        <li className="inline"><Link to="#"><img src={american_ex} className="max-h-6 inline" title="American Express" alt="" /></Link></li>
                        <li className="inline"><Link to="#"><img src={discover} className="max-h-6 inline" title="Discover" alt="" /></Link></li>
                        <li className="inline"><Link to="#"><img src={master_card} className="max-h-6 inline" title="Master Card" alt="" /></Link></li>
                        <li className="inline"><Link to="#"><img src={paypal} className="max-h-6 inline" title="Paypal" alt="" /></Link></li>
                        <li className="inline"><Link to="#"><img src={visa} className="max-h-6 inline" title="Visa" alt="" /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
   )
}
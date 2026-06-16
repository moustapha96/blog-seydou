import Navbar from '../../component/Navbar/navbar'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight, MdOutlineCheckCircle } from 'react-icons/md'
import bg from '../../assets/images/services.jpg'
import aboutImg from '../../assets/images/saas/classic02.png'
import { FiArrowRight, FiBook, FiChevronRight, FiMail, FiMessageCircle, FiUser } from 'react-icons/fi'
import { servicesData } from '../../data/data-six'
import contact from '../../assets/images/contact.svg'
import Footer from '../../component/Footer/footer'
import { useEffect } from 'react'

export default function PageServiceDetail() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });
  return (
    <>
    <Navbar navClass="" navJustify=""/> 
    <section className="relative pb-16 pt-24">
        <div className="container relative">
            <div className="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-semibold">Business Consultation</h3>

                <ul className="tracking-[0.5px] mb-0 inline-flex items-center mt-4 justify-center">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out  hover:text-indigo-600"><Link to="/">Techwind</Link></li>
                    <li className="inline-block text-base  mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out  hover:text-indigo-600"><Link to="/page-services">Services</Link></li>
                    <li className="inline-block text-base  mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600" aria-current="page">Business Consultation</li>
                </ul>
            </div>
        </div>
    </section>

    <section className="relative table w-full py-44 bg-no-repeat bg-center bg-cover bg-fixed" style={{backgroundImage:`url(${bg})`}}></section>

        <section className="relative md:pb-24 pb-16">
            <div className="container relative -mt-10">
                <div className="grid grid-cols-1">
                    <div className="rounded-md shadow-sm dark:shadow-slate-800 bg-white dark:bg-slate-900 p-6">
                        <p className="text-slate-400 text-lg">Suspendisse tellus dolor, lacinia vitae sapien porttitor, pos uere euismod justo. Curabitur enim neque, auctor ac iaculis vitae, efficitur quis lectus. Class aptent taciti sociosqu ad litora torquent per conubiays nostra, per inceptos himenaeos. Sed eleifend risus faucibus tortor accumsan erat volutpat.</p>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <img src={aboutImg} className="rounded-lg shadow-md dark:shadow-gray-800" alt=""/>

                    <div className="lg:ms-8">
                        <h4 className="mb-4 text-2xl leading-normal font-medium">Great Product Analytics <br/> With Real Problem</h4>
                        <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-2 flex ms-0"><MdOutlineCheckCircle  className="text-indigo-600 text-xl me-2"/> Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-2 flex ms-0"><MdOutlineCheckCircle  className="text-indigo-600 text-xl me-2"/> Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-2 flex ms-0"><MdOutlineCheckCircle  className="text-indigo-600 text-xl me-2"/> Create your own skin to match your brand</li>
                        </ul>

                        <div className="mt-4">
                            <Link to="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Find Out More <FiChevronRight className="align-middle"/></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                    {servicesData.map((item,index)=>{
                        let Icon = item.icon
                        return(
                            <div className={`p-6  duration-500 rounded-2xl mt-6 text-center ${item.id === 2 ? 'shadow-xl shadow-gray-100 dark:shadow-gray-800' : 'hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800'}`} key={index}>
                                <div className="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                    <Icon className=""/>
                                </div>

                                <div className="content mt-7">
                                    <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
                                    
                                    <div className="mt-5">
                                        <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <FiArrowRight className=""/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-7 md:col-span-6">
                        <img src={contact} alt=""/>
                    </div>

                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="lg:ms-5">
                            <div className="bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-800 p-6">
                                <h3 className="mb-6 text-2xl leading-normal font-medium">Need Consultation? Let&apos;s Talk.</h3>

                                <form>
                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-start">
                                                <label htmlFor="name" className="font-semibold">Your Name:</label>
                                                <div className="form-icon relative mt-2">
                                                    <FiUser className="size-4 absolute top-3 start-4"/>
                                                    <input name="name" id="name" type="text" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name :"/>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-start">
                                                <label htmlFor="email" className="font-semibold">Your Email:</label>
                                                <div className="form-icon relative mt-2">
                                                    <FiMail className="size-4 absolute top-3 start-4"/>
                                                    <input name="email" id="email" type="email" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email :"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <div className="text-start">
                                                <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                                <div className="form-icon relative mt-2">
                                                    <FiBook className="size-4 absolute top-3 start-4"/>
                                                    <input name="subject" id="subject" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Subject :"/>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="mb-5">
                                            <div className="text-start">
                                                <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                                <div className="form-icon relative mt-2">
                                                    <FiMessageCircle className="size-4 absolute top-3 start-4"/>
                                                    <textarea name="comments" id="comments" className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center">Send Message</button>
                                </form>
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

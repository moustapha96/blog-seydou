import { useEffect} from 'react'
import { Link } from 'react-router-dom';

import about1 from '../../assets/images/photography/about.jpg';

import CountUp from 'react-countup';

import PhotographyNavbar from '../../component/Navbar/photographyNavbar';
import PhotographyFooter from '../../component/Footer/photographyFooter';
import GetInTuch from '../../component/getInTuch';

import { photographyBrand } from '../../data/dataFive';
import { FaArrowRight } from 'react-icons/fa';

export default function PhotographyAbout() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('dark')
        htmlTag.classList.remove('light')
    },[]);

    return (
        <>
           <PhotographyNavbar/>
            <section className="relative md:py-56 py-44 bg-[url('../../assets/images/photography/photographer.jpg')] bg-cover jarallax bg-fixed" id="aboutme">
                <div className="absolute inset-0 size-full bg-gradient-to-t to-transparent via-white/80 dark:via-slate-900/80 from-white dark:from-slate-900"></div>

                <div className="absolute text-center p-6 bottom-0 start-0 end-0">
                    <h5 className="text-slate-900 dark:text-white/70 font-semibold text-lg">I&apos;m Jack Jeffrey</h5>
                    <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-bold">About Me</h3>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1">
                        <div className="rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden">
                            <div className="md:flex items-center">
                                <div className="relative md:shrink-0">
                                    <img src={about1} className="size-full object-cover lg:w-[500px] md:w-80 lg:h-full md:h-96" alt="" />
                                </div>

                                <div className="p-8">
                                    <div className="flex">
                                        <div className="w-1/2">
                                            <h2 className="text-3xl mb-2 font-bold"><CountUp className="counter-value" end={9} start={1} />+</h2>
                                            <h6 className="text-slate-400 mb-0">Years of Experience</h6>
                                        </div>
                                        <div className="w-1/2">
                                            <h2 className="text-3xl mb-2 font-bold"><CountUp className="counter-value" end={1542} start={40} />+</h2>
                                            <h6 className="text-slate-400 mb-0">Total Photo Click</h6>
                                        </div>
                                    </div>

                                    <p className="text-slate-400 dark:text-white mt-6">The most well-known dummy text is the &apos;Lorem Ipsum&apos;, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to &apos;proper&apos; Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.</p>

                                    <Link to="/contact-two" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 dark:text-white/70 dark:hover:text-white hover:text-indigo-600 after:bg-indigo-600 dark:after:bg-white duration-500 ease-in-out mt-6">Get in touch <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Brands</h3>

                        <p className="text-slate-400 max-w-2xl mx-auto">As a Freelance Designer & Developer, I am here to make you stand out in the digital world and my passion for design and your vision will ensure a great end result.</p>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center gap-[30px]">

                        {photographyBrand.map((data,index) => {
                            return (
                                <div className="mx-auto" key={index}>
                                    <img src={data} className="size-[110px] grayscale hover:grayscale-0 duration-500 ease-in-out" alt="" />
                                </div>
                            )
                        })}

                    </div>
                </div>

               <GetInTuch/>
            </section>
            <PhotographyFooter/>
        </>
    )
}

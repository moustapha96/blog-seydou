import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import BlogComment from '../../component/blogComment';
import BlogSidebar from '../../component/blogSidebar';
import { useEffect } from 'react';

export default function BlogBlockquotePost() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });
    return (
        <>
            <Navbar />
            <section className="relative md:pb-24 md:pt-40 pb-16 pt-36">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-6">
                            <div className="relative">
                                <div className="relative py-10 px-12 border-2 border-indigo-600 rounded-[30px] before:content-[''] before:absolute before:w-28 before:border-[6px] before:border-white dark:before:border-slate-900 before:-bottom-1 before:start-16 before:z-2 after:content-[''] after:absolute after:border-2 after:border-indigo-600 after:rounded-none after:rounded-e-[50px] after:w-20 after:h-20 after:-bottom-[80px] after:start-[60px] after:z-3 after:border-s-0 after:border-b-0">
                                    <span className="font-semibold text-2xl leading-normal">
                                        Launch your campaign and benefit from our expertise on designing and managing conversion centered latest Tailwind CSS html page.
                                    </span>

                                    <div className="absolute text-8xl -top-0 start-4 text-indigo-600/10 dark:text-indigo-600/20 -z-1">
                                        <i className="mdi mdi-format-quote-open"></i>
                                    </div>
                                </div>

                                <div className="text-lg font-semibold mt-6 ms-44">
                                    - Shreethemes
                                </div>
                            </div>

                            <BlogComment/>
                        </div>

                        <BlogSidebar/>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="md:flex justify-center">
                        <div className="lg:w-2/3 text-center">
                            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold mb-6">Subscribe our weekly subscription</h3>

                            <p className="text-slate-400 max-w-xl mx-auto">Add some text to explain benefits of subscripton on your services. We&apos;ll send you the best of our blog just once a weekly.</p>

                            <div className="mt-8">
                                <div className="text-center subcribe-form">
                                    <form className="relative mx-auto max-w-xl">
                                        <input type="email" id="subemail" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700" placeholder="Enter your email id.." />
                                        <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Subcribe Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />

       


         



           


        </>
    )
}

import { Link } from 'react-router-dom';

import logo_icon_64 from '../../assets/images/logo-icon-64.png';
import error from '../../assets/images/error.png';
import { useEffect } from 'react';

export default function PageError() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });
    return (
        <>
            <section className="relative bg-indigo-600/5">
                <div className="container-fluid relative">
                    <div className="grid grid-cols-1">
                        <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                            <div className="text-center">
                                <Link to="/"><img src={logo_icon_64} className="mx-auto" alt="" /></Link>
                            </div>
                            <div className="title-heading text-center my-auto">
                                <img src={error} className="mx-auto" alt="" />
                                <h1 className="mt-3 mb-6 md:text-5xl text-3xl font-bold">Page Not Found?</h1>
                                <p className="text-slate-400">Whoops, this is embarassing. <br /> Looks like the page you were looking for wasn&apos;t found.</p>

                                <div className="mt-4">
                                    <Link to="/" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Back to Home</Link>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="mb-0 text-slate-400">© {new Date().getFullYear()} Techwind. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

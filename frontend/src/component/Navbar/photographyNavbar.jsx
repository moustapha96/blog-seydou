/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

import logo_dark from '../../assets/images/logo-dark.png';
import logo_light from '../../assets/images/logo-light.png';

import * as Icon from 'react-feather'

export default function PhotographyNavbar(){
    let [isMenu, setisMenu] = useState(false);
    let [navbarSticky , setNavbarSticky] = useState(false);

    let [manu , setManu] = useState('');
    let location = useLocation();

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('dark')
        htmlTag.classList.remove('light');

        function windowScroll(){
            setNavbarSticky( document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50);
        }
        window.addEventListener("scroll", windowScroll);

        window.scrollTo(0, 0)

        let current = location.pathname
        setManu(current)

        return () => {
            window.removeEventListener('scroll', windowScroll);
        };

    },[]);

    
    const toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };
   

   
        return(
            <nav  id="topnav" className={`${navbarSticky ? "nav-sticky" :" defaultscroll"}`}>
                <div className="container relative">
                    <Link className="logo" to="/">
                        <span className="inline-block dark:hidden">
                            <img src={logo_dark} className="l-dark" height="24" alt="" />
                            <img src={logo_light} className="l-light" height="24" alt="" />
                        </span>
                        <img src={logo_light} height="24" className="hidden dark:inline-block" alt="" />
                    </Link>

                    <div className="menu-extras">
                        <div className="menu-item">
                            <Link className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <ul className="buy-button list-none space-x-1 mb-0">
                        <li className="inline mb-0">
                            <Link to="/" className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><Icon.Settings className="size-4"></Icon.Settings></Link>
                        </li>

                        <li className="inline ps-1 mb-0">
                            <Link to="#" className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><Icon.ShoppingCart className="size-4"></Icon.ShoppingCart></Link>
                        </li>
                    </ul>

                    <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                        <ul className="navigation-menu nav-light justify-end">
                            <li className={manu === "/index-photography" ? "active" : ""}><Link to="/index-photography" className="sub-menu-item">Home</Link></li>
                            <li className={manu === "/photography-about" ? "active" : ""}><Link to="/photography-about" className="sub-menu-item">About Us</Link></li>
                            <li className={manu === "/photography-portfolio" ? "active" : ""}><Link to="/photography-portfolio" className="sub-menu-item">Portfolio</Link></li>
                            <li className={manu === "/contact-two" ? "active" : ""}><Link to="/contact-two" className="sub-menu-item">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            )
        }
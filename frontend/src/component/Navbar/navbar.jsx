/* eslint-disable react/prop-types */
import logo_dark from '../../assets/images/logo-dark.png';
import logo_light from '../../assets/images/logo-light.png';
import '../../assets/libs/@mdi/font/css/materialdesignicons.min.css';
import '../../assets/css/tailwind.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import * as Icon from 'react-feather';

export default function Navbar(props) {
    const { navClass, navJustify,bg } = props;
    const [isMenu, setisMenu] = useState(false);
    const [manu , setManu] = useState('');
    
    const location = useLocation();
    
    useEffect(()=>{
        let current = location.pathname
        setManu(current)

        function windowScroll() {
            const navbar = document.getElementById("topnav");
            if (
                document.body.scrollTop >= 50 ||
                document.documentElement.scrollTop >= 50
            ) {
                if (navbar !== null) {
                    navbar?.classList.add("nav-sticky");
                }
            } else {
                if (navbar !== null) {
                    navbar?.classList.remove("nav-sticky");
                }
            }
        }
        window.addEventListener("scroll", windowScroll);
        window.scrollTo(0, 0)
        return () => {
            window.removeEventListener('scroll', windowScroll);
        };

    },[])
    

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


    return (
        <nav id="topnav" className={`defaultscroll ${navClass === "nav-light" ? '' : navClass === "nav-sticky" ?
        'bg-white dark:bg-slate-900' : ''} ${bg? '!bg-white dark:!bg-slate-900' : ''}`}>
        <div className="container relative">
            {
                navClass === "nav-light" ?
                    <Link className="logo" to="/">
                        <span className="inline-block dark:hidden">
                            <img src={logo_dark} className="l-dark" height="24" alt="" />
                            <img src={logo_light} className="l-light" height="24" alt="" />
                        </span>
                        <img src={logo_light} height="24" className="hidden dark:inline-block" alt="" />
                    </Link>
                    :
                    <Link className="logo" to="/">
                        <img src={logo_dark} className="inline-block dark:hidden" alt="" />
                        <img src={logo_light} className="hidden dark:inline-block" alt="" />
                    </Link>
            }

            <div className="menu-extras">
                <div className="menu-item">
                    <Link to="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                        <div className="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Link>
                </div>
            </div>

            {
                navClass !== 'nav-light' ? <ul className={`buy-button list-none space-x-1 mb-0`} >
                        <li className="inline mb-0">
                            <Link to="#" className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><Icon.Settings className="size-4" /></Link>
                        </li>

                        <li className="inline ps-1 mb-0">
                            <Link to="https://1.envato.market/techwind-react" target="_blank" className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><Icon.ShoppingCart className="size-4" /></Link>
                        </li>
                        
                    </ul>
                    :
                    <ul className="buy-button list-none space-x-1 mb-0">
                    <li className="inline mb-0">
                        <Link to="#">
                            <span className="login-btn-primary"><span className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><Icon.Settings className="size-4" /></span></span>
                            <span className="login-btn-light"><span className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><Icon.Settings className="size-4" /></span></span>
                        </Link>
                    </li>
            
                    <li className="inline ps-1 mb-0">
                        <Link to="https://1.envato.market/techwind-react" target="_blank">
                            <div className="login-btn-primary"><span className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><Icon.ShoppingCart className="size-4" /></span></div>
                            <div className="login-btn-light"><span className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><Icon.ShoppingCart className="size-4" /></span></div>
                        </Link>
                    </li>
                </ul>
            }
           
            <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                <ul className={`navigation-menu ${navClass} ${navJustify}`}>
                    <li className={manu === "/" || "" ? "active" : ""}><Link to="/" className="sub-menu-item">Home</Link></li>

                    <li className={`${["/index-saas", "/index-classic-saas","/index-modern-saas", "/index-apps","/index-classic-app","/index-ai","/index-smartwatch","/index-marketing","/index-seo","/index-software","/index-web-programming","/index-payment","/index-charity","/index-it-solution","/index-it-solution-two","/index-digital-agency","/index-restaurent","/index-hosting","/index-nft","/index-hotel","/index-travel","/index-cafe","/index-gym","/index-yoga","/index-spa","/index-cleaner","/index-job","/index-startup","/index-business","/index-corporate","/index-corporate-two","/index-real-estate","/index-consulting","/index-solar","/index-insurance","/index-construction","/index-law","/index-video","/index-personal","/index-portfolio","/index-photography","/index-studio","/index-coworking","/index-course","/index-event","/index-podcast","/index-hospital","/index-phone-number","/index-forums","/index-shop","/index-crypto","/index-landing-one","/index-landing-two","/index-landing-three","/index-landing-four","/index-service","/index-food-blog","/index-blog","/index-furniture","/index-landing-five","/index-life-coach","/index-landing-six"].includes(manu)? "active" : ""} has-submenu parent-parent-menu-item`} >
                        <Link to="#" >Landings</Link><span className="menu-arrow"></span>

                        <ul className="submenu megamenu">
                            <li>
                                <ul>
                                    <li className={manu === "/index-saas" || "" ? "active" : ""}><Link to="/index-saas" className="sub-menu-item">Saas<span className="bg-emerald-600 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Animation</span></Link></li>
                                    <li className={manu === "/index-classic-saas" || "" ? "active" : ""}><Link to="/index-classic-saas" className="sub-menu-item">Classic Saas </Link></li>
                                    <li className={manu === "/index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Modern Saas </Link></li>
                                    <li className={manu === "/index-apps" || "" ? "active" : ""}><Link to="/index-apps" className="sub-menu-item">Application</Link></li>
                                    <li className={manu === "/index-classic-app" || "" ? "active" : ""}><Link to="/index-classic-app" className="sub-menu-item">Classic App </Link></li>
                                    <li className={manu === "/index-ai" || "" ? "active" : ""}><Link to="/index-ai" className="sub-menu-item">AI Tools<span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></Link></li>
                                    <li className={manu === "/index-smartwatch" || "" ? "active" : ""}><Link to="/index-smartwatch" className="sub-menu-item">Smartwatch</Link></li>
                                    <li className={manu === "/index-marketing" || "" ? "active" : ""}><Link to="/index-marketing" className="sub-menu-item">Marketing</Link></li>
                                    <li className={manu === "/index-seo" || "" ? "active" : ""}><Link to="/index-seo" className="sub-menu-item">SEO Agency </Link></li>
                                    <li className={manu === "/index-software" || "" ? "active" : ""}><Link to="/index-software" className="sub-menu-item">Software </Link></li>
                                    <li className={manu === "/index-web-programming" || "" ? "active" : ""}><Link to="/index-web-programming" className="sub-menu-item">Web Programming</Link></li>
                                    <li className={manu === "/index-payment" || "" ? "active" : ""}><Link to="/index-payment" className="sub-menu-item">Payments</Link></li>
                                    <li className={manu === "/index-charity" || "" ? "active" : ""}><Link to="/index-charity" className="sub-menu-item">Charity </Link></li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li className={manu === "/index-it-solution" || "" ? "active" : ""}><Link to="/index-it-solution" className="sub-menu-item">IT Solution</Link></li>
                                    <li className={manu === "/index-it-solution-two" || "" ? "active" : ""}><Link to="/index-it-solution-two" className="sub-menu-item">It Solution Two </Link></li>
                                    <li className={manu === "/index-digital-agency" || "" ? "active" : ""}><Link to="/index-digital-agency" className="sub-menu-item">Digital Agency</Link></li>
                                    <li className={manu === "/index-restaurent" || "" ? "active" : ""}><Link to="/index-restaurent" className="sub-menu-item">Restaurent</Link></li>
                                    <li className={manu === "/index-hosting" || "" ? "active" : ""}><Link to="/index-hosting" className="sub-menu-item">Hosting</Link></li>
                                    <li className={manu === "/index-nft" || "" ? "active" : ""}><Link to="/index-nft" className="sub-menu-item">NFT Marketplace <span className="bg-red-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Full</span></Link></li>
                                    <li className={manu === "/index-hotel" || "" ? "active" : ""}><Link to="/index-hotel" className="sub-menu-item">Hotel & Resort</Link></li>
                                    <li className={manu === "/index-travel" || "" ? "active" : ""}><Link to="/index-travel" className="sub-menu-item">Travels</Link></li>
                                    <li className={manu === "/index-cafe" || "" ? "active" : ""}><Link to="/index-cafe" className="sub-menu-item">Cafe <span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></Link></li>
                                    <li className={manu === "/index-gym" || "" ? "active" : ""}><Link to="/index-gym" className="sub-menu-item">Gym <span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></Link></li>
                                    <li className={manu === "/index-yoga" || "" ? "active" : ""}><Link to="/index-yoga" className="sub-menu-item">Yoga </Link></li>
                                    <li className={manu === "/index-spa" || "" ? "active" : ""}><Link to="/index-spa" className="sub-menu-item">Spa & Salon </Link></li>
                                    <li className={manu === "/index-cleaner" || "" ? "active" : ""}><Link to="/index-cleaner" className="sub-menu-item">Cleaner Service</Link></li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li className={manu === "/index-job" || "" ? "active" : ""}><Link to="/index-job" className="sub-menu-item">Job<span className="bg-red-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Full</span></Link></li>
                                    <li className={manu === "/index-startup" || "" ? "active" : ""}><Link to="/index-startup" className="sub-menu-item">Startup</Link></li>
                                    <li className={manu === "/index-business" || "" ? "active" : ""}><Link to="/index-business" className="sub-menu-item">Business</Link></li>
                                    <li className={manu === "/index-corporate" || "" ? "active" : ""}><Link to="/index-corporate" className="sub-menu-item">Corporate</Link></li>
                                    <li className={manu === "/index-corporate-two" || "" ? "active" : ""}><Link to="/index-corporate-two" className="sub-menu-item">Corporate Two </Link></li>
                                    <li className={manu === "/index-real-estate" || "" ? "active" : ""}><Link to="/index-real-estate" className="sub-menu-item">Real Estate <span className="bg-red-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Full</span></Link></li>
                                    <li className={manu === "/index-consulting" || "" ? "active" : ""}><Link to="/index-consulting" className="sub-menu-item">Consulting </Link></li>
                                    <li className={manu === "/index-solar" || "" ? "active" : ""}><Link to="/index-solar" className="sub-menu-item">Solar / Green Energy <span className="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">New</span></Link></li>
                                    <li className={manu === "/index-life-coach" || "" ? "active" : ""}><Link to="/index-life-coach" className="sub-menu-item">Life Coach </Link></li>
                                    <li className={manu === "/index-insurance" || "" ? "active" : ""}><Link to="/index-insurance" className="sub-menu-item">Insurance </Link></li>
                                    <li className={manu === "/index-construction" || "" ? "active" : ""}><Link to="/index-construction" className="sub-menu-item">Construction </Link></li>
                                    <li className={manu === "/index-law" || "" ? "active" : ""}><Link to="/index-law" className="sub-menu-item">Law Firm </Link></li>
                                    <li className={manu === "/index-video" || "" ? "active" : ""}><Link to="/index-video" className="sub-menu-item">Video </Link></li>
                                    <li className={manu === "/index-christmas" || "" ? "active" : ""}><Link to="/index-christmas" className="sub-menu-item">Christmas </Link></li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li className={manu === "/index-personal" || "" ? "active" : ""}><Link to="/index-personal" className="sub-menu-item">Personal</Link></li>
                                    <li className={manu === "/index-portfolio" || "" ? "active" : ""}><Link to="/index-portfolio" className="sub-menu-item">Portfolio <span className="bg-red-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Full</span></Link></li>
                                    <li className={manu === "/index-photography" || "" ? "active" : ""}><Link to="/index-photography" className="sub-menu-item">Photography <span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></Link></li>
                                    <li className={manu === "/index-studio" || "" ? "active" : ""}><Link to="/index-studio" className="sub-menu-item">Studio</Link></li>
                                    <li className={manu === "/index-coworking" || "" ? "active" : ""}><Link to="/index-coworking" className="sub-menu-item">Co-Woriking</Link></li>
                                    <li className={manu === "/index-classic-business" || "" ? "active" : ""}><Link to="/index-classic-business" className="sub-menu-item">Classic Business </Link></li>
                                    <li className={manu === "/index-course" || "" ? "active" : ""}><Link to="/index-course" className="sub-menu-item">Online Courses </Link></li>
                                    <li className={manu === "/index-event" || "" ? "active" : ""}><Link to="/index-event" className="sub-menu-item">Event / Conference </Link></li>
                                    <li className={manu === "/index-podcast" || "" ? "active" : ""}><Link to="/index-podcast" className="sub-menu-item">Podcasts</Link></li>
                                    <li className={manu === "/index-hospital" || "" ? "active" : ""}><Link to="/index-hospital" className="sub-menu-item">Hospital</Link></li>
                                    <li className={manu === "/index-phone-number" || "" ? "active" : ""}><Link to="/index-phone-number" className="sub-menu-item">Phone Number</Link></li>
                                    <li className={manu === "/index-forums" || "" ? "active" : ""}><Link to="/index-forums" className="sub-menu-item">Forums </Link></li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li className={manu === "/index-shop" || "" ? "active" : ""}><Link to="/index-shop" className="sub-menu-item">Shop / eCommerce <span className="bg-red-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Full</span> </Link></li>
                                    <li className={manu === "/index-crypto" || "" ? "active" : ""}><Link to="/index-crypto" className="sub-menu-item">Cryptocurrency  <span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></Link></li>
                                    <li className={manu === "/index-landing-one" || "" ? "active" : ""}><Link to="/index-landing-one" className="sub-menu-item">Landing One</Link></li>
                                    <li className={manu === "/index-landing-two" || "" ? "active" : ""}><Link to="/index-landing-two" className="sub-menu-item">Landing Two</Link></li>
                                    <li className={manu === "/index-landing-three" || "" ? "active" : ""}><Link to="/index-landing-three" className="sub-menu-item">Landing Three</Link></li>
                                    <li className={manu === "/index-landing-four" || "" ? "active" : ""}><Link to="/index-landing-four" className="sub-menu-item">Landing Four</Link></li>
                                    <li className={manu === "/index-landing-six" || "" ? "active" : ""}><Link to="/index-landing-six" className="sub-menu-item">Landing Six </Link></li>
                                    <li className={manu === "/index-service" || "" ? "active" : ""}><Link to="/index-service" className="sub-menu-item">Service Provider</Link></li>
                                    <li className={manu === "/index-food-blog" || "" ? "active" : ""}><Link to="/index-food-blog" className="sub-menu-item">Food Blog </Link></li>
                                    <li className={manu === "/index-blog" || "" ? "active" : ""}><Link to="/index-blog" className="sub-menu-item">Blog </Link></li>
                                    <li className={manu === "/index-furniture" || "" ? "active" : ""}><Link to="/index-furniture" className="sub-menu-item">Furniture </Link></li>
                                    <li className={manu === "/index-landing-five" || "" ? "active" : ""}><Link to="/index-landing-five" className="sub-menu-item">Landing Five <span className="bg-green-600 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Onepage</span></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li className={`${["/page-aboutus", "/page-services","/page-team", "/page-pricing","/page-testimonial","/user-profile","/user-billing","/user-payment","/user-invoice","/user-notification","/user-setting","/property-listing","/property-detail","/course-listing","/course-detail","/nft-explore","/nft-auction","/nft-collection","/nft-creators","/nft-creator-profile","/nft-creator-profile-edit","/nft-wallet","/nft-create-item","/nft-detail","/food-recipe","/shop-grid","/shop-grid","/shop-grid-two","/shop-item-detail","/shop-cart","/shop-checkout","/food-recipe","/shop-grid","/shop-grid-two","/shop-item-detail","/shop-cart","/shop-checkout","/shop-account","/food-recipe","/shop-grid","/shop-grid-two","/shop-item-detail","/shop-cart","/shop-checkout","/shop-account","/photography-about","/photography-portfolio","/page-job-grid","/page-job-detail","/page-job-apply","/page-job-post","/page-job-career","/page-job-candidates","/page-job-candidate-detail","/page-job-companies","/page-Job-company-detail","/forums-topic","/forums-comments","/helpcenter-overview","/helpcenter-faqs","/helpcenter-guides","/helpcenter-support","/blog","/blog-sidebar","/blog-detail","/blog-standard-post","/blog-slider-post","/blog-gallery-post","/blog-youtube-post","/blog-vimeo-post","/blog-audio-post","/blog-blockquote-post","/blog-left-sidebar-post","/email-confirmation","/email-password-reset","/email-alert","/email-invoice","/auth-login","/auth-signup","/auth-re-password","/auth-lock-screen","/page-terms","/page-privacy","/page-comingsoon","/page-maintenance","/page-error","/page-thankyou","/contact-detail","/contact-one","/contact-two","/page-services","/page-service-detail"].includes(manu)? "active" : ""} has-submenu parent-parent-menu-item`}>
                        <Link to="#!">Pages</Link><span className="menu-arrow"></span>
                        <ul className="submenu">
                            <li className={`${["/page-aboutus", "/page-services","/page-team", "/page-pricing", "/page-testimonial","/page-services","/page-service-detail"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> Company </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/page-aboutus" || "" ? "active" : ""}><Link to="/page-aboutus" className="sub-menu-item"> About Us</Link></li>

                                    <li className={`has-submenu child-menu-item ${["/page-services","/page-service-detail"].includes(manu)? "active" : ""}`}><Link to="#"> Services <span className="bg-indigo-600 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Added</span></Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li className={manu === "/page-services" || "" ? "active" : ""}><Link to="/page-services" className="sub-menu-item">Services</Link></li>
                                            <li className={manu === "/page-service-detail" || "" ? "active" : ""}><Link to="/page-service-detail" className="sub-menu-item">Service Detail </Link></li>
                                        </ul>  
                                    </li>

                                    <li className={manu === "/page-team" || "" ? "active" : ""}><Link to="/page-team" className="sub-menu-item"> Team</Link></li>
                                    <li className={manu === "/page-pricing" || "" ? "active" : ""}><Link to="/page-pricing" className="sub-menu-item">Pricing</Link></li>
                                    <li className={manu === "/page-testimonial" || "" ? "active" : ""}><Link to="/page-testimonial" className="sub-menu-item">Testimonial </Link></li>
                                </ul>
                            </li>
                            <li className={`${["/user-profile", "/user-billing","/user-payment", "/user-invoice", "/user-social","/user-notification","/user-setting"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> Accounts</Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/user-profile" || "" ? "active" : ""}><Link to="/user-profile" className="sub-menu-item">User Profile</Link></li>
                                    <li className={manu === "/user-billing" || "" ? "active" : ""}><Link to="/user-billing" className="sub-menu-item">Billing</Link></li>
                                    <li className={manu === "/user-payment" || "" ? "active" : ""}><Link to="/user-payment" className="sub-menu-item">Payment</Link></li>
                                    <li className={manu === "/user-invoice" || "" ? "active" : ""}><Link to="/user-invoice" className="sub-menu-item">Invoice</Link></li>
                                    <li className={manu === "/user-social" || "" ? "active" : ""}><Link to="/user-social" className="sub-menu-item">Social</Link></li>
                                    <li className={manu === "/user-notification" || "" ? "active" : ""}><Link to="/user-notification" className="sub-menu-item">Notification</Link></li>
                                    <li className={manu === "/user-setting" || "" ? "active" : ""}><Link to="/user-setting" className="sub-menu-item">Setting</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/property-listing", "/property-detail"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> Real Estate</Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/property-listing" || "" ? "active" : ""}><Link to="/property-listing" className="sub-menu-item">Listing</Link></li>
                                    <li className={manu === "/property-detail" || "" ? "active" : ""}><Link to="/property-detail" className="sub-menu-item">Property Detail</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/course-listing", "/course-detail"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> Courses </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/course-listing" || "" ? "active" : ""}><Link to="/course-listing" className="sub-menu-item">Course Listing</Link></li>
                                    <li className={manu === "/course-detail" || "" ? "active" : ""}><Link to="/course-detail" className="sub-menu-item">Course Detail</Link></li>
                                </ul>
                            </li>

                            <li className={`${["/nft-explore", "/nft-auction","/nft-collection","/nft-creators","/nft-creator-profile","/nft-creator-profile-edit","/nft-wallet","/nft-create-item","/nft-detail"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link to="#">  NFT Market </Link><span className="submenu-arrow"></span>
                            <ul className="submenu">
                                    <li className={manu === "/nft-explore" || "" ? "active" : ""}><Link to="/nft-explore" className="sub-menu-item">Explore</Link></li>
                                    <li className={manu === "/nft-auction" || "" ? "active" : ""}><Link to="/nft-auction" className="sub-menu-item">Auction</Link></li>
                                    <li  className={manu === "/nft-collection" || "" ? "active" : ""}><Link to="/nft-collection" className="sub-menu-item">Collections</Link></li>
                                    <li className={`${["/nft-creators", "/nft-creator-profile","/nft-creator-profile-edit"].includes(manu)? "active" : ""} has-submenu child-menu-item`}><Link to="#"> Creator  </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li className={manu === "/nft-creators" || "" ? "active" : ""}><Link to="/nft-creators" className="sub-menu-item"> Creators</Link></li>
                                            <li className={manu === "/nft-creator-profile" || "" ? "active" : ""}><Link to="/nft-creator-profile" className="sub-menu-item"> Creator Profile </Link></li>
                                            <li className={manu === "/nft-creator-profile-edit" || "" ? "active" : ""}><Link to="/nft-creator-profile-edit" className="sub-menu-item"> Profile Edit </Link></li>
                                        </ul>
                                    </li>
                                    <li className={manu === "/nft-wallet" || "" ? "active" : ""}><Link to="/nft-wallet" className="sub-menu-item">Wallet</Link></li>
                                    <li className={manu === "/nft-create-item" || "" ? "active" : ""}><Link to="/nft-create-item" className="sub-menu-item">Create NFT</Link></li>
                                    <li className={manu === "/nft-detail" || "" ? "active" : ""}><Link to="/nft-detail" className="sub-menu-item">Single NFT</Link></li>
                                </ul>
                            </li>

                            <li className={manu === "/food-recipe" || "" ? "active" : ""}><Link to="/food-recipe" className="sub-menu-item">Food Recipe </Link></li>
                            <li className={`${["/shop-grid", "/shop-grid-two","/shop-item-detail","/shop-cart","/shop-checkout","/shop-account"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> eCommerce </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/shop-grid" || "" ? "active" : ""}><Link to="/shop-grid" className="sub-menu-item">Product Grid</Link></li>
                                    <li className={manu === "/shop-grid-two" || "" ? "active" : ""}><Link to="/shop-grid-two" className="sub-menu-item">Product Grid Two</Link></li>
                                    <li className={manu === "/shop-item-detail" || "" ? "active" : ""}><Link to="/shop-item-detail" className="sub-menu-item">Product Detail</Link></li>
                                    <li className={manu === "/shop-cart" || "" ? "active" : ""}><Link to="/shop-cart" className="sub-menu-item">Shop Cart</Link></li>
                                    <li className={manu === "/shop-checkout" || "" ? "active" : ""}><Link to="/shop-checkout" className="sub-menu-item">Checkout</Link></li>
                                    <li className={manu === "/shop-account" || "" ? "active" : ""}><Link to="/shop-account" className="sub-menu-item">My Account</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/photography-about", "/photography-portfolio"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> Photography </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/photography-about" || "" ? "active" : ""}><Link to="/photography-about" className="sub-menu-item">About Us</Link></li>
                                    <li className={manu === "/photography-portfolio" || "" ? "active" : ""}><Link to="/photography-portfolio" className="sub-menu-item">Portfolio</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/page-job-grid", "/page-job-detail","/page-job-apply","/page-job-post","/page-job-career","/page-job-candidates","/page-job-candidate-detail","/page-job-companies","/page-Job-company-detail"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> Job / Careers </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/page-job-grid" || "" ? "active" : ""}><Link to="/page-job-grid" className="sub-menu-item">All Jobs</Link></li>
                                    <li className={manu === "/page-job-detail" || "" ? "active" : ""}><Link to="/page-job-detail" className="sub-menu-item">Job Detail</Link></li>
                                    <li className={manu === "/page-job-apply" || "" ? "active" : ""}><Link to="/page-job-apply" className="sub-menu-item">Job Apply</Link></li>
                                    <li className={manu === "/page-job-post" || "" ? "active" : ""}><Link to="/page-job-post" className="sub-menu-item">Job Post </Link></li>
                                    <li className={manu === "/page-job-career" || "" ? "active" : ""}><Link to="/page-job-career" className="sub-menu-item">Job Career </Link></li>
                                    <li className={manu === "/page-job-candidates" || "" ? "active" : ""}><Link to="/page-job-candidates" className="sub-menu-item">Job Candidates</Link></li>
                                    <li className={manu === "/page-job-candidate-detail" || "" ? "active" : ""}><Link to="/page-job-candidate-detail" className="sub-menu-item">Candidate Detail</Link></li>
                                    <li className={manu === "/page-job-companies" || "" ? "active" : ""}><Link to="/page-job-companies" className="sub-menu-item">All Companies</Link></li>
                                    <li className={manu === "/page-Job-company-detail" || "" ? "active" : ""}><Link to="/page-Job-company-detail" className="sub-menu-item">Company Detail</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/forums-topic", "/forums-comments"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> Forums </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/forums-topic" || "" ? "active" : ""}><Link to="/forums-topic" className="sub-menu-item">Forum Topic</Link></li>
                                    <li className={manu === "/forums-comments" || "" ? "active" : ""}><Link to="/forums-comments" className="sub-menu-item">Forum Comments</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/helpcenter-overview", "/helpcenter-faqs","/helpcenter-guides","/helpcenter-support"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> Helpcenter </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/helpcenter-overview" || "" ? "active" : ""}><Link to="/helpcenter-overview" className="sub-menu-item">Overview</Link></li>
                                    <li className={manu === "/helpcenter-faqs" || "" ? "active" : ""}><Link to="/helpcenter-faqs" className="sub-menu-item">FAQs</Link></li>
                                    <li className={manu === "/helpcenter-guides" || "" ? "active" : ""}><Link to="/helpcenter-guides" className="sub-menu-item">Guides</Link></li>
                                    <li className={manu === "/helpcenter-support" || "" ? "active" : ""}><Link to="/helpcenter-support" className="sub-menu-item">Support</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/blog", "/blog-sidebar","/blog-detail","/helpcenter-support","/blog-standard-post","/blog-slider-post","/blog-gallery-post","/blog-youtube-post","/blog-vimeo-post","/blog-audio-post","/blog-blockquote-post","/blog-left-sidebar-post"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> Blog </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/blog" || "" ? "active" : ""}><Link to="/blog" className="sub-menu-item">Blogs</Link></li>
                                    <li className={manu === "/blog-sidebar" || "" ? "active" : ""}><Link to="/blog-sidebar" className="sub-menu-item">Blogs & Sidebar</Link></li>
                                    <li className={manu === "/blog-detail" || "" ? "active" : ""}><Link to="/blog-detail" className="sub-menu-item">Blog Detail</Link></li>
                                    <li className={`${["/blog-standard-post","/blog-slider-post","/blog-gallery-post","/blog-youtube-post","/blog-vimeo-post","/blog-audio-post","/blog-blockquote-post","/blog-left-sidebar-post"].includes(manu)? "active" : ""} has-submenu child-menu-item`}><Link to="#"> Blog Posts </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li className={manu === "/blog-standard-post" || "" ? "active" : ""}><Link to="/blog-standard-post" className="sub-menu-item">Standard Post</Link></li>
                                            <li className={manu === "/blog-slider-post" || "" ? "active" : ""}><Link to="/blog-slider-post" className="sub-menu-item">Slider Post</Link></li>
                                            <li className={manu === "/blog-gallery-post" || "" ? "active" : ""}><Link to="/blog-gallery-post" className="sub-menu-item">Gallery Post</Link></li>
                                            <li className={manu === "/blog-youtube-post" || "" ? "active" : ""}><Link to="/blog-youtube-post" className="sub-menu-item">Youtube Post</Link></li>
                                            <li className={manu === "/blog-vimeo-post" || "" ? "active" : ""}><Link to="/blog-vimeo-post" className="sub-menu-item">Vimeo Post</Link></li>
                                            <li className={manu === "/blog-audio-post" || "" ? "active" : ""}><Link to="/blog-audio-post" className="sub-menu-item">Audio Post</Link></li>
                                            <li className={manu === "/blog-blockquote-post" || "" ? "active" : ""}><Link to="/blog-blockquote-post" className="sub-menu-item">Blockquote</Link></li>
                                            <li z><Link to="/blog-left-sidebar-post" className="sub-menu-item">Left Sidebar</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className={`${["/email-confirmation", "/email-password-reset","/email-alert","/email-invoice"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> Email Template</Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/email-confirmation" || "" ? "active" : ""}><Link to="/email-confirmation" className="sub-menu-item">Confirmation</Link></li>
                                    <li className={manu === "/email-password-reset" || "" ? "active" : ""}><Link to="/email-password-reset" className="sub-menu-item">Reset Password</Link></li>
                                    <li className={manu === "/email-alert" || "" ? "active" : ""}><Link to="/email-alert" className="sub-menu-item">Alert</Link></li>
                                    <li className={manu === "/email-invoice" || "" ? "active" : ""}><Link to="/email-invoice" className="sub-menu-item">Invoice</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/auth-login", "/auth-signup","/auth-re-password","/auth-lock-screen"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> Auth Pages </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/auth-login" || "" ? "active" : ""}><Link to="/auth-login" className="sub-menu-item">Login</Link></li>
                                    <li className={manu === "/auth-signup" || "" ? "active" : ""}><Link to="/auth-signup" className="sub-menu-item">Signup</Link></li>
                                    <li className={manu === "/auth-re-password" || "" ? "active" : ""}><Link to="/auth-re-password" className="sub-menu-item">Reset Password</Link></li>
                                    <li className={manu === "/auth-lock-screen" || "" ? "active" : ""}><Link to="/auth-lock-screen" className="sub-menu-item">Lock Screen</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/page-terms", "/page-privacy"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> Utility </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/page-terms" || "" ? "active" : ""}><Link to="/page-terms" className="sub-menu-item">Terms of Services</Link></li>
                                    <li className={manu === "/page-privacy" || "" ? "active" : ""}><Link to="/page-privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/page-comingsoon", "/page-maintenance","/page-error","/page-thankyou"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> Special</Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/page-comingsoon" || "" ? "active" : ""}><Link to="/page-comingsoon" className="sub-menu-item">Coming Soon</Link></li>
                                    <li className={manu === "/page-maintenance" || "" ? "active" : ""}><Link to="/page-maintenance" className="sub-menu-item">Maintenance</Link></li>
                                    <li className={manu === "/page-error" || "" ? "active" : ""}><Link to="/page-error" className="sub-menu-item">Error</Link></li>
                                    <li className={manu === "/page-thankyou" || "" ? "active" : ""}><Link to="/page-thankyou" className="sub-menu-item">Thank you</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/contact-detail", "/contact-one","/contact-two"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> Contact </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/contact-detail" || "" ? "active" : ""}><Link to="/contact-detail" className="sub-menu-item">Contact Detail</Link></li>
                                    <li className={manu === "/contact-one" || "" ? "active" : ""}><Link to="/contact-one" className="sub-menu-item">Contact One</Link></li>
                                    <li className={manu === "/contact-two" || "" ? "active" : ""}><Link to="/contact-two" className="sub-menu-item">Contact Two</Link></li>
                                </ul>
                            </li>
                            <li className="has-submenu parent-menu-item"><Link to="#!"> Multi Level Menu</Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li><Link to="#!" className="sub-menu-item">Level 1.0</Link></li>
                                    <li className="has-submenu child-menu-item"><Link to="#!"> Level 2.0 </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link to="#!" className="sub-menu-item">Level 2.1</Link></li>
                                            <li><Link to="#!" className="sub-menu-item">Level 2.2</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li className={`${["/portfolio-modern-two", "/portfolio-modern-three","/portfolio-modern-four","/portfolio-modern-five","/portfolio-modern-six","/portfolio-classic-two","/portfolio-classic-three","/portfolio-classic-four","/portfolio-classic-five","/portfolio-classic-six","/portfolio-creative-two","/portfolio-creative-three","/portfolio-creative-four","/portfolio-creative-five","/portfolio-creative-six","/portfolio-masonry-two","/portfolio-masonry-three","/portfolio-masonry-four","/portfolio-masonry-five","/portfolio-masonry-six","/portfolio-detail-one","/portfolio-detail-two","/portfolio-detail-three",'/portfolio-detail-four'].includes(manu)? "active" : ""} has-submenu parent-parent-menu-item`} >
                        <Link to="#">Portfolio</Link><span className="menu-arrow"></span>
                        <ul className="submenu megamenu">
                            <li>
                                <ul>
                                    <li className="megamenu-head">Modern Portfolio</li>
                                    <li className={manu === "/portfolio-modern-two" || "" ? "active" : ""}><Link to="/portfolio-modern-two" className="sub-menu-item">Two Column</Link></li>
                                    <li className={manu === "/portfolio-modern-three" || "" ? "active" : ""}><Link to="/portfolio-modern-three" className="sub-menu-item">Three Column</Link></li>
                                    <li className={manu === "/portfolio-modern-four" || "" ? "active" : ""}><Link to="/portfolio-modern-four" className="sub-menu-item">Four Column</Link></li>
                                    <li className={manu === "/portfolio-modern-five" || "" ? "active" : ""}><Link to="/portfolio-modern-five" className="sub-menu-item">Five Column</Link></li>
                                    <li className={manu === "/portfolio-modern-six" || "" ? "active" : ""}><Link to="/portfolio-modern-six" className="sub-menu-item">Six Column</Link></li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li className="megamenu-head">Classic Portfolio</li>
                                    <li className={manu === "/portfolio-classic-two" || "" ? "active" : ""}><Link to="/portfolio-classic-two" className="sub-menu-item">Two Column</Link></li>
                                    <li className={manu === "/portfolio-classic-three" || "" ? "active" : ""}><Link to="/portfolio-classic-three" className="sub-menu-item">Three Column</Link></li>
                                    <li className={manu === "/portfolio-classic-four" || "" ? "active" : ""}><Link to="/portfolio-classic-four" className="sub-menu-item">Four Column</Link></li>
                                    <li className={manu === "/portfolio-classic-five" || "" ? "active" : ""}><Link to="/portfolio-classic-five" className="sub-menu-item">Five Column</Link></li>
                                    <li className={manu === "/portfolio-classic-six" || "" ? "active" : ""}><Link to="/portfolio-classic-six" className="sub-menu-item">Six Column</Link></li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li className="megamenu-head">Creative Portfolio</li>
                                    <li className={manu === "/portfolio-creative-two" || "" ? "active" : ""}><Link to="/portfolio-creative-two" className="sub-menu-item">Two Column</Link></li>
                                    <li className={manu === "/portfolio-creative-three" || "" ? "active" : ""}><Link to="/portfolio-creative-three" className="sub-menu-item">Three Column</Link></li>
                                    <li className={manu === "/portfolio-creative-four" || "" ? "active" : ""}><Link to="/portfolio-creative-four" className="sub-menu-item">Four Column</Link></li>
                                    <li className={manu === "/portfolio-creative-five" || "" ? "active" : ""}><Link to="/portfolio-creative-five" className="sub-menu-item">Five Column</Link></li>
                                    <li className={manu === "/portfolio-creative-six" || "" ? "active" : ""}><Link to="/portfolio-creative-six" className="sub-menu-item">Six Column</Link></li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li className="megamenu-head">Masonry Portfolio</li>
                                    <li className={manu === "/portfolio-masonry-two" || "" ? "active" : ""}><Link to="/portfolio-masonry-two" className="sub-menu-item">Two Column</Link></li>
                                    <li className={manu === "/portfolio-masonry-three" || "" ? "active" : ""}><Link to="/portfolio-masonry-three" className="sub-menu-item">Three Column</Link></li>
                                    <li className={manu === "/portfolio-masonry-four" || "" ? "active" : ""}><Link to="/portfolio-masonry-four" className="sub-menu-item">Four Column</Link></li>
                                    <li className={manu === "/portfolio-masonry-five" || "" ? "active" : ""}><Link to="/portfolio-masonry-five" className="sub-menu-item">Five Column</Link></li>
                                    <li className={manu === "/portfolio-masonry-six" || "" ? "active" : ""}><Link to="/portfolio-masonry-six" className="sub-menu-item">Six Column</Link></li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li className="megamenu-head">Portfolio Detail</li>
                                    <li className={manu === "/portfolio-detail-one" || "" ? "active" : ""}><Link to="/portfolio-detail-one" className="sub-menu-item">Portfolio One</Link></li>
                                    <li className={manu === "/portfolio-detail-two" || "" ? "active" : ""}><Link to="/portfolio-detail-two" className="sub-menu-item">Portfolio Two</Link></li>
                                    <li className={manu === "/portfolio-detail-three" || "" ? "active" : ""}><Link to="/portfolio-detail-three" className="sub-menu-item">Portfolio Three</Link></li>
                                    <li className={manu === "/portfolio-detail-four" || "" ? "active" : ""}><Link to="/portfolio-detail-four" className="sub-menu-item">Portfolio Four</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li className={`${["/ui-components", "/documentation","/changelog"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                        <Link to="#">Docs</Link><span className="menu-arrow"></span>
                        <ul className="submenu">
                            <li className={manu === "/ui-components" || "" ? "active" : ""}><Link to="/ui-components" className="sub-menu-item">Components</Link></li>
                            <li className={manu === "/documentation" || "" ? "active" : ""}><Link to="/documentation" className="sub-menu-item">Documentation</Link></li>
                            <li className={manu === "/changelog" || "" ? "active" : ""}><Link to="/changelog" className="sub-menu-item">Changelog</Link></li>
                        </ul>
                    </li>

                    <li className={manu === "/contact-one" || "" ? "active" : ""}><Link to="/contact-one" className="sub-menu-item">Contact</Link></li>
                </ul>
            </div>
        </div >
    </nav >
    )
}

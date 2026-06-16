import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import bg from '../../assets/images/blog/bg.jpg';
import image from '../../assets/images/client/05.jpg';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import AccpontTab from '../../component/accountTab';

import * as Icon from 'react-feather';
import {FiCamera} from "react-icons/fi"

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { portfolioTwo, portfolioImageTwo,experienceData } from '../../data/portfolio';

export default function UserProfile() {
  const [isOpen, setisOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const slides = portfolioImageTwo.map((image) => ({ src: image }));
    
  const handleImageClick = (index) => {
      setCurrentImageIndex(index);
      setisOpen(true);
  };

  useEffect(() => {
      const htmlTag = document.getElementsByTagName("html")[0]
      htmlTag.classList.add('light');
      htmlTag.classList.remove('dark')
  },[]);

  return (
    <>
      <Navbar navClass="nav-light"  />
      <section className="relative lg:pb-24 pb-16">
        <div className="container-fluid relative">
          <div className="profile-banner relative text-transparent">
            <input id="pro-banner" name="profile-banner" type="file" className="hidden" />
            <div className="relative shrink-0">
              <img src={bg} className="h-80 w-full object-cover" id="profile-banner" alt="" />
              <div className="absolute inset-0 bg-slate-900/75"></div>
              <label className="absolute inset-0 cursor-pointer" htmlFor="pro-banner"></label>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="md:flex">
            <div className="lg:w-1/4 md:w-1/3 md:px-3">
              <div className="relative md:-mt-48 -mt-32">
                <div className="p-6 rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900">
                  <div className="profile-pic text-center mb-5">
                    <input id="pro-img" name="profile-image" type="file" className="hidden" />
                    <div>
                      <div className="relative size-28 mx-auto">
                        <img src={image} className="rounded-full shadow-sm dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt="" />
                        <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                      </div>

                      <div className="mt-4">
                        <h5 className="text-lg font-semibold">Jenny Jimenez</h5>
                        <p className="text-slate-400">jennyhot@hotmail.com</p>
                      </div>
                    </div>
                  </div>
                  <AccpontTab/>
                </div>
              </div>
            </div>

            <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-[30px] md:mt-0">
              <div className="pb-6 border-b border-gray-100 dark:border-gray-700">
                <h5 className="text-xl font-semibold">Jenny Jimenez</h5>

                <p className="text-slate-400 mt-3">I have started my career as a trainee and prove my self and achieve all the milestone with good guidance and reach up to the project manager. In this journey, I understand all the procedure which make me a good developer, team leader, and a project manager.</p>
              </div>

              <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px] pt-6">
                <div>
                  <h5 className="text-xl font-semibold">Personal Details :</h5>
                  <div className="mt-6">
                    <div className="flex items-center">
                      <Icon.Mail className="fea icon-ex-md text-slate-400 me-3"></Icon.Mail>
                      <div className="flex-1">
                        <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Email :</h6>
                        <Link to="#" className="text-slate-400">jennyhot@hotmail.com</Link>
                      </div>
                    </div>
                    <div className="flex items-center mt-3">
                      <Icon.Bookmark className="fea icon-ex-md text-slate-400 me-3"></Icon.Bookmark>
                      <div className="flex-1">
                        <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Skills :</h6>
                        <Link to="#" className="text-slate-400">html</Link>,
                         <Link to="#" className="text-slate-400">css</Link>,
                          <Link to="#" className="text-slate-400">js</Link>, 
                          <Link to="#" className="text-slate-400">mysql</Link>
                      </div>
                    </div>
                    <div className="flex items-center mt-3">
                      <Icon.Italic className="fea icon-ex-md text-slate-400 me-3"></Icon.Italic>
                      <div className="flex-1">
                        <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Language :</h6>
                        <Link to='#' className="text-slate-400">English</Link>, <Link className="text-slate-400">Japanese</Link>, <Link className="text-slate-400">Chinese</Link>
                      </div>
                    </div>
                    <div className="flex items-center mt-3">
                      <Icon.Globe className="fea icon-ex-md text-slate-400 me-3"></Icon.Globe>
                      <div className="flex-1">
                        <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Website :</h6>
                        <Link to="#" className="text-slate-400">www.kristajoseph.com</Link>
                      </div>
                    </div>
                    <div className="flex items-center mt-3">
                      <Icon.Gift className="fea icon-ex-md text-slate-400 me-3"></Icon.Gift>
                      <div className="flex-1">
                        <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Birthday :</h6>
                        <p className="text-slate-400 mb-0">2nd March, 1996</p>
                      </div>
                    </div>
                    <div className="flex items-center mt-3">
                      <Icon.MapPin className="fea icon-ex-md text-slate-400 me-3"></Icon.MapPin>
                      <div className="flex-1">
                        <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Location :</h6>
                        <Link to="#" className="text-slate-400">Beijing, China</Link>
                      </div>
                    </div>
                    <div className="flex items-center mt-3">
                      <Icon.Phone className="fea icon-ex-md text-slate-400 me-3"></Icon.Phone>
                      <div className="flex-1">
                        <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Cell No :</h6>
                        <Link to="#" className="text-slate-400">(+12) 1254-56-4896</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[30px] lg:mt-0">
                  <h5 className="text-xl font-semibold">Experience :</h5>
                  {experienceData.map((item,index)=>{
                    return(
                      <div key={index} className="flex transition-all duration-500 hover:scale-105 shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-4 rounded-md bg-white dark:bg-slate-900 mt-6">
                        <img src={item.image} className="size-16 p-4 bg-slate-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md" alt="" />
                        <div className="flex-1 content ms-4">
                          <h4 className="text-lg text-medium">{item.title}</h4>
                          <p className="text-slate-400 mb-0">{item.time}</p>
                          <p className="text-slate-400 mb-0"><Link className="text-indigo-600">{item.name}</Link> {item.location}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <h5 className="text-xl font-semibold mt-[30px]">Portfolio :</h5>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">


                {
                  portfolioTwo.slice(0,6).map((data,index) => {
                    return (
                      <div className="group relative block overflow-hidden rounded-md transition-all duration-500" key={index}>
                        <img src={data.image} className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500" alt="" />
                        <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 transition duration-500 z-0 rounded-md"></div>

                        <div className="content transition-all duration-500">
                          <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-6 end-6 transition-all duration-500">
                            <Link onClick={() => handleImageClick(index)} className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"><FiCamera className="size-4"/></Link>
                          </div>

                          <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-6 start-6 transition-all duration-500">
                            <Link to="/portfolio-detail-three" className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">Mockup Collection</Link>
                            <p className="text-slate-400 mb-0">Abstract</p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
                    <Lightbox
                      open={isOpen}
                      close={() => setisOpen(false)}
                      slides={slides}
                      index={currentImageIndex}
                    />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

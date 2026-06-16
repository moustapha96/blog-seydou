import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

import image from '../../assets/images/crypto/01.png';
import logo_icon_64 from '../../assets/images/logo-icon-64.png';
import hand_with_mobile from '../../assets/images/crypto/hand-with-mobile.png';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import UserFeedBack from '../../component/userFeedBack'
import CookieModal from '../../component/cookieModal';
import GetInTuch from '../../component/getInTuch';

import * as Icon from 'react-feather';

import TinySlider from 'tiny-slider-react'
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';

import { crypto, cryptoServices, benefitsData, cryptotwo } from '../../data/dataThree';
import { FaArrowRight } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function IndexCrypto() {
    let settings =
    {
        container: '.tiny-home-slide-four',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            1025: {
                items: 4
            },
    
            992: {
                items: 3
            },
    
            767: {
                items: 2
            },
    
            320: {
                items: 1
            },
        },
    }
    const [isOpen, setOpen] = useState(false)
    let [days,setDays] = useState();
    let [hours,setHours] = useState();
    let [minutes,setMinutes] = useState();
    let [seconds,setSeconds] = useState();

    let deadline = "December, 31, 2025";
  
    let getTime = () => {
      let time = Date.parse(deadline) - Date.now();
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('dark')

    let interval = setInterval(() => getTime(deadline), 1000);
      return () => clearInterval(interval);
      }, []);
 


    return (
        <>
            <Navbar navClass="nav-light" />
            <section className="relative table w-full py-52 md:py-64 bg-[url('../../assets/images/crypto/bg1.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="container relative">
                    <div className="grid grid-cols-1">
                        <h5 className="font-normal text-lg text-white/50 mb-3">Pay with 
                            <TypeAnimation
                                sequence={[' Crypto',
                                    2000,
                                    ' ETH',
                                    2000,
                                    ' BNB',
                                    2000,
                                    ' SOL',
                                    2000,
                                    " DOT", 2000, " NEAR", 2000, " CEL"
                                ]}
                                wrapper="span"
                                speed={50}
                                className="typewrite text-white"
                                repeat={Infinity}
                            />
                            <span className="wrap"></span></h5>
                        <h4 className="text-white font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Building the future <br /> of Crypto Revolution.</h4>
                        <p className="text-white/70 max-w-xl mb-0">Take full control of your cryptocurrencies and collectibles by storing them on your own device.</p>

                        <div className="subcribe-form mt-6 mb-4">
                            <form className="relative max-w-xl">
                                <input type="email" id="subcribe" name="email" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none dark:text-white rounded-full bg-white/5 shadow-sm border border-slate-900 text-white" placeholder="Your Email Address :" />
                                <button type="submit" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Register Now <FaArrowRight className='ms-2 text-xs'/></button>
                            </form>
                        </div>

                        <span className="text-white">Looking for help? <Link className="text-amber-500">Get in touch with us</Link></span>
                    </div>
                </div>
            </section>

            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden">
                    <div className="container relative">
                        <div className="grid grid-cols-1">
                            <div className="p-6 border-t border-dashed border-white/30">
                                <div className="grid grid-cols-12 items-center">
                                    <div className="lg:col-span-4 md:col-span-6 col-span-5">
                                        <h5 className="text-white/50 text-xl mb-0">Token Popular</h5>
                                    </div>

                                    <div className="lg:col-span-8 md:col-span-6 col-span-7 relative">
                                        <div className="tiny-home-slide-four">

                                            <TinySlider settings={settings}>
                                                {cryptoServices.map((item, index) =>{
                                                   return(
                                                        <div className="tiny-slide" key={index} >
                                                            <div className="text-center">
                                                                <h6 className="text-white mb-1">{item.type}</h6>
                                                                <span className="text-white/50 block">$ {item.money}</span>
                                                                <span className="text-red-600">- {item.percentage}</span>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </TinySlider>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-5">
                            <img src={image} alt="" />
                        </div>

                        <div className="lg:col-span-7">
                            <div className="lg:ms-10">
                                <h6 className="text-indigo-600 text-base">Why choose us?</h6>
                                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Buy Cryptocurrency <br /> with Techwind</h3>
                                <p className="text-slate-400 max-w-xl">You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>

                                <ul className="list-none text-slate-400 mt-4">
                                    <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Our Talented & Experienced Marketing Agency</li>
                                    <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Create your own skin to match your brand</li>
                                </ul>

                                <div className="mt-4">
                                    <Link to="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">We featured on popular partners like</h3>
                    </div>

                    <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
                        {crypto.map((data,index) => {
                            return (
                                <div className="mx-auto" key={index}>
                                    <img src={data.image} className="h-6" alt="" />
                                </div>
                            )
                        })}
                    </div>
                </div>

            </section>


            <section className="relative md:py-24 py-16 bg-[url('../../assets/images/crypto/bg2.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-indigo-600/90"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-white">Our Benefits</h3>

                        <p className="text-white/70 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {benefitsData.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div className="border border-dashed border-white/30 rounded-md p-6 text-center" key={index} >
                                <Icons  className="size-9 text-white mx-auto"/>

                                <div className="content mt-7">
                                    <Link to="#" className="text-lg font-medium text-white">Support</Link>
                                    <p className="text-white/70 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                    <div className="mt-5">
                                        <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-white hover:text-white after:bg-white duration-500 ease-in-out">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </section>



            <section className="relative md:py-24 py-16 md:pb-0 pb-0">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-col-1 items-center gap-[30px]">
                        <div className="lg:col-span-5 md:col-span-6 order-2 md:order-1">
                            <div className="shadow-sm dark:shadow-gray-800 rounded-md p-6 bg-gray-50 dark:bg-slate-800 overflow-hidden">
                                <img src={logo_icon_64} className="mx-auto" alt="" />
                                <h5 className="text-center font-semibold text-2xl mt-3">Techwind Token Sale</h5>
                                <div className="grid grid-col-1">
                                    <div className="text-center">
                                        <div id="token-sale">
                                            <div className="flex">
                                                <div id="days" className="md:w-1/4 w-1/2 count-number lg:text-[40px] md:text-[32px] text-[28px] leading-[95px] font-semibold">{days}<p className='count-head'>Days</p></div>
                                                <div id="hours" className="md:w-1/4 w-1/2 count-number lg:text-[40px] md:text-[32px] text-[28px] leading-[95px] font-semibold">{hours}<p className='count-head'>Hours</p></div>
                                                <div id="mins" className="md:w-1/4 w-1/2 count-number lg:text-[40px] md:text-[32px] text-[28px] leading-[95px] font-semibold">{minutes}<p className='count-head'>Mins</p></div>
                                                <div id="secs" className="md:w-1/4 w-1/2 count-number lg:text-[40px] md:text-[32px] text-[28px] leading-[95px] font-semibold">{seconds}<p className='count-head'>Secs</p></div>
                                                <div id="end" className="h1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-slate-400 text-center mt-8">Token sale ends <span className="dark:text-white text-dark font-semibold">August 25th 2022</span></p>

                                <div className="mt-6">
                                    <div className="flex justify-end mb-2">
                                        <span className="text-slate-400">Funded 60% = $ 600000</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-slate-900 rounded-full h-3">
                                        <div className="bg-indigo-600 h-3 rounded-full" style={{ "width": "60%" }}></div>
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <span className="text-slate-400">$ 1000</span>
                                        <span className="text-slate-400">$ 1000000</span>
                                    </div>
                                </div>

                                <ul className="list-none mt-4">
                                    <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2" /><span className="text-slate-400">Soft Cap:</span> &nbsp;10000 USD</li>
                                    <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2" /><span className="text-slate-400">Min. transaction Amount:</span> &nbsp;1000 USD</li>
                                    <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2" /><span className="text-slate-400">Target:</span> &nbsp;900000 USD</li>
                                </ul>

                                <div className="mt-4">
                                    <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Join Now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 md:col-span-6 order-1 md:order-2">
                            <div className="lg:ms-10">
                                <span className="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Sale tokens</span>
                                <h4 className="my-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">The token sale is live!</h4>
                                <p className="text-slate-400 para-desc mx-auto mb-3">With Techwind Trade, you can be sure your trading skills are matched with excellent service.</p>
                                <p className="text-slate-400 para-desc mx-auto">Techwind Institutional Markets is a full-stack crypto services platform that works with crypto-native businesses and institutional clients on lending, trading, and custody solutions tailored to your needs.</p>
                                <div className="mt-4">
                                    <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Token sale</Link>

                                    <Link  onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white m-1 lightbox"><Icon.Video className="size-4"></Icon.Video></Link><span className="font-semibold ms-1 align-middle">Watch Now</span>
                                </div>
                                {isOpen && 
                                    <div className="flex bg-[#00000099] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                        <div className="relative p-1 w-full max-w-2xl max-h-full">
                                            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                                                <div className="flex items-center justify-between p-1 border-b rounded-t dark:border-gray-600 border-gray-200">
                                                    <button type="button" onClick={()=>setOpen(!isOpen)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                        </svg>
                                                        <span className="sr-only">Close modal</span>
                                                    </button>
                                                </div>
                                                <div className="p-1 md:p-1 space-y-4">
                                                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/yba7hPeTSjk?playlist=yba7hPeTSjk&loop=1"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">All your crypto and NFTs in one place</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">With Techwind Trade, you can be sure your trading skills are matched with excellent service.</p>
                    </div>

                    <div className="grid grid-cols-1 justify-center mt-2">
                        <ul className="list-none text-center">
                            {cryptotwo.map((item,index)=>{
                                return(
                                    <li className="inline-block md:m-6 my-6 mx-2" key={index}>
                                        <img src={item} className="shadow-md dark:shadow-gray-800 rounded-full size-20 p-4" alt="" />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px] lg:items-center items-end">
                        <div className="mb-8">
                            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Free your money and <br /> invest with confidence</h4>
                            <p className="text-slate-400 max-w-xl mx-auto">With Techwind Trade, you can be sure your trading skills are matched with excellent service.</p>

                            <ul className="list-none space-x-1">
                                <li className="flex  mt-6">
                                    <BsCheckCircle className="text-indigo-600 text-base me-2 mt-2" />

                                    <div className="flex-1 ms-3">
                                        <h6 className="font-semibold text-lg">Buy, sell, and trade on the go</h6>
                                        <p className="text-slate-400 mt-1">Manage your holdings from your mobile device</p>
                                    </div>
                                </li>

                                <li className="flex  mt-6">
                                    <BsCheckCircle className="text-indigo-600 text-base me-2 mt-2" />

                                    <div className="flex-1 ms-3">
                                        <h6 className="font-semibold text-lg">Take control of your wealth</h6>
                                        <p className="text-slate-400 mt-1">Rest assured you (and only you) have access to your funds</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-6">
                                <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Download Wallet</Link>
                            </div>
                        </div>

                        <div className="">
                            <img src={hand_with_mobile} className="" alt="" />
                        </div>
                    </div>
                </div>
            </section>



            <section className="relative md:py-24 py-16 bg-[url('../../assets/images/crypto/cta.jpg')] bg-center bg-cover">
                <div className="container relative">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                        <div className="text-center">
                            <h6 className="text-white mb-0">Founded in</h6>
                            <h2 className="mb-0 text-4xl mt-3 font-bold text-indigo-600"><CountUp className="counter-value" start={1990} end={2021} /></h2>
                        </div>
                        <div className="text-center">
                            <h6 className="text-white mb-0">Team Member</h6>
                            <h2 className="mb-0 text-4xl mt-3 font-bold text-indigo-600"><CountUp className="counter-value" start={551} end={1000} />+</h2>
                        </div>
                        <div className="text-center">
                            <h6 className="text-white mb-0">Users</h6>
                            <h2 className="mb-0 text-4xl mt-3 font-bold text-indigo-600"><CountUp className="counter-value" start={1} end={10} />M</h2>
                        </div>
                        <div className="text-center">
                            <h6 className="text-white mb-0">Insurance Cover</h6>
                            <h2 className="mb-0 text-4xl mt-3 font-bold text-indigo-600">$<CountUp className="counter-value" start={210} end={410} />M</h2>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative md:py-24 py-16">
                <UserFeedBack />
                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
                        <div className="flex">
                            <Icon.HelpCircle className="fea icon-ex-md text-indigo-600 me-3"></Icon.HelpCircle>
                            <div className="flex-1">
                                <h5 className="mb-2 text-xl font-semibold">How our <span className="text-indigo-600">Techwind</span> work ?</h5>
                                <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                            </div>
                        </div>

                        <div className="flex">
                            <Icon.HelpCircle className="fea icon-ex-md text-indigo-600 me-3"></Icon.HelpCircle>
                            <div className="flex-1">
                                <h5 className="mb-2 text-xl font-semibold"> What is the main process open account ?</h5>
                                <p className="text-slate-400">If the distribution of letters and &apos;words&apos; is random, the reader will not be distracted from making a neutral judgement on the visual impact</p>
                            </div>
                        </div>

                        <div className="flex">
                            <Icon.HelpCircle className="fea icon-ex-md text-indigo-600 me-3"></Icon.HelpCircle>
                            <div className="flex-1">
                                <h5 className="mb-2 text-xl font-semibold"> How to make unlimited data entry ?</h5>
                                <p className="text-slate-400">Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                            </div>
                        </div>

                        <div className="flex">
                            <Icon.HelpCircle className="fea icon-ex-md text-indigo-600 me-3"></Icon.HelpCircle>
                            <div className="flex-1">
                                <h5 className="mb-2 text-xl font-semibold"> Is <span className="text-indigo-600">Techwind</span> safer to use with my account ?</h5>
                                <p className="text-slate-400">The most well-known dummy text is the &apos;Lorem Ipsum&apos;, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to &apos;proper&apos; Latin.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <GetInTuch/>
            </section>


            <Footer />
            <CookieModal />
        </>
    )
}

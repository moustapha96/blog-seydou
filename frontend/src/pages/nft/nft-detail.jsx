import { useEffect, useState} from 'react'
import { Link,useParams } from 'react-router-dom';

import item_detail_1 from '../../assets/images/nft/items/item-detail-1.jpg';
import image from '../../assets/images/client/08.jpg';
import image1 from '../../assets/images/client/01.jpg';
import image2 from '../../assets/images/client/02.jpg';
import image3 from '../../assets/images/client/03.jpg';
import image4 from '../../assets/images/nft/items/1.jpg';

import Footer from '../../component/Footer/footer';
import NftNavbar from '../../component/Navbar/nftNavbar';
import { nftData } from '../../data/data';
import { BsExclamationOctagon } from 'react-icons/bs';

export default function NftDetail() {
    const params = useParams();
    const id = params.id
    const data = nftData.find((creatorr) => creatorr.id === parseInt (id));
    

    const [showModal, setShowModel] = useState(false)
    const [buyNow, setBuyNow] = useState(false)
    const [isOpenTab, setisOpen] = useState(0);

    const handleTabClick = (index) => {
        setisOpen(index);
    };

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    },[]);
    
    return (
        <div>
            <NftNavbar />

            <section className="relative table w-full md:pb-24 pb-16 mt-28">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-6 md:col-span-5">
                            <div className="sticky top-20">
                                <img src={data?.image ? data?.image : item_detail_1} className="rounded-md shadow-md dark:shadow-gray-800" alt="" />
                            </div>
                        </div>

                        <div className="lg:col-span-6 md:col-span-7">
                            <div className="">
                                <h5 className="lg:text-4xl lg:leading-relaxed text-2xl font-semibold">{data?.title ? data?.title : "Wolf with Skull"} <span className="bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text">Orange <br /> Illustration</span> T-shirt Tattoo </h5>

                                <div className="grid md:grid-cols-2 grid-cols-1 mt-6">
                                    <div>
                                        <h6 className="text-lg font-semibold">Current Bid:</h6>
                                        <h6 className="text-2xl font-semibold mt-2">4.85 ETH</h6>
                                        <h6 className="text-slate-400 mt-2">$450.48USD</h6>
                                    </div>

                                    <div>
                                        <h6 className="text-lg font-semibold">Auction Ending In:</h6>
                                        <span id="auction-item-1" className="text-2xl font-semibold mt-2"></span>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <Link  onClick={()=>setShowModel(!showModal)}  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2"><i className="mdi mdi-gavel fs-5 me-2"></i> Place a Bid</Link>
                                    <Link onClick={()=>setBuyNow(!buyNow)}  data-modal-toggle="NftBuynow" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><i className="mdi mdi-cart fs-5 me-2"></i> Buy Now</Link>
                                </div>

                                <div className="grid grid-cols-1 mt-8">
                                    <ul className="md:w-fit w-full flex-wrap justify-center text-center p-3 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                                        <li role="presentation" className="md:inline-block block md:w-fit w-full">
                                            <button onClick={() => handleTabClick(0)} className={`${isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full  hover:text-indigo-600 transition-all duration-500 ease-in-out`} >Details</button>
                                        </li>
                                        <li role="presentation" className="md:inline-block block md:w-fit w-full">
                                           <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full  hover:text-indigo-600 transition-all duration-500 ease-in-out`} >Bids</button>
                                        </li>
                                        <li role="presentation" className="md:inline-block block md:w-fit w-full">
                                            <button onClick={() => handleTabClick(2)} className={`${isOpenTab === 2 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full  hover:text-indigo-600 transition-all duration-500 ease-in-out`} >Activity</button>
                                        </li>
                                    </ul>

                                    <div id="StarterContent" className="mt-6">
                                        {isOpenTab === 0 ? 
                                            <div>
                                                <div className="grid grid-cols-1">
                                                    <p className="text-slate-400 mb-4">Hey guys! New exploration about NFT Marketplace Web Design, this time I&apos;m inspired by one of my favorite NFT website called Superex (with crypto payment)! What do you think?</p>
                                                    <p className="text-slate-400 mb-4">What does it mean? Biomechanics is the study of the structure, function and motion of the mechanical aspects of biological systems, at any level from whole organisms to organs, cells and cell organelles, using the methods of mechanics. Biomechanics is a branch of biophysics.</p>
                                                    <h6 className="text-xl font-semibold">Owner</h6>

                                                    <div className="flex items-center mt-3">
                                                        <img src={image} className="size-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />

                                                        <div className="ms-3">
                                                            <h6 className="text-lg font-semibold"><Link to="/" className="hover:text-indigo-600 duration-500 ease-in-out">PandaOne</Link></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>:""
                                        }
                                        {isOpenTab === 1 ? 
                                            <div>
                                                <div className="grid grid-cols-1">
                                                    <div className="flex items-center">
                                                        <div className="relative">
                                                            <img src={image1} className="size-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                                                        </div>

                                                        <div className="ms-3">
                                                            <h6 className="text-lg font-semibold">2 WETH <span className="text-slate-400">by</span> <Link to="/" className="hover:text-indigo-600 duration-500 ease-in-out">0xe849fa28a...ea14</Link></h6>
                                                            <span className="text-slate-400">6 hours ago</span>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center mt-4">
                                                        <div className="relative">
                                                            <img src={image2} className="size-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                                                        </div>

                                                        <div className="ms-3">
                                                            <h6 className="text-lg font-semibold">0.001 WETH <span className="text-slate-400">by</span> <Link to="/" className="hover:text-indigo-600 duration-500 ease-in-out">VOTwear</Link></h6>
                                                            <span className="text-slate-400">6 hours ago</span>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center mt-4">
                                                        <div className="relative">
                                                            <img src={image3} className="size-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                                                        </div>

                                                        <div className="ms-3">
                                                            <h6 className="text-lg font-semibold">1.225 WETH <span className="text-slate-400">by</span> <Link to="/" className="hover:text-indigo-600 duration-500 ease-in-out">PandaOne</Link></h6>
                                                            <span className="text-slate-400">6 hours ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>:""
                                        }
                                        {isOpenTab === 2 ?
                                            <div>
                                                <div className="grid grid-cols-1">
                                                    <div className="rounded-md shadow-sm dark:shadow-gray-800 p-6">
                                                        <div className="flex items-center">
                                                            <div className="relative">
                                                                <img src={image4} className="size-20 rounded-md shadow-md dark:shadow-gray-800" alt="" />

                                                                <div className="absolute top-0 start-0 translate-middle px-1 rounded-md shadow-md bg-white">
                                                                    <i className="mdi mdi-account-check mdi-18px text-green-600"></i>
                                                                </div>
                                                            </div>

                                                            <span className="content ms-3">
                                                                <Link to="/" className="hover:text-indigo-600 text-lg block">Digital Art Collection</Link>
                                                                <span className="text-slate-400 block mt-1">Started Following <Link to="/" className="link font-semibold">@Panda</Link></span>

                                                                <span className="text-slate-400 block mt-1">1 hours ago</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>:""
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Related Auction Items</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Techwind with their fans and unique token collectors!</p>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                         {nftData.slice(0,4).map((item,index)=>{
                             return(
                                    <div key={index} className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out">
                                        <div className="relative">
                                            <img src={item.image} alt="" />
                                            <div className="absolute end-0 top-0 mt-6 me-6 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                                <Link to="/#!" className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow-sm dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                            </div>
            
                                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 duration-500 ease-in-out">
                                                <Link to={`/nft-detail/${item.id}`} className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Place Bid</Link>
                                            </div>
                                            
                                           
                                        </div>
            
                                        <div className="p-6 relative">
                                            <Link to={`/nft-detail/${item.id}`} className="text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
            
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center">
                                                    <i className="mdi mdi-ethereum text-xl leading-none text-indigo-600 me-1"></i>
                                                    <span className="block font-semibold text-indigo-600">{item.amount}</span>
                                                </div>
            
                                                <div>
                                                    <i className="mdi mdi-heart text-red-600"></i> <span className="text-slate-400">{item.like}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            )
                          })}  
                    </div>
                </div>
            </section>

            <Footer />
            {showModal ?
                <div id="NftBid" className="bg-gray-900/50 fixed inset-0 z-40 flex items-center justify-center">
                    <div className="relative w-full h-auto max-w-md p-4 ">
                        <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow-sm dark:shadow-gray-800">
                            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                                <h5 className="text-xl font-semibold">Place a Bid</h5>
                                <button onClick={()=>setShowModel(!showModal)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="NftBid">
                                    <svg className="size-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>

                            <div className="p-6">
                                <form className="text-start">
                                    <div className="grid grid-cols-1">
                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="number">Your Bid Price:</label>
                                            <input name="etherium" id="number" type="number" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-3" placeholder="00.00 ETH" />
                                        </div>

                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="number2">Enter Your QTY:</label>
                                            <input name="quantity" id="number2" type="number" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-3" placeholder="0" />
                                            <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white mt-1">Note:</span> Max. Qty 5</span>
                                        </div>
                                    </div>
                                </form>

                                <div className="pt-4 border-t dark:border-t-gray-800">
                                    <div className="flex justify-between">
                                        <p className="font-semibold text-sm"> You must bid at least:</p>
                                        <p className="text-sm text-indigo-600 font-semibold"> 1.22 ETH </p>
                                    </div>
                                    <div className="flex justify-between mt-1">
                                        <p className="font-semibold text-sm"> Service free:</p>
                                        <p className="text-sm text-indigo-600 font-semibold"> 0.05 ETH </p>
                                    </div>
                                    <div className="flex justify-between mt-1">
                                        <p className="font-semibold text-sm"> Total bid amount:</p>
                                        <p className="text-sm text-indigo-600 font-semibold"> 1.27 ETH </p>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white w-full"><i className="mdi mdi-gavel"></i> Place a Bid</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :""
             }
            {buyNow ? 
                <div id="NftBuynow" className="bg-gray-900/50 fixed inset-0 z-40 flex items-center justify-center">
                    <div className="relative w-full h-auto max-w-md p-4">
                        <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow-sm dark:shadow-gray-800">
                            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                                <h5 className="text-xl font-semibold">Checkout</h5>
                                <button onClick={()=>setBuyNow(!buyNow)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="NftBuynow">
                                    <svg className="size-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div className="p-6">
                                <form className="text-start">
                                    <div className="grid grid-cols-1">
                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="number3">Your Price:</label>
                                            <input name="etherium" id="number3" type="number" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-3" placeholder="00.00 ETH" />
                                        </div>
                                    </div>
                                </form>

                                <div className="pt-4 border-t dark:border-t-gray-800">
                                    <div className="flex justify-between">
                                        <p className="font-semibold text-sm"> You must bid at least:</p>
                                        <p className="text-sm text-indigo-600 font-semibold"> 1.22 ETH </p>
                                    </div>
                                    <div className="flex justify-between mt-1">
                                        <p className="font-semibold text-sm"> Service free:</p>
                                        <p className="text-sm text-indigo-600 font-semibold"> 0.05 ETH </p>
                                    </div>
                                    <div className="flex justify-between mt-1">
                                        <p className="font-semibold text-sm"> Total bid amount:</p>
                                        <p className="text-sm text-indigo-600 font-semibold"> 1.27 ETH </p>
                                    </div>
                                </div>

                                <div className="flex items-center p-4 bg-red-600/10 text-red-600 mt-4 rounded-lg">
                                    <BsExclamationOctagon className="text-3xl"/>

                                    <div className="ms-2">
                                        <span className="block font-semibold">This creator is not verified</span>
                                        <span className="block">Purchase this item at your own risk</span>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <Link  data-modal-toggle="NftBuynow" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white w-full"><i className="mdi mdi-lightning-bolt"></i> Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>:""
            }
        </div>
    )
}

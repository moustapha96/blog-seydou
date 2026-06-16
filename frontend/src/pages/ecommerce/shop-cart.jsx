import { Link } from 'react-router-dom'

import product1 from '../../assets/images/shop/items/s1.jpg'
import product2 from '../../assets/images/shop/items/s2.jpg'
import product3 from '../../assets/images/shop/items/s3.jpg'

import ShopFooter from '../../component/Footer/shopFooter'
import EcommerceNavbar from '../../component/Navbar/ecommerceNavbar'

import MobileApp from '../../component/mobileApp'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useEffect } from 'react'

export default function ShopCart() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('light');
        htmlTag.classList.remove('dark')
    });

    const handleStepDown = (e) => {
        const input = e.target.parentNode.querySelector('input[type="number"]')
        if (input) {
            input.stepDown();
        }
    };

    const handleStepUp = (e) => {
        const input = e.target.parentNode.querySelector('input[type="number"]')
        if (input) {
            input.stepUp();
        }
    };
    const productData = [ 
        {
            image:product1,
            amount:280,
            qtn:1,
        },
        {
            image:product2,
            amount:300,
            qtn:1,
        },
        {
            image:product3,
            amount:200,
            qtn:2,
        }
    ]
    return (
        <>
            <EcommerceNavbar />
            <section className="relative table w-full py-20 lg:py-24 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid grid-cols-1 mt-14">
                        <h3 className="text-3xl leading-normal font-semibold">Cart</h3>
                    </div>

                    <div className="relative mt-3">
                        <ul className="tracking-[0.5px] mb-0 inline-flex items-center space-x-1">
                            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link to="/index-shop">Techwind</Link></li>
                            <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5"><MdKeyboardArrowRight className="text-xl"/></li>
                            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600" aria-current="page">Cart</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-1">
                        <div className="relative overflow-x-auto shadow-sm dark:shadow-gray-800 rounded-md">
                            <table className="w-full text-start">
                                <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                                    <tr>
                                        <th scope="col" className="p-4 w-4"></th>
                                        <th scope="col" className="text-start p-4 min-w-[220px]">Product</th>
                                        <th scope="col" className="p-4 w-24 min-w-[100px]">Price</th>
                                        <th scope="col" className="p-4 w-56 min-w-[220px]">Qty</th>
                                        <th scope="col" className="p-4 w-24 min-w-[100px]">Total($)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productData.map((item,index)=>{
                                        return(
                                            <tr className="bg-white dark:bg-slate-900" key={index}>
                                                <td className="p-4"><Link ><i className="mdi mdi-window-close text-red-600"></i></Link></td>
                                                <td className="p-4">
                                                    <span className="flex items-center" >
                                                        <img src={item.image} className="rounded shadow-sm dark:shadow-gray-800 w-12" alt="" />
                                                        <span className="ms-3">
                                                            <span className="block font-semibold">T-shirt (M)</span>
                                                        </span>
                                                    </span>
                                                </td>
                                                <td className="p-4 text-center">$ {item.amount}</td>
                                                <td className="p-4 text-center">
                                                    <div className="qty-icons space-x-1">
                                                        <button onClick={handleStepDown} className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white minus"                                            >
                                                            -
                                                        </button>
                                                        <input min="0" readOnly name="quantity" value={item.qtn} type="number" className="h-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white pointer-events-none w-16 ps-4 quantity" />
                                                        <button onClick={handleStepUp} className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white plus" >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="p-4  text-end">${ item.amount * item.qtn}</td>
                                            </tr>
                                        )
                                    })}
                                    
                                </tbody>
                            </table>
                        </div>

                        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                            <div className="lg:col-span-9 md:order-1 order-3">
                                <Link  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">Shop Now</Link>
                                <Link  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white mt-2">Add to Cart</Link>
                            </div>

                            <div className="lg:col-span-3 md:order-2 order-1">
                                <ul className="list-none shadow-sm dark:shadow-gray-800 rounded-md">
                                    <li className="flex justify-between p-4">
                                        <span className="font-semibold text-lg">Subtotal :</span>
                                        <span className="text-slate-400">$ 980</span>
                                    </li>
                                    <li className="flex justify-between p-4 border-t border-gray-100 dark:border-gray-800">
                                        <span className="font-semibold text-lg">Taxes :</span>
                                        <span className="text-slate-400">$ 150</span>
                                    </li>
                                    <li className="flex justify-between font-semibold p-4 border-t border-gray-200 dark:border-gray-600">
                                        <span className="font-semibold text-lg">Total :</span>
                                        <span className="font-semibold">$ 1130</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <MobileApp/>
            </section>

             <ShopFooter/>
        </>
    )
}

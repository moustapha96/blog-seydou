import feature from '../assets/images/feature.png';

import * as Icon from 'react-feather'

export default function KeyFeatureTwo(){
    return(
        <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 mt-8 gap-[30px] items-center">
        <div className="lg:col-span-4 md:col-span-6 lg:order-1 order-2">
            <div className="grid grid-cols-1 gap-[30px]">
                <div className="group flex transition-all duration-500 ease-in-out xl:p-3">
                    <div className="flex md:order-2 order-1 align-middle justify-center items-center size-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                        <Icon.Monitor className="size-5"></Icon.Monitor>
                    </div>
                    <div className="flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4">
                        <h4 className="mb-0 text-lg font-medium">Use On Any Device</h4>
                        <p className="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                    </div>
                </div>


                <div className="group flex transition-all duration-500 ease-in-out xl:p-3">
                    <div className="flex md:order-2 order-1 align-middle justify-center items-center size-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                        <Icon.Feather className="size-5"></Icon.Feather>
                    </div>
                    <div className="flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4">
                        <h4 className="mb-0 text-lg font-medium">Feather Icons</h4>
                        <p className="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                    </div>
                </div>


                <div className="group flex transition-all duration-500 ease-in-out xl:p-3">
                    <div className="flex md:order-2 order-1 align-middle justify-center items-center size-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                        <Icon.Eye className="size-5"></Icon.Eye>
                    </div>
                    <div className="flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4">
                        <h4 className="mb-0 text-lg font-medium">Retina Ready</h4>
                        <p className="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                    </div>
                </div>

            </div>
        </div>

        <div className="lg:col-span-4 md:col-span-12 lg:mx-8 lg:order-2 order-1">
            <img src={feature} className="mx-auto md:max-w-[300px]" alt="" />
        </div>

        <div className="lg:col-span-4 md:col-span-6 order-3">
            <div className="grid grid-cols-1 gap-[30px]">
                <div className="group flex transition-all duration-500 ease-in-out xl:p-3">
                    <div className="flex align-middle justify-center items-center size-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                        <Icon.UserCheck className="size-5"></Icon.UserCheck>
                    </div>
                    <div className="flex-1 ms-4">
                        <h4 className="mb-0 text-lg font-medium">W3c Valid Code</h4>
                        <p className="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                    </div>
                </div>


                <div className="group flex transition-all duration-500 ease-in-out xl:p-3">
                    <div className="flex align-middle justify-center items-center size-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                        <Icon.Smartphone className="size-5"></Icon.Smartphone>
                    </div>
                    <div className="flex-1 ms-4">
                        <h4 className="mb-0 text-lg font-medium">Fully Responsive</h4>
                        <p className="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                    </div>
                </div>


                <div className="group flex transition-all duration-500 ease-in-out xl:p-3">
                    <div className="flex align-middle justify-center items-center size-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                        <Icon.Heart className="size-5"></Icon.Heart>
                    </div>
                    <div className="flex-1 ms-4">
                        <h4 className="mb-0 text-lg font-medium">Browser Compatibility</h4>
                        <p className="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}
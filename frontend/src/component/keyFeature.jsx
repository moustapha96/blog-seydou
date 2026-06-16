
import * as Icon from 'react-feather';

export default function KeyFeature(){
    let KeyFeature = [
        {
            Icon:Icon.Monitor,
            title:"Fully Responsive",
        },
        {
            Icon:Icon.Heart,
            title:"Browser Compatibility",
        },
        {
            Icon:Icon.Eye,
            title:"Retina Ready",
        },
        {
            Icon:Icon.Layout,
            title:"Based On Tailwindcss 3",
        }, 
        {
            Icon:Icon.Feather,
            title:"Feather Icons",
        },
        {
            Icon:Icon.Code,
            title:"Built With SASS",
        },
        {
            Icon:Icon.UserCheck,
            title:"W3c Valid Code",
        },
        {
            Icon:Icon.Globe,
            title:"Browsers Compatible",
        },
        {
            Icon:Icon.Settings,
            title:"Easy to customize",
        },
        
    ]
    
    return(
    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] mt-8">
        {KeyFeature.map((item,index)=>{
            const Icon = item.Icon
            return(
                <div className="lg:col-span-4 md:col-span-6" key={index}>
                <div className="flex transition-all duration-500 hover:scale-105 shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                    <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
                        <Icon className="size-5 rotate-45"></Icon>
                    </div>
                    <div className="flex-1">
                        <h4 className="mb-0 text-lg font-medium">{item.title}</h4>
                    </div>
                </div>
            </div>
            )
        })}
    </div>
    )
}
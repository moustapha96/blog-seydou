import amazon from '../assets/images/client/amazon.svg';
import google from '../assets/images/client/google.svg';
import lenovo from '../assets/images/client/lenovo.svg';
import paypal from '../assets/images/client/paypal.svg';
import shopify from '../assets/images/client/shopify.svg';
import spotify from '../assets/images/client/spotify.svg';
export default function CompanyLogo(){
    return(
        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            <div className="mx-auto py-4">
                <img src={amazon} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
                <img src={google} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
                <img src={lenovo} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
                <img src={paypal} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
                <img src={shopify} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
                <img src={spotify} className="h-6" alt="" />
            </div>
        </div>
    )
}
import Image from "next/image";
import React from "react";
const Footer = () => {
    return (  
        <div id="footer" className="bg-[#292E3A] px-40 py-20 gap-12 w-full flex flex-row justify-between items-center text-white">
            <div>
                <Image className="" src="/logo.png" alt="logo" width={710} height={200} />
            </div>
            <div>
                <p><b>About</b></p>
                <p className="font-thin">stayHealthy is made for those who has to live alone because of work or efucation. We want to encourage all of you to maintain healthy lifestyle by maintaining your calories intake per day. With stayHealthy, you don&apos;t have to worry about counting your food calories one by one, we got your back!</p>
            </div>
        </div>
    );
}
 
export default Footer;
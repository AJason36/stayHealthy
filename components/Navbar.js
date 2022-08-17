import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between w-full absolute px-8">
      <div className="flex gap-2 my-3  w-[200px]">
        <Image className="" src="/logo.png" alt="logo" 
        width={355} height={100}/>
        </div>
        <div className="flex my-3 gap-2">
        <button className="flex sticky top-0 z-50 h-[50px] text-white items-center backdrop-blur-sm shadow-lg rounded-3xl px-4 py-2 md:px-6 md:py-3 lg:text-xl bg-clip-padding border border-gray-200 bg-[#2DAE77] font-bold">
          <Link href="#calorie">Calorie Counter </Link>
        </button>
        <button className="flex sticky top-0 z-50 h-[50px] text-white items-center backdrop-blur-sm shadow-lg rounded-3xl px-4 py-2 md:px-6 md:py-3 lg:text-xl bg-clip-padding border border-gray-200 bg-[#2DAE77] font-bold">
          <Link href="#footer">About </Link>
        </button>
        </div>     
              
    </div>
  );
};

export default Navbar;

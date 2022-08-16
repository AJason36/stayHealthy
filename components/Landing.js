import React from "react";
import Image from "next/image";
import Link from "next/link";
const Landing = () => {
  return (
    <>
      <main className="h-screen w-full bg-scroll bg-no-repeat bg-cover max-h-screen flex">
      <div className="w-full">
          <Image src="/landing.png" className=" overflow-x-hidden object-fit" alt="landing" width={1500} height={800} />
      </div>
      </main>
    </>
  );
};

export default Landing;

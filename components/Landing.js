import React from "react";
import Image from "next/image";
import Link from "next/link";
const Landing = () => {
  return (
    <>
      <main className="h-screen w-full bg-scroll bg-no-repeat bg-cover max-h-screen flex">
        <div className="flex flex-row w-full object-bottom">
          <Image
            src="/landing1.png"
            className="object-left-bottom"
            alt="landing"
            width={1500}
            height={800}
          />
          <Image
            src="/landing2.png"
            className="object-right-bottom"
            alt="landing"
            width={1500}
            height={800}
          />
        </div>
      </main>
    </>
  );
};

export default Landing;

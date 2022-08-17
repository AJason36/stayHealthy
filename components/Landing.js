import React from "react";
import Image from "next/image";
import Link from "next/link";
const Landing = () => {
  return (
    <>
      <main className="h-screen w-full bg-scroll bg-no-repeat bg-cover max-h-screen flex">

        <div className="flex-auto justify-between object-bottom gap-5" style={{width: '100%', height: '100%', position: 'relative'}}>
          <Image
            src="/landing.png"
            className="object-left-bottom"
            alt="landing"
            width={1600}
            height={800}
            // layout="fill"
          />
    
        </div>
      </main>
    </>
  );
};

export default Landing;

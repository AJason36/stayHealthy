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
=======
      <div className="w-full object-bottom">
          <Image src="/landing.png" className="" alt="landing" width={1500} height={800} />
      </div>
>>>>>>> 0d2933b75174d88d6c0f6885eccd7956d4ff5ce7
      </main>
    </>
  );
};

export default Landing;

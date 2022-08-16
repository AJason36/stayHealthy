import React from "react";
import Image from "next/image";
import Link from "next/link";
const Calorie = () => {
  return (
    <>
        <section className="flex flex-col items-center mb-32 px-8 sm:px-0 gap-3">
        <h1 className="text-4xl lg:text-3xl mb-5 "></h1>
          
        <h1 className="text-4xl lg:text-3xl mb-5 font-Poppins">
          <b>Count{"\u00a0\u00a0"}your{"\u00a0\u00a0"}calories{"\u00a0\u00a0"}with{"\u00a0\u00a0"}our{"\u00a0\u00a0"}tools</b>
        </h1>
        <p className="lg:text-2xl font-Lora px-8 py-6 justify-center relative z-10 rounded-lg  card md:w-3/4 text-justify">
          This chart below show your recommended calories intake per day. Make Sure to fulfill your calories intake
              </p>
        <p className="lg:text-2xl px-8 py-6 justify-center relative z-10 rounded-lg  card md:w-3/4 text-justify">
          {/* TOLONG ISI YG GW KASI DI LINE */}
        </p>
      </section>
    </>
  );
};

export default Calorie;

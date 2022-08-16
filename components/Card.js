import React from "react";

const Card = ({ Content }) => {
  return (
    <div className="container flex items-center justify-center w-full">
      <div className="lg:text-2xl px-3 py-5 justify-center relative z-10 bg-[#2DAE77] shadow-2xl">
        {Content}
      </div>
    </div>
  );
};

export default Card;
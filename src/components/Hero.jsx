import React from "react";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto  text-center flex flex-col justify-center">
        <p className=" text-[#00df9a] font-bold uppercase p-2">GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-2xl font-bold md:py-6">Grow with data</h1>
        <div >
          <p className="md:text-5xl sm:text-4xl  text-xl  font-bold">Fast flexible financing for SaaS</p>
          {/* Additional content can go here */}
          <button className=" flrx bg-[#00df9a]  m-10 py-4 px-8  rounded-md"  >Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

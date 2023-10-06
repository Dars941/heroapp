import React from "react";
import Laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 bg-white">
        <img className="w-[500px] mx-auto" src={Laptop} alt="/" />
        <div className="bg-white font-bold my-auto p-4">
          <p className="bg-white text-[#00df9a] p-2">DATA ANALYIST DASHBARD</p>
          <h1 className="bg-white font-bold md:text-4xl sm:text-3xl text-xl py-4 ">Managing Data Analytics Centrally </h1>
          <p className="bg-white font-semibold py-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            repellendus eius temporibus, totam excepturi perferendis earum!
            Nemo, non nulla deleniti minus quos consectetur accusamus aliquam
            nihil maiores, asperiores ipsam animi.
          </p>
          <button className=" flrx bg-[#050c0a]  text-white py-4 px-8  rounded-md m-0"  >Get Started</button>
        </div>
      </div>
      
    </div>
  );
};

export default Analytics;

import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full  text-white py-4">
      <div className="max-w-[1240px] mx-auto  grid lg:grid-cols-3 ">
        <div className=" m-auto ">
          <h1 className="md:text-4xl sm:text-3xl text-xl ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            
            </ h1>
            <p className="my-4">
                Sign up for more Newsletter
            </p>
        </div> 
        <div className=" mx-auto my-auto bg-white rounded-full ">
            <input className="bg-white w-[300px] h-10 px-4 rounded-full" type="text" placeholder="Enter your Email" />
        
        </div> 
        <div className="m-auto my-2 flex py-4">
        <button className=" mx-auto my-auto  bg-[#50c9a7]  text-white py-4 px-8  rounded-md m-0"  >Get Started</button>
        </div>
       
      </div>
    </div>
  );
};

export default Newsletter;

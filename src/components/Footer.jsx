import React from "react";

const Footer = () => {
  return (
    <div className="max-w-full mx-auto py-16 px-4  grid lg:grid-cols-3 gap-8 text-green-300  ">
      <div>
        <h1 className="w-full flex text-3xl font-bold text-[#00df9a]">
          REACT.
        </h1>
        <p className="py-4 m-0 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam iusto
          blanditiis est nihil quidem. Et dicta architecto est soluta. Quia
        </p>
        <div className="py-4 flex gap-3  sm:justify-evenly  justify-start">
          <i style = {{fontSize:'25px'}}class="fa-brands fa-github cursor-pointer"></i>
          <i style = {{fontSize:'25px'}} class="fa-solid fa-x cursor-pointer"></i>
          <i  style = {{fontSize:'25px'}} class="fa-brands fa-instagram cursor-pointer"></i>
          <i  style = {{fontSize:'25px'}} class="fa-brands fa-facebook cursor-pointer"></i>
        </div>
      </div> 
      <div className='lg:col-span-2 flex justify-between mt-6'> 
      <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;

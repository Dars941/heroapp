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
    </div>
  );
};

export default Footer;

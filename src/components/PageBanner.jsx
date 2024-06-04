import React from "react";
import img from "../assets/images/checkout/checkout.png";

const PageBanner = ({ title, routes }) => {
  return (
    <section className="container mt-12 mb-32">
      <div className="relative">
        <img className="w-full min-h-[200px]" src={img} alt="image of banner" />
        <div className="rounded-2xl absolute flex items-center z-10 left-0 right-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
          <h1 className="text-2xl sm:text-4xl text-white ml-8 sm:ml-10 lg:ml-32 font-bold">{title}</h1>
        <div className="absolute bottom-0 w-full text-white z-20">
          <div className="w-full flex justify-center">
          <p className="bg-red-600 px-6 py-2.5 rounded-t-2xl text-center">{routes}</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;

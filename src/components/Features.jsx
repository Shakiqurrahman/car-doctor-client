import React from "react";
import icon2 from "../assets/icons/Group 38729.svg";
import icon4 from "../assets/icons/Wrench.svg";
import icon5 from "../assets/icons/check.svg";
import icon6 from "../assets/icons/deliveryt.svg";
import icon from "../assets/icons/group.svg";
import icon3 from "../assets/icons/person.svg";

const Features = () => {
  return (
    <div className="my-32 container">
      <div className="text-center space-y-5 md:w-1/2 mx-auto mb-12">
        <h5 className="text-xl text-red-600 font-bold">Core Features</h5>
        <h1 className="text-5xl font-bold">Why Choose Us</h1>
        <p className="text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.{" "}
        </p>
      </div>
      {/* icons container */}
      <div className="p-5 md:p-0 flex flex-col justify-center md:flex-row gap-6">
        <div className="border rounded-lg md:w-[170px] py-7 flex flex-col items-center justify-center gap-5 text-lg font-bold">
          <img src={icon} alt="" />
          <h5>Expert Team</h5>
        </div>
        <div className="border rounded-lg md:w-[170px] py-7 flex flex-col items-center justify-center gap-5 text-lg font-bold bg-[#FF3811] text-white">
          <img src={icon2} alt="" />
          <h5>Timely Delivery</h5>
        </div>

        <div className="border rounded-lg md:w-[170px] py-7 flex flex-col items-center justify-center gap-5 text-lg font-bold">
          <img src={icon3} alt="" />
          <h5>24/7 Support</h5>
        </div>
        <div className="border rounded-lg md:w-[170px] py-7 flex flex-col items-center justify-center gap-5 text-lg font-bold">
          <img src={icon4} alt="" />
          <h5>Best Equipment</h5>
        </div>
        <div className="border rounded-lg md:w-[170px] py-7 flex flex-col items-center justify-center gap-5 text-lg font-bold">
          <img src={icon5} alt="" />
          <h5>100% guarantee</h5>
        </div>
        <div className="border rounded-lg md:w-[170px] py-7 flex flex-col items-center justify-center gap-5 text-lg font-bold">
          <img src={icon6} alt="" />
          <h5>Timely Delivery</h5>
        </div>
      </div>
    </div>
  );
};

export default Features;

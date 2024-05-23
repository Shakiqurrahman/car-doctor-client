import React from "react";
import aboutImg2 from "../assets/images/about_us/parts.jpg";
import aboutImg1 from "../assets/images/about_us/person.jpg";

const AboutUs = () => {
  return (
    <section className="container">
      <div className="flex flex-col lg:flex-row items-center gap-20 my-32">
        <div className="w-full relative p-10 pl-0 lg:p-0 overflow-hidden lg:overflow-visible">
          <div className="w-full">
            <img
              src={aboutImg1}
              alt="about-page-image"
              className="rounded-lg object-fill"
            />
          </div>
          <div className="bg-white w-[65%] p-2 rounded-lg absolute -right-12 -bottom-12">
            <img src={aboutImg2} alt="about-page-image" />
          </div>
        </div>
        <div className="space-y-3 sm:space-y-5">
          <h3 className="text-xl text-[#FF3811] font-bold">About Us</h3>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="text-gray-500">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which don't look even slightly
            believable.{" "}
          </p>
          <p className="text-gray-500">
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn-filled">Get More Info</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

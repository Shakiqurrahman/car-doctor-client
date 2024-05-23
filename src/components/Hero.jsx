import React from "react";
import bannerImg1 from "../assets/images/homeCarousel/1.jpg";
import bannerImg2 from "../assets/images/homeCarousel/2.jpg";
import bannerImg3 from "../assets/images/homeCarousel/3.jpg";
import bannerImg4 from "../assets/images/homeCarousel/4.jpg";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="container">
      <div className="carousel w-full h-[650px] mt-10 rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={bannerImg1} className="w-full object-cover" />
          <div className="absolute flex items-center left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
            <div className="text-white md:w-1/3 ml-5 md:ml-24 space-y-7">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[75px]">
                Affordable Price For Car Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn-filled normal-case mr-5">
                  Discover More
                </button>
                <button className="btn-stroke-white text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-[60px] left-5 right-16 bottom-0">
            <a
              href="#slide4"
              className="btn glass btn-circle mr-6 text-white text-base"
            >
              <FaArrowLeft />
            </a>
            <a
              href="#slide2"
              className="btn bg-orange-600 border-none btn-circle text-white text-base"
            >
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={bannerImg2} className="w-full object-cover" />
          <div className="absolute flex items-center left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
            <div className="text-white md:w-1/3 ml-5 md:ml-24 space-y-7">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[75px]">
                Keep Your Vehicle in Top Shape
              </h1>
              <p>
                Discover everything you need to know about car servicing, from
                basic maintenance tasks to advanced care tips.
              </p>
              <div>
                <button className="btn-filled normal-case mr-5">
                  Discover More
                </button>
                <button className="btn-stroke-white text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-[60px] left-5 right-16 bottom-0">
            <a
              href="#slide1"
              className="btn glass btn-circle mr-6 text-white text-base"
            >
              <FaArrowLeft />
            </a>
            <a
              href="#slide3"
              className="btn bg-orange-600 border-none btn-circle text-white text-base"
            >
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={bannerImg3} className="w-full object-cover" />
          <div className="absolute flex items-center left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
            <div className="text-white md:w-1/3 ml-5 md:ml-24 space-y-7">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[75px]">
                Essential Car Servicing Tips
              </h1>
              <p>
                Learn the must-know tips and tricks for effective car servicing.
                If you're a new driver, these practical insights will help you
                maintain your vehicle's performance and safety.
              </p>
              <div>
                <button className="btn-filled normal-case mr-5">
                  Discover More
                </button>
                <button className="btn-stroke-white text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-[60px] left-5 right-16 bottom-0">
            <a
              href="#slide2"
              className="btn glass btn-circle mr-6 text-white text-base"
            >
              <FaArrowLeft />
            </a>
            <a
              href="#slide4"
              className="btn bg-orange-600 border-none btn-circle text-white text-base"
            >
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={bannerImg4} className="w-full object-cover" />
          <div className="absolute flex items-center left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
            <div className="text-white md:w-1/3 ml-5 md:ml-24 space-y-7">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[75px]">
                Maximizing Your Car's Lifespan
              </h1>
              <p>
                Follow this detailed checklist to ensure your car receives the
                necessary care and attention.
              </p>
              <div>
                <button className="btn-filled normal-case mr-5">
                  Discover More
                </button>
                <button className="btn-stroke-white text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-[60px] left-5 right-16 bottom-0">
            <a
              href="#slide3"
              className="btn glass btn-circle mr-6 text-white text-base"
            >
              <FaArrowLeft />
            </a>
            <a
              href="#slide1"
              className="btn bg-orange-600 border-none btn-circle text-white text-base"
            >
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

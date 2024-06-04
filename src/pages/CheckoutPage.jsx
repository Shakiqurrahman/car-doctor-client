import React from "react";
import { useLoaderData } from "react-router-dom";
import PageBanner from "../components/PageBanner";

const CheckoutPage = () => {
  const service = useLoaderData();
  const { title, id } = service;
  return (
    <>
      <PageBanner title={"Check Out"} routes={"Home / Checkout"} />
      <div className="container">
        <form className="p-4 sm:p-20 lg:p-28 bg-[#F3F3F3] rounded-lg">
          <div className="flex gap-6">
            <input
              className="w-full outline-none py-3 px-5 rounded-lg"
              type="text"
              name="firstName"
              placeholder="First Name"
            />
            <input
              className="w-full outline-none py-3 px-5 rounded-lg"
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <div className="flex gap-6 mt-6">
            <input
              className="w-full outline-none py-3 px-5 rounded-lg"
              type="text"
              name="phone"
              placeholder="Your Phone"
            />
            <input
              className="w-full outline-none py-3 px-5 rounded-lg"
              type="text"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <textarea
            className="w-full outline-none py-3 px-5 rounded-lg mt-6 resize-none"
            placeholder="Your Message"
            name="message"
            rows={8}
          ></textarea>
          <button
            className="mt-4 font-medium border border-transparent bg-red-600 hover:bg-white hover:text-red-600 duration-300 hover:border-red-600 text-white w-full py-3 px-5 rounded-lg"
            type="submit"
          >
            Order Confirm
          </button>
        </form>
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default CheckoutPage;

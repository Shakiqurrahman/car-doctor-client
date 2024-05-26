import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegCalendarAlt } from "react-icons/fa";

const ContactBanner = () => {
  return (
    <div className="bg-black container py-24 rounded-lg text-white flex flex-col md:flex-row items-center justify-around gap-14 px-5">
      <div className="flex items-center gap-5">
        <FaRegCalendarAlt className="text-4xl" />
        <div>
          <p>We are open monday-friday</p>
          <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <FaPhoneAlt className="text-4xl" />
        <div>
          <p>Have a question?</p>
          <h3 className="text-2xl font-bold">+2546 251 2658</h3>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <FaMapMarkerAlt className="text-4xl text-red-600" />
        <div>
          <p>We are open monday-friday</p>
          <h3 className="text-2xl font-bold">Liza Street, New York</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;

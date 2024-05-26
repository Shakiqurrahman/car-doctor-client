import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service || {};
  return (
    <div className="card bg-base-100 shadow-xl border">
      <figure>
        <img src={img} alt="service-photo" className="p-5" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions">
          <div className=" w-full flex justify-between items-center text-xl text-[#FF3811] font-semibold">
            <p className="">Price: ${price}</p>
            <Link to={`/booking/${_id}`}>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

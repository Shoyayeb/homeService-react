import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ serviceDetails }: any) => {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
      <div className="w-full block h-full">
        <img
          alt="blog"
          src={serviceDetails.serviceImageLink}
          className="max-h-40 w-full object-cover"
          loading="lazy"
        />
        <div className="bg-white dark:bg-gray-800 w-full p-4">
          <p className="text-pink-500 text-md font-medium">
            Starting From {serviceDetails.servicePrice} $
          </p>
          <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
            {serviceDetails.serviceName}
          </p>
          <p className="text-gray-400 dark:text-gray-300 font-light text-md">
            {serviceDetails.description}...
          </p>
        </div>
        <Link
          to={`/bookservice/${serviceDetails._id}`}
          className="w-full flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-b-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-6"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

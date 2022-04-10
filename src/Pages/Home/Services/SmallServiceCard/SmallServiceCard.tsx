import React from "react";
import { Link } from "react-router-dom";

const SmallServiceCard = ({ serviceDetails, setOpen, setRemoveId }: any) => {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto border-2 p-1 border-gray-200">
      <div className="flex flex-row items-start gap-4">
        <img
          src={serviceDetails.serviceImageLink}
          alt=""
          className="w-28 h-28 rounded-lg"
        />
        <div className="h-auto w-full flex flex-col justify-between">
          <div>
            <p className="text-gray-800 dark:text-white text-xl font-medium">
              {serviceDetails.serviceName}
            </p>
            <p className="text-red-500 mb-4 text-xs">
              Added By: {serviceDetails.addedBy || "Admin"}
            </p>
          </div>
          <span className="px-2 py-1 my-4 text-base rounded bg-green-200 font-medium">
            Price: {serviceDetails.servicePrice} <small>BDT</small>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 mt-6">
        <Link
          to={`updateorder/${serviceDetails._id}`}
          type="button"
          className="w-1/2 px-4 py-2 text-base border text-center rounded-lg text-grey-500 bg-white hover:bg-gray-200 "
        >
          Update
        </Link>
        <button
          onClick={() => {
            setRemoveId(serviceDetails._id);
            setOpen(true);
          }}
          type="button"
          className="w-1/2 px-4 py-2 text-base border rounded-lg text-white bg-red-500 hover:bg-red-600 "
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default SmallServiceCard;

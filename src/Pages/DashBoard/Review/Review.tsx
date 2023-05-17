import axios from "axios";
import React, { useState } from "react";
import defaultImage from "../../../Assets/user-default.png";
import useAuth from "../../../Hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const [details, setDetails] = useState("");
  const [rate, setRate] = useState(1);

  const detailsChange = (e: any) => {
    setDetails(e.target.value);
  };
  const rateChange = (e: any) => {
    setRate(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = {
      name: user.displayName,
      email: user.email,
      image: user.photoURL ? user.photoURL : defaultImage,
      details: details,
      rate: rate,
    };
    axios
      .post("https://homeservice-ixli.onrender.com/reviews", formData)
      .then((res: any) => console.log(res))
      .then((data: any) => {
        window.alert("Review added");
      });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mx-auto max-w-sm space-x-3"
      >
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Add a Review
          </div>
          <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2">
              <label className="text-gray-700" htmlFor="name">
                <textarea
                  onChange={detailsChange}
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  id="comment"
                  placeholder="Enter your comment"
                  name="comment"
                  rows={5}
                  cols={40}
                  maxLength={60}
                ></textarea>
              </label>
            </div>
            <div className="col-span-2">
              <p className="dark:text-gray-200 text-gray-800 font-bold text-right">
                {details.length}/60
              </p>
              <label htmlFor="rate" className="text-gray-700 dark:text-white">
                Rate
              </label>
              <select
                required
                onChange={rateChange}
                id="rate"
                name="rate"
                className="mx-4 focus:ring-indigo-500 py-2 px-4 border-gray-300 border bo focus:border-indigo-500 h-full pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="col-span-2 text-right">
              <button
                type="submit"
                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Review;

import React from "react";

const ReviewCard = (props: any) => {
  const { name, image, email, details, rate } = props.review;

  var rating = [];
  for (var i = 0; i < rate; i++) {
    rating.push(i);
  }

  return (
    <div className="bg-white dark:bg-gray-800 lg:w-1/2 rounded-lg p-4 mb-6 shadow sm:inline-block">
      <div className="flex items-start justify-center text-left">
        <div className="flex-shrink-0">
          <div className="inline-block relative">
            <a href="/" className="block relative">
              <img
                alt="profile"
                src={image}
                className="mx-auto object-cover rounded-full h-16 w-16 "
              />
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1"
            >
              <path
                fill-rule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="ml-6">
          <p className="flex items-baseline">
            <span className="text-gray-600 dark:text-gray-200 font-bold">
              {name}
            </span>
            <span className="text-gray-500 dark:text-gray-300  ml-2 text-sm">
              2 months ago
            </span>
          </p>
          <div className="flex items-center mt-1">
            {rating.map((ratingStar) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 1792 1792"
              >
                <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
              </svg>
            ))}
          </div>
          <div className="mt-3">
            <p className="mt-1 max-w-xs dark:text-white">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

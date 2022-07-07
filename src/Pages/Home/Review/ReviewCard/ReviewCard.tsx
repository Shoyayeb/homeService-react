const ReviewCard = (props: any) => {
  const { name, image, email, details, rate } = props.review;

  var rating = [];
  for (var i = 0; i < rate; i++) {
    rating.push(i);
  }

  return (
    <div className="flex justify-around items-center w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
      <div className="">
        <div className="mx-auto object-cover rounded-full h-16 w-16">
          <img
            alt="profil"
            src={image}
            className="mx-auto object-cover rounded-full h-16 w-16 "
          />
        </div>
        <div className="">
          <p className="text-md text-indigo-500 font-bold text-center">
            {name}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
            {email}
          </p>
          <div className="flex items-center justify-center mt-1">
            {rating.map((ratingStar, index) => (
              <svg
                key={index}
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
        </div>
      </div>
      <div className=" mb-10">
        <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
          “
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-100 text-center px-5">
          {details}
        </p>
        <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
          ”
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

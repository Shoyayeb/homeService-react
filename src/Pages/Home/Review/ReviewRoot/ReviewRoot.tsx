import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import ReviewCard from "../ReviewCard/ReviewCard";
import HashLoader from "react-spinners/HashLoader";

const ReviewRoot = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  let [color, setColor] = useState("#4f46e5");
  useEffect(() => {
    fetch("https://homeservice-79e77.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        // name, image, email, details, rate
        setLoading(false);
      });
  }, []);
  return (
    <div id="reviews" className="my-10">
      {loading ? (
        <div className="flex justify-center">
          <HashLoader color={color} />
        </div>
      ) : (
        <Carousel showArrows={false}>
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default ReviewRoot;

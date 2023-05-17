import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import HashLoader from "react-spinners/HashLoader";
import ReviewCard from "../../../Components/Cards/ReviewCard/ReviewCard";

const Review = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  useEffect(() => {
    fetch("https://homeservice-ixli.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);
  return (
    <div id="reviews" className="my-10">
      {loading ? (
        <div className="flex justify-center">
          <HashLoader color="#4f46e5" />
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

export default Review;

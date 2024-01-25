import React from "react";
import { reviews } from "../Constants/Reviews";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1023 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-teal-950  lg:min-h-screen p-6 cursor-move lg:p-16 lg:pl-28  ">
     
     <h1 className="text-center font-semibold text-5xl py-16 font-sans text-[#f7644c]  ">Reviews</h1>
     
      <Carousel responsive={responsive}>
        {reviews.map((review) => (
          <ReviewCards
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            feedback={review.feedback}
            position={review.position}
          />
        ))}
      </Carousel>
    </div>
  );
};

const ReviewCards = ({ imgURL, customerName, position, feedback }) => {
  return (
    <div className=" mx-7  ">
      <div className="bg-white px-8 text-center lg:w-96 flex flex-col justify-center items-center">
        <img className="rounded-full object-cover mt-7 w-[80px] h-[80px]" src={imgURL} alt="Reviewers" />

        <p className="pt-7 pb-2 text-[#f7644c] max-md:text-lg text-2xl max-md:font-normal font-semibold  ">
          "{feedback} "
        </p>

        <div className="pb-8">
          <p className="text-lg font-semibold inline">-{customerName}, </p>{" "}
          <p className="text-gray-900 font-thin inline text-lg  ">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

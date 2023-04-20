import React from "react";
import "../css/Review.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import star from "../images/star.png";
import { Reviews } from "../data/reviewsdata";

export default function Review() {
  return (
    <div className="review">
      <div className="test-about fourth-about">
        <img src={star} alt="star" />
        <h2>User Reviews</h2>
        <img src={star} alt="star" />
      </div>
      <Carousel
        className="review-container"
        autoFocus={true}
        autoPlay={true}
        interval={5000}
        showArrows={true}
        showIndicators={true}
        stopOnHover={true}
        width={900}
        infiniteLoop={true}
        showStatus={true}
        showThumbs={false}
        transitionTime={500}
        buttonsVisibility={true}
        useKeyboardArrows={true}
      >
        {Reviews.map((review) => (
          <div className="reviews">
            <div className="para-container">
              <p className="para-review">{review.name}</p>
            </div>

            <img className="reviewer-img" src={review.image} alt="person" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

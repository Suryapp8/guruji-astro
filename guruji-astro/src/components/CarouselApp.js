import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../css/Carousel.css";
import star from "../images/star.png";
import sunny from "../images/sunny.png";
import man1 from "../images/man1.png";
import man2 from "../images/man2.png";
import woman from "../images/woman.png";
import right from "../images/right.png";
import left from "../images/left.png";
import play from "../images/play.png";
import banner from "../images/banner.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselApp() {
  const arr = [man1, man2, woman, man1, man2, woman];

  return (
    <>
      <div className="container-head">
        <div className="container">
          <div className="testimonial">
            <div className="test-logo">
              <img src={sunny} alt="sun" />
            </div>

            <div className="test-about">
              <img src={star} alt="star" />
              <h2>User Testimonial</h2>
              <img src={star} alt="star" />
            </div>
          </div>
        </div>
        <div className="carousel-container">
          <Carousel
            autoFocus={true}
            autoPlay={true}
            interval={3000}
            showArrows={true}
            showIndicators={false}
            stopOnHover={false}
            width={700}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            transitionTime={500}
            buttonsVisibility={true}
            centerMode={true}
            centerSlidePercentage={60}
            selectedItem={1}
            useKeyboardArrows={true}
          >
            {arr.map((file, index) => (
              <div key={index}>
                <img className="play" src={play} alt="play" />
                <img className="caraousel-img" src={file} alt="carousel" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="next-prev">
          <img role="button" data-slide="prev" src={left} alt="prev" />
          <img src={right} alt="next" />
        </div>
        <div className="banner">
          <img src={banner} alt="banner" />
        </div>
        <div className="pages pages1">
          <div className="circle1"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="test-about second-about">
          <img src={star} alt="star" />
          <h2>Premium Astrolgers</h2>
          <img src={star} alt="star" />
        </div>
      </div>
    </>
  );
}

export default CarouselApp;

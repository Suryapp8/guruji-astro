import React from "react";
import "../css/Chakra.css";
import star from "../images/star.png";
import love from "../images/love.png";

function Chakra() {
  return (
    <div className="chakra-container">
      <div className="shade-div"></div>
      <div className="test-about third-about">
        <img src={star} alt="star" />
        <h2>Many Problem one Solution</h2>
        <img src={star} alt="star" />
      </div>
      <div className="flex-board">
        <div className="board-1">
          <div className="box">
            <div className="img-container">
              <img src={love} alt="love" />
            </div>

            <p>Love Related Problem</p>
          </div>
          <div className="box">
            <div className="img-container">
              <img src={love} alt="love" />
            </div>
            <p>Marriage Problem</p>{" "}
          </div>
          <div className="box">
            <div className="img-container">
              <img src={love} alt="love" />
            </div>
            <p>Job/ Business Problems</p>{" "}
          </div>
          <div className="box">
            <div className="img-container">
              <img src={love} alt="love" />
            </div>
            <p>Money Problem</p>{" "}
          </div>
          <div className="box">
            <div className="img-container">
              <img src={love} alt="love" />
            </div>
            <p>Education Problem</p>{" "}
          </div>
        </div>

        <div className="chakra">fe</div>

        <div className="board-1">
          <div className="box">
            <div className="img-container">
              <img src={love} alt="love" />
            </div>

            <p>Health Problem</p>
          </div>
          <div className="box">
            <div className="img-container">
              <img src={love} alt="love" />
            </div>
            <p>Grah Shanti</p>{" "}
          </div>
          <div className="box">
            <div className="img-container">
              <img src={love} alt="love" />
            </div>
            <p>Child Birth Issues</p>{" "}
          </div>
          <div className="box">
            <div className="img-container">
              <img src={love} alt="love" />
            </div>
            <p>Husband Wife Problem</p>{" "}
          </div>
          <div className="box">
            <div className="img-container">
              <img src={love} alt="love" />
            </div>
            <p>Lucky Number/ Color</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chakra;

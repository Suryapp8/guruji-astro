import React from "react";
import "../css/Chakra.css";
import star from "../images/star.png";
import love from "../images/love.png";
import sunny from "../images/sunny.png";
import scorpion from "../images/scorpion.png";
import goat from "../images/goat.png";
import cancer from "../images/cancer.png";

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

        <div className="wheel">
          <span class="line">
            <img className="zodiac-sign" src={scorpion} alt="zodiac" />
          </span>
          <span class="line">
            <img className="zodiac-sign" src={goat} alt="zodiac" />
          </span>
          <span class="line">
            <img className="zodiac-sign" src={cancer} alt="zodiac" />
          </span>
          <span class="line">
            <img className="zodiac-sign" src={scorpion} alt="zodiac" />
          </span>
          <span class="line">
            <img className="zodiac-sign" src={goat} alt="zodiac" />
          </span>
          <span class="line">
            <img className="zodiac-sign" src={cancer} alt="zodiac" />
          </span>

          <div className="stable-sun">
            <img src={sunny} alt="sun" />
          </div>

          <span class="line">
            <img className="zodiac-sign" src={scorpion} alt="zodiac" />
          </span>
          <span class="line">
            <img className="zodiac-sign" src={goat} alt="zodiac" />
          </span>
          <span class="line">
            <img className="zodiac-sign" src={cancer} alt="zodiac" />
          </span>
          <span class="line">
            <img className="zodiac-sign" src={scorpion} alt="zodiac" />
          </span>
          <span class="line">
            <img className="zodiac-sign" src={goat} alt="zodiac" />
          </span>
          <span class="line">
            <img className="zodiac-sign" src={cancer} alt="zodiac" />
          </span>
        </div>

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

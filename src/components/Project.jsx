import React, { useState } from "react";
import projectImages from "../utils/projectImages";
import arrowIcon from "../images/arrowdown.png";

export default function Project({ name, title, description }) {
  const imageArray = projectImages[name];
  console.log(imageArray);
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => {
    if (counter < imageArray.length) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  };
  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      setCounter(4);
    }
  };
  return (
    <div className="project">
      <h1 className="project__heading--primary">{title}</h1>
      <div className="carousel">
        {imageArray &&
          imageArray.map((url, i) => {
            if (counter === i + 1) {
              return <img className="carousel__image active" src={url} />;
            } else {
              return <img className="carousel__image" src={url} />;
            }
          })}
        <div className="carousel__navigation">
          <button onClick={decrementCounter} className="carousel__button left">
            <img src={arrowIcon} />
          </button>
          <button onClick={incrementCounter} className="carousel__button right">
            <img src={arrowIcon} />
          </button>
        </div>
      </div>
      <h1 className="project__text">{description}</h1>
    </div>
  );
}

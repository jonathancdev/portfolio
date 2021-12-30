import React, { useState } from "react";
import projectImages from "../utils/projectImages";

export default function Project({ name }) {
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
          <button onClick={decrementCounter} className="carousel__button">
            {"<"}
          </button>
          <button onClick={incrementCounter} className="carousel__button">
            {">"}
          </button>
        </div>
      </div>
      <div className="project__description">
        <h1 className="project__heading--primary">{name}</h1>
      </div>
    </div>
  );
}

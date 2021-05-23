import React, { useState } from "react";
import styled from "styled-components";

import ReactPlayer from "react-player";

import { works } from "./allWorks";

const Works = () => {
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (works.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (works.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <section id="Works" className="center">
      <SliderAtr>
        {works?.map((item, indx) => {
          return (
            <div
              className="slide"
              key={indx}
              style={{ transform: `translateX(${x}%)` }}
            >
              <ReactPlayer
                url={item.link}
                autopictureinpicture
                width="75vw"
                height="75vh"
                style={{ margin: "0 auto" }}
                controls
              />
              <div className="slide-info center">
                <div className="slide-left">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="slide-right">
                  {item.tech?.map((tech, inx) => {
                    return <p key={inx}>{tech}</p>;
                  })}
                  <a href={item.demo} target="_blank" rel="noopener noreferrer">
                    Watch
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        <ButtonSlider style={{ left: "0" }} onClick={goLeft}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-circle-left"
            className="svg-inline--fa fa-arrow-circle-left fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"
            ></path>
          </svg>
        </ButtonSlider>
        <ButtonSlider style={{ right: "0px" }} onClick={goRight}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-circle-right"
            className="svg-inline--fa fa-arrow-circle-right fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"
            ></path>
          </svg>
        </ButtonSlider>
      </SliderAtr>
    </section>
  );
};

const ButtonSlider = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 7%;
  height: 100%;
  border: none;
  background-color: hsla(0, 0%, 0%, 0.446);
  transition: 0.5s;
  font-size: 3rem;
  z-index: 9999;

  :hover {
    font-size: 4rem;
    color: hsl(0, 100%, 98%);
    background-color: hsla(0, 0%, 50.19607843137255%, 0.226);
  }
  :active {
    background-color: hsl(0, 0%, 80%);
    color: hsl(0, 100%, 100%);
  }
`;

const SliderAtr = styled.div`
  position: relative;
  z-index: 1;
  height: inherit;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;

  .slide {
    min-width: 100%;
    height: inherit;
    transition: 0.5s;
    padding: 1rem;
    text-align: center;
  }
  .slide-info {
    padding: 1rem 3rem 0 3rem;
  }

  .slide-left {
    width: 70%;
    text-align: left;
    margin-left: 5rem;
  }

  .slide-right {
    width: 30%;
    text-align: right;
    margin-right: 5rem;
  }
`;

export default Works;

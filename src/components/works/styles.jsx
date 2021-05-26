import styled from "styled-components";

export const ButtonSlider = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 7%;
  height: 100%;
  border: none;
  background-color: transparent;
  transition: 0.5s;
  font-size: 3rem;
  z-index: 9999;
  filter: grayscale(50%) opacity(0.7);

  :hover {
    font-size: 4rem;
    color: hsl(0, 100%, 98%);
    cursor: pointer;
  }
  :active {
    font-size: 6rem;
  }

  // Medium screen
  @media only screen and (max-width: 770px) {
    top: 70%;
  }

  @media only screen and (max-width: 400px) {
    width: 10%;
    font-size: 0;
    top: 95%;
  }
`;

export const SliderAtr = styled.div`
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
    padding: 0;
    text-align: center;
  }

  .slide-left {
    width: 50%;
    text-align: right;
    padding: 0 1rem 0 2.5rem;
    border-right: 7px double white;
  }

  .slide-left h3 {
    color: hsl(33, 53%, 46%);
    padding: 5px 0;
    font-weight: 800;
    font-family: "Yantra";
    font-size: 3rem;
  }

  .slide-left p {
    font-family: "Yantra";
    font-size: 1.5rem;
  }

  .slide-right {
    width: 50%;
    padding: 0 0 0 1rem;
    justify-content: left;
  }

  // Medium screen
  @media only screen and (max-width: 770px) {
    .slide-left {
      padding: 1em;
      width: 90%;
    }

    .slide-left h3,
    .slide-left p {
      font-size: 2rem;
    }

    .slide-right {
      justify-content: center;
    }
  }

  @media only screen and (max-width: 400px) {
    overflow: auto;
    .slide {
      padding: 0;
    }

    .slide-left h3,
    .slide-left p {
      font-size: 1rem;
    }

    .slide-left {
      padding: 0.5em;
      width: 100%;
      text-align: center;
      border: none;
      font-size: 1rem;
    }

    .slide-left h3,
    .slide-left p {
      font-size: 1rem;
    }

    .slide-right {
      width: 100%;
      margin-top: 1em;
      padding: 0;
    }

    .work-svg {
      display: flex;
      margin: 1em;
      width: 1.5em;
      min-width: 1.5em;
    }

    .slide-info {
      display: block;
      height: 10vh;
    }
  }
`;

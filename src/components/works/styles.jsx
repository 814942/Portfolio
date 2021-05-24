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
    padding: 1rem;
    text-align: center;
  }
  .slide-info {
    padding: 1rem;
    margin: 0 10rem 0 10rem;
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
  }

  .slide-left h3,
  p {
    font-family: "Yantra";
  }

  .slide-right {
    width: 50%;
    padding: 0 0 0 1rem;
    justify-content: left;
  }
`;

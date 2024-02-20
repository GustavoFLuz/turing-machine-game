import styled from "styled-components"

export const Wrapper = styled.div`
    width: 500px;
    height: 100dvh;
    padding: 10px;
    padding-bottom: 150px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;

    overflow: hidden;
    box-sizing: border-box;

    perspective: 1000px;
    perspective-origin: 50% 50%;
`

export const CardWrapper = styled.div`
  height: 100px;
  overflow: visible;
  transition: height 0.3s;
  transform: rotateX(-15deg);

  &:hover {
    height: 260px;
    transform: rotateX(0deg);
  }
`
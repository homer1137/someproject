import styled from "styled-components";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";


export const LeftArrow = styled(IoChevronBack)`
  color: ${(props) => props.theme.fontColor2};
  transition-duration: 0.4s;
  height: 25px;
  width: 25px;
  cursor: pointer;
  &:active {
    color: ${(props) => props.theme.fontColor};
  }
  &:hover {
    transform: scale(1.2);
  }
`;




export const RightArrow = styled(IoChevronForward)`
  color: ${(props) => props.theme.fontColor2};
  transition-duration: 0.4s;
  cursor: pointer;
  height: 25px;
  width: 25px;
  &:active {
    color: ${(props) => props.theme.fontColor};
  }
  &:hover {
    transform: scale(1.2);
  }
`;

export const SliderContainerColumn = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;
  background-color: ${(props) => props.theme.colorsUiBase};
  border-radius: 00% 0% 15px 15px;
  position: relative;
`;

export const SliderContainerColumn2 = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;
  background-color: ${(props) => props.theme.colorsUiBase};
  border-radius: 00% 0% 15px 15px;
  
`;



export const SliderWindow = styled.div`
  width: 400px;
  overflow: hidden;
  
`;
export const SliderContainerRowWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: ${props=>props.sliderArray*400+'px'};
  transition-duration: 0.5s;
  right: ${(props)=>{
    if (props.state.isScrolling) {
      return (props.state.isScrolling?props.moveSlider + props.state.scrollX + 'px':null)
    } else return ((props) => props.moveSlider + "px")
    }};
  cursor: grab;
  &:active{
    cursor: grabbing;
  }
 
`;

export const SliderContainerRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 400px;

  h3 {
    font-size: 28px;
  }
  h2 {
    font-size: 14px;
  }
  span {
    font-size: 14px;
    line-height: 17px;
    height: 17px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;
  }
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: relative;
    right: 20px;
  }
  
`;

export const LiStyled = styled.li`
  width: 10px;
  height: 10px;
  margin: 0px 4px;

  border-radius: 50%;
  display: list-item;
  list-style-type: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  color: coral;
  user-select: none;
  background-color: ${(props) => {
    if (props.active2) return (props) => props.theme.fontColor2;
    else return "white";
  }};
  
  &:hover {
    transform: scale(1.2);
  }
`;

import styled from "styled-components";
import { IoCaretUpOutline } from "react-icons/io5";

export const DropDownWrapper = styled.div`
     position: relative;
  cursor: pointer;
  color: ${props=>props.theme.fontColor2};
  userSelect: none;
`

export const DropDownControl = styled.div`
    width: 400px;
    
`
export const DropDownSelectedValue = styled.input.attrs({
  type: "text",
  placeholder: 'Select product (you can type and use search)'
})`
    line-height: 1.5;
  font-size: 1rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
  
  outline: none;
  padding: 8px 52px 8px 10px;
  transition: all 200ms ease;
  width: 100%;
  &:focus {
        
        border: 3px solid lightblue;
    }
`
export const DropDownArrow = styled(IoCaretUpOutline)`
  height: 30px;   
  width: auto;
  display: block;
  transform: ${(props)=>props.open?'rotate(0deg)':'rotate(180deg)'};
  transition-duration: 0.5s;
  position: absolute;
  right: 10px;
  top: 5px;
`
export const DropDownOptions = styled.div`
  
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  margin-top: -1px;
  max-height: 200px;
  overflow-y: auto;
  cursor: pointer;
  top: 100%;
  width: 100%;
  z-index: 1;
  -webkit-overflow-scrolling: touch;
  animation-name: ${(props)=>props.open?'open':'close'};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes open {
  0% {
    display: none;
    opacity: 0;
    visibility: hidden;
    height: 0px;
  }
  1% {
    display: block;
    
  }
  100% {
    display: block;
    opacity: 1;
    visibility: visible;
    height: 150px;
  }
  
}

@keyframes close {
  0% {
    display: block;
    opacity: 1;
    visibility: visible;
    height: 150px;
  }
  99% {
    display: block;
    
  }
  100% {
    display: none;
    opacity: 1;
    visibility: hidden;
    height: 0px;
  }
  
}

`




export const DropDownOption = styled.div`
    box-sizing: border-box;
  color: rgba(51, 51, 51, 0.8);
  cursor: pointer;
  display: block;
  padding: 8px 10px;
  &:hover {
  background-color: #f2f9fc;
  color: #333;
}
`
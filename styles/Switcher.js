
import styled from "styled-components";

export const Switcher = styled.input.attrs({ type: "checkbox" })`
  position: relative ;
  background-color: ${props=>props.theme.fontColor};
  width: 3rem;
  height: 1.5rem ;
  box-shadow: ${props=>props.theme.shadow};
  border-radius: 1rem;
  transition-duration: 0.4s ;
  cursor: pointer;
  
  -webkit-appearance: none;
    
  &:checked:hover{
    background-color: ${props=>props.theme.fontColor2};
  }
 
  &:hover{
    background-color: ${props=>props.theme.fontColor2};
  }
  &:checked{
    
    background-color: ${props=>props.theme.fontColor};

  }
  &:before{
      content:'';
      position: absolute;
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 0.7rem;
      top: 0.025rem;
      left: 0;
      background-color: ${props=>props.theme.body};
      transition-duration: 0.4s;
      box-shadow: 0 2px 5px rgba(0,0,0,.2);
      transform: scale(1.2);
  }
  &:checked:before{
    
    left: 1.6rem;
    
  }
  
`;
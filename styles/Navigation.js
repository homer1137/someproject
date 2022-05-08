import styled from "styled-components";

export const Navigation = styled.nav`
  height: 4rem;
  
  background-color: ${props=>props.theme.colorsUiBase};
  
  box-shadow: ${props=>props.theme.shadow};
  transition-duration: 0.3s ;
  a {
      text-decoration: none ;
      font-weight: 700;
      font-size : 2rem ;
      color: ${props=>props.theme.fontColor};
      &:hover{
    color: ${props=>props.theme.fontColor2};
  }
  }
  &:hover{
    color: ${props=>props.theme.fontColor2};
  }
  
`;
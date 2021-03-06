import styled from "styled-components";

export const Button = styled.button`
border-radius: 4px;
background: none;
white-space: nowrap;
padding: 10px 20px;
margin: 5px;
font-size: 16px;
color: ${props=>props.theme.fontColor2};
outline: none;
border: 2px solid #fff;
cursor: pointer;
overflow: hidden;
position: relative;
&:before {
    background: #fff;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
}
&:hover:before {
    height: 500%;
}
&:hover {
    color: black;
}
&:disabled{
    border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
}
`;
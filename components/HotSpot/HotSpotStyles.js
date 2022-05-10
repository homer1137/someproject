import styled from 'styled-components';
import { Button } from '../../styles/Button';
import Image from 'next/image';
import { IoLocateSharp } from "react-icons/io5";

export const Pointer = styled(IoLocateSharp)`
  color: ${(props) => props.theme.fontColor};
  transition-duration: 0.4s;
  height: 25px;
  width: 25px;
  position: absolute;
  cursor: pointer;
  left: ${(props) => props.xKey+'px'};
  top: ${(props) => props.yKey+'px'};
  z-index: 2; 
  transition-duration: 0.4s;
  color: ${(props) => {
    if (props.active2) return (props) => props.theme.fontColor2;
    else return "white";
  }};

transform: ${(props) => {
    if (props.active2) return 'rotate(180deg)';
    else return 'rotate(0deg)';
  }};


  &:hover {
    transform: scale(1.2);
  }
`;

export const ImageStyled = styled(Image).attrs({
    height: 400,
    width: 400
})`
    
    min-width: 400px;
    z-index: 1;
   
`;


export const HotSpotSection = styled.section`
	
	background-position: center;
	background-size: cover;
	padding-top: clamp(20px, 25vh, 40px);
	
    
`;

export const HotSpotWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative ;
    background-color: ${props=>props.theme.body};
    
    @media (max-width: 960px) {
		flex-direction: column;
		
	}
    
`

export const SliderWrapper = styled.div`
  z-index: 0;
  position: relative;
  transition-duration: 0.5s;
  bottom: ${(props)=>props.showSlider+'px'};
  user-select: none;
  display: ${(props)=>props.showSlider?'block':'block'};
`;


export const HotSpotFlexColumn = styled.div`
    display: flex;
    flex-direction: column ;
    margin: 2rem;
    position: relative;
    
    label {
       font-size : 1rem;
       font-weight: 500;
    }
    h1{
        font-size: 3rem;
    }
    span{
        font-size: 1rem;
    }
`
export const HotSpotFlexColumn2 = styled.div`
    display: flex;
    flex-direction: column ;
    margin: 2rem;
    position: relative;
    transition-duration: 0.4s;
    bottom: 150px;
    label {
       font-size : 1rem;
       font-weight: 500;
    }
    h1{
        font-size: 3rem;
    }
    span{
        font-size: 1rem;
    }
    @media (max-width: 960px) {
		bottom: ${(props)=>props.showSlider+'px'};
		    
	}
`


export const HotSpotButton = styled(Button)`
	color: black;
    margin: 10px 0;
	&:before {
		background: #fff;
		height: 500%;
	}
	&:hover:before {
		height: 0%;
	}
	&:hover {
		color: white;
	}
`;

export const ShowButton = styled.button`
    width: 150px;
    height: 30px;
    background-color: coral;
    color: white;
    z-index: 4;
    position: relative;
    left: 230px;
    border: none;
    cursor: pointer ;
    transition-duration: 0.6s;
    
    transform: rotateX(${(props)=>props.showSlider+'deg'});
`
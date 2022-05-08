import styled from 'styled-components';
import { Button } from '../../styles/Button';
import Image from 'next/image';


export const ImageStyled = styled(Image)`
    position: relative ;
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
  
`;


export const HotSpotFlexColumn = styled.div`
    display: flex;
    flex-direction: column ;
    margin: 2rem;
    
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
    position: relative;
    left: 230px;
    border: none;
    cursor: pointer ;
    transition-duration: 1s;
`
import {
  HotSpotButton,
  HotSpotFlexColumn,
  HotSpotSection,
  HotSpotWrapper,
  ShowButton,
  SliderWrapper, 
  ImageStyled
} from "./HotSpotStyles";
import Image from 'next/image'
import SmallSlider from "../SmallSlider";
import { useState } from "react";

export default function HotSpot() {
  const [showSlider, setShowSlider] = useState(false);

  

  return (
    <HotSpotSection>
      <HotSpotWrapper>
        <HotSpotFlexColumn width='400px'>
          <ImageStyled src='/producto.jpg' height='400' width='400' alt='some food'/>
          <SliderWrapper showSlider={showSlider?230:0}>
          <SmallSlider/>
          <ShowButton onClick={()=>setShowSlider(prev=>!prev)}>Показать больше</ShowButton>
          </SliderWrapper>
          
        </HotSpotFlexColumn>
        <HotSpotFlexColumn>
          <label>Hi</label>
          <h1>Hello again</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos unde
            accusantium officiis cumque corrupti nesciunt, recusandae illum
            magnam dolores doloremque minima provident blanditiis! Vero quis
            culpa reiciendis id, modi laboriosam!
          </span>
        </HotSpotFlexColumn>
      </HotSpotWrapper>
    </HotSpotSection>
  );
}

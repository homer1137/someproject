import {
  HotSpotButton,
  HotSpotFlexColumn,
  HotSpotFlexColumn2,
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
        <HotSpotFlexColumn>
          <ImageStyled src='/producto.jpg' height='400' width='400' alt='some food'/>
          <SliderWrapper showSlider={showSlider?230:0} >
          <SmallSlider />
          <ShowButton showSlider={showSlider?360:0} onClick={()=>setShowSlider(prev=>!prev)}>{showSlider?'Show items':'Hide items'}</ShowButton>
          </SliderWrapper>
          
        </HotSpotFlexColumn>
        <HotSpotFlexColumn2 showSlider={showSlider?250:0}>
          <label>Hi</label>
          <h1>Hello again</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos unde
            accusantium officiis cumque corrupti nesciunt, recusandae illum
            magnam dolores doloremque minima provident blanditiis! Vero quis
            culpa reiciendis id, modi laboriosam!
          </span>
        </HotSpotFlexColumn2>
      </HotSpotWrapper>
    </HotSpotSection>
  );
}

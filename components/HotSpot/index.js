import {
  
  HotSpotFlexColumn,
  HotSpotFlexColumn2,
  HotSpotSection,
  HotSpotWrapper,
  ShowButton,
  SliderWrapper, 
  ImageStyled,
  Pointer
} from "./HotSpotStyles";
import SmallSlider from "../SmallSlider";
import { useState } from "react";
import { sliderArray } from "../SmallSlider/sliderArray";

export default function HotSpot() {
  const [showSlider, setShowSlider] = useState(false);
  const [moveSlider, setMoveSlider] = useState(0);
  const active2 = {
    basis: true,
  };
 
 

  return (
    <HotSpotSection>
      <HotSpotWrapper>
        <HotSpotFlexColumn>
          <ImageStyled src='/producto.jpg' height='400' width='400' alt='some food'/>
          {sliderArray.map((item, index) => (
            <Pointer
              key={item.id}
              onClick={() => setMoveSlider(400 * index)}
              active2={
                index === (moveSlider + 400) / 400 - 1 ? { active2 } : null
              }
              xKey={item.x}
              yKey={item.y}
            ></Pointer>
          ))}
          <SliderWrapper showSlider={showSlider?230:0} >
          <SmallSlider setMoveSlider={setMoveSlider} moveSlider={moveSlider}/>
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

import React, { useState } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { SliderContainerRow } from "./SmallSliderStyles";
import {
  SliderContainerColumn,
  SliderContainerColumn2,
  SliderContainerRowWrapper,
  SliderWindow,
  LeftArrow,
  RightArrow,
  LiStyled,
} from "./SmallSliderStyles";
import { HotSpotButton } from "../HotSpot/HotSpotStyles";
import { sliderArray } from "./sliderArray";

export default function SmallSlider() {
  //движение стелками
  const [moveSlider, setMoveSlider] = useState(0);

  const active2 = {
    basis: true,
  };

  function moveRight() {
    if (moveSlider === 400 * (sliderArray.length - 1)) {
      setMoveSlider((prev) => prev - 400 * (sliderArray.length - 1));
    } else {
      setMoveSlider((prev) => prev + 400);
    }
  }
  function moveLeft() {
    if (moveSlider === 0) {
      setMoveSlider((prev) => prev + 400 * (sliderArray.length - 1));
    } else {
      setMoveSlider((prev) => prev - 400);
    }
  }

  //движение мышкой

  const [state, setState] = useState({
    isScrolling: false,
    clientX: 0,
    scrollX: 0,
  });

  function onMouseDown1(e) {
    let Cx = e.nativeEvent.clientX;
    setState({
      ...state,
      isScrolling: true,
      clientX: Cx,
    });
  }

  function onMouseUp1(e) {
    if (state.scrollX < 0) {
      moveLeft();
    }
    if (state.scrollX > 0) {
      moveRight();
    }

    setState({
      ...state,
      isScrolling: false,
      clientX: 0,
      scrollX: 0,
    });

  }

  function onMouseMove1(e) {
    let v = e.nativeEvent.clientX;
    let { clientX } = state;
    if (state.isScrolling) {
      setState({
        ...state,
        scrollX: clientX - v,
      });
    }
  }

  return (
    <SliderContainerColumn
    onPointerDown={(e) => onMouseDown1(e)}
      onPointerUp={(e) => onMouseUp1(e)}
      onPointerMove={(e) => onMouseMove1(e)}
      onPointerLeave={(e) => onMouseUp1(e)}
      
    >
      <SliderContainerRow>
        <LeftArrow onClick={moveLeft} />
        <ul>
          {sliderArray.map((item, index) => (
            <LiStyled
              key={item.id}
              onClick={() => setMoveSlider(400 * index)}
              active2={
                index === (moveSlider + 400) / 400 - 1 ? { active2 } : null
              }
            ></LiStyled>
          ))}
        </ul>
        <RightArrow onClick={moveRight} />
      </SliderContainerRow>
      <SliderWindow>
        <SliderContainerRowWrapper
          moveSlider={moveSlider}
          state={state}
          sliderArray={sliderArray.length}
        >
          {sliderArray.map((item) => (
            <SliderContainerRow key={item.id}>
              <SliderContainerColumn2>
                <h3>{item.price}</h3>
                <h2>{item.title}</h2>
                <span>{item.weight}</span>
                <HotSpotButton>Get more</HotSpotButton>
              </SliderContainerColumn2>
              <Image src={item.picture} width="140" height="140" />
            </SliderContainerRow>
          ))}
        </SliderContainerRowWrapper>
      </SliderWindow>
    </SliderContainerColumn>
  );
}

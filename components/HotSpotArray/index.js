import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";
import {
  HotSpotArrayWrapper,
  HotSpotArrayProductName,
  HotSpotArrayXposition,
  HotSpotArrayYposition,
  HotSpotArrayDeleteButton,
  HotSpotArrayWrapperColumn
} from "./HotSpotArrayStyles";



export function HotSpotArray({ hotSpotArray, setHotSpotArray }) {


 


  function deleteHotSpotItem(e, it) {
    e.preventDefault();
    setHotSpotArray((prev)=>prev.filter((item) => item.title !== it));
  }
  function handleXpos (e, pr) {
    if(e.target.value<=380 && e.target.value>=0) {
      setHotSpotArray((prev)=>prev.map((item)=>item.title==pr.title?{...item, x: +e.target.value}:{...item}))
    }
    
  }

  function handleYpos (e, pr) {
    if(e.target.value<=380 && e.target.value>=0) {
      setHotSpotArray((prev)=>prev.map((item)=>item.title==pr.title?{...item, y: +e.target.value}:{...item}))
    }
    
 }

  return (
    <HotSpotArrayWrapperColumn>
    <h3>Спивок товаров для HotSpot</h3>
      {hotSpotArray.length > 0
        ? hotSpotArray.map((prod, i) => (
            <HotSpotArrayWrapper key={prod.title}>
            
              <HotSpotArrayProductName>{prod.title}</HotSpotArrayProductName>
              <span>x (0-380) </span> <HotSpotArrayXposition  onChange={(e)=>handleXpos(e, prod)} value={prod.x}/>
              <span>y (0-380) </span> <HotSpotArrayYposition onChange={(e)=>handleYpos(e, prod)} value={prod.y}/>
              <HotSpotArrayDeleteButton onClick={(e)=>{deleteHotSpotItem(e, prod.title)}}>X</HotSpotArrayDeleteButton>
            </HotSpotArrayWrapper>
          ))
        : null}
    </HotSpotArrayWrapperColumn>
  );
}

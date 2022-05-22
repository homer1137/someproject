import { useState, useEffect } from "react";
import React from "react";
import {
  AddHotSpotSection,
  AddHotSpotForm,
  AddHotSpotFormFlex
} from "./AddHotSpotStyled";
import { DropDown } from "../DropDown";
import { HotSpotArray } from "../HotSpotArray";
import { getDatabase, ref, onValue } from "firebase/database";
import Context from "../../src/Context";
import { useContext } from "react";

export default function AddHotSpot() {
  const value = useContext(Context)
  const [products1, setProducts1] = useState([]);
  

  console.log("hotSpotArray", value.hotSpotArray);
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "goods/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        let products = Object.values(data);

        setProducts1(products);
      }
    });
  }, []);

  return (
    <AddHotSpotSection>
      <AddHotSpotForm>
        <h1>Редактирование компонента HotSpot</h1>
        <div style={{display: 'flex'
      }}>
        <DropDown
        products1={products1}
        setHotSpotArray={value.setHotSpotArray}
        hotSpotArray={value.hotSpotArray}
      />
      <HotSpotArray
        hotSpotArray={value.hotSpotArray}
        setHotSpotArray={value.setHotSpotArray}
      />
        </div>
      
      </AddHotSpotForm>
      <AddHotSpotFormFlex></AddHotSpotFormFlex>
    </AddHotSpotSection>
  );
}

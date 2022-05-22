import { useState, useEffect } from "react";

import {
  DropDownWrapper,
  DropDownControl,
  DropDownSelectedValue,
  DropDownArrow,
  DropDownOptions,
  DropDownOption,
} from "./DropDownStyles";

export function DropDown({ products1, setHotSpotArray, hotSpotArray }) {
  const [products, setProducts] = useState(products1);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProducts(products1);
  }, [products1]);
  useEffect(() => {
    if(search.length>0) {
      setOpen(()=>true)
    }
    setProducts(
      products1.filter((item) =>
        (item.title.toLowerCase().includes(search.toLowerCase()))
      )
    );
  }, [search]);
  
  function handleOpen() {
    setOpen((previous) => !previous);
  }
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  function handleHotSpotArray(it) {
    if((hotSpotArray.filter((item)=>item.title==it.title)).length==0){
      setHotSpotArray((prev)=>[...prev, {...it, x: 10, y: 10,}])
    }
    
    
  }

  return (
    <DropDownWrapper>
      <DropDownControl
        onClick={handleOpen}
        onChange={(e) => handleSearch(e)}
        value={search}
      >
        <DropDownSelectedValue />

        <DropDownArrow open={open}/>
      </DropDownControl>
      <DropDownOptions open={open}>
        {products.map((item) => (
          <DropDownOption key={item.title} onClick={()=>handleHotSpotArray(item)}> {item.title} </DropDownOption>
        ))}
      </DropDownOptions>
    </DropDownWrapper>
  );
}

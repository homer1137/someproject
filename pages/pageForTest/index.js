
import Head from "next/head";

import styled from "styled-components";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useEffect, useState } from "react";
import { ProductsSection, ProductCard } from "../../components/ProductsSt/ProductsStyled";
import Link from "next/link";
import { Button } from "../../styles/Button";




function PageForTest() {
  const [products1, setProducts1] =useState([]);
  
  useEffect(()=>{

  const db = getDatabase();
  const starCountRef = ref(db, "goods/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
     let products = Object.values(data);
     console.log(products)
     setProducts1(products) 
    }
  });

  }, [])

 
  async function deleteProduct(e, product1) {
    e.preventDefault();
    e.stopPropagation();
    const db = getDatabase();
    const starCountRef = ref(db, "goods/");
    remove(ref(db, `/goods/${product1}`)).then(() => {})
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        let products = Object.values(data);
        setProducts1(products)
      }
    });
  }

 

  return (
    <>
      <Head>
        <title>Products page</title>
      </Head>

      <h1>Product list</h1>
      <ProductsSection>
        {products1.length > 0
          ? products1.map((item) => (
              <Link href={`products/${item.title}`} key={item.title}>
                <ProductCard>
                  <h2>{item.title}</h2>
                  <div>{item.description}</div>
                  <img src={item.picture} alt="some food" />
                  <Button onClick={(e) => deleteProduct(e, item.title)}>
                    Delete product
                  </Button>
                </ProductCard>
              </Link>
            ))
          : null}
      </ProductsSection>
    </>
  );
}

export default PageForTest;

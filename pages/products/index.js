import { ProductsSection, ProductCard } from "./ProductsStyled";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { getStorage, getDownloadURL, ref as ref2 } from "firebase/storage";

const H1 = styled.h1`
  color: coral;
`;

export const getStaticProps = async () => {
  let products = [];
  const db = getDatabase();
  const starCountRef = ref(db, "goods/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      products = Object.values(data);
    
    }
  });
  return {
    props: {products}
  }

}


function Products({products}) {
  

console.log({products})

  return (
    <>
      <Head>
        <title>Products page</title>
      </Head>

      <H1>Product list</H1>
      <ProductsSection>
        {products.length > 0
          ? products.map((item) => (
              <ProductCard key={item.title}>
                <h2>{item.title}</h2>
                <div>{item.description}</div>
                <img src={item.picture} alt="some food" />
              </ProductCard>
            ))
          : null}
      </ProductsSection>
    </>
  );
}

export default Products;

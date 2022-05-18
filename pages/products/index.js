import Head from "next/head";

import styled from "styled-components";
import { getDatabase, ref, onValue, remove, child, get  } from "firebase/database";
import { useEffect, useState } from "react";
import {
  ProductsSection,
  ProductCard,
} from "../../components/ProductsSt/ProductsStyled";

import Link from "next/link";
import { Button } from "../../styles/Button";

export const getStaticProps = async () => {
  let products = [];
  const dbRef = ref(getDatabase());

  await get(child(dbRef, `goods/`)).then((snapshot) => {
    if (snapshot.exists()) {
      products=Object.values(snapshot.val());
      return products
    } else {
      console.log("No data available");
    }
  }).then((products)=>{  
  })
  .catch((error) => {
    console.error(error);
  });

  return {
    props: { products },
  };
 
};

function Products({ products }) {
  
  const [products1, setProducts1] = useState(products);

  async function deleteProduct(e, product1) {
    e.preventDefault();
    e.stopPropagation();
    const db = getDatabase();
    const starCountRef = ref(db, "goods/");
    remove(ref(db, `/goods/${product1}`)).then(() => {});
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        products = Object.values(data);
        setProducts1(products);
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
        {products.length > 0
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

export default Products;

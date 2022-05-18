
import Head from "next/head";

import styled from "styled-components";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useEffect, useState } from "react";
import { ProductsSection, ProductCard } from "../../components/ProductsSt/ProductsStyled";


import Link from "next/link";
import { Button } from "../../styles/Button";







export const getStaticProps = async () => {
  
  try{
    const db = await getDatabase();
    const starCountRef = await ref(db, "goods/");
    let products = [ {
      description: 'sdf',
      picture: 'https://firebasestorage.googleapis.com/v0/b/someproject-6ab00.appspot.com/o/images%2FmDkSujjKtQs.jpg?alt=media&token=eb793988-fc4f-4faf-b799-9474b488aa5e',
      title: '444'
    },
    {
      description: 'asdfasdf',
      picture: 'https://firebasestorage.googleapis.com/v0/b/someproject-6ab00.appspot.com/o/images%2F1fecabb601405d207f898f3b53f0590f.jpg?alt=media&token=30d8430c-93fd-4c82-9c64-1da44c715f18',
      title: 'asdfdas'
    },
    {
      description: 'zcvxczv',
      picture: 'https://firebasestorage.googleapis.com/v0/b/someproject-6ab00.appspot.com/o/images%2Fsu1bkCh.jpg?alt=media&token=28df30ea-ac52-494e-9c03-8ab78eff366f',
      title: 'cvxcz'
    }];
    const product2 = await onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
        products = (Object.values(data));
          
        }
      });
      console.log('products', products)
      if (!products) {
        return { notFound: true };
      }
      return {
        props: { products},
      };



  }
  catch(error) {
    console.log('here is some error', error)
  }
 
   
 
 
};

function Products({ products }) {


  const [products1, setProducts1] =useState(products);
  
  
  async function deleteProduct(e, product1) {
    e.preventDefault();
    e.stopPropagation();
    const db = getDatabase();
    const starCountRef = ref(db, "goods/");
    remove(ref(db, `/goods/${product1}`)).then(() => {})
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        products = Object.values(data);
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

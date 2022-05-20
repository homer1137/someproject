import Head from "next/head";
import Image from "next/image";
import {
  getDatabase,
  ref,
  onValue,
  remove,
  
} from "firebase/database";
import { getStorage, ref as ref2, deleteObject } from "firebase/storage";
import { useEffect, useState } from "react";
import {
  ProductsSection,
  ProductCard,
  ImgSt
} from "../../components/ProductsSt/ProductsStyled";

import Link from "next/link";
import { Button } from "../../styles/Button";

// export const getStaticProps = async () => {
//   let products2 = [];
//   function updateProd (zz) {
//     let products3 = zz;
//     return products3
//   };
//   const db = getDatabase();
//   const starCountRef = ref(db, 'goods/');
//   await onValue(starCountRef, (snapshot) => {
//     const data = snapshot.val();
//     if (data) {
//     products2 = Object.values(data);

//     }
//     })

//   const products = await updateProd(products2);

//   return {
//     props: { products },
//   };

// };

function Products() {
  const [products1, setProducts1] = useState([]);

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

  async function deleteProduct(e, product1) {
    e.preventDefault();
    e.stopPropagation();
    const db = getDatabase();
    const starCountRef = ref(db, "goods/");
    remove(ref(db, `/goods/${product1.title}`)).then(() => {});
    const storage = getStorage();
    const desertRef = ref2(storage, `${product1.picture}`);
    deleteObject(desertRef)
      .then(() => {
        // File deleted successfully
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        let products23 = Object.values(data);
        setProducts1(products23);
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
                  <ImgSt
                    src={item.picture}
                    
                    
                    
                    
                    alt="some food"
                  />
                  <Button onClick={(e) => deleteProduct(e, item)}>
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

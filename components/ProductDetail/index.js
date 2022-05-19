import React from 'react'
import { ProductsDetailSection, ProductDetailCardSt } from './productDetailStyled'
import { getDatabase, ref, set } from "firebase/database";
import { Button } from '../../styles/Button';
import { useRouter } from 'next/router';
import { getStorage, ref as ref2, deleteObject } from "firebase/storage";

export default function ProductDetailCard({product}) {
  const router = useRouter();  

    async function deleteProduct (e, product1) {
        e.preventDefault();
        
        const db = getDatabase();
await set(ref(db, `/goods/${product1.title}`), null)
const storage = getStorage();
const desertRef = ref2(storage, `${product1.picture}`);
deleteObject(desertRef).then(() => {
  // File deleted successfully
}).catch((error) => {
  // Uh-oh, an error occurred!
});


      router.push('/products')
    }

  return (
    <ProductsDetailSection>
        <ProductDetailCardSt>
        {product?(
            <>
            <h2>{product.title}</h2>
            <div>{product.description}</div>
            <img src={product.picture} alt="some food" />
            <Button onClick={(e)=>deleteProduct(e, product)}>Удалить продукт</Button>
            </>
        ): <div>кина не будет</div>
    
        }
        
        
        
        </ProductDetailCardSt>
    </ProductsDetailSection>
  )
}

import React from 'react'
import { ProductsDetailSection, ProductDetailCardSt } from './productDetailStyled'
import { getDatabase, ref, remove, set } from "firebase/database";
import { Button } from '../../styles/Button';
import { useRouter } from 'next/router';

export default function ProductDetailCard({product}) {
  const router = useRouter();  

    async function deleteProduct (e, product1) {
        e.preventDefault();
        
        const db = getDatabase();
await set(ref(db, `/goods/${product1}`), null)
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
            <Button onClick={(e)=>deleteProduct(e, product.title)}>Удалить продукт</Button>
            </>
        ): <div>кина не будет</div>
    
        }
        
        
        
        </ProductDetailCardSt>
    </ProductsDetailSection>
  )
}

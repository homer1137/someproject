import { useRouter } from "next/router";
import Layout from '../../components/MainLayout'
import ProductDetailCard from "../../components/ProductDetail";
import { getDatabase, ref, onValue, child, get  } from "firebase/database";
import { Button } from "../../styles/Button";
import Link from "next/link";

export async function getServerSideProps(context) {
  let producto = {};
  const {product} = context.params;
  
  
  const dbRef = ref(getDatabase());
  await get(child(dbRef, `/goods/${product}`)).then((snapshot) => {
    if (snapshot.exists()) {
      producto=(snapshot.val());
      
      return producto
    } else {
      console.log("No data available");
    }
  }).then((producto)=>{  
  })
  if (!producto) {
    return {notFound: true,}
  }
  return {
    props: {producto}
  }

}

export default function Product({producto}) {
  const router = useRouter();
  
  return (
    <>
      
        <div>This is Post {router.query.product}</div>
        <ProductDetailCard product={producto}/>
         <Link href={`/products`}><Button>Go back</Button></Link>
        
    </>
  );
}

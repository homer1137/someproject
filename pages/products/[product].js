import { useRouter } from "next/router";
import Layout from '../../components/MainLayout'
import ProductDetailCard from "../../components/ProductDetail";
import { getDatabase, ref, onValue } from "firebase/database";
import { Button } from "../../styles/Button";
import Link from "next/link";

export async function getServerSideProps(context) {
  
  const {product} = context.params;
  let producto = {};
  const db = getDatabase();
  const starCountRef = ref(db, `goods/${product}`);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      
      producto = data;
    }
  });
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

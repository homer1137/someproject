import { useRouter } from "next/router";
import Layout from '../../components/MainLayout'

export default function Post() {
  const router = useRouter();
 
  return (
    <>
      
        <div>This is Post {router.query.id}</div>
      
    </>
  );
}

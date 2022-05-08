import MainLayout from '../components/MainLayout'
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Posts({data}) {
  
  const [posts,setPosts] = useState(data);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data=>data.json())
    .then(data2=>setPosts(data2))
  },[])

  if (!posts) {
    return (
      <h2>Идет загрузка</h2>
    )
  } 

  return (
    <>
      <h1>Posts</h1>
       <Link href={'/'}><a>go back</a></Link> 
       {posts.map((item, index)=>(
           <div key={index}>
            <h3>{item.id} {item.title}</h3>
          
            <div>{item.body}</div>
            <br/>
           </div>
           
         )
       )}
    </>
  );
}

export default Posts;

export async function getServerSideProps() {
  
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await res.json()


  return { props: { data } }
}

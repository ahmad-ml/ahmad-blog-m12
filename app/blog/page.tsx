
import Image from 'next/image';
import Link from "next/link";
import { Post } from "../.././components/Interfaces";
import { getNewestPost } from "../api/getNewstPost";


 
export default async function Page() {
  const posts = await getNewestPost()
 
  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post:Post) => (
        <Link href={`/blog/${post.id}`} key={post.id}>
          <h2>{post.title}</h2>
  <Image
  src={post.img}
  alt={post.title}
  width={200}  // Adjust this width to your desired value
  height={120} // Adjust this height to your desired value

/>
          <p>{post.short}</p>
        </Link>

      
      ))}
    </div>
  )
}
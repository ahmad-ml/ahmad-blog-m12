
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
            width={50}
            height={50}
            layout="responsive"
          />
          <p>{post.short}</p>
        </Link>

      
      ))}
    </div>
  )
}
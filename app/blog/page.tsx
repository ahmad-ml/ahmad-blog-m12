
// import { getAllPosts, Post } from "../api/getAllPost";
import Link from "next/link";
import { Post } from "../.././components/Interfaces";
import { getNewestPost } from "../api/getNewstPost";


 
export default async function Page() {
  const posts = await getNewestPost()
  console.log(posts)
 
  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post:Post) => (
        <Link href={`/blog/${post.id}`} key={post.id}>
          <h2>{post.title}</h2>
          {/* <Image
            src={post.img}
            alt={post.title}
            width={200}
            height={200}
            layout="responsive"
          /> */}
          <p>{post.short}</p>
        </Link>

      
      ))}
    </div>
  )
}
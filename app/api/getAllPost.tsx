import { Post } from "@/components/Interfaces";

const API_URI = "https://basic-blog.teamrabbil.com/api";

export async function getAllPost() : Promise<Post[]> {
  const res = await fetch(`${API_URI}/post-list/2`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}



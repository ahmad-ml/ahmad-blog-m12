import { PostDetails } from "@/components/Interfaces";

const API_URI = "https://basic-blog.teamrabbil.com/api";

interface PostDetailsResponse {
  postDetails?: PostDetails
}

export async function getPostDetails(id:number) : Promise<PostDetailsResponse> {
  const res = await fetch(`${API_URI}/post-details/${id}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}



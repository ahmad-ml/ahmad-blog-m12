import { getPostDetails } from '@/app/api/getPostDetails';

interface Props {
  params: { id: number };
}


export default async function BlogPostPage({ params }: Props) {
console.log(params.id);

  const response= await getPostDetails(params.id);

  console.log(response);

  if (!response.postDetails) {
    return <p>Post Not Found</p>;
  }

  return (
    <div>
        <h1>{response.postDetails?.title}</h1>
        <p>{response.postDetails?.content}</p>
    </div>
  );
}
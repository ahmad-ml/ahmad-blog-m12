import { getPostDetails } from '@/app/api/getPostDetails';
import Image from 'next/image';

interface Props {
  params: { id: number };
}


export default async function BlogPostPage({ params }: Props) {

  const response= await getPostDetails(params.id);

  if (!response.postDetails) {
    return <p>Post Not Found</p>;
  }

  return (
    <div>
        <h1>{response.postDetails?.title}</h1>
            <Image
            src={response.postDetails?.img}
            alt={response.postDetails?.title}
            width={200}
            height={200}
            layout="responsive"
          />
    <p>{response.postDetails?.content}</p>
    </div>
  );
}
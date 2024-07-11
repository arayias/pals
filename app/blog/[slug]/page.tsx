import { prisma } from "@/lib/prisma";

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params }: Props) {
  const blog = await prisma.blog.findUnique({
    where: {
      id: params.slug,
    },
  });

  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <article>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </article>
  );
}

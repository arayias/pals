import { prisma } from "@/lib/prisma";
import { getReadableDate } from "@/lib/utils";

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
    select: {
      title: true,
      content: true,
      createdAt: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <article>
      <div className="flex justify-between flex-col gap-2 mx-auto text-center">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p className="text-gray-300">
          {blog.author.name} • {getReadableDate(blog.createdAt)}
        </p>
      </div>
      <div className="flex flex-col gap-4 mx-auto w-[80%]">
        <hr className="border-gray-300 my-4" />
        <div>
          <p>{blog.content}</p>
        </div>
      </div>
    </article>
  );
}

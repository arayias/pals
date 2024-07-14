import CommentSection from "@/components/CommentSection";
import { prisma } from "@/lib/prisma";
import { getReadableDate } from "@/lib/utils";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
        <p className="dark:text-gray-300 text-gray-600">
          {blog.author.name} {"\u2022"} {getReadableDate(blog.createdAt)}
        </p>
      </div>
      <div className="flex flex-col gap-4 mx-auto w-[80%]">
        <hr className="dark:border-gray-300 border-gray-600 my-4" />
        <div>
          <Markdown
            remarkPlugins={[remarkGfm]}
            className="max-w-prose prose dark:prose-invert"
          >
            {blog.content}
          </Markdown>
        </div>
        <div>
          <hr className="dark:border-gray-300 border-gray-600 my-4" />
          <h2 className="text-xl font-bold">Comments</h2>
          <CommentSection params={params} />
        </div>
      </div>
    </article>
  );
}

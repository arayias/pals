import CommentSection from "@/components/CommentSection";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getReadableDate } from "@/lib/utils";
import { Edit } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
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
          id: true,
        },
      },
    },
  });

  const session = await getServerSession(authOptions);

  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <article>
      <div className="flex justify-between flex-col gap-2 mx-auto text-center">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <div className="dark:text-gray-400 text-gray-700 flex gap-2 items-center justify-center">
          {blog.author.name} {"\u2022"} {getReadableDate(blog.createdAt)}
          {session?.user?.id === blog.author.id && (
            <Link href={`/blog/${params.slug}/edit`}>
              <Button className="hover:bg-green-400 dark">
                <Edit />
              </Button>
            </Link>
          )}
        </div>
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

import type { Blog } from "@prisma/client";
import Link from "next/link";

type Props = {
  params: BlogWithAuthor;
};

type BlogWithAuthor = Blog & { author: { name: string; image: string } };

export default function BlogCard({ params }: Props) {
  const truncate = (str: string, n: number) => {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  };
  console.log(params);
  const content = truncate(params.content, 70);
  return (
    <Link href={`/blog/${params.id}`}>
      <div className="bg-slate-100 dark:bg-gray-700 shadow-lg rounded-lg hover:bg-slate-300 dark:hover:bg-gray-800 transition duration-200 h-40 overflow-hidden">
        <div className="p-4">
          <Link href={`/users/${params.authorId}`}>
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <img
                src={params.author.image}
                alt={params.author.name}
                className=" hover:scale-125 transition duration-200"
              />
            </div>
          </Link>
          <h1 className="text-xl font-semibold">{params.title}</h1>
          <p className="text-gray-500">{content}</p>
        </div>
      </div>
    </Link>
  );
}

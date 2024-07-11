import type { Blog } from "@prisma/client";
import Link from "next/link";

export default function BlogCard(blog: Blog) {
  const truncate = (str: string, n: number) => {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  };
  const content = truncate(blog.content, 100);
  return (
    <div className="bg-slate-100 dark:bg-gray-700 shadow-lg rounded-lg hover:bg-slate-300 dark:hover:bg-gray-800 transition duration-200 ">
      <div className="p-4">
        <h1 className="text-xl font-semibold">{blog.title}</h1>
        <p className="text-gray-500">{content}</p>
        <Link
          href={`/blog/${blog.id}`}
          className="text-blue-500 hover:border-b-8 cursor-pointer"
        >
          View Post
        </Link>
      </div>
    </div>
  );
}

import { getReadableDate } from "@/lib/utils";
import type { Blog } from "@prisma/client";
import Link from "next/link";

type Props = {
  params: BlogWithAuthor;
};

type BlogWithAuthor = Blog & {
  author: { name: string | null; image: string | null };
};

export default function BlogCard({ params }: Props) {
  const truncate = (str: string, n: number) => {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  };

  return (
    <div className="bg-slate-100 dark:bg-gray-700 shadow-lg rounded-lg hover:bg-slate-300 dark:hover:bg-gray-800 transition duration-200 h-40 overflow-hidden">
      <div className="p-4">
        <div className="flex flex-row gap-3">
          <Link href={`/user/${params.authorId}`}>
            <div className="h-14 w-14 rounded-full overflow-hidden">
              {params.author.image && (
                <img
                  src={params.author.image}
                  alt={params.author.name ?? ""}
                  className="hover:scale-125 transition duration-200"
                />
              )}
            </div>
          </Link>
          <div className="flex flex-col text-xs sm:text-sm md:text-sm lg:text-xl ">
            <span className="font-semibold">{params.author.name}</span>
            <span> {getReadableDate(params.createdAt)}</span>
          </div>
        </div>
        <Link href={`/blog/${params.id}`}>
          <h1 className="text-wrap text-xl font-semibold underline">
            {truncate(params.title, 20)}
          </h1>
        </Link>
      </div>
    </div>
  );
}

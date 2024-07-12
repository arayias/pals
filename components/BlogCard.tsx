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

  const getReadableDate = (date: Date) => {
    let options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    if (date.getFullYear() != new Date().getFullYear()) {
      options.weekday = "short";
      options.month = "short";
      options.year = "numeric";
    }
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <Link href={`/blog/${params.id}`}>
      <div className="bg-slate-100 dark:bg-gray-700 shadow-lg rounded-lg hover:bg-slate-300 dark:hover:bg-gray-800 transition duration-200 h-40 overflow-hidden">
        <div className="p-4">
          <div className="flex flex-row gap-3">
            <Link href={`/users/${params.authorId}`}>
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
            <div
              className="flex flex-col sm:text-sm
               md:text-xl lg:text-2xl
              text-lg "
            >
              <p className="font-semibold">{params.author.name}</p>
              <p> {getReadableDate(params.createdAt)}</p>
            </div>
          </div>
          <h1 className="text-wrap text-xl font-semibold">
            {truncate(params.title, 20)}
          </h1>
        </div>
      </div>
    </Link>
  );
}

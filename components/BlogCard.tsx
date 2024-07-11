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
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let time = `${date.getHours()}:${date.getMinutes()}`;
    if (year == new Date().getFullYear()) {
      return `${day}/${month} at ${time}`;
    }
    return `${day}/${month}/${year} at ${time}`;
  };

  const content = truncate(params.content, 70);
  return (
    <Link href={`/blog/${params.id}`}>
      <div className="bg-slate-100 dark:bg-gray-700 shadow-lg rounded-lg hover:bg-slate-300 dark:hover:bg-gray-800 transition duration-200 h-40 overflow-hidden">
        <div className="p-4">
          <div className="flex flex-row gap-3">
            <Link href={`/users/${params.authorId}`}>
              <div className="h-12 w-12 rounded-full overflow-hidden">
                {params.author.image && (
                  <img
                    src={params.author.image}
                    alt={params.author.name ?? ""}
                    className="hover:scale-125 transition duration-200"
                  />
                )}
              </div>
            </Link>
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold">{params.author.name}</h1>
              <p> {getReadableDate(params.createdAt)}</p>
            </div>
          </div>
          <h1 className="text-xl font-semibold">{params.title}</h1>
          <p className="text-gray-300">{content}</p>
        </div>
      </div>
    </Link>
  );
}

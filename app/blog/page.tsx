import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getBlogs } from "./actions";

export default async function Blog() {
  const blogs = await getBlogs();

  return (
    <>
      <Link href={"/blog/create"} className="mb-2">
        <Button className="mb-2">Create Blog</Button>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} params={blog} />
        ))}
      </div>
    </>
  );
}

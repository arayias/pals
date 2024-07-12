import BlogCard from "@/components/BlogCard";
import { getBlogs } from "./actions";

export default async function Blog() {
  const blogs = await getBlogs(0, 12);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} params={blog} />
        ))}
      </div>
    </>
  );
}

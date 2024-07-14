import BlogCard from "@/components/BlogCard";
import { getBlogs } from "@/app/blogs/actions";

type Props = {
  page: number;
};

export async function BlogSection({ page }: Props) {
  const blogs = await getBlogs(page, 12);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} params={blog} />
      ))}
    </div>
  );
}

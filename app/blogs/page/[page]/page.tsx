import BlogCard from "@/components/BlogCard";
import { getBlogs } from "../../actions";

type Props = {
  params: {
    page: string;
  };
};

export default async function BlogsPage({ params }: Props) {
  const page = parseInt(params.page);
  if (isNaN(page) || page < 0) {
    throw new Error("Invalid page number");
  }
  const blogs = await getBlogs(page, 12);

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

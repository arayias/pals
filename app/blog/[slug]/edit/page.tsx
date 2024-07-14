import { getBlog } from "../actions";
import BlogForm from "@/components/BlogForm";

type Props = {
  params: {
    slug: string;
  };
};

export default async function EditBlog({ params }: Props) {
  if (!params?.slug) {
    return <div>Blog not found</div>;
  }
  const blog = await getBlog(params?.slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <div>Edit Blog</div>

      <BlogForm params={blog} />
    </>
  );
}

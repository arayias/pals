import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import BlogForm from "@/components/BlogForm";

export default async function BlogCreate() {
  const session = await getServerSession(authOptions);
  const isLoggedIn = session?.user?.id;
  if (!isLoggedIn) {
    return (
      <>
        <div className="border-l-4 p-4 border-orange-500">
          <span>Please login to create a blog</span>
        </div>
      </>
    );
  }
  return <BlogForm />;
}

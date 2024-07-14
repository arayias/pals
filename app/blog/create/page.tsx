import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import BlogForm from "@/components/BlogForm";
import Warn from "@/components/Warn";

export default async function BlogCreate() {
  const session = await getServerSession(authOptions);
  const isLoggedIn = session?.user?.id;
  if (!isLoggedIn) {
    return (
      <>
        <Warn>
          <span>Please login to create a blog</span>
        </Warn>
      </>
    );
  }
  return <BlogForm />;
}

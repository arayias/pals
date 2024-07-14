import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getBlogCount } from "./actions";
import Paginate from "@/components/Paginate";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogCount = await getBlogCount();
  return (
    <>
      <Link href={"/blog/create"} className="mb-2">
        <Button variant={"secondary"} className="mb-2">
          Create Blog
        </Button>
      </Link>
      {children}
      <Paginate
        params={{ totalPages: Math.ceil(blogCount / 12), baseUrl: "/blogs" }}
      />
    </>
  );
}

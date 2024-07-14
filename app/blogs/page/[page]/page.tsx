import { BlogSection } from "@/components/BlogSection";

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

  return <BlogSection page={page} />;
}

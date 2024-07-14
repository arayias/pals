import { BlogSection } from "@/components/BlogSection";

type Props = {
  page: number;
};

export default async function Blog() {
  return <BlogSection page={0} />;
}

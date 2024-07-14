import Paginate from "@/components/Paginate";
import { getUserCount } from "./actions";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userCount = await getUserCount();
  return (
    <>
      {children}
      <Paginate params={{ totalPages: Math.ceil(userCount / 12) }} />
    </>
  );
}

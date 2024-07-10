import UserCard from "@/components/UserCard";
import { prisma } from "@/lib/prisma";

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}

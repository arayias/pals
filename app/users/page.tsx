import UserCard from "@/components/UserCard";
import { getUsers } from "./actions";

type Props = {
  page: number;
};

export async function UserSection({ page }: Props) {
  const users = await getUsers(page, 12);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 content-evenly place-items-center">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}

export default async function Users() {
  return (
    <>
      <UserSection page={0} />
    </>
  );
}

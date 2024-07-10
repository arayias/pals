"use client";

import type { User } from "@prisma/client";

interface Props {
  user: User;
}

export default function ProfileForm({ user }: Props) {
  return (
    <form className="flex flex-col ">
      <label>
        Name
        <input type="text" defaultValue={user.name ?? ""} />
      </label>
      <label>
        Email
        <input type="email" defaultValue={user.email ?? ""} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useState, useTransition } from "react";

type Props = { targetUserId: string; isFollowing: boolean };

export default function FollowClient({ targetUserId, isFollowing }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  async function follow() {
    setIsFetching(true);
    await fetch(`/api/follow`, {
      method: "POST",
      body: JSON.stringify({ targetUserId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    startTransition(() => {
      router.refresh();
    });
    setIsFetching(false);
  }

  async function unfollow() {
    setIsFetching(true);
    await fetch(`/api/follow`, {
      method: "DELETE",
      body: JSON.stringify({ targetUserId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    startTransition(() => {
      router.refresh();
    });
    setIsFetching(false);
  }

  return (
    <Button
      onClick={isFollowing ? unfollow : follow}
      disabled={isFetching || isPending}
      className={`${
        isFollowing ? "bg-red-500" : "bg-green-500"
      } text-white px-4 py-2 rounded-md`}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
}

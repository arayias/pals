import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import FollowClient from "./FollowClient";

type Props = {
  targetUserId: string;
};

export default async function FollowButton({ targetUserId }: Props) {
  const session = await getServerSession(authOptions);
  const currentId = session?.user?.id!;

  const isFollowing = await prisma.follows.findFirst({
    where: {
      followerId: currentId,
      followingId: targetUserId,
    },
  });

  return (
    <FollowClient targetUserId={targetUserId} isFollowing={!!isFollowing} />
  );
}

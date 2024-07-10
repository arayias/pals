import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const currentId = session?.user?.id;
  const { targetUserId } = await req.json();
  if (!currentId || !targetUserId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const follow = await prisma.follows.create({
    data: {
      followerId: currentId,
      followingId: targetUserId,
    },
  });

  return NextResponse.json(follow);
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const currentId = session?.user?.id;
  const { targetUserId } = await req.json();
  if (!currentId || !targetUserId) {
    return new Response("Unauthorized", { status: 401 });
  }

  await prisma.follows.delete({
    where: {
      followerId_followingId: {
        followerId: currentId,
        followingId: targetUserId,
      },
    },
  });

  return NextResponse.json({ success: true });
}

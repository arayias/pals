"use server";

import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function postComment(data: { content: string; blogId: string }) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.id) {
    throw new Error("You must be logged in to post a comment");
  }
  return await prisma.comment.create({
    data: {
      content: data.content,
      blogId: data.blogId,
      authorId: session.user.id,
    },
  });
}

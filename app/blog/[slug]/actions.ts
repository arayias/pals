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

export async function getBlog(slug: string) {
  return await prisma.blog.findUnique({
    where: {
      id: slug,
    },
    select: {
      title: true,
      content: true,
      id: true,
    },
  });
}

export async function editBlog(data: {
  title: string;
  content: string;
  id: string;
}) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.id) {
    throw new Error("You must be logged in to edit a blog");
  }
  const author = await prisma.blog.findUnique({
    where: {
      id: data.id,
    },
    select: {
      authorId: true,
    },
  });
  if (session.user.id !== author?.authorId) {
    throw new Error("You can only edit your own blog");
  }
  return await prisma.blog.update({
    where: {
      id: data.id,
    },
    data: {
      title: data.title,
      content: data.content,
    },
  });
}

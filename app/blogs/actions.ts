"use server";

import { prisma } from "@/lib/prisma";

export async function getBlogs(page: number, limit: number) {
  return await prisma.blog.findMany({
    skip: page * limit,
    select: {
      id: true,
      title: true,
      content: true,
      authorId: true,
      createdAt: true,
      updatedAt: true,
      author: {
        select: {
          name: true,
          image: true,
        },
      },
    },
    take: limit,
  });
}

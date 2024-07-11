"use server";

import { prisma } from "@/lib/prisma";

export async function getBlogs() {
  return await prisma.blog.findMany({
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
  });
}

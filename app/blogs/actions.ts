"use server";

import { prisma } from "@/lib/prisma";

export async function getBlogs(page: number, limit: number) {
  if (page < 0) page = 0;
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

export async function getBlogCount() {
  return await prisma.blog.count();
}

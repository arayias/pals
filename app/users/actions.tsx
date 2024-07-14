import { prisma } from "@/lib/prisma";

export async function getUserCount() {
  const count = await prisma.user.count();
  return count;
}

export async function getUsers(page: number, limit: number) {
  const users = await prisma.user.findMany({
    take: limit,
    skip: page * limit,
  });
  return users;
}

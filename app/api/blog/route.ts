import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.id) {
    return NextResponse.redirect("/api/auth/signin");
  }
  const currentId = session.user?.id;

  const data = await req.json();

  const { title, content } = data;

  if (!title || !content) {
    return NextResponse.error();
  }

  const blog = await prisma.blog.create({
    data: {
      title,
      content,
      authorId: currentId,
    },
  });

  return NextResponse.json(blog);
}

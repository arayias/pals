import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.id) {
    return NextResponse.redirect("/api/auth/signin");
  }
  const currentId = session.user?.id;

  const data = await req.json();

  const { name, bio } = data;
  if (!bio || !name) {
    return NextResponse.error();
  }

  const user = await prisma.user.update({
    where: {
      id: currentId,
    },
    data: data,
  });

  return NextResponse.json(user);
}

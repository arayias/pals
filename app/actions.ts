"use server";

import { revalidatePath } from "next/cache";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function serverRevalidatePath(
  path: string,
  type?: "layout" | "page"
) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.id) {
    return;
  }
  revalidatePath(path, type);
}

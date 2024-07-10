import { getServerSession } from "next-auth";
import ProfileForm from "./ProfileForm";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) {
    redirect("/api/auth/signin");
  }
  const user = await prisma.user.findUnique({
    where: { id: session.user.id! },
  });

  if (!user) {
    redirect("/api/auth/signin");
  }

  return (
    <>
      <div>Dashboard</div>
      <ProfileForm user={user} />
    </>
  );
}

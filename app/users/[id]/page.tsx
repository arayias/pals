import { prisma } from "@/lib/prisma";
import SkeletonLoadingUser from "./loading";
import FollowClient from "@/components/FollowClient";
import FollowButton from "@/components/FollowButton";

type Props = {
  params: {
    id: string;
  };
};

export default async function User({ params }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });
  const { name, bio, image } = user || {};

  return (
    <div>
      <h1>{name}</h1>
      {image ? (
        <div className="w-[50%]">
          <img
            className="w-full h-auto"
            src={image}
            alt={name ? `${name}'s Profile Image` : "Profile Image"}
          />
        </div>
      ) : null}

      <h2>Bio</h2>
      <p>{bio || "This user hasn't written a bio yet. Check back later!"}</p>
      <FollowButton targetUserId={params.id} />
    </div>
  );
}

import { prisma } from "@/lib/prisma";

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
        <img
          src={image}
          alt={name ? `${name}'s Profile Image` : "Profile Image"}
        />
      ) : null}

      <h2>Bio</h2>
      <p>{bio || "This user hasn't written a bio yet. Check back later!"}</p>
    </div>
  );
}

import { prisma } from "@/lib/prisma";
import FollowButton from "@/components/FollowButton";
import BlogCard from "@/components/BlogCard";

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

  const blogs = await prisma.blog.findMany({
    where: {
      authorId: params.id,
    },
    take: 7,
  });

  if (!user) {
    return <div>User not found</div>;
  }

  const { name, bio, image } = user;

  return (
    <div className="grid grid-cols-1 gap-5 p-4 md:grid-cols-2">
      <div className="md:border-r dark:md:border-gray-200 md:border-slate-600 md:pr-2 md:border-opacity-50">
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
      <div className="max-h-screen flex flex-col">
        <h2>Recent Blogs</h2>
        <div className="overflow-y-auto grid grid-cols-1 gap-4 scroll-pr-5">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                params={{
                  ...blog,
                  author: { name: user?.name!, image: user?.image ?? null },
                }}
              />
            ))
          ) : (
            <p>This user hasn't written any blogs yet. Check back later!</p>
          )}
        </div>
      </div>
    </div>
  );
}

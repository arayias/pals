import { prisma } from "@/lib/prisma";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

type Props = {
  params: {
    slug: string;
  };
};

export default async function CommentSection({ params }: Props) {
  const blogId = params.slug;
  const comments = await prisma.comment.findMany({
    where: {
      blogId: blogId,
    },
    select: {
      id: true,
      content: true,
      authorId: true,
      blogId: true,
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

  return comments.length > 0 ? (
    <div className="flex flex-col gap-4">
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment}
          author={comment.author}
        />
      ))}
      <CommentForm blogId={blogId} />
    </div>
  ) : (
    <div className="flex flex-col gap-4">
      <div className="text-center">
        <h2 className="text-xl font-bold">No comments yet</h2>
        <p className="text-gray-300">Be the first to comment</p>
      </div>
      <CommentForm blogId={blogId} />
    </div>
  );
}

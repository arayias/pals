import { getReadableDate } from "@/lib/utils";
import type { Comment } from "@prisma/client";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

type Props = {
  comment: Comment;
  author: {
    name: string | null;
    image: string | null;
  };
};

export function LoadingCommentCard() {
  return (
    <div className="flex flex-row gap-1">
      <Skeleton className="h-[32px] w-[32px] rounded-full animate-pulse" />
      <Skeleton className="flex-1 flex flex-col gap-0.5">
        <Skeleton className="animate-pulse h-4 w-full" />
        <Skeleton className="animate-pulse h-4 w-full" />
      </Skeleton>
    </div>
  );
}

export default function CommentCard({ comment, author }: Props) {
  return (
    <div className="flex flex-row gap-1">
      <div>
        <img
          className="h-[32px] w-[32px] rounded-full"
          src={author.image ?? "https://picsum.photos/200"}
          alt="Profile Picture"
        />
      </div>
      <div className="flex-1 flex flex-col gap-0.5">
        <Link
          href={`/user/${comment.authorId}`}
          className="text-sm font-medium"
        >
          {author.name}
        </Link>
        <div className="text-sm dark:text-gray-300 text-gray-600">
          {comment.content}
        </div>
        <span className="text-xs dar:text-gray-500 text-gray-600 italic">
          {getReadableDate(comment.createdAt)}
        </span>
      </div>
    </div>
  );
}

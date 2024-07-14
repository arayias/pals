import { getReadableDate } from "@/lib/utils";
import type { Comment } from "@prisma/client";
import Link from "next/link";

type Props = {
  comment: Comment;
  author: {
    name: string | null;
    image: string | null;
  };
};

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
        <Link href={`/user/${author.name}`} className="text-sm font-medium">
          {author.name}
        </Link>
        <div className="text-sm text-gray-300">{comment.content}</div>
        <span className="text-xs text-gray-500 italic">
          {getReadableDate(comment.createdAt)}
        </span>
      </div>
    </div>
  );
}

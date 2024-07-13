import { BlogCardSkeleton } from "@/app/blogs/loading";
import { Skeleton } from "@/components/ui/skeleton";

function SkeletonLoadingUser() {
  return (
    <div className="flex flex-col gap-1 md:border-r md:border-gray-200 md:pr-2 md:border-opacity-50">
      <Skeleton className="w-[10%] h-5 bg-slate-800" />
      <Skeleton className="w-[40%] aspect-square bg-slate-800" />

      <Skeleton className="w-[7%] h-4 bg-slate-800" />
      <div className="flex flex-col space-y-2">
        <Skeleton className="w-[40%] h-5 bg-slate-800" />
        <Skeleton className="w-[10%] h-5 bg-slate-800" />
        <Skeleton className="w-[90%] h-5 bg-slate-800" />
        <Skeleton className="w-[80%] h-5 bg-slate-800" />
      </div>
    </div>
  );
}

export default async function SkeletonLoadingUserProfile() {
  return (
    <div className="grid grid-cols-1 gap-5 p-4 max-h-screen md:grid-cols-2">
      <SkeletonLoadingUser />
      <div className="max-h-screen flex flex-col">
        <h2>Recent Blogs</h2>
        <div className="overflow-y-auto grid grid-cols-1 gap-4 scroll-pr-5">
          {Array.from({ length: 7 }).map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

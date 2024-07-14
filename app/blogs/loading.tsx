import { Skeleton } from "@/components/ui/skeleton";

export function BlogCardSkeleton() {
  return (
    <div className="bg-slate-100 dark:bg-gray-700 shadow-lg rounded-lg h-40 p-4">
      <Skeleton className="h-3 w-1/2 mt-4" />
      <div className="flex flex-row gap-3">
        <Skeleton className="h-3 w-1/4 mt-2" />
        <Skeleton className="h-3 w-2/4 mt-2" />
      </div>
      <Skeleton className="h-3 w-3/4 mt-2" />
      <Skeleton className="h-3 w-2/4 mt-2" />
      <Skeleton className="h-3 w-1/4 mt-2" />
    </div>
  );
}

export default function LoadingBlogs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  );
}

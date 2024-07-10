import { Skeleton } from "@/components/ui/skeleton";

export default async function SkeletonLoadingUser() {
  return (
    <div className="flex flex-col gap-1">
      <Skeleton className="w-[10%] h-4" />
      <Skeleton className="w-[40%] h-[300px]" />

      <Skeleton className="w-[7%] h-4" />
      <div className="flex flex-col space-y-2">
        <Skeleton className="w-[40%] h-4" />
        <Skeleton className="w-[10%] h-4" />
        <Skeleton className="w-[90%] h-4" />
        <Skeleton className="w-[80%] h-4" />
      </div>
    </div>
  );
}

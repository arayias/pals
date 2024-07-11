import { Skeleton } from "@/components/ui/skeleton";

export function UserSkeleton() {
  return (
    <div className="bg-gray-700 shadow-lg rounded-lg w-48 h-80">
      <Skeleton className="h-48 rounded-tr-3xl bg-gray-500" />
      <div className="p-4">
        <Skeleton className="h-4 w-24 bg-gray-500 mb-2" />
        <Skeleton className="h-4 w-20 bg-gray-500" />
        <Skeleton className="h-8 w-24 bg-gray-500 mt-4" />
      </div>
    </div>
  );
}

export default function LoadingUsers() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {Array.from({ length: 6 }).map((_, index) => (
        <UserSkeleton key={index} />
      ))}
    </div>
  );
}

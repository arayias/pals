import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <article>
        <div className="flex flex-col gap-2 justify-center ml-auto items-center">
          <Skeleton className="h-8 w-44" />
          <div className="flex gap-2">
            <Skeleton className="h-6 w-44" />
            <Skeleton className="h-6 w-44" />
          </div>
        </div>
        <div className="flex flex-col gap-4 mx-auto w-[80%]">
          <hr className="border-gray-300 my-4" />
          <div className="flex justify-center flex-col gap-2">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-[80%]" />
            <div className="h-10 w-full flex gap-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-[80%]" />
            </div>
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-[80%]" />
            <div className="h-10 w-full flex gap-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-[80%]" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

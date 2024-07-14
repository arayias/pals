import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted dark:bg-gray-700 bg-slate-300",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };

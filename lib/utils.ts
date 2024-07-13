import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getReadableDate(date: Date) {
  let options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  if (date.getFullYear() != new Date().getFullYear()) {
    options.weekday = "short";
    options.month = "short";
    options.year = "numeric";
  }
  return date.toLocaleDateString(undefined, options);
}

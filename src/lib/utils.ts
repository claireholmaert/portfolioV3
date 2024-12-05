// clsx
import { clsx, type ClassValue } from "clsx";

// tailwind
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

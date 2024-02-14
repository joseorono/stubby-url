
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { getBaseUrl } from "~/utils/api"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function linkFromId(id: string): string {
  // This is subject to change if the routes are refactored.
  return getBaseUrl() + "/" + id
}

// Barrel Exports
export * from "./url-manipulation";


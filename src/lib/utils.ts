import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getLinkClassName = (path: string, targetPath: string) => {
  const paths = path.split('/');
  if (paths.length === 4 && targetPath === '/') {
    return "text-secondary dark:text-primary";
  }
  return path.includes(targetPath)
      ? "text-yellow-400 dark:text-yellow-400" 
      : "text-secondary dark:text-primary";
};

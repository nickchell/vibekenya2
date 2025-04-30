import { Flame } from "lucide-react";

export function Logo({ className }: { className?: string }) {
  // In a real app, you might use a custom SVG logo
  // For now, we'll use a Lucide icon as a placeholder
  return <Flame className={className} />;
}
"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExpandableSection({
  title,
  isExpanded,
  onToggle,
  children,
  variant = "default",
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className={cn(
          "flex items-center justify-between w-full px-3 py-2 text-sm hover:bg-accent rounded-md",
          variant === "bold"
            ? "font-medium text-foreground"
            : "text-muted-foreground hover:text-accent-foreground"
        )}
      >
        <span>{title}</span>
        {isExpanded ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>

      {isExpanded && children && (
        <div className="ml-3 mt-1 space-y-1 border-l border-border pl-3">
          {children}
        </div>
      )}
    </div>
  );
}

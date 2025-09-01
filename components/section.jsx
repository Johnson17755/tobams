"use client";

export function SectionItem({ children, onClick }) {
  return (
    <div
      className="px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

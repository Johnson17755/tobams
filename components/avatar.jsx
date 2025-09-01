export function Avatar({ children, className = "" }) {
  return (
    <div
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200 ${className}`}
    >
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt = "avatar", className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}

export function AvatarFallback({ children = "👤", className = "" }) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center text-gray-500 text-sm ${className}`}
    >
      {children}
    </div>
  );
}

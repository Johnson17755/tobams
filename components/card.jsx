export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl bg-white shadow p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={`mb-2 font-semibold text-gray-800 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`text-sm text-gray-600 ${className}`}>{children}</div>;
}

import { useTheme } from "./toggle";

export function Card({ children, className = "" }) {
  const { theme } = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#24262C" : "#f8fafc",
        borderColor: theme === "dark" ? "#292B31" : "#e2e8f0",
        color: theme === "dark" ? "#f1f5f9" : "#334155",
      }}
      className={`rounded-2xl  shadow p-4 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return <div className={`mb-2 font-semibold ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`text-sm ${className}`}>{children}</div>;
}

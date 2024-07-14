export default function Warn({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 p-4 border-orange-500 dark:border-orange-400">
      {children}
    </div>
  );
}

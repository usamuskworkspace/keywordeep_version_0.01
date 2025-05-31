export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-muted/50 to-muted p-4 md:p-8">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
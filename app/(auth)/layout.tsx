export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-muted/50 to-muted p-4 md:p-8">
      {/* Background pattern with icons */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.15]">
          <div className="grid grid-cols-6 gap-16 rotate-12 scale-150">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-8 h-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full max-w-md relative z-10">{children}</div>
    </div>
  );
}
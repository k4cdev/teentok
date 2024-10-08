
export default function TeentokLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-neutral-950">
        { children }
    </main>
  );
}
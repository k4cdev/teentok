import { TopMenu } from "@/components/ui";

export default function TeentokLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      {/* <Sidebar /> */}
      <div className="px-0 sm:px-10">
        {children}
      </div>
    </main>
  );
}
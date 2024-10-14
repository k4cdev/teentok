import { TopMenu } from "@/components/ui";
import { IoHeart } from "react-icons/io5";

export default function TeentokLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      <TopMenu />

      <div className="px-0 px-10 min-h-screen flex items-center justify-center flex-col">
        {children}
      </div>

      <footer className="bg-gray-100 mt-auto bg-yellow-500">
        <hr className="bg-neutral-500" />
        <div className="container m-auto p-1">
          <div className="text-center">
            <span className="inline-flex">Made with <IoHeart className="text-red-500 m-auto"/></span>
          </div>
        </div>
      </footer>

    </main>
  );
}
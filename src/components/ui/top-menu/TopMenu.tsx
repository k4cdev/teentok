import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {
  return (
    <nav className="flex justify-between items-center px-5 w-full">

      <div>
        <Link href="/"><span className={`${titleFont.className} antialiased font-bold `}>Teentok</span></Link>
        <span className={`${titleFont.className} antialiased font-bold `}> | mentee </span>
      </div>



      <div className="hidden sm:block">
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/men"> mentors
        </Link>
      </div>



      <div className="flex items-center">
        <Link href={"/search"} className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
          Sign in
        </button>

        <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
          Sign up
        </button>
      </div>
    </nav>
  );
}
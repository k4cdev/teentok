import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { IoLogInOutline } from "react-icons/io5";

export const TopMenu = () => {
  return (
    <nav className="flex justify-between items-center p-5 w-full">

      <div>
        <Link href="/"><span className={`${titleFont.className} antialiased font-bold text-2xl `}>Teentok</span></Link>
      </div>


      {/* <div className="hidden sm:block">
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/men"> mentors
        </Link>
      </div> */}



      <div className="flex items-center">
        <Link href="/auth/login" className="inline-flex items-center mx-2">
          <span className="flex items-center space-x-2 text-base">
            <span className="text-lg">login</span>
            <IoLogInOutline className="text-3xl" />
          </span>
        </Link>
      </div>

    </nav>
  );
}
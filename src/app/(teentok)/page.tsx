import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h1 className={ `${titleFont.className} font-bold`}>Main Page</h1>
      <h1 className={ titleFont.className }>Holanda</h1>
    </div>
  );
}

import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1 className={ `${titleFont.className} font-bold`}>Login Page</h1>
    </main>
  );
}

import { MentorsGrid } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";

const mentors = initialData.mentors;

export default function Home() {
  return (
    <>
      <div className="max-w-2xl p-8">
        <h2 className="text-5xl font-bold tracking-tight sm:text-4xl">Hi, Cindy! Accelerate your skills & career growth</h2>
      </div>
      
      <MentorsGrid mentors={mentors} />
    </>
  );
}

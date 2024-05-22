import { MentorsGrid } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";

const mentors = initialData.mentors;

export default function Home() {
  return (
    <>
      <div className="max-w-2xl pb-8 px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Accelerate your skills & career growth</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
        Access a lineup of extraordinary mentors from various backgrounds with just a click, designed to provide quick wins and valuable insights.
        </p>
      </div>
      
      <MentorsGrid mentors={mentors} />
    </>
  );
}

import { MentorsGrid } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";

const mentors = initialData.mentors;

export default function Home() {
  return (
    <>
      <div className="max-w-2xl pb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our mentors</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
          suspendisse.
        </p>
      </div>
      <div
        className="embed-responsive embed-responsive-21by9 relative w-full overflow-hidden">
        <iframe
          className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
          src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
          // allowfullscreen=""
          data-gtm-yt-inspected-2340190_699="true"
          id="240632615"></iframe>
      </div>
      <MentorsGrid mentors={mentors} />
    </>
  );
}

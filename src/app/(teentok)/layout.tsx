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
      <div className="relative isolate px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4b0082] to-[#6a5acd] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">


          {/* encabezado */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Build an epic career with expert mentors today
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Book and meet over 26,843+ mentors for 1:1 mentorship in our global community
            </p>


            {/* read more */}
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full my-5 px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-indigo-900/10 hover:ring-indigo-900/20">
                What do you want to get better at?.{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>


            </div>
          </div>
        </div>

      </div>
      <div className="px-0 sm:px-10">
        {children}
      </div>

      {/* botones get started */}
      <div className="my-10 flex items-center justify-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Join a world of learning
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Join free now <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="text-center">
        <h1 className="text-4xl px-8 font-bold tracking-tight text-gray-900 sm:text-6xl">
          Join a world of learning
        </h1>
        <p className="mb-9 px-8 text-lg leading-8 text-gray-600">
          We want to help you build an epic career with expert mentors. From junior to leadership, we are here to grow with you on this journey.</p>
      </div>

      {/* footer */}
      <footer className="bg-gray-100">
          <hr className="my-6 border-gray-200" />
        <div className="container mx-auto py-8 px-8">

          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 py-3">
              <ul>
                <li><a href="#">Find Mentors</a></li>
                <li><a href="#">Become a Mentor</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 py-3">
              <ul>
                <li><a href="#">Join ADPList</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Partnerships</a></li>
              </ul>
            </div>
          </div>

          {/* <hr className="my-6 border-gray-400" /> */}

          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 py-3">
              <p>Copyright 2024 - ADPList</p>
            </div>
            <div className="w-full md:w-1/2 py-3">
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>
          </div>

          {/* <hr className="my-6 border-gray-400" /> */}

          <div className="text-center mb-4">
            <p>Made with <i className="fas fa-heart text-red-500"></i></p>
          </div>
        </div>
      </footer>


    </main>
  );
}
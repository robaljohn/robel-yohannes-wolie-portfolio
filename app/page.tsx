import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      {/* Social icons */}
      <div className="flex items-center space-x-4 mb-8">
        <a href="mailto:robaljohn.com@gmail.com">
          <img src="/icons/email.svg" alt="Email" className="h-5 w-5" />
        </a>

        <a href="https://github.com/robaljohn" target="_blank" rel="noreferrer">
          <img src="/icons/github.svg" alt="GitHub" className="h-5 w-5" />
        </a>

        <a
          href="https://www.linkedin.com/in/robajohn2000"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
        </a>

        <a href="https://x.com/YOUR_USERNAME" target="_blank" rel="noreferrer">
          <img src="/icons/x.svg" alt="X" className="h-5 w-5" />
        </a>
      </div>

      {/* Top navigation */}
      <nav className="flex justify-end space-x-6 text-sm text-gray-600 mb-16">
        <Link href="/about" className="hover:underline">about</Link>
        <Link href="/timeline" className="hover:underline">timeline</Link>
        <Link href="/projects" className="hover:underline">projects</Link>
        <a href="/cv.pdf" className="hover:underline" target="_blank">
          cv
        </a>
      </nav>

      {/* Main content */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Left text */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-4">
            Robel Yohannes Wolie
          </h1>

          <p className="text-sm text-gray-600 mb-6">
            Data Science Student | Digital Economics & Business, Italy
          </p>

          <p className="text-gray-800 leading-relaxed">
            I am a data science student with a background in digital economics
            and business, currently studying in Italy. My academic interests
            include statistical modeling, data analysis, and applied machine
            learning, with an emphasis on understanding complex real-world
            phenomena through data. I am particularly interested in research-
            oriented environments and aim to pursue graduate studies in data
            science.
          </p>
        </div>

        {/* Right image */}
        <div>
          <img
            src="/photo_website.jpg"
            alt="Profile photo"
            className="rounded-md border"
          />
        </div>
      </section>
    </main>
  );
}

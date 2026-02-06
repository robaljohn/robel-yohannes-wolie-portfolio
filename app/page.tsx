import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      {/* Social icons */}
<div className="flex items-center space-x-4 mb-8 text-black">

  {/* Email */}
  <a href="mailto:robaljohn.com@gmail.com" aria-label="Email">
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 4h20v16H2V4zm10 7L4 6v12h16V6l-8 5z" />
    </svg>
  </a>

  {/* GitHub */}
  <a href="https://github.com/robaljohn" target="_blank" rel="noreferrer">
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.57.1.78-.25.78-.55v-2.1c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.27-1.7-1.27-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.18a10.9 10.9 0 015.72 0c2.18-1.49 3.14-1.18 3.14-1.18.62 1.57.23 2.73.11 3.02.73.81 1.18 1.84 1.18 3.1 0 4.43-2.68 5.4-5.23 5.69.41.36.77 1.07.77 2.16v3.2c0 .3.21.66.79.55 4.57-1.53 7.85-5.86 7.85-10.96C23.5 5.74 18.27.5 12 .5z"/>
    </svg>
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/robajohn2000" target="_blank" rel="noreferrer">
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6C22.4 7.6 24 10.3 24 14.3V24h-5v-8.4c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V24h-5V8z"/>
    </svg>
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

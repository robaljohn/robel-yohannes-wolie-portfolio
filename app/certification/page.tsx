import Link from "next/link";

export default function CertificationsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Back link */}
      <Link href="/" className="text-sm text-gray-600 hover:underline">
        ← Back to home
      </Link>

      <h1 className="text-3xl font-bold mt-6 mb-8">
        Certifications
      </h1>

      <ul className="space-y-6">
        <li>
          <h2 className="font-semibold">
            Data Science Specialization
          </h2>
          <p className="text-sm text-gray-600">
            Johns Hopkins University (Coursera) · 2025
          </p>
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline"
            target="_blank"
          >
            View certificate
          </a>
        </li>

        <li>
          <h2 className="font-semibold">
            Python for Data Analysis
          </h2>
          <p className="text-sm text-gray-600">
            Coursera · 2024
          </p>
        </li>

        <li>
          <h2 className="font-semibold">
            SQL for Data Science
          </h2>
          <p className="text-sm text-gray-600">
            University of California, Davis · 2024
          </p>
        </li>
      </ul>
    </main>
  );
}

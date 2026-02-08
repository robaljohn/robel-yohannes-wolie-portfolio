import Link from "next/link";

const sections = [
  "Education & Academics",
  "Technical & Digital Skills",
  "Analytical & Quantitative Skills",
  "Research & Scientific Skills",
  "Interpersonal & Communication Skills",
  "Professional & Career Development",
  "Ethics, Responsibility & Social Impact",
];

export default function CertificationsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Certifications</h1>

      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section}>
            <Link
              href="#"
              className="text-lg text-blue-700 hover:underline"
            >
              {section}
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-gray-500">
        PDFs and images will be uploaded here later via Sanity.
      </p>
    </main>
  );
}

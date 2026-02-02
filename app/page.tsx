import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">
        Robel Yohannes Wolie
      </h1>

      <p className="text-lg text-gray-600">
        Personal portfolio & academic timeline
      </p>

      <div className="flex gap-4">
        <Link href="/about" className="text-blue-600 underline">
          About Me
        </Link>
        <Link href="/timeline" className="text-blue-600 underline">
          Timeline
        </Link>
      </div>
    </main>
  );
}

type TimelineItem = {
  title: string;
  description: string;
  date: string;
};

const timeline: TimelineItem[] = [
  {
    title: "Started university studies",
    description: "Digital Economics and Business",
    date: "2023",
  },
  {
    title: "Began Data Science specialization",
    description: "Online courses and projects",
    date: "2024",
  },
  {
    title: "Building personal portfolio website",
    description: "Documenting projects and academic journey",
    date: "2026",
  },
  {
    title: "Planned research internship",
    description: "Focus on data science and analytics",
    date: "Future",
  },
];

export default function TimelinePage() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">
        Timeline
      </h1>

      <ul className="space-y-6">
        {timeline.map((item, index) => (
          <li
            key={index}
            className="border-l-2 border-gray-300 pl-6"
          >
            <p className="text-sm text-gray-500">
              {item.date}
            </p>
            <h2 className="text-xl font-semibold">
              {item.title}
            </h2>
            <p className="text-gray-700">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

import { sanityClient } from "@/lib/sanity.client";


type TimelineItem = {
  _id: string;
  title: string;
  description: string;
  date: string;
  order: number;
};

async function getTimeline(): Promise<TimelineItem[]> {
  return sanityClient.fetch(`
    *[_type == "timeline"] | order(order asc) {
      _id,
      title,
      description,
      date,
      order
    }
  `);
}

export default async function TimelinePage() {
  const timeline = await getTimeline();

  return (
    <main className="min-h-screen max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Timeline</h1>

      <ul className="space-y-6">
        {timeline.map((item) => (
          <li key={item._id} className="border-l-2 border-gray-300 pl-6">
            <p className="text-sm text-gray-500">{item.date}</p>
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

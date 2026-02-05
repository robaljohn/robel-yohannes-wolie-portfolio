import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "7bd2fi5c",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

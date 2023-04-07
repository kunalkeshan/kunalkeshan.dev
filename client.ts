// client.ts
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "gj9kvgjn",
  dataset: "production",
  useCdn: false, // `false` if you want to ensure fresh data
});

export default client;

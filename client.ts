// client.ts
import { createClient } from "@sanity/client";
import { SANITY_ACCESS_TOKEN } from "./config";

const client = createClient({
  projectId: "gj9kvgjn",
  dataset: "production",
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "2021-08-31",
  token: SANITY_ACCESS_TOKEN,
});

export default client;

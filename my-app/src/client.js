import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "tff4pcks",
  dataset: "production",
  useCdn: true,
  apiVersion: "v2021-10-21",
});

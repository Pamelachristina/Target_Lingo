const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: "your-project-id",
  dataset: "your-dataset",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2021-03-25", // use current date (YYYY-MM-DD) to target the latest API version
});

module.exports = client;

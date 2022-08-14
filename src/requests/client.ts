import * as prismic from "@prismicio/client";

const REPO_NAME = process.env.REPO_NAME || "";
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const endpoint = prismic.getEndpoint(REPO_NAME);
export const client = prismic.createClient(endpoint, {
  accessToken: ACCESS_TOKEN,
});

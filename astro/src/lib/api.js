import { useSanityClient, groq } from "astro-sanity";

export async function getFirstBlogPost() {
  const query = groq`*[_type == "post"]`;
  const firstPost = await useSanityClient().fetch(query);
  return firstPost;
}

export async function getSiteSettings() {
  const query = groq`*[_type == "siteSettings" && _id == "siteSettings"][0]`;
  const siteSettings = await useSanityClient().fetch(query);
  return siteSettings;
}
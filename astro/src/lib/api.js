import { useSanityClient, groq } from "astro-sanity";

export async function getFirstBlogPost() {
  const query = groq`*[_type == "post"]`;
  const firstPost = await useSanityClient().fetch(query);
  return firstPost;
}
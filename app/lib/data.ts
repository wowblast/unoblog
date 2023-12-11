import { posts } from "@/app/lib/placeholder-data";

export const getSinglePost = async (slug: string) => {
  const post = posts.find((post) => post.slug === slug);
  return post;
};

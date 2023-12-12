import { Category, PaginatedPostsResponse, Post } from "./definitions";
import { posts, categories } from "@/lib/placeholder-data";

export const getCategories = async (): Promise<Category[]> => {
  return new Promise((resolve) => {
    resolve(categories);
  });
};

export const getSinglePost = async (slug: string): Promise<Post> => {
  return new Promise((resolve, reject) => {
    if (!slug) reject({ message: "Slug is required" });

    const existingPost = posts.find((post) => post.slug === slug);

    if (!existingPost) {
      reject({ message: "Post not found" });
    }

    if (existingPost) resolve(existingPost);
  });
};

export const getPosts = async ({
  cat,
  page,
  limit = 4,
}: {
  cat?: string;
  page: number;
  limit: number;
}): Promise<PaginatedPostsResponse> => {
  const offset = page * limit - limit;

  const filteredPosts: Post[] = !cat
    ? posts
    : posts.filter((post) => post.catSlug === cat);
  const count = filteredPosts.length;
  const filteredPostsSliced = filteredPosts.slice(offset, offset + limit);

  return new Promise((resolve) => {
    resolve({
      posts: filteredPostsSliced,
      pagination: {
        totalPages: Math.ceil(count / limit),
        currentPage: page,
        offset,
        limit,
        hasPrev: page > 1,
        hasNext: page < Math.ceil(count / limit),
      },
    });
  });
};

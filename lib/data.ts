import { Category, Post, User , Comment} from "@prisma/client";
import { PaginatedPostsResponse } from "./definitions";
const apiUrl = process.env.API_URL;
export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(apiUrl+"/api/categories", {
      method: "GET",
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const responseData = await response.json();

    return responseData;
  } catch (err) {
    throw new Error("Failed to upload");
  }
};

export interface ExtendedComment extends Comment {
  user: User;
}

export const getCommentsbyPost = async ( postSlug: string): Promise<ExtendedComment[]| null> => {
  try {
    const response = await fetch(`${apiUrl}/api/comments?postSlug=${postSlug}`, {
      method: "GET",
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const responseData = await response.json();

    return responseData;
  } catch (err) {
    throw new Error("Failed to upload");
  }
};

export interface ExtendedPost extends Post {
  user: User;
}

export const getSinglePost = async (
  slug: string
): Promise<ExtendedPost | null> => {
  try {
    const response = await fetch(`${apiUrl}/api/posts/${slug}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    throw new Error("Failed to fetch");
  }
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
  try {
    const url = `${apiUrl}/api/posts?page=${page}&limit=${limit}${
      cat ? `&cat=${cat}` : ""
    }`;

    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error("Failed to fetch");
  }
};

export const uploadToCloudinary = async (
  file: string | Blob
): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(`${apiUrl}/api/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data.url;
  } catch (error) {
    throw new Error("Failed to upload");
  }
};

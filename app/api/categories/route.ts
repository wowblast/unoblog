import { db } from "@/lib/server/db";

export const GET = async () => {
  try {
    const categories = await db.category.findMany({
      skip: 0,
    });

    return new Response(JSON.stringify(categories));
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Something went wrong!" }), {
      status: 500,
    });
  }
};

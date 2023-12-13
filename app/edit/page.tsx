// pages/edit/[slug].tsx
import { getSinglePost } from "@/lib/data";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
interface Props {
  slug: string;
}
const EditPostPage = async ({ slug }: Props) => {
  const post = await getSinglePost(slug);
  const { data: session } = useSession();

  // Redirect unauthenticated users to the homepage
  if (!session) {
    return <p>You are not authenticated. Redirecting...</p>;
  }

  // Redirect users who are not the author of the post
  /*if (session.user.email !== post.user.email) {
    return <p>You do not have permission to edit this post. Redirecting...</p>;
  }*/

  const handleEditClick = () => {
    // router.push(`/write/${post.slug}`);
    console.log("editi");
  };

  return (
    <>
      {session.user?.email === post?.user.email && (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </>
  );
};
/*
export async function EditPostPage(context) {
  const { params } = context;
  const post = await getSinglePost(params.slug);

  return {
    props: {
      post,
    },
  };
}
*/
export default EditPostPage;

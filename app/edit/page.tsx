// pages/edit/[slug].tsx
"use client";
import { getSinglePost } from "@/lib/data";
import { useSession } from "next-auth/react";
import styles from "./Edit.module.css";
import { useRouter } from "next/navigation";

interface Props {
  post: {
    id: string;
    createdAt: Date;
    slug: string;
    title: string;
    desc: string;
    img: string | null;
    views: number;
    catSlug: string;
    userEmail: string;
    tweetLink: string | null;
    youTubeLink: string | null;
    TwitchClipLink: string | null;
    user: {
      image: string | null;
      id: string;
      email: string | null;
      emailVerified: Date | null;
      name: string | null;
    };
  };
}
const EditPostPage = ({ post }: Props) => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleEditClick = () => {
    router.push(`/write/?slug=${post.slug}`);
    //.log("editi");
  };

  return (
    <>
      {session?.user?.email === post?.user.email && (
        <button className={styles.editButton} onClick={handleEditClick}>
          Edit
        </button>
      )}
    </>
  );
};

export default EditPostPage;

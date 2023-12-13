import Image from "next/image";

import styles from "./SinglePage.module.css";
import Menu from "@/app/components/menu/Menu";
import { getSinglePost } from "@/lib/data";
import EmbebTwitter from "@/app/components/embed-components/embed-twitter/embeb-twitter";
import CommentPage from "@/app/components/comments/comment-page";
import EmbedYouTube from "@/app/components/embed-components/embed-youTube/embedYouTube";
import EmbedTwitchClip from "@/app/components/embed-components/embed-twitch/EmbedTwitch";
import EditPostPage from "@/app/edit/page";
interface SinglePageProps {
  params: {
    slug: string;
  };
}

const SinglePage = async ({ params: { slug } }: SinglePageProps) => {
  const post = await getSinglePost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <div className={styles.user}>
            {post?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={post.user.image}
                  alt=""
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{post?.user?.name}</span>
              <span className={styles.date}>
                {post?.createdAt &&
                  new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
              </span>
            </div>
          </div>
        </div>
        {post?.img && (
          <div className={styles.imageContainer}>
            <Image src={post.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <EditPostPage post={post!} />

      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: post?.desc ?? "" }}
          />
          {post?.tweetLink && <EmbebTwitter tweetId={post?.tweetLink!} />}
          {post?.youTubeLink && <EmbedYouTube videoId={post?.youTubeLink!} />}
          {post?.TwitchClipLink && (
            <EmbedTwitchClip clipId={post?.TwitchClipLink!} />
          )}

          <CommentPage postSlug={post?.slug!} />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;

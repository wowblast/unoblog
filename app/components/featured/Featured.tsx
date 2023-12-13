import React from "react";
import Image from "next/image";

import styles from "./Featured.module.css";
import { getPosts } from "@/lib/data";

const Featured = async () => {
  const {
    posts,
    pagination: { currentPage, hasPrev, hasNext },
  } = await getPosts({ page: 1, limit: 1 });
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>
          Welcome to EpicEnigma Echo - Your Gateway to the Exciting World of
          Gaming, Entertainment, Twitch, YouTube, and Tech!
        </b>
        <br></br>
        Embark on a journey where every click unveils the latest and greatest in
        the realms of gaming, entertainment, and cutting-edge technology.
        Immerse yourself in the vibrant worlds of Twitch and YouTube, where
        creators redefine the boundaries of creativity. Stay ahead with our tech
        updates, and explore the intersection of innovation and fun.
      </h1>
      {posts && (
        <div className={styles.post}>
          <div className={styles.imageContainer}>
            <Image src={posts[0].img!} alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.postTitle}>{posts[0].title}</h2>
            <p className={styles.postDesc}>
              {posts[0].desc.length > 200
                ? `${posts[0].desc.slice(0, 200)}...`
                : posts[0].desc}
            </p>
            <button className={styles.button}>Read More</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Featured;

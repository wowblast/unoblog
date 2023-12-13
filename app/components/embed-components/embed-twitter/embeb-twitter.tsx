"use client";
import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import styles from './EmbedTwitter.module.css'
type ChildProps = {
  tweetId: string;
};
const EmbebTwitter = ({ tweetId }: ChildProps) => {
  return (
    <div className={styles.embedContainer}>
      <TwitterTweetEmbed tweetId={tweetId} />
    </div>
  );
};

export default EmbebTwitter;

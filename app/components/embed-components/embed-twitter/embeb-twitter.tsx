"use client";
import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
type ChildProps = {
  tweetId: string;
};
const EmbebTwitter = ({ tweetId }: ChildProps) => {
  return (
    <div>
      <TwitterTweetEmbed tweetId={tweetId} />
    </div>
  );
};

export default EmbebTwitter;

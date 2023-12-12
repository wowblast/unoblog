import React from "react";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import { getPosts } from "@/lib/data";

import styles from "./CardList.module.css";

interface CardListProps {
  cat: string;
  page: number;
  limit: number;
}

const CardList = async ({ page, cat, limit }: CardListProps) => {
  const {
    posts,
    pagination: { currentPage, hasPrev, hasNext },
  } = await getPosts({ page, cat, limit });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts.map((post) => (
          <Card post={post} key={post.id} />
        ))}
      </div>

      <Pagination currentPage={0} hasPrev={false} hasNext={false} />
    </div>
  );
};

export default CardList;

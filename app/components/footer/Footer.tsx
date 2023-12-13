import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.css";
import { getCategories } from "@/lib/data";

const Footer = async () => {
  const categories = await getCategories();

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          
          <h1 className={styles.logoText}>EpicEnigma Echo</h1>
        </div>
        <p className={styles.desc}>
          Within the dynamic realms of gaming, entertainment, Twitch, YouTube,
          and tech, the power lies not just in the technology itself but in the
          vibrant community of creators and enthusiasts who shape it. It's the
          gamers, the entertainers, the streamers, and the tech aficionados who
          propel innovation and steer us towards progress on our exciting
          journey.
        </p>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Categories</span>
          {categories.map((category) => (
            <Link
              href={`/blog?cat=${category.slug}&page=1&limit=4`}
              key={category.id}
            >
              {category.title}
            </Link>
          ))}
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

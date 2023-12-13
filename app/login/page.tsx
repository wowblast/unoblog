"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { TwitterTweetEmbed } from "react-twitter-embed";

import styles from "./loginPage.module.css";

const LoginPage = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.socialButton} onClick={() => signIn("twitch")}>
          Sign in with Twitch
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

"use client";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const status = "authenticated";

  const router = useRouter();


  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} >
          Sign in with Google
        </div>
        <div className={styles.socialButton}>
          Sign in with Github
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

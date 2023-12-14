import CardList from "./components/card-list/CardList";
import CategoryList from "./components/category-list/CategoryList";
import Featured from "./components/featured/Featured";
import Menu from "./components/menu/Menu";
import { Suspense } from "react";
import styles from "./page.module.css";
import AdBlockDetector from "./components/addBlokerDetector/AdBlockerDetector";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
interface HomeProps {
  searchParams: {
    cat: string;
    page: string;
    limit: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  const cat = searchParams.cat || "";
  const page = parseInt(searchParams.page) || 1;
  const limit = parseInt(searchParams.limit) || 4;

  return (
    <main className={styles.container}>
      <AdBlockDetector />
      <Featured />
      <Suspense fallback={<div>Loading...</div>}>
        <CategoryList />
      </Suspense>
      <div className={styles.content}>
        <CardList page={page} cat={cat} limit={limit} />
      </div>
    </main>
  );
}

"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { useSession } from "next-auth/react";
import ReactQuill from "react-quill";
import { type Category } from "@prisma/client";
import { getCategories, getSinglePost, uploadToCloudinary } from "@/lib/data";
import styles from "./writePage.module.css";
import "react-quill/dist/quill.bubble.css";
import LinkParser from "../components/linkParser/LinkParser";
interface SinglePageProps {
  params: {
    slug: string;
  };
}
const WritePage = () => {
  const router = useRouter();

  const [post, setPost] = useState<any>({});
  const { status } = useSession();

  const ref = useRef<any>();
  const [twitterData, setTwitterData] = useState<string | null>(null);
  const [youtubeData, setYoutubeData] = useState<string | null>(null);
  const [twitchData, setTwitchData] = useState<string | null>(null);
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  const [file, setFile] = useState<File | null | undefined>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [catSlug, setCatSlug] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get("slug");
    console.log("get posss on paramss", slug);
    const fetchPost = async () => {
      if (slug) {
        try {
          const response = await fetch(`/api/posts/${slug}`);
          const data = await response.json();
          setPost(data);
          console.log(data.title);
          setTitle(data.title);
          setCatSlug(data.catSlug);
          setImagePreviewUrl(data.img);
          setValue(data.desc);
          setTwitchData(data.twitchData);
          setTwitterData(data.twitterData);
          setYoutubeData(data.youtubeData);
        } catch (error) {
          console.error("Error fetching post:", error);
        }
      }
    };

    fetchPost();
  }, []);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  useEffect(() => {
    getCategories().then(setCategoryList);
  }, []);

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: imagePreviewUrl,
        slug: slugify(title),
        tweetLink: twitterData,
        youTubeLink: youtubeData,
        TwitchClipLink: twitchData,
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }

    console.log(twitterData, youtubeData, twitchData);
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Update the state only if the value has changed
    if (e.target.value !== title) {
      setTitle(e.target.value);
    }
  };

  useEffect(() => {
    let isActive = true;

    const uploadFile = async () => {
      if (file) {
        try {
          const url = await uploadToCloudinary(file);
          if (url) {
            setImagePreviewUrl(url);
          }
          if (isActive) {
            setFile(null);
          }
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      }
    };

    void uploadFile();

    return () => {
      isActive = false;
    };
  }, [file]);

  const uploadFile = () => {
    ref.current?.click();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <input
          type="text"
          placeholder="Title"
          className={styles.input}
          value={title}
          onChange={(e) => handleTitleChange}
        />

        <div className={styles.options}>
          <select
            className={styles.select}
            value={catSlug}
            onChange={(e) => setCatSlug(e.target.value)}
          >
            <option value="">Category</option>
            {categoryList.map((item) => (
              <option value={item.slug} key={item.id}>
                {item.title}
              </option>
            ))}
          </select>

          <button className={styles.publish} onClick={handleSubmit}>
            Publish
          </button>
        </div>
      </div>

      <div className={styles.uploadImageContainer}>
        <input
          ref={ref}
          id="image"
          type="file"
          accept="image/*"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files ? e.target.files[0] : null;
            setFile(file);
          }}
          style={{ display: "none" }}
        />
        {imagePreviewUrl ? (
          <Image
            src={imagePreviewUrl}
            alt="Uploaded Image"
            width={1200}
            height={700}
            onClick={uploadFile}
            className={styles.imagePreview}
          />
        ) : (
          <Image
            src="/upload.svg"
            alt="Upload Image"
            width={1200}
            height={700}
            onClick={uploadFile}
            className={styles.uploadImageSvg}
          />
        )}
      </div>

      <div className={styles.editor}>
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Write here..."
        />
      </div>
      <LinkParser
        placeholder="Paste Twitter Link"
        onExtractedDataChange={setTwitterData}
      />
      {twitterData && <div>Twitter ID: {twitterData}</div>}

      <LinkParser
        placeholder="Paste YouTube Link"
        onExtractedDataChange={setYoutubeData}
      />
      {youtubeData && <div>YouTube ID: {youtubeData}</div>}

      <LinkParser
        placeholder="Paste Twitch Link"
        onExtractedDataChange={setTwitchData}
      />
      {twitchData && <div>Twitch clip ID: {twitchData}</div>}
    </div>
  );
};

export default WritePage;

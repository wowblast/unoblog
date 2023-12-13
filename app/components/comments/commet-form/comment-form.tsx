// CommentForm.js
"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import styles from "./CommentForm.module.css";

interface CommentProps {
  postSlug: string;
}
const CommentForm = ({ postSlug }: CommentProps) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setComment(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Use Prisma to create a new comment
      console.log({
        data: {
          desc: comment,
          postSlug,
        },
      });

      const res = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({
          desc: comment,
          postSlug: postSlug,
        }),
      });

      if (res.status === 200) {
        const data = await res.json();
        console.log("creado", data);
      }

      // Reset the comment input after submission
      setComment("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <div className={styles.commentFormContainer}>
      <h1>Write a Comment</h1>

      <textarea
        className={styles.commentInput}
        value={comment}
        onChange={handleCommentChange}
        placeholder="Write your comment..."
      />
      <button className={styles.submitButton} onClick={handleSubmit}>
        Submit Comment
      </button>
    </div>
  );
};

export default CommentForm;

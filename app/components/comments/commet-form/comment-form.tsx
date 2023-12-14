"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import styles from "./CommentForm.module.css";
import { timeStamp } from "console";

interface CommentProps {
  postSlug: string;
  onCommentSubmit: React.Dispatch<React.SetStateAction<number>>;
}
const CommentForm = ({ postSlug, onCommentSubmit }: CommentProps) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setComment(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({
          desc: comment,
          postSlug: postSlug,
        }),
      });

      if (res.status === 200) {
        const data = await res.json();
      }

      setComment("");
      const timestamp: Date = new Date();

      const timestampAsNumber: number = timestamp.getTime();

      onCommentSubmit(timestampAsNumber);
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

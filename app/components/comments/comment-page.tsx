"use client";
import React, { useEffect, useState } from "react";
import CommentForm from "./commet-form/comment-form";
import CommentsList from "./comment-list/CommentList";
interface CommentProps {
  postSlug: string;
}

const CommentPage = ({ postSlug }: CommentProps) => {
  const [comments, setComments] = useState(null);
  const [numberOfComments, setNumberOfCommets] = useState(0);

  useEffect(() => {
    const fetchComments = async () => {
      if (postSlug) {
        try {
          const response = await fetch(`/api/comments?postSlug=${postSlug}`, {
            method: "GET",
            cache: "no-cache",
          });
          const comments = await response.json();
          setComments(comments);
        } catch (error) {
          console.error("Error fetching post:", error);
        }
      }
    };

    fetchComments();
  }, [numberOfComments]);

  return (
    <div>
      <CommentsList comments={comments} />
      <CommentForm postSlug={postSlug} onCommentSubmit={setNumberOfCommets} />
    </div>
  );
};

export default CommentPage;

import React from "react";
import CommentForm from "./commet-form/comment-form";
import CommentsList from "./comment-list/CommentList";
import { getCommentsbyPost } from "@/lib/data";
interface CommentProps {
  postSlug: string;
}

const CommentPage = async ({ postSlug }: CommentProps) => {
  const comments = await getCommentsbyPost(postSlug);

  return (
    <div>
      <CommentsList comments={comments} />
      <CommentForm postSlug={postSlug} />
    </div>
  );
};

export default CommentPage;

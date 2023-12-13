// CommentsList.js
import React from "react";
import styles from "./CommentList.module.css"; // Import your CSS module

interface Comment {
  id: string;
  userEmail: string;
  desc: string;
  createdAt: Date;
  user: {
    image: string | null;
    id: string;
    email: string | null;
    emailVerified: Date | null;
    name: string | null;
  } | null;
}

interface CommentsListProps {
  comments: Comment[] | null;
}

const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
  return (
    <div>
      <h2>Lets see what people think about this new</h2>
      <ul className={styles.commentsList}>
        {comments &&
          comments.map((comment) => (
            <li key={comment.id} className={styles.commentItem}>
              <div className={styles.avatarContainer}>
                {comment.user && comment.user.image && (
                  <img
                    className={styles.avatar}
                    src={comment.user.image}
                    alt={`${comment.user.name || "User"} Avatar`}
                  />
                )}
              </div>
              <div className={styles.commentContent}>
                <strong>{comment.userEmail}</strong>: {comment.desc}
                <div className={styles.commentDetails}>
                  <span className={styles.createdAt}>
                    {new Date(comment.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CommentsList;

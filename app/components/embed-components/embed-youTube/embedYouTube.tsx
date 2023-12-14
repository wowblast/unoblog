import React from "react";
import styles from "./EmbedYouTube.module.css";

interface EmbedYouTubeProps {
  videoId: string;
}

const EmbedYouTube: React.FC<EmbedYouTubeProps> = ({ videoId }) => {
  return (
    <div className={styles.embedContainer}>
      <iframe
        className={styles.embedIframe}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video Embed"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default EmbedYouTube;

import React from "react";
import styles from "./EmbedTwitchClips.module.css"; // Import your CSS module

interface EmbedTwitchClipProps {
  clipId: string;
}

const EmbedTwitchClip: React.FC<EmbedTwitchClipProps> = ({ clipId }) => {
  return (
    <div className={styles.embedContainer}>
      <iframe
        className={styles.embedIframe}
        src={`https://clips.twitch.tv/embed?clip=${clipId}&parent=localhost`}
        title="Twitch Clip Embed"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default EmbedTwitchClip;

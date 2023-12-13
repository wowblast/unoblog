// LinkParser.tsx
import React, { useState, useEffect } from "react";
import styles from "./LinkParser.module.css";

interface LinkParserProps {
  placeholder: string;
  onExtractedDataChange: (data: string | null) => void;
}

const LinkParser: React.FC<LinkParserProps> = ({
  placeholder,
  onExtractedDataChange,
}) => {
  const [link, setLink] = useState("");

  const extractData = () => {
    let extractedId: string | null = null;

    if (link.includes("twitter.com")) {
      const twitterMatch = link.match(/\/status\/(\d+)/);
      extractedId = twitterMatch ? twitterMatch[1] : null;
    } else if (link.includes("youtube.com")) {
      const youtubeMatch = link.match(/\/watch\?v=([a-zA-Z0-9_-]+)/);
      extractedId = youtubeMatch ? youtubeMatch[1] : null;
    } else if (link.includes("twitch.tv")) {
      const twitchMatch = link.match(/\/([a-zA-Z0-9_-]+)(\?|$)/);
      extractedId = twitchMatch ? twitchMatch[1] : null;
    }

    onExtractedDataChange(extractedId);
  };

  useEffect(() => {
    extractData();
  }, [link, onExtractedDataChange]);

  return (
    <div className={styles.linkParserContainer}>
      <label className={styles.label}>{placeholder}</label>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder={placeholder}
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className={styles.inputField}
        />
      </div>
    </div>
  );
};

export default LinkParser;

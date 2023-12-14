// components/AdBlockDetector.tsx
"use client";
import { useEffect, useState } from "react";

const AdBlockDetector: React.FC = () => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  useEffect(() => {
    const checkForAdBlock = () => {
      const testAd = document.createElement("div");
      testAd.className = "adsbox";
      testAd.style.width = "1px";
      testAd.style.height = "1px";
      testAd.style.position = "absolute";
      testAd.style.left = "-10000px";
      testAd.style.top = "-10000px";
      testAd.innerHTML = "&nbsp;";
      document.body.appendChild(testAd);

      setTimeout(() => {
        if (testAd.clientHeight === 0) {
          setAdBlockDetected(true);
        }
        document.body.removeChild(testAd);
      }, 100);
    };

    checkForAdBlock();
  }, []);

  return (
    <>
      <h1>teas adds</h1>
      {adBlockDetected && (
        <div className="ad-block-message">
          <p>
            It seems like you are using an ad blocker. Please consider disabling
            it to support the website.
          </p>
        </div>
      )}
    </>
  );
};

export default AdBlockDetector;

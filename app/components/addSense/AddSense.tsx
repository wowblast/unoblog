"use client";
import Script from "next/script";
import { useEffect } from "react";

const AdSense: React.FC = () => {
  useEffect(() => {
    const loadAdsByGoogleScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    };

    loadAdsByGoogleScript();
  }, []);

  return (
    <>
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        strategy="beforeInteractive"
      />
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2870867286087338"
        data-ad-slot="9910751241"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
        }}
      />
    </>
  );
};

export default AdSense;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "../lib/providers/AuthProvider";
import ThemeContextProvider from "../lib/providers/ThemeProvider";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AdSense from "./components/addSense/AddSense";

import "./globals.css";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EpicEnigma Echo",
  description: "EpicEnigma Echo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2870867286087338"
          crossOrigin="anonymous"
        ></script>
        <AuthProvider>
          <ThemeContextProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                <AdSense />

                {children}
                <Footer />
              </div>
            </div>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

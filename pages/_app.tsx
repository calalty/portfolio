import Layout from "@/components/layout";
import "../styles/globals.scss";
import React from "react";
import { Syne } from "@next/font/google";
const syne = Syne({ subsets: ["latin"], weight: "500" });
export default function App({ Component, pageProps }) {
  return (
    <div className={syne.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

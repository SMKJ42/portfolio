import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useEffect } from "react";

export default function Document() {
  useEffect(() => {
    var theme = localStorage.getItem("color-theme");
    if (theme === "dark") {
      const html = document.querySelector("html")!;
      html.classList.add("dark");
    }
  }, []);

  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

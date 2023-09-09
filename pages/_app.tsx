import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    var theme = localStorage.getItem("color-theme");
    if (theme === "dark") {
      const html = document.querySelector("html")!;
      html.classList.add("dark");
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

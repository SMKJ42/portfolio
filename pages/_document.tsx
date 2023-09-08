import Navigation from "@/components/Navigation";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script src="../public/theme.ts" strategy="beforeInteractive" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

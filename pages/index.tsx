import { Inter } from "next/font/google";
import { useContext, useEffect } from "react";
import Image from "next/image";

import { Socials } from "@/components/main/socials";
import { About } from "@/components/main/about";
import { Experience } from "@/components/main/experience";
import { Projects } from "@/components/main/projects";
import { Contact } from "@/components/main/contact";

import diveImg from "/public/diving.JPG";
import { Layout } from "@/components/Layout";
import { AppContext, NextPageWithLayout } from "./_app";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPageWithLayout = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const checkTheme = localStorage.getItem("color-theme");
    if (checkTheme === "dark") {
      const html = document.querySelector("html")!;
      html.classList.add("dark");
      dispatch({ type: "SET_THEME", payload: "dark" });
    } else {
      dispatch({ type: "SET_THEME", payload: "light" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className} bg-white dark:bg-black text-black dark:text-white transition-colors duration-500`}
    >
      <p>INSERT IMAGE HERE</p>
      <About />
      <Image
        src={diveImg}
        alt=""
        width={150}
        height={150}
        className="rounded-xl mt-8"
      />
      <Socials />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;

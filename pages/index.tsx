import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import { Socials } from "@/components/main/socials";
import { About } from "@/components/main/about";
import { Experience } from "@/components/main/experience";
import { Projects } from "@/components/main/projects";
import { Layout } from "@/components/Layout";
import { AppContext, NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
    const { dispatch } = useContext(AppContext);

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
        <>
            <div className="hidden sm:flex w-full justify-center text-2xl mb-4 font-bold">
                <h2>William Deason</h2>
            </div>
            <div className="h-52 w-52 relative items-center flex">
                <Image
                    src="/liam_deason.JPG"
                    fill={true}
                    alt="LinkedIn profile image"
                    className="rounded-full object-cover"
                    loading="eager"
                />
            </div>
            <div className="mt-8">
                <About />
            </div>
            <div className="mt-12">
                <Socials />
            </div>
            <Image
                src="/diving.JPG"
                alt="Me at work"
                width={200}
                height={100}
                className="rounded-xl mt-12"
                loading="lazy"
            />
            <div className="mt-12">
                <Experience />
            </div>
            <div className="mt-12">
                <Projects />
            </div>
            {/* <div className="mt-8">
        <Contact />
      </div> */}
        </>
    );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout>{page}</Layout>;
};

export default Home;

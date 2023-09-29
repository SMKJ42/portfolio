import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import { Socials } from "@/components/main/socials";
import { About } from "@/components/main/about";
import { Experience } from "@/components/main/experience";
import { Projects } from "@/components/main/projects";

import * as img from "../public/diving.jpg";
import * as me from "../public/liam-deason.jpg";
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
            <div className="h-52 w-52 relative">
                <Image
                    src={me || ""}
                    // height={100}
                    // width={150}
                    fill={true}
                    alt="LinkedIn profile image"
                    className="rounded-full object-cover"
                />
            </div>
            <div className="mt-8">
                <About />
            </div>
            <div className="mt-12">
                <Socials />
            </div>
            <Image
                src={img}
                alt="Me at work"
                width={150}
                className="rounded-xl mt-12"
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

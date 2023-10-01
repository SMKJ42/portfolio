import { useContext, useEffect } from "react";
import Image from "next/image";

import { Socials } from "@/components/main/socials";
import { About } from "@/components/main/about";
import { Experience } from "@/components/main/experience";
import { Projects } from "@/components/main/projects";
import { Layout } from "@/components/Layout";
import { AppContext, NextPageWithLayout } from "./_app";
import Head from "next/head";
import { Contact } from "@/components/main/contact";

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
            <Head>
                <title>William&apos;s Protfolio</title>
                <meta
                    name="description"
                    content="A place for William Deason to showcase his talents and work."
                />
            </Head>
            <div
                className="hidden sm:flex w-full justify-center text-2xl mb-4 font-bold"
                id="about_me"
            >
                <h2>William Deason</h2>
            </div>
            <div className="h-52 w-52 relative items-center flex">
                <Image
                    src="/liam_deason.JPG"
                    fill={true}
                    alt="LinkedIn profile image"
                    className="rounded-full object-cover"
                    priority={true}
                    quality={75}
                    sizes="(max-width: 640px) 100px, (max-width: 768px) 200px, 300px"
                />
            </div>
            <div className="mt-8">
                <About />
            </div>
            <div className="mt-12">
                <Socials />
            </div>
            {/* <div className="w-[200px] h-[300px]"> */}
            <Image
                src="/diving.JPG"
                alt="Me at work"
                height={200}
                width={200}
                quality={50}
                priority={true}
                className="rounded-xl mt-12"
            />
            {/* </div> */}
            <div className="mt-12">
                <Experience />
            </div>
            <div className="mt-12">
                <Projects />
            </div>
            <div className="mt-8 w-full flex justify-center">
                <Contact />
            </div>
        </>
    );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout>{page}</Layout>;
};

export default Home;

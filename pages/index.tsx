import { Inter } from "next/font/google";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Image from "next/image";

import diveImg from "/public/diving.JPG";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    console.log(localStorage.getItem("color-theme"));
  }, []);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Navigation />
      <Image
        src={diveImg}
        alt=""
        width={150}
        height={150}
        className="rounded-xl"
      />
      <section
        id="About_Me"
        className="flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl font-bold">About Me</h1> <br />
        <p className="text-xl text-center">
          Hi! My names William, but you can call me Liam.
        </p>
        <br />
        <p className="text-xl text-center">
          I&#8217;m a software engineer whose mainly focused on front-end
          development, but I&#8217;m also learning back-end oriented languages
          such as Rust.
        </p>
        <br />
        <p className="text-xl text-center">
          I&#8217;m not the best at styling decisions but I LOVE making code
          work.
        </p>
        <p className="text-xl text-center"></p>
      </section>
      {/* <div className="h-64"></div> */}
      <section
        id="Experience"
        className="flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Experience</h1>
        <ul className="grid grid-cols-2 sm:grid-cols-4">
          <li>
            <p>SQL</p> <p>I dabble</p>
          </li>
          <li>
            <p>JavaScript</p>
            <p>I leetCode</p>
          </li>
          <li>
            <p>Rust</p>
            <p>I dabble</p>
          </li>
          <li>
            <p>Next</p>
            <p>I use it</p>
          </li>
          <li>
            <p>Vercel</p>
            <p>Main deployment method</p>
          </li>
          <li>
            <p>Tailwind</p>
            <p>You can tell by the way it is</p>
          </li>
          <li>
            <p>MongoDB</p>
            <p>Yeah...</p>
          </li>
        </ul>
      </section>
      {/* <div className="h-64"></div> */}
      <section
        id="Projects"
        className="flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-xl">I&#8217;m a software engineer</p>
      </section>
      {/* <div className="h-64"></div> */}
      <section
        id="Get_In_Touch"
        className="flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-xl">I&#8217;m a software engineer</p>
      </section>
    </main>
  );
}

import Link from "next/link";

export function About() {
    return (
        <section className="flex flex-col items-center justify-center w-60 sm:w-96 lg:w-[900px]">
            <p className="text-xl text-center">
                Hi! My name&apos;s William, but you can call me Liam.
            </p>
            <Link
                href="/resume"
                className="px-4 py-1 bg-teal-700 text-white dark:bg-white dark:text-black rounded-lg mt-4"
            >
                View my resume
            </Link>
            <br />
            <p className="text-xl text-center">
                I&apos;m a software engineer whose mainly focused on front-end
                development, but I&apos;m also learning back-end oriented
                languages such as Rust.
            </p>
            <br />
            <p className="text-xl text-center">
                I&apos;m not the best at styling decisions, but I LOVE making
                code work.
            </p>
            <p className="text-xl text-center"></p>
        </section>
    );
}

import Image from "next/image";
import Link from "next/link";

export function About() {
    return (
        <section className="flex flex-col items-center justify-center w-60 sm:w-96 lg:w-[900px]">
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
            <p className="text-xl text-center mt-8">
                Hi! My name&apos;s William, but you can call me Liam.
            </p>
            <Link
                href="/resume"
                className="px-4 py-1 bg-cyan-800 text-white rounded-lg mt-4"
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

import { Inter } from "next/font/google";
import { ThemeIcons } from "./icons/ToggleTheme";
import { Hamburger } from "./icons/hamburger";
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export function Layout(Props: { children: React.ReactNode }) {
    const { children } = Props;
    return (
        <>
            <div
                className={`min-h-screen ${inter.className} bg-slate-200 dark:bg-gray-900 text-black dark:text-white transition-colors duration-500`}
            >
                <nav className="bg-cyan-800 py-2 pl-8 pr-6 w-full text-white fixed z-10">
                    <LargeNav />
                    <SmallNav />
                </nav>
                <main className="py-[70px] flex flex-col items-center justify-between">
                    {children}
                </main>
                <footer></footer>
            </div>
        </>
    );
}

function LargeNav() {
    return (
        <ul className="hidden sm:flex items-center justify-between">
            <li className="hover:underline">
                <Link href="/#about_me">About Me</Link>
            </li>
            <li className="hover:underline">
                <Link href="/#experience">Experience</Link>
            </li>
            <li className="hover:underline">
                <Link href="/#projects">Projects</Link>
            </li>
            <li className="hover:underline">
                <Link href="/#get_in_touch">Get in Touch</Link>
            </li>
            <li>
                <button
                    className="hover:bg-teal-300 p-2 rounded-xl"
                    aria-label="toggle theme"
                >
                    <ThemeIcons />
                </button>
            </li>
        </ul>
    );
}

function SmallNav() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="flex sm:hidden justify-between">
            {isExpanded ? (
                <Expanded setIsExpanded={setIsExpanded} />
            ) : (
                <Collapsed setIsExpanded={setIsExpanded} />
            )}
        </div>
    );
}

interface NavProps {
    setIsExpanded: Dispatch<SetStateAction<boolean>>;
}

function Collapsed(props: NavProps) {
    const { setIsExpanded } = props;

    return (
        <>
            <div className="w-full text-center text-2xl font-semibold drop-shadow-lg">
                William Deason
            </div>
            <div className="flex mt-1">
                <ThemeIcons />
                <div
                    onClick={() => {
                        setIsExpanded(true);
                    }}
                    className="ml-4"
                >
                    <Hamburger />
                </div>
            </div>
        </>
    );
}

function Expanded(props: NavProps) {
    const { setIsExpanded } = props;
    const router = useRouter();

    return (
        <>
            <ul className="w-full flex flex-col items-center">
                <li className="hover:underline">
                    <Link href="/#about_Me">About Me</Link>
                </li>
                <li className="hover:underline">
                    <Link href="/#experience">Experience</Link>
                </li>
                <li className="hover:underline">
                    <Link href="/#projects">Projects</Link>
                </li>
                <li className="hover:underline">
                    <Link href="/#get_in_touch">Get in Touch</Link>
                </li>
            </ul>
            <div className="flex mt-1">
                <ThemeIcons />
                <div
                    onClick={() => {
                        setIsExpanded(false);
                    }}
                    className="ml-4"
                >
                    <Hamburger />
                </div>
            </div>
        </>
    );
}

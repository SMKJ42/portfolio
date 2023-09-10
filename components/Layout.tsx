import { Inter } from "next/font/google";
import { ThemeIcons } from "./themeIcon";
import { Hamburger } from "./icons/hamburger";
import { Dispatch, SetStateAction, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export function Layout(Props: { children: React.ReactNode }) {
  const { children } = Props;
  return (
    <div
      className={`min-h-screen ${inter.className} bg-white dark:bg-black text-black dark:text-white transition-colors duration-500`}
    >
      <nav className="bg-teal-500 py-2 pl-8 pr-6 w-full text-white fixed">
        <LargeNav />
        <SmallNav />
      </nav>
      <main className="pt-[70px] flex flex-col items-center justify-between">
        {children}
      </main>
      <footer></footer>
    </div>
  );
}

function LargeNav() {
  return (
    <ul className="hidden sm:flex items-center justify-between">
      <li className="hover:underline">
        <a href="#About_Me">About Me</a>
      </li>
      <li className="hover:underline">
        <a href="#Experience">Experience</a>
      </li>
      <li className="hover:underline">
        <a href="#Projects">Projects</a>
      </li>
      <li className="hover:underline">
        <a href="#Get_In_Touch">Get in Touch</a>
      </li>
      <button className="hover:bg-teal-300 p-2 rounded-xl">
        <ThemeIcons />
      </button>
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
      <ul className="w-full"></ul>
      <div className="flex">
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

  return (
    <>
      <ul className="w-full flex flex-col items-center">
        <li className="hover:underline">
          <a href="#About_Me">About Me</a>
        </li>
        <li className="hover:underline">
          <a href="#Experience">Experience</a>
        </li>
        <li className="hover:underline">
          <a href="#Projects">Projects</a>
        </li>
        <li className="hover:underline">
          <a href="#Get_In_Touch">Get in Touch</a>
        </li>
      </ul>
      <div className="flex">
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

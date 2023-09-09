import { Inter } from "next/font/google";
import { ThemeIcons } from "./themeIcon";

const inter = Inter({ subsets: ["latin"] });

export function Layout(Props: { children: React.ReactNode }) {
  const { children } = Props;
  return (
    <div
      className={`min-h-screen ${inter.className} bg-white dark:bg-black text-black dark:text-white transition-colors duration-500`}
    >
      <nav className="bg-teal-500 py-2 pl-8 pr-6 w-full text-white fixed">
        <ul className="flex items-center justify-between">
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
      </nav>
      <main className="pt-[70px] flex flex-col items-center justify-between">
        {children}
      </main>
      <footer></footer>
    </div>
  );
}

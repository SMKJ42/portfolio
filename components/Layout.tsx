import { ThemeIcons } from "./themeIcon";

export function Layout(Props: { children: React.ReactNode }) {
  const { children } = Props;
  return (
    <main>
      <nav className="bg-teal-500 p-6 w-full text-white">
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
      {children}
      <footer></footer>
    </main>
  );
}

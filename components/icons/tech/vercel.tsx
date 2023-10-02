import { AppContext } from "@/pages/_app";
import { useContext } from "react";

export function Vercel() {
    const { state, dispatch } = useContext(AppContext);

    const { theme } = state;
    return (
        <>
            <svg
                className="flex justify-center w-full"
                width="64px"
                height="64px"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.49998 1L6.92321 2.00307L1.17498 12L0.599976 13H1.7535H13.2464H14.4L13.825 12L8.07674 2.00307L7.49998 1ZM7.49998 3.00613L2.3285 12H12.6714L7.49998 3.00613Z"
                    fill={theme === "dark" ? "#fff" : "#000"}
                ></path>
            </svg>
        </>
    );
}

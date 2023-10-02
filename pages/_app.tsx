import { AppStore } from "@/lib/AppReducer";
import "@/styles/globals.css";
import { api } from "@/utils/api";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, createContext } from "react";

import * as React from "react";
import * as ReactDom from "react-dom";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export const AppContext = createContext<any>(null);

function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page) => page);

    return (
        <AppContext.Provider value={AppStore()}>
            {getLayout(<Component {...pageProps} />)}{" "}
        </AppContext.Provider>
    );
}

export default api.withTRPC(App);

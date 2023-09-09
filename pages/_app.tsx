import { AppStore } from "@/lib/AppReducer";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, createContext } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const AppContext = createContext<any>(null);

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <AppContext.Provider value={AppStore()}>
      {getLayout(<Component {...pageProps} />)}
    </AppContext.Provider>
  );
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GlobalLayout from "@/components/global-layout";
import { ReactNode } from "react";
import { NextPage } from "next";
type NextPageWidthLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageWidthLayout;
}) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}

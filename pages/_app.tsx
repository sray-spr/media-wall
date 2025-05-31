//Imports

//Layout
import Layout from "@/components/Layout";

//Styles
import "@/styles/globals.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // console.log(pageProps);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

import "@/styles/globals.css";
import App from "next/app";

import SpacewebProvider from "@sprinklrjs/spaceweb/spacewebProvider";
import light from "@sprinklrjs/spaceweb-themes/hyperspace/light";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <SpacewebProvider direction="ltr" theme={light}>
        <Component {...pageProps} />
      </SpacewebProvider>
    );
  }
}

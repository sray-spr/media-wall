//Imports

//Styles
import "@/styles/globals.css";

import SpacewebProvider from "@sprinklrjs/spaceweb/spacewebProvider";
import light from "@sprinklrjs/spaceweb-themes/hyperspace/light";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SpacewebProvider direction="ltr" theme={light}>
      <Component {...pageProps} />
    </SpacewebProvider>
  );
};

export default App;

import "@/styles/globals.css";
import App from "next/app";
import { ApolloProvider } from "@apollo/client";
import SpacewebProvider from "@sprinklrjs/spaceweb/spacewebProvider";
import light from "@sprinklrjs/spaceweb-themes/hyperspace/light";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "/api/graphql",
    cache: new InMemoryCache(),
  });
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const client = createApolloClient();
    return (
      <SpacewebProvider direction="ltr" theme={light}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </SpacewebProvider>
    );
  }
}

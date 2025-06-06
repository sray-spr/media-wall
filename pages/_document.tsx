import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import {
  StyleProvider,
  getStylesheets,
  isServer,
} from "@sprinklrjs/spaceweb/styleEngine";
import { Sheet } from "@sprinklrjs/spaceweb";

type Props = { stylesheets?: Sheet[] };

export default class MyDocument extends Document<Props> {
  static async getInitialProps(
    props: DocumentContext
  ): Promise<DocumentInitialProps & { stylesheets?: Sheet[] }> {
    const page = props.renderPage((App) => (pageProps: any) => (
      <StyleProvider debug>
        <App {...pageProps} />
      </StyleProvider>
    )) as Promise<DocumentInitialProps>;

    const initialProps = await Document.getInitialProps(props);

    if (isServer)
      return {
        ...initialProps,
        ...page,
        stylesheets: getStylesheets(),
      };

    return { ...initialProps, ...page, stylesheets: [] };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Upload resolved spaceweb.css to cdn. This has to be added before spaceweb_hydrate styles(styletron generated styles) */}
          {/* <link
            href="cdn.com/spaceweb-[hash].css"
            type="text/css"
            rel="stylesheet"
          /> */}
          {/* <link
            href="_next/static/styles/tailwind-media.css"
            type="text/css"
            rel="stylesheet"
            crossOrigin="anonymous"
          /> */}
          {(this.props.stylesheets || []).map((sheet, i) => (
            <style
              className="_spaceweb_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs["data-hydrate"]}
              key={i} //eslint-disable-line react/no-array-index-key
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

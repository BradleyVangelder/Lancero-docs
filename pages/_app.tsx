import "nextra-theme-docs/style.css";

import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { DefaultSeo } from "next-seo";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

/**
 * Main app component
 *
 * @param props Props
 * @param props.Component App component
 * @param props.pageProps
 */
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lancero Documentation</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          key={"viewport"}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

/**
 * Main app root component that houses all components
 *
 * @param props Default nextjs props
 */
export default function WithProviders(props: AppProps) {
  return (
    <>
      <DefaultSeo
        defaultTitle={"Lancero"}
        title={"Lancero"}
        description={"The easiest way to validate your startup idea"}
        twitter={{
          cardType: "summary_large_image",
          handle: "@joinlancero",
          site: "@joinlancero",
        }}
        openGraph={{
          title: "Lancero",
          description: "The easiest way to validate your startup idea",
          images: [
            { url: "https://cdn.lancero.app/assets/card.png", alt: "Lancero" },
          ],
        }}
        additionalMetaTags={[
          { property: "title", content: "Lancero" },
          {
            property: "keywords",
            content: "Lancero,startup,prelaunch,marketing,saas",
          },
        ]}
      />
      <App {...props} />
    </>
  );
}

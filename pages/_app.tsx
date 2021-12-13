import 'nextra-theme-docs/style.css';

import React from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';

import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

/**
 * Main app component
 *
 * @param props Props
 * @param props.Component App component
 * @param props.pageProps
 */
function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" key={'viewport'} />

        {/* Start Twitter */}
        <meta name="twitter:card" content="summary_large_image" key={'twitter:card'} />
        <meta name="twitter:site" content="@joinlancero" key={'twitter:site'} />
        <meta name="twitter:title" content="Lancero" key={'twitter:title'} />
        <meta name="twitter:description" content="Exclusivity as a Service" key={'twitter:description'} />
        <meta name="twitter:image" content="https://www.lancero.app/branding/card.png" key={'twitter:image'} />
        <meta name="twitter:image:alt" content="Exclusivity as a Service" key={'twitter:image:alt'} />
        {/* End Twitter */}

        {/* Start Open Graph */}
        <meta property="og:type" content="website" key={'og:type'} />
        <meta property="og:title" content="Lancero" key={'og:title'} />
        <meta property="og:description" content="Exclusivity as a Service" key={'og:description'} />
        <meta property="og:image" content="https://www.lancero.app/branding/card.png" key={'og:image'} />
        <meta property="og:image:alt" content="Exclusivity as a Service" key={'og:image:alt'} />
        {/* End Open Graph */}
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
  return <App {...props} />;
}

import React, { Fragment } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

import "../css/tailwind.css";
import Head from "next/head";

// bring in components
import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";

const meta = {
  title: "Andre de Vries",
  twitterCard: "",
  keywords: [
    "tableau",
    "alteryx",
    "aws",
    "cloud",
    "blog",
    "data analytics",
    "data visualization",
  ],
  description:
    "My writings about data, analytics, web development & the cloud.",
};

function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
      console.log(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <div className="antialiased">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta content={meta.description} name="description" />
        <meta content={meta.keywords.join(", ")} name="keywords" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Andre de Vries" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <title>{meta.title}</title>
      </Head>
      <Section>
        <Header />
      </Section>
      <Section>
        <Fragment>
          <Component {...pageProps} />
        </Fragment>
      </Section>
      <Section>
        <Footer />
      </Section>
    </div>
  );
}
export default App;

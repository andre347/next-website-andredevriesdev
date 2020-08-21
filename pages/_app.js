import "../css/tailwind.css";
import Head from "next/head";

// bring in components
import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";

function App({ Component, pageProps }) {
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
      </Head>
      <Section>
        <Header />
      </Section>
      <Section>
        <Component {...pageProps} />
      </Section>
      <Section>
        <Footer />
      </Section>
    </div>
  );
}
export default App;

import React from "react";
import Head from "next/head";
import Layout from "./Layout";
import Introduction from "./Introduction";

const twitterImage =
  "https://res.cloudinary.com/dmim37dbf/image/upload/v1600869014/YouTubeBanner/YouTube_Banner.png";

function ProfileHeaderPage({ children }) {
  return (
    <Layout>
      <Head>
        <meta name="twitter:image" content={twitterImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@andre347_" />
        <meta name="twitter:title" content={"Andre de Vries"} />
        <meta property="og:image" content={twitterImage} key="ogimage" />
      </Head>
      <Introduction />
      {children}
    </Layout>
  );
}

export default ProfileHeaderPage;

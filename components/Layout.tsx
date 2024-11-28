import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover">
    <Head>
      <title>{title} | Perfectum AI</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="" />
      <meta property="og:title" content={`${title} | Perfectum AI`} />
      <meta property="og:description" content="" />
      <meta property="og:url" content="https://perfectum.ai" />
      <meta property="og:type" content="website" />
    </Head>

    {children}
  </div>
);

export default Layout;

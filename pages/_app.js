import React from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout ? Component.layout : React.Fragment;
  return (<Layout><Component {...pageProps} /></Layout>)
}

export default MyApp

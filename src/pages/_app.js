import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import "@/styles/globals.css";
import Layout from "@/components/ui/Layout";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
      <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Rick Morty Api" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PetShop" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        

        <link
          rel="shortcut icon"
          href="/images/logo.png"
          type="image/png"
          sizes="360x360"
        />
        <meta name="author" content="Felipe Barbosa Brito de Andrade" />
        <meta name="description" content="site feito para fins estudantis" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

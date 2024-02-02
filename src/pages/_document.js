import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link
          rel="shortcut icon"
          href="/images/logo.png"
          type="image/png"
          sizes="360x360"
        />
        <meta name="author" content="Felipe Barbosa Brito de Andrade" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

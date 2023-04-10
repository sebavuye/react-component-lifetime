import { Head, Html, Main, NextScript } from "next/document";

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body className="h-screen bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

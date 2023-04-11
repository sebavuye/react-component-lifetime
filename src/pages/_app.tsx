import "@/styles/globals.css";
import "highlight.js/styles/atom-one-dark.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

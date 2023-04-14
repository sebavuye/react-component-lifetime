import "@/styles/globals.css";
import "highlight.js/styles/an-old-hope.css";
import "react-tooltip/dist/react-tooltip.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

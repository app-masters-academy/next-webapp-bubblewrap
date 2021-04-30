import { AppProps } from "next/dist/next-server/lib/router/router";
import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  // PWA requires a way to redirect http requests to https
  useEffect(() => {
    if (
      process.env.NODE_ENV === "production" &&
      window.location.host.indexOf("localhost") < 0
    ) {
      const httpTokens = /^http:\/\/(.*)$/.exec(window.location.href);
      if (httpTokens) {
        window.location.replace("https://" + httpTokens[1]);
      }
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { pageview } from "../utils/gtag";
import { useEffect } from "react";
import { Montserrat, Nunito_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  style: ["italic", "normal"],
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const nunitoSans = Nunito_Sans({
  style: ["italic", "normal"],
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  variable: "--font-nunito-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Google Analytics - Page View
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        className={`${montserrat.variable} ${nunitoSans.variable} font-nunitoSans`}
      >
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 2600,
            className:
              "rounded-xl border-2 border-black bg-themes-txt_primary px-4 py-3 text-sm font-semibold text-themes-bg_primary shadow-3d",
            success: {
              className:
                "rounded-xl border-2 border-black bg-themes-txt_primary px-4 py-3 text-sm font-semibold text-themes-bg_primary shadow-3d",
            },
            error: {
              className:
                "rounded-xl border-2 border-black bg-red-500 px-4 py-3 text-sm font-semibold text-white shadow-3d",
            },
          }}
        />
        <Component {...pageProps} />
      </main>
    </>
  );
}

import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import configuration from "../config";
import { GA_TRACKING_ID } from "../utils/gtag";

export default function Document() {
  return (
    <Html>
      <Head>
        {configuration.isProduction && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
									window.dataLayer = window.dataLayer || [];
									function gtag(){dataLayer.push(arguments);}
									gtag('js', new Date());
									gtag('config', '${GA_TRACKING_ID}', {
									page_path: window.location.pathname,
									});
								`,
              }}
            />
          </>
        )}
      </Head>
      <body className="bg-primary text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

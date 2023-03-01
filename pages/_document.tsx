import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { GA_TRACKING_ID } from "../utils/gtag";

const metaDescription =
  "Full-stack dev with a passion for delivering value & helping others thrive. As a 3rd-year Electronics & Communication Engineering student at SRMIST, I offer top-notch full-stack web dev services with a focus on consistency, discipline, grit & hard work. Codelance Devs, my web design co., helps SMEs establish a web presence. I aim to be a knowledgeable software dev & assist startups & enterprises. Passionate about tech education, open-source, productivity & building openly. Improving my skills & sharing my expertise in full-stack dev.";
const metaImage = "/thumbnail.png";
const metaWebsite = `https://kunalkeshan.dev`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Kunal Keshan" />
        <meta name="description" content={metaDescription} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kunal Keshan" />
        <meta property="og:url" content={metaWebsite} />
        <meta property="og:title" content="Kunal Keshan" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={metaWebsite} />
        <meta property="twitter:title" content="Kunal Keshan" />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content={metaImage} />
        <meta name="robots" content="all" />
        <Script
          async
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
									window.dataLayer = window.dataLayer || [];
									function gtag(){dataLayer.push(arguments);}
									gtag('js', new Date());
									gtag('config', '${GA_TRACKING_ID}', {
									page_path: window.location.pathname,
									});
								`}
        </Script>
      </Head>
      <body className="relative bg-[#FAF9F6] font-nunitoSans text-themes-txt_primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

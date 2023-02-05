import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { isProduction } from "../config";
import { GA_TRACKING_ID } from "../utils/gtag";

export default function Document() {
  const metaDescription =
    "Full-stack dev with a passion for delivering value & helping others thrive. As a 3rd-year Electronics & Communication Engineering student at SRMIST, I offer top-notch full-stack web dev services with a focus on consistency, discipline, grit & hard work. Codelance Devs, my web design co., helps SMEs establish a web presence. I aim to be a knowledgeable software dev & assist startups & enterprises. Passionate about tech education, open-source, productivity & building openly. Improving my skills & sharing my expertise in full-stack dev.";
  const metaImage = "/thumbnail.png";
  const metaWebsite = `https://kunalkeshan.dev`;

  return (
    <Html className="" lang="en">
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Kunal Keshan" />
        <meta name="description" content={metaDescription} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
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
        {isProduction && (
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
      <body className="font-['Nunito Sans'] relative bg-[#FAF9F6] text-themes-txt_primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

/**
 * Index Page
 */

// Dependencies
import Head from "next/head";
import About from "../components/landing/About";
import Blog from "../components/landing/Blog";
import Experience from "../components/landing/Experience";
import Intro from "../components/landing/Intro";
import Portfolio from "../components/landing/Portfolio";
import Services from "../components/landing/Services";
import Testimonials from "../components/landing/Testimonials";
import PublicLayout from "../layouts/PublicLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kunal Keshan</title>
        <meta name="title" content="Kunal Keshan" />
      </Head>
      <PublicLayout>
        <Intro />
        <Services />
        <About />
        <Portfolio />
        <Experience />
        <Testimonials />
        <Blog />
      </PublicLayout>
    </>
  );
}

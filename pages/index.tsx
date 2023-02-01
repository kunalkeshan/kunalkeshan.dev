/**
 * Index Page
 */

// Dependencies
import Head from "next/head";
import Intro from "../components/landing/Intro";
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
      </PublicLayout>
    </>
  );
}

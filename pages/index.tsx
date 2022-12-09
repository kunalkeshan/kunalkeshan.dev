import Head from "next/head";
import Lottie from "react-lottie-player";
import WorkInProgressAnimationData from "../assets/lottie/work-in-progress.json";
import socials from "../data/socials";

import SocialLinks from "../components/reusable/SocialLinks";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col gap-8 rounded-lg bg-primary p-4">
      <Head>
        <title>Kunal Keshan</title>
        <meta name="title" content="Kunal Keshan" />
        <meta
          name="description"
          content="🚀 Building CodelanceDevs | 💻 Full-Stack Developer. ✍️ Writer. 💡 Creator | ⚡ Technical and Team Lead at IEEE SRM & Think-Digital | 👩‍💻 Technical Support at Rentyaar |"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="container mx-auto">
        <h1 className="text-3xl">Kunal Keshan</h1>
      </nav>
      <div className="container mx-auto flex flex-1">
        <div className="flex h-full flex-1 flex-col justify-center gap-4 md:flex-[0.6]">
          <p className="text-5xl">
            My <span className="text-main">Portfolio</span> is a work in
            progress.
          </p>
          <p className="max-w-xl text-2xl">
            Interested in the <span className="text-main">outcome</span>? Give
            me your email and I&apos;ll notify you when it&apos;s done.
          </p>
          <form className="flex w-full max-w-xl flex-col gap-2">
            <input
              type="text"
              placeholder="enter your first name"
              className="w-full rounded p-2 text-black"
              required
            />
            <input
              type="email"
              placeholder="enter your email"
              className="w-full rounded p-2 text-black"
              required
            />
            <button
              type="submit"
              className="mt-2 rounded bg-main p-2 text-xs uppercase transition-all hover:-translate-y-1 hover:shadow-[0_2px_0_0_rgba(255,255,255,1)]"
            >
              Get Notified
            </button>
          </form>
        </div>
        <div className="hidden h-full items-center justify-center md:flex md:flex-[0.4]">
          <Lottie loop play animationData={WorkInProgressAnimationData} />
        </div>
      </div>
      <footer className="container mx-auto">
        &copy; {new Date().getFullYear()}. All Rights Reserved.
      </footer>
    </main>
  );
}

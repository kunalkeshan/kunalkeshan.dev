import Head from "next/head";
import Lottie from "react-lottie-player";
import WorkInProgressAnimationData from "../assets/lottie/work-in-progress.json";
import socials from "../data/socials";

export default function Home() {
  return (
    <div className="flex h-full w-full items-center p-4">
      <Head>
        <title>Kunal Keshan</title>
        <meta name="title" content="Kunal Keshan" />
        <meta
          name="description"
          content="🚀 Building CodelanceDevs | 💻 Full-Stack Developer. ✍️ Writer. 💡 Creator | ⚡ Technical and Team Lead at IEEE SRM & Think-Digital | 👩‍💻 Technical Support at Rentyaar |"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex-[0.6]">
        <div>
          <p className="text-5xl">Hey there 👋</p>
          <h1 className="text-7xl">I&apos;m Kunal Keshan;</h1>
          <p className="text-3xl">
            This is only a temporary holding page while I finish up my
            portfolio.
          </p>
        </div>
        <div></div>
        <ul></ul>
      </div>
      <div className="hidden h-full flex-[0.4] items-center justify-center sm:flex">
        <Lottie
          loop
          animationData={WorkInProgressAnimationData}
          play
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

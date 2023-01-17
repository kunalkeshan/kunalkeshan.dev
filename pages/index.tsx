import Head from "next/head";
import Lottie from "react-lottie-player";
import WorkInProgressAnimationData from "../assets/lottie/work-in-progress.json";
import {
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialGithub,
  SlSocialTwitter,
  SlSocialYoutube,
  SlGlobe,
} from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import socials from "../data/socials";

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
      <div className="container mx-auto flex flex-1 items-center">
        <div className="flex h-full flex-1 flex-col justify-center gap-4 md:flex-[0.6]">
          <p className="text-5xl">
            My <span className="text-main">Portfolio</span> is a work in
            progress.
          </p>
          <div>
            <p className="text-lg">Let&apos;s connect!</p>
            <ul className="mt-2 flex flex-wrap items-center gap-4 text-xl">
              {socials.map((social) => (
                <li
                  key={social.name}
                  title={social.name}
                  className="rounded-full bg-main p-2 opacity-80 transition-all hover:scale-105 hover:opacity-100"
                >
                  <a href={social.url} target="_blank" rel="noreferrer">
                    {social.name === "linkedin" ? (
                      <SlSocialLinkedin />
                    ) : social.name === "instagram" ? (
                      <SlSocialInstagram />
                    ) : social.name === "github" ? (
                      <SlSocialGithub />
                    ) : social.name === "twitter" ? (
                      <SlSocialTwitter />
                    ) : social.name === "youtube" ? (
                      <SlSocialYoutube />
                    ) : social.name === "blog" ? (
                      <SlGlobe />
                    ) : (
                      <CiMail />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
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

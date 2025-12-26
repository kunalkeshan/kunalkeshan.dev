import type { GetServerSideProps } from "next";
import PROJECTS from "../data/projects";
import TRIBUTES from "../data/tributes";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kunalkeshan.dev";

type SitemapUrl = {
  loc: string;
  lastmod?: string;
};

const buildUrl = (path: string) => `${SITE_URL}${path}`;

const buildSitemap = (urls: SitemapUrl[]) => {
  const urlEntries = urls
    .map(({ loc, lastmod }) => {
      const lastmodEntry = lastmod ? `<lastmod>${lastmod}</lastmod>` : "";
      return `<url><loc>${loc}</loc>${lastmodEntry}</url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

const getStaticPages = (): SitemapUrl[] => {
  const now = new Date().toISOString();

  return [
    buildUrl("/"),
    buildUrl("/about"),
    buildUrl("/projects"),
    buildUrl("/contact"),
    buildUrl("/resume"),
    buildUrl("/certifications"),
    buildUrl("/school"),
    buildUrl("/links"),
    buildUrl("/feed"),
    buildUrl("/events"),
    buildUrl("/tributes"),
    buildUrl("/privacy-policy"),
    buildUrl("/terms-and-conditions"),
    buildUrl("/refund-policy"),
  ].map((loc) => ({
    loc,
    lastmod: now,
  }));
};

const getProjectPages = (): SitemapUrl[] => {
  const now = new Date().toISOString();

  return PROJECTS.filter((project) => project.slug).map((project) => ({
    loc: buildUrl(`/projects/${project.slug}`),
    lastmod: now,
  }));
};

const getTributePages = (): SitemapUrl[] => {
  const now = new Date().toISOString();

  return TRIBUTES.filter((tribute) => tribute.slug).map((tribute) => ({
    loc: buildUrl(`/tributes/${tribute.slug}`),
    lastmod: now,
  }));
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = buildSitemap([
    ...getStaticPages(),
    ...getProjectPages(),
    ...getTributePages(),
  ]);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

const SiteMap = () => null;

export default SiteMap;

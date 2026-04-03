/** Съвпада с metadataBase в app/layout.jsx; override с NEXT_PUBLIC_SITE_URL при deploy. */
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://camsecure.store";

const routes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  {
    path: "/video-nablyudenie-varna",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/video-nablyudenie-dobrich",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/video-nablyudenie-obzor-nesebar",
    changeFrequency: "monthly",
    priority: 0.85,
  },
];

export default function sitemap() {
  const now = new Date();
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}

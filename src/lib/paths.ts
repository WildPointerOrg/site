/** Resolve a site path with the configured Astro base (e.g. /site/). */
export function withBase(path: string) {
  const base = import.meta.env.BASE_URL;
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${normalized}`;
}

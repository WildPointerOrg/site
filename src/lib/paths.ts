/** Resolve a site path with the configured Astro base (e.g. /site/). */
export function withBase(path: string) {
  const base = import.meta.env.BASE_URL;
  const baseWithSlash = base.endsWith('/') ? base : `${base}/`;
  const normalized = path.replace(/^\//, '');
  return `${baseWithSlash}${normalized}`;
}

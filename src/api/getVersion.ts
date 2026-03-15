const CACHE_KEY = "github_release";
const CACHE_TTL = 10 * 60 * 1000; // 10 minutos em ms

export async function getVersionGitHub() {
  const cached = localStorage.getItem(CACHE_KEY);

  if (cached) {
    const { data, expiresAt } = JSON.parse(cached);
    if (Date.now() < expiresAt) return data;
  }

  const response = await fetch(
    "https://api.github.com/repos/0tarso/Bom-Mar-SC-APP/releases/latest",
    { headers: { Accept: "application/vnd.github+json" } }
  );

  const release = await response.json();

  const data = {
    versao: release.tag_name.replace("v", ""),
    notes: release.body,
    url: release.html_url,
    publishedAt: release.published_at,
  };

  localStorage.setItem(
    CACHE_KEY,
    JSON.stringify({ data, expiresAt: Date.now() + CACHE_TTL })
  );

  return data;
}
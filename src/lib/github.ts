interface GitHubRepoResponse {
  stargazers_count: number;
  name: string;
  full_name: string;
}

export async function getStargazersCount(
  owner: string,
  repo: string,
): Promise<number> {
  const url = `https://api.github.com/repos/${owner}/${repo}`;

  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };

  try {
    const response = await fetch(url, { headers });

    if (!response.ok) {
      if (response.status === 403) {
        console.warn(`GitHub API rate limit reached for ${owner}/${repo}.`);
      }
      throw new Error(
        `Failed to fetch GitHub repo: ${response.status} ${response.statusText}`,
      );
    }

    const data: GitHubRepoResponse = await response.json();
    return data.stargazers_count;
  } catch (error) {
    console.error(
      `Error fetching stargazers count for ${owner}/${repo}:`,
      error,
    );
    throw error;
  }
}

export function formatStarCount(count: number): string {
  if (count >= 1000) {
    const k = count / 1000;
    if (k % 1 === 0) {
      return `${k}k`;
    }
    return `${k.toFixed(1)}k`;
  }
  return count.toString();
}

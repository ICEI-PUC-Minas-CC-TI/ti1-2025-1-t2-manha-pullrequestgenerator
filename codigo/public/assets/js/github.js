async function getCommitsFromGitHub({
  owner,
  repo,
  baseBranch,
  headBranch,
  githubToken,
}) {
  const githubHeaders = {
    Authorization: `token ${githubToken}`,
    Accept: "application/vnd.github.v3+json",
  };

  const compareUrl = `https://api.github.com/repos/${owner}/${repo}/compare/${baseBranch}...${headBranch}`;

  try {
    const compareResponse = await fetch(compareUrl, {
      headers: githubHeaders,
    });
    const compareData = await compareResponse.json();
    const { commits } = compareData;

    const result = [];

    for (const commit of commits) {
      const commitSha = commit.sha;
      const commitMessage = commit.commit.message;
      const commitUrl = `https://api.github.com/repos/${owner}/${repo}/commits/${commitSha}`;

      const commitResponse = await fetch(commitUrl, {
        headers: githubHeaders,
      });
      const commitData = await commitResponse.json();

      const commitFiles = commitData.files.map((file) => ({
        filename: file.filename,
        status: file.status,
        patch: file.patch || "",
      }));

      result.push({
        sha: commitSha,
        message: commitMessage,
        files: commitFiles,
      });
    }

    return result;
  } catch (error) {
    console.error("❌ Failed to fetch commits with changes:", error.message);
    return [];
  }
}

function newGithub() {
  return {
    getCommitsFromGitHub,
  };
}

window.newGithub = newGithub;

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

async function createPullRequest({
  owner,
  repo,
  headBranch,
  baseBranch,
  title,
  body,
  githubToken,
}) {
  const url = `https://api.github.com/repos/${owner}/${repo}/pulls`;

  const headers = {
    Authorization: `token ${githubToken}`,
    Accept: "application/vnd.github.v3+json",
    "Content-Type": "application/json",
  };

  const data = {
    title: title,
    head: headBranch,
    base: baseBranch,
    body: body,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(
        `Erro ao criar o Pull Request: ${response.status} - ${response.statusText}`
      );
      console.error("Detalhes do erro:", errorData);
      return null;
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erro ao criar o Pull Request:", error);
    return null;
  }
}



function newGithub() {
  return {
    getCommitsFromGitHub,
    createPullRequest,
  };
}

window.newGithub = newGithub;

function getJobsQueue() {
  return window.useState().getState("queue");
}

function addJobToQueue(jobData) {
  window.useState().appendItem("queue", jobData);
}

async function processNextJob() {
  const jobs = getJobsQueue();
  if (jobs.length === 0) {
    console.log("Fila vazia");
    return null;
  }

  const currentJob = jobs[jobs.length - 1];
  console.log("Processando:", currentJob);

  try {
    const commits = await getCommitsFromGitHub({
      owner: currentJob.owner,
      repo: currentJob.repo,
      baseBranch: currentJob.baseBranch,
      headBranch: currentJob.headBranch,
      githubToken: currentJob.githubToken,
    });

    console.log("Processo completo. Commits:", commits);

    const updatedJobs = jobs.slice(0, -1); //  remove the last one
     window.useState().setState("queue", updatedJobs);

    return commits;
  } catch (error) {
    console.error("Processo falhou:", error);
    throw error;
  }
}

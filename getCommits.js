//  getCommits
function getJobsQueue() {
  const jobs = localStorage.getItem('queue');
  return jobs ? JSON.parse(jobs) : [];
}

// adicionar novo job à fila
export function addJobToQueue(jobData) {
  const jobs = getJobsQueue();
  jobs.push(jobData);
  saveJobsQueue(jobs);
}

// processar o próximo
export async function processNextJob() {
  const jobs = getJobsQueue();
  if (jobs.length === 0) {
    console.log("Fila vazia");
    return null;
  }

  // Pega o último job da fila
  const currentJob = jobs[jobs.length - 1];
  console.log("Processando:", currentJob);

  try {
    // Chama a função getCommitsFromGitHub com o job
    const commits = await getCommitsFromGitHub({
      owner: currentJob.owner,
      repo: currentJob.repo,
      baseBranch: currentJob.baseBranch,
      headBranch: currentJob.headBranch,
      githubToken: currentJob.githubToken,
    });

    console.log("Processo completo. Commits:", commits);

    const updatedJobs = jobs.slice(0, -1); // Tira o último
    saveJobsQueue(updatedJobs);

    return commits;
  } catch (error) {
    console.error("Processo falhou:", error);
    throw error;
  }
}
document.addEventListener("DOMContentLoaded", function() {
  const username = 'abhisheksingh1180';  // Replace with your GitHub username
  const githubContributionImage = document.getElementById('github-contribution-image');

  // Fetching GitHub contribution data using the API
  const getGitHubContributions = async () => {
    const url = `https://github-contributions.vercel.app/api/contributions?username=${username}`;
    const response = await fetch(url);
    const data = await response.json();
    githubContributionImage.src = data.contribution_graph_url;
  };

  getGitHubContributions();
});

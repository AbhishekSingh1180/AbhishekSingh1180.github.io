// GitHub Contributions by Year using Chart.js

document.addEventListener("DOMContentLoaded", function() {
  // GitHub username
  const username = 'AbhishekSingh1180';  // Change this to your GitHub username

  // Fetch data from GitHub API
  fetch(`https://api.github.com/users/${username}/events/public`)
    .then(response => response.json())
    .then(data => {
      const contributionsByYear = {};

      // Parse event data to calculate contributions by year
      data.forEach(event => {
        const year = new Date(event.created_at).getFullYear();
        if (!contributionsByYear[year]) {
          contributionsByYear[year] = 0;
        }
        contributionsByYear[year] += 1;
      });

      // Prepare data for chart
      const years = Object.keys(contributionsByYear).sort();
      const contributions = years.map(year => contributionsByYear[year]);

      // Create chart
      const ctx = document.getElementById('githubContributionsChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: years,
          datasets: [{
            label: 'GitHub Contributions by Year',
            data: contributions,
            backgroundColor: 'rgba(0, 123, 255, 0.6)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    })
    .catch(error => {
      console.error('Error fetching GitHub contributions:', error);
    });
});

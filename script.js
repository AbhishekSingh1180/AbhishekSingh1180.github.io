document.addEventListener("DOMContentLoaded", function() {
  const username = 'AbhishekSingh1180';  // Replace with your GitHub username
  const calendarContainer = document.getElementById('contribution-calendar');

  const getGitHubContributions = async () => {
    const contributions = [];
    
    // Fetch user events from GitHub API (this gives us the activity of a user like commits, PRs, etc.)
    const url = `https://api.github.com/users/${username}/events/public`;
    const response = await fetch(url);
    const data = await response.json();

    // Process contributions data
    data.forEach(event => {
      const createdAt = new Date(event.created_at);
      const year = createdAt.getFullYear();
      const month = createdAt.getMonth();
      const day = createdAt.getDate();

      // Count contributions per day
      const date = `${year}-${month + 1}-${day}`;
      if (!contributions[date]) {
        contributions[date] = 0;
      }
      contributions[date]++;
    });

    // Populate the grid with contributions
    populateGrid(contributions);
  };

  const populateGrid = (contributions) => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    // Loop over the last 2 years
    for (let year = currentYear - 2; year <= currentYear; year++) {
      for (let month = 0; month < 12; month++) {
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get days in month
        for (let day = 1; day <= daysInMonth; day++) {
          const dateKey = `${year}-${month + 1}-${day}`;
          const contributionCount = contributions[dateKey] || 0;

          const dayDiv = document.createElement('div');
          dayDiv.classList.add('contribution-day');
          dayDiv.dataset.tooltip = `${dateKey}: ${contributionCount} contributions`;

          // Determine contribution level based on count
          if (contributionCount > 100) {
            dayDiv.classList.add('level-4');
          } else if (contributionCount > 50) {
            dayDiv.classList.add('level-3');
          } else if (contributionCount > 20) {
            dayDiv.classList.add('level-2');
          } else if (contributionCount > 0) {
            dayDiv.classList.add('level-1');
          }

          calendarContainer.appendChild(dayDiv);
        }
      }
    }
  };

  getGitHubContributions();
});

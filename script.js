// User's GitHub username
const username = 'AbhishekSingh1180'; // Replace with your GitHub username

// Function to fetch contribution data for a specific user from the public API (no token required)
async function fetchGitHubContributions() {
  try {
    const currentDate = new Date();
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(currentDate.getFullYear() - 2);

    // Fetch user events from GitHub (public)
    const response = await fetch(`https://api.github.com/users/${username}/events/public`);
    
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub data');
    }

    const events = await response.json();
    const contributionData = processContributionData(events, twoYearsAgo, currentDate);
    
    // Process and update the chart with the data
    updateContributionsChart(contributionData);
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
  }
}

// Process GitHub events to create monthly contribution data for the last 2 years
function processContributionData(events, twoYearsAgo, currentDate) {
  // Initialize an array to hold the contribution counts per month (for 2 years)
  const monthlyData = new Array(24).fill(0); // 2 years * 12 months = 24

  // Loop through the events and count commits per month (if within the last 2 years)
  events.forEach(event => {
    if (event.type === 'PushEvent' && event.created_at) {
      const eventDate = new Date(event.created_at);

      // Only include events from the last 2 years
      if (eventDate >= twoYearsAgo && eventDate <= currentDate) {
        const monthsAgo = Math.floor((currentDate - eventDate) / (1000 * 60 * 60 * 24 * 30)); // Approximate month difference
        if (monthsAgo >= 0 && monthsAgo < 24) {
          monthlyData[monthsAgo]++;
        }
      }
    }
  });

  return monthlyData;
}

// Update the chart with the fetched contribution data for the last 2 years
function updateContributionsChart(contributionData) {
  // Generate the labels for the chart (for the last 2 years, showing months in reverse order)
  const labels = [];
  const currentDate = new Date();
  for (let i = 0; i < 24; i++) {
    const labelDate = new Date();
    labelDate.setMonth(currentDate.getMonth() - i);
    labels.push(labelDate.toLocaleString('default', { month: 'short', year: 'numeric' }));
  }

  const ctx = document.getElementById('githubContributionsChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels.reverse(), // Reverse to show latest first
      datasets: [{
        label: `${username} GitHub Contributions`,
        data: contributionData.reverse(), // Reverse to show latest first
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Initialize the process by fetching data for the last 2 years
fetchGitHubContributions();

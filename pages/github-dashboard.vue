<template>
  <div class="github-dashboard">
    <!-- Home Button -->
    <nuxt-link to="/" class="home-button">
      <img src="/assets/icons8-home.svg" alt="Home"/>
    </nuxt-link>
    
    <div class="header">
      <div class="header-content">
        <h1>GitHub Dashboard</h1>
      </div>
    </div>
    
    <!-- Loading State -->
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error">
      There was an error loading your data: {{ error }}
    </div>
    
    <!-- Main Content -->
    <div v-else class="dashboard-content">
      <!-- User Info -->
      <div class="user-info">
        <h2>Welcome, {{ user.name }}!</h2>
        <p>Username: {{ user.login }}</p>
        <p>Email: {{ user.email || 'Not provided' }}</p>
        <p>Bio: {{ user.bio || 'No bio available' }}</p>
        <p>Public Repos: {{ user.public_repos }}</p>
        <p>Followers: {{ user.followers }}</p>
        <p>Following: {{ user.following }}</p>
        <img :src="user.avatar_url" alt="User Avatar" class="avatar" />
      </div>
      
      <!-- Contributions -->
      <div class="contributions" v-show="true">
        <h2>Your Contributions to {{ selectedRepo }}
          <!-- Dropdown List -->
          <select v-model="selectedRepo" @change="fetchContributions" class="repo-dropdown">
            <option value="exosystems_nuxt">exosystems_nuxt <p> <i class="arrow down"></i></p></option>
            <option value="Exonomy">Exonomy <p> <i class="arrow down"></i></p></option>
            <option value="ExoTheme">ExoTheme <p><i class="arrow down"></i></p></option>
          </select>
        </h2>
        <ul>
          <li v-for="contribution in contributions" :key="contribution.sha">
            <p><strong>Branch:</strong> {{ contribution.branch }}</p>
            <p><strong>Commit Message:</strong> {{ contribution.commit.message }}</p>
            <p><strong>Date:</strong> {{ new Date(contribution.commit.committer.date).toLocaleDateString() }}</p>
          </li>
        </ul>
        <div v-if="contributions.length === 0">
          <p>No contributions found for this repository.</p>
        </div>
      </div>
      
      <!-- Assigned Issues -->
      <div v-if="assignedIssues.length > 0" class="assigned-issues">
        <h2>Assigned Issues</h2>
        <ul>
          <li v-for="issue in assignedIssues" :key="issue.id">
            <a :href="issue.html_url" target="_blank">{{ issue.title }}</a>
            <p>Status: {{ issue.state }}</p>
          </li>
        </ul>
      </div>
      <div v-else-if="!loading && !error && !assignedIssues.length">
        <p>No assigned issues found.</p>
      </div>
    </div>
  </div>
</template>



<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';

// State variables
const user = ref<any>(null);
const contributions = ref<any[]>([]);
const assignedIssues = ref<any[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);
const selectedRepo = ref('exosystems_nuxt');

// GitHub repository details
const repoOwner = 'ExonomyOrg'; // Replace with the repository owner

// Watch for changes to selectedRepo and fetch contributions accordingly
watch(selectedRepo, () => {
  if (user.value) {
    fetchContributions();
  }
});

// Function to fetch user data from GitHub
const fetchUserData = async () => {
  const token = localStorage.getItem('github_token');

  if (!token) {
    error.value = 'No token found. Please log in again.';
    loading.value = false;
    return;
  }

  try {
    // Fetch user data
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    user.value = userResponse.data;
    
    // Fetch contributions for the selected repository
    await fetchContributions();
    
    // Fetch assigned issues
    await fetchAssignedIssues(token, user.value.login);
  } catch (err) {
    error.value = 'Failed to fetch user data.';
  } finally {
    loading.value = false;
  }
};

// Function to fetch all branches of the repository
const fetchBranches = async (token: string) => {
  try {
    const branchesResponse = await axios.get(`https://api.github.com/repos/${repoOwner}/${selectedRepo.value}/branches`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return branchesResponse.data;
  } catch (err) {
    console.error('Failed to fetch branches.', err);
    return [];
  }
};

// Function to fetch commits for all branches
// Function to fetch commits for all branches
const fetchCommitsForAllBranches = async (token: string, branches: any[]) => {
  let allCommits: any[] = [];

  for (const branch of branches) {
    try {
      const commitsResponse = await axios.get(`https://api.github.com/repos/${repoOwner}/${selectedRepo.value}/commits?sha=${branch.name}&author=${user.value.login}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Add the branch name to each commit object
      const commitsWithBranch = commitsResponse.data.map((commit: any) => ({
        ...commit,
        branch: branch.name, // Attach branch name to the commit object
      }));

      allCommits = allCommits.concat(commitsWithBranch);
    } catch (err) {
      console.error(`Failed to fetch commits for branch ${branch.name}`, err);
    }
  }

  return allCommits;
};


// Function to fetch contributions for the specific repository
const fetchContributions = async () => {
  const token = localStorage.getItem('github_token');

  if (!token) {
    error.value = 'No token found. Please log in again.';
    return;
  }

  try {
    // Fetch all branches
    const branches = await fetchBranches(token);

    // Fetch commits for all branches
    contributions.value = await fetchCommitsForAllBranches(token, branches);
  } catch (err) {
    error.value = 'Failed to fetch contributions.';
    console.error('Error fetching contributions:', err); // Log error details
  }
};

// Function to fetch issues assigned to the user
const fetchAssignedIssues = async (token: string, username: string) => {
  try {
    const response = await axios.get(`https://api.github.com/search/issues?q=assignee:${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    assignedIssues.value = response.data.items; // Returns the list of issues
  } catch (err) {
    error.value = 'Failed to fetch assigned issues.';
    console.error('Error fetching assigned issues:', err); // Log error details
  }
};

// Fetch user data when component is mounted
onMounted(() => {
  fetchUserData();
});
</script>
<style scoped>
.github-dashboard {
  padding: 2rem;
  max-width: 100%;
  margin: 0;
  position: relative;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.header-content {
  display: flex;
  align-items: center;
}

.home-button {
  position: absolute;
  top: 1rem;
  right: 0;
  padding:  0.5rem ;
  margin-right: 20px;
  background-color: #007bff;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
}

.home-button:hover {
  background-color: #0056b3;
}

.header-content h1 {
  margin-right: 1rem; /* Space between header text and dropdown */
  font-size: 1.5rem; /* Adjust font size as needed */
  font-family: 'Arial', sans-serif; /* Adjust font family as needed */
  font-weight: bold;
}

.repo-dropdown {
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #494646; /* Updated background color */
  color: #7bcbed; /* Updated text color */
  font-size: 1.2rem; /* Adjust font size as needed */
  cursor: pointer; /* Change cursor to pointer */
  appearance: none; /* Remove default styling */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add subtle shadow */
  font-weight: bold;
  font-family: 'Arial', sans-serif; /* Adjust font family as needed */
  transition: background-color 0.3s, box-shadow 0.3s; /* Smooth transitions */
}

.repo-dropdown:hover {
  background-color: #3e3e3e; /* Slightly lighter background on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
}

.repo-dropdown option {
  padding: 0.5rem; /* Add padding to options */
  background-color: #494646; /* Ensure options match dropdown background */
  color: #7bcbed; /* Text color for options */
  font-family: 'Arial', sans-serif; /* Consistent font family */
  font-weight: bold;
}

.repo-dropdown option:hover {
  background-color: #3e3e3e; /* Change background color on option hover */
}

.loading,
.error {
  text-align: center;
  font-size: 1.2rem;
}

.dashboard-content {
  display: flex;
  gap: 2rem;
}

.user-info {
  flex: 2;
  max-height: 650px;
  background-color: #2b06af;
  overflow: auto;
  padding: 1rem;
  border-radius: 8px;
  position: relative;
}

.user-info::-webkit-scrollbar {
  display: none;
}

.user-info {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.user-info .avatar {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-top: 1rem;
}

.contributions, .assigned-issues {
  flex: 3;
  max-height: 650px;
  background-color: #494646;
  overflow: auto;
  padding: 1rem;
  border-radius: 8px;
}

.contributions::-webkit-scrollbar,
.assigned-issues::-webkit-scrollbar {
  display: none;
}

.contributions,
.assigned-issues {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.contributions ul, .assigned-issues ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contributions li, .assigned-issues li {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-bottom: 1px solid #6c6c6c; /* Add a border between list items */
}

.contributions li p:first-child {
  color: #7bcbed; /* Highlight commit messages in yellow */
  margin: 0;
}

.contributions li p:last-child {
  color: #ffffff; /* Keep the date color the same */
  margin: 0;
}
/* Spinner Styles */
.spinner {
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: auto; /* Center the spinner */
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.home-button img {
  width: 30px; /* Adjust the size of the icon */
  height: 30px; /* Ensure the aspect ratio is maintained */
  transition: transform 0.3s ease, filter 0.3s ease; /* Add smooth transitions for hover */
}

.home-button:hover img {
  transform: scale(1.1); /* Slightly increase size on hover */
  filter: brightness(1.2); /* Brighten the icon on hover */
}
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
 
</style>

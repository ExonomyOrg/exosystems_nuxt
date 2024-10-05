import axios from 'axios';

// Verify the GitHub token and return user details
export async function verifyGithubToken(token: string) {
  const response = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // Return the user details
  return response.data;
}

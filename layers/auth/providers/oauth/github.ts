// layers/auth/providers/oauth/github.ts

import { type  User } from '~/layers/auth/composables/userType';

interface GitHubAuthData {
  login: string; // GitHub username
  email: string;
  id: number; // GitHub user ID
}

export function githubAdapter(authData: GitHubAuthData): User {
  return {
    username: authData.login,
    useremail: authData.email,
    userid: authData.id.toString(), // Ensure ID is a string
  };
}
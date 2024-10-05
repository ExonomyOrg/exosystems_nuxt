// layers/auth/providers/oauth/github.ts

import { type  User } from '~/layers/auth/composables/userType';
export function githubAdapter(authData: any): User {
  console.log("Github Adapter recieved:",authData);
  return {
    username: authData.username || '',
    useremail: authData.useremail|| '',
    userid: authData.userid || '', // Ensure ID is a string
  };
}
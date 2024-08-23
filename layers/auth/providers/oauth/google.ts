
// layers/auth/providers/oauth/google.ts

import {  type User } from '~/layers/auth/composables/userType';

interface GoogleAuthData {
  name: string;
  email: string;
  sub: string; // Google user ID
}

export function googleAdapter(authData: GoogleAuthData): User {
  return {
    username: authData.name,
    useremail: authData.email,
    userid: authData.sub,
  };
}

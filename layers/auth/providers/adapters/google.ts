import { type User } from '~/layers/auth/composables/userType';

interface GoogleAuthData {
  name: string;
  email: string;
  sub: string; // Google user ID
}

export function googleAdapter(authData: any): User {
  console.log('Google Adapter received data:', authData); // Debugging
  return {
    username: authData.username || ' ',
    useremail: authData.useremail || ' ',
    userid: authData.userid || ' ',
  };
}


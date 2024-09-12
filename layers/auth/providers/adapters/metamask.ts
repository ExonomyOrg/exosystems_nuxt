// layers/auth/providers/oauth/metamask.ts

import { type User } from '~/layers/auth/composables/userType';

interface MetaMaskAuthData {
  account: string; // Ethereum address
  // MetaMask doesn't typically provide a username or email
}

export function metamaskAdapter(authData: MetaMaskAuthData): User {
  return {
    username: authData.account || '', // Use Ethereum address as username
    useremail: '', // MetaMask doesn't provide email
    userid: authData.account || '', // Use Ethereum address as user ID
  };
}

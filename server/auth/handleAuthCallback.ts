import { googleAdapter } from '@/layers/auth/providers/oauth/google';
import { useDb } from '~/server/useDb';
import { githubAdapter } from '@/layers/auth/providers/oauth/github';
import { metamaskAdapter } from '@/layers/auth/providers/oauth/metamask';

export async function handleAuthCallback(authData: any, provider: string) {
  let user;
  
  switch (provider) {
    case 'google':
      user = googleAdapter(authData);
      break;
    case 'github':
      user = githubAdapter(authData);
      break;
    case 'metamask':
      user = metamaskAdapter(authData);
      break;
    default:
      throw new Error('Unsupported provider');
  }
  
  // Store the user data in the database
  await useDb(user.username, user.useremail, user.userid);
}

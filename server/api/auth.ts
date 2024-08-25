import { defineEventHandler, readBody } from 'h3';
import { initDB } from '~/server/database';
import { handleAuthCallback } from '~/server/auth/handleAuthCallback';
import { OAuth2Client } from 'google-auth-library';
import { verifyGithubToken } from '~/server/auth/githubAuth';
import { verifyMetaMaskToken } from '~/server/auth/metamaskAuth';

// Create an OAuth2 client with the Google client ID
const googleClient = new OAuth2Client('72780742121-4j4tl98s5g99fmmcneked3d1pdnn7p9l.apps.googleusercontent.com');

export default defineEventHandler(async (event) => {
  await initDB(); // Ensure DB is initialized
  const { credential, provider } = await readBody(event);

  try {
    let user;

    switch (provider) {
      case 'google':
        user = await handleGoogleAuth(credential);
        break;

      case 'github':
        user = await handleGithubAuth(credential);
        break;

      case 'metamask':
        user = await handleMetaMaskAuth(credential);
        break;

      default:
        throw new Error('Unsupported provider');
    }

    await handleAuthCallback(user, provider);
    return { status: 'success' };

  } catch (error) {
    console.error('Error during authentication:', error);
    return { status: 'error', message: 'Authentication failed' };
  }
});

// Function to handle Google authentication
async function handleGoogleAuth(idToken: string) {
  const ticket = await googleClient.verifyIdToken({
    idToken,
    audience: '72780742121-4j4tl98s5g99fmmcneked3d1pdnn7p9l.apps.googleusercontent.com',
  });
  const payload = ticket.getPayload();

  if (payload) {
    return {
      username: payload.name,
      useremail: payload.email,
      userid: payload.sub,
    };
  } else {
    throw new Error('Payload is missing from token');
  }
}

// Function to handle GitHub authentication
async function handleGithubAuth(token: string) {
  const user = await verifyGithubToken(token);
  return {
    username: user.login,
    useremail: user.email,
    userid: user.id.toString(),
  };
}

// Function to handle MetaMask authentication
async function handleMetaMaskAuth(token: string) {
  const user = await verifyMetaMaskToken(token);
  return {
    username: user.account,
    useremail: '', // MetaMask typically does not provide an email
    userid: user.account,
  };
}

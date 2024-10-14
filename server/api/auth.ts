import { defineEventHandler, readBody } from 'h3';
import { initDB } from '~/layers/storage/databases/sql/database';
import { handleAuthCallback } from '~/layers/auth/composables/handleAuthCallback';
import { OAuth2Client } from 'google-auth-library';
import { verifyGithubToken } from '~/layers/auth/providers/oauth/githubAuth';
import { verifyMetaMaskToken } from '~/layers/auth/providers/oauth/metamaskAuth';
// Create an OAuth2 client with the Google client ID
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export default defineEventHandler(async (event) => {
  await initDB(); // Ensure DB is initialized
  const { credential, provider, form_data } = await readBody(event);

  try {
    let user;

    switch (provider) {
      case 'google':
        user = await handleGoogleAuth(credential, form_data);
        break;

      case 'github':
        user = await handleGithubAuth(credential, form_data);
        break;

      case 'metamask':
        user = await handleMetaMaskAuth(credential, form_data);
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
async function handleGoogleAuth(idToken: string, form_data: any) {
  const ticket = await googleClient.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();

  if (payload) {
    return {
      username: payload.name,
      useremail: payload.email,
      userid: payload.sub,
      firstname: form_data.firstname,
      lastname: form_data.lastname,
      contactnumber: form_data.contactnumber
    };
  } else {
    throw new Error('Payload is missing from token');
  }
}

// Function to handle GitHub authentication
async function handleGithubAuth(token: string, form_data: any) {
  const user1 = await verifyGithubToken(token);
  const user = {
    username: user1.name || "not provided",
    useremail: user1.email || "not provided",
    userid: user1.id.toString() || "not provided",
    firstname: form_data.firstname,
    lastname: form_data.lastname,
    contactnumber: form_data.contactnumber
  };
  return user;
}

// Function to handle MetaMask authentication
async function handleMetaMaskAuth(token: string, form_data: any) {
  const user = await verifyMetaMaskToken(token);
  return {
    username: 'not provided',
    useremail: 'not provided', // MetaMask typically does not provide an email
    userid: user.account,
    firstname: form_data.firstname,
    lastname: form_data.lastname,
    contactnumber: form_data.contactnumber
  };
}

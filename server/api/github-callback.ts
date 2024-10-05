// server/api/github-callback.ts

import { defineEventHandler, readBody } from 'h3';
import axios from 'axios';
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { code } = body;

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  try {
    const response = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: clientId,
      client_secret: clientSecret,
      code: code,
    }, {
      headers: {
        'Accept': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error exchanging authorization code:', error);
    return { error: 'Failed to exchange authorization code' };
  }
});
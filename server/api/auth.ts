import { defineEventHandler, readBody } from 'h3';
import { handleAuthCallback } from '~/server/auth/handleAuthCallback';

export default defineEventHandler(async (event) => {
  const { credential, provider } = await readBody(event);
  await handleAuthCallback(credential, provider);
  return { status: 'success' };
});

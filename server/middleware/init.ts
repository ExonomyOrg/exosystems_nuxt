// server/middleware/init.ts
import { initDB } from '~/server/database';

// Initialize the database when the server starts
export default async () => {
  await initDB();
};
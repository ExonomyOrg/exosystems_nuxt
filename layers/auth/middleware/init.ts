// server/middleware/init.ts
import { initDB } from '~/layers/storage/databases/sql/database';

// Initialize the database when the server starts
export default async () => {
  await initDB();
};
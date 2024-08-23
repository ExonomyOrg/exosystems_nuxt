
import { getDB } from './database';

export const addUser = async (username: string, useremail: string, userid: string): Promise<void> => {
  const db = getDB();
  try {
    await db.run(`
      INSERT INTO users (username, useremail, userid)
      VALUES (?, ?, ?)
    `, [username, useremail, userid]);
  } catch (error) {
    console.error('Error adding user to database:', error);
    throw error;
  }
};

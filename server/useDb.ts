import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Open a database connection
const dbPromise = open({
  filename: './dev.db', // Update the path to your SQLite database
  driver: sqlite3.Database,
});

// Define the function to check and insert user information
export async function useDb(username: string, useremail: string, userid: string) {
  // Validate input
  if (!username || !useremail || !userid) {
    throw new Error('Invalid user data provided. Ensure all fields are filled.');
  }

  const db = await dbPromise;

  // Check if the user already exists
  const userExists = await db.get('SELECT COUNT(*) AS count FROM users WHERE userid = ?', [userid]);

  if (userExists.count === 0) {
    // Insert the user information if not exists
    await db.run('INSERT INTO users (username, useremail, userid) VALUES (?, ?, ?)', [username, useremail, userid]);
    console.log('User inserted successfully');
  } else {
    console.log('User already exists');
  }
}



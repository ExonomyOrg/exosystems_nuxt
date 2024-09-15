import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { fileURLToPath } from 'url';
import path from 'path';

// Get the project root directory
const __filename = fileURLToPath(import.meta.url);
const projectRoot = path.resolve(__filename, '../../../'); // Adjust if needed to get to the root

// Resolve the path to the SQLite database inside layers/storage/databases/sql
const dbPath = path.resolve(projectRoot, 'layers/storage/databases/sql/dev.db');

console.log('Database path:', dbPath); // Debugging to ensure correct path

// Open a database connection
const dbPromise = open({
  filename: dbPath, // Use the resolved absolute path
  driver: sqlite3.Database,
});

// Define the function to check and insert user information
export async function useDb(username: string, useremail: string, userid: string) {
  // Validate input
  if (!username || !useremail || !userid) {
    throw new Error('Invalid user data provided. Ensure all fields are filled.');
  }

  let db;
  try {
    db = await dbPromise;
  } catch (error) {
    console.error('Error opening database:', error);
    throw new Error('Could not open database.');
  }

  try {
    // Check if the user already exists
    const userExists = await db.get('SELECT COUNT(*) AS count FROM users WHERE userid = ?', [userid]);

    if (userExists.count === 0) {
      // Insert the user information if not exists
      await db.run('INSERT INTO users (username, useremail, userid) VALUES (?, ?, ?)', [username, useremail, userid]);
      console.log('User inserted successfully');
    } else {
      console.log('User already exists');
    }
  } catch (error) {
    console.error('Database operation error:', error);
    throw new Error('Database operation failed.');
  }
}

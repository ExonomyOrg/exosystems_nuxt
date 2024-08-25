import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import { config } from 'dotenv';

config(); // Load environment variables

const dbPath = process.env.DATABASE_PATH || './dev.db';
let db: Database<sqlite3.Database, sqlite3.Statement> | null = null;

export const initDB = async (): Promise<void> => {
  if (!db) {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database
    });

    // Create the `users` table if it doesn't exist
    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        useremail TEXT UNIQUE NOT NULL,
        userid TEXT UNIQUE NOT NULL,
        createdAt TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
};

export const getDB = (): Database<sqlite3.Database, sqlite3.Statement> => {
  if (!db) {
    throw new Error('Database not initialized. Call initDB first.');
  }
  return db;
};

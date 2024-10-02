import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import { config } from 'dotenv';

config(); // Load environment variables

const dbPath = process.env.DATABASE_PATH || './layers/storage/databases/sql/dev.db';
let db: Database<sqlite3.Database, sqlite3.Statement> | null = null;//defining the type of variable db should be

export const initDB = async (): Promise<void> => {//function to initialize database if not already initialized
  if (!db) {
    //create database if not already present
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database
    });

    // Create the `users` table if it doesn't exist
    console.log("creating table");
    await db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    useremail TEXT  NOT NULL,
    userid TEXT UNIQUE NOT NULL,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    contactnumber TEXT NOT NULL,
    createdAt TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);
  }
};

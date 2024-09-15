import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

// Define the `users` table
export const users = sqliteTable('users', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  username: text('username'),
  useremail: text('useremail'),
  userid: text('userid'),
});

// Define types for selecting and inserting users
export type User = typeof users.$inferSelect; // return type when queried
export type InsertUser = typeof users.$inferInsert; // insert type
const sqlite = new Database('./layers/storage/databases/sql/dev.db');
export const db = drizzle(sqlite);


// Function to insert a user if they don't already exist
export const insertUser = async (user: Omit<InsertUser, 'id'>) => {
  // Ensure user.userid is defined
  if (!user.userid || !user.useremail || !user.username) {
    console.error("Invalid data format given to insert");
    return;
  }

  // Check if user already exists
  try {
    const existingUsers = await db.select().from(users).where(eq(users.userid, user.userid));
    if (existingUsers.length > 0) {
      console.log("User already exists");
      return;
    }

    // Insert new user
     await db.insert(users).values(user).run();
    console.log("User inserted successfully");
  } catch (error) {
    console.error('Error during database operation:', error);
  }
};
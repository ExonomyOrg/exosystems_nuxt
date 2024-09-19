import { googleAdapter } from '~/layers/auth/providers/adapters/google';
import { githubAdapter } from '~/layers/auth/providers/adapters/github';
import { metamaskAdapter } from '~/layers/auth/providers/adapters/metamask';
import { type User } from '~/layers/auth/composables/userType'; // Import your User type
import { insertUser,type InsertUser } from '~/layers/storage/databases/sql/userDBsetup';
export async function handleAuthCallback(authData: any, provider: string) {
  // Validate user object
  if (!authData.username || !authData.useremail || !authData.userid) {
    console.error('Invalid user data:', authData);
    throw new Error('Invalid user data provided. Ensure all fields are filled.');
  }

  // Debug log to check user data before storing
  console.log('User data to be stored:', authData);

  // Store the user data in the database
  try {
    await insertUser(authData).then(() => {
}).catch((error) => {
  console.error("Error inserting user:", error);
});
  } catch (error) {
    console.error('Database insertion error:', error);
    throw new Error('Failed to insert user data into the database.');
  }
}

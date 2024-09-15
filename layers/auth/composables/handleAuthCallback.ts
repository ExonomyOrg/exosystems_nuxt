import { googleAdapter } from '~/layers/auth/providers/adapters/google';
import { githubAdapter } from '~/layers/auth/providers/adapters/github';
import { metamaskAdapter } from '~/layers/auth/providers/adapters/metamask';
import { type User } from '~/layers/auth/composables/userType'; // Import your User type
import { insertUser,type InsertUser } from '~/layers/storage/databases/sql/userDBsetup';
export async function handleAuthCallback(authData: any, provider: string) {
   let user: Omit<InsertUser,'id'>;

  // Determine which adapter to use based on the provider
  switch (provider) {
    case 'google':
      user = googleAdapter(authData);
      break;
    case 'github':
      user = githubAdapter(authData);
      break;
    case 'metamask':
      user = metamaskAdapter(authData);
      break;
    default:
      throw new Error('Unsupported provider');
  }

  // Validate user object
  if (!user.username || !user.useremail || !user.userid) {
    console.error('Invalid user data:', user);
    throw new Error('Invalid user data provided. Ensure all fields are filled.');
  }

  // Debug log to check user data before storing
  console.log('User data to be stored:', user);

  // Store the user data in the database
  try {
    await insertUser(user).then(() => {
}).catch((error) => {
  console.error("Error inserting user:", error);
});
  } catch (error) {
    console.error('Database insertion error:', error);
    throw new Error('Failed to insert user data into the database.');
  }
}

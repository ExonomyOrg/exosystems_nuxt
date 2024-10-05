//this is the data format convention we are going to be using globally to provide to the useDb.ts file from any authentication provider in use.
export interface User {
  username: string;
  useremail: string;
  userid: string;
}

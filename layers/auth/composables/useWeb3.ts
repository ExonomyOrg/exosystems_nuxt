import Web3 from 'web3';
import { Resolver } from 'did-resolver';
import { getResolver } from 'ethr-did-resolver';
import { createVerifiableCredentialJwt, verifyCredential } from 'did-jwt-vc';

// Type declarations for MetaMask-related global objects
declare global {
  interface Window {
    ethereum?: any;
    web3?: any;
  }
}

// Initialize Web3 and return the Web3 instance
export async function initializeWeb3(): Promise<Web3 | null> {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      return window.web3;
    } catch (error) {
      console.error('User denied account access');
      return null;
    }
  } else if (window.web3) {
    return new Web3(window.web3.currentProvider);
  } else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    return null;
  }
}

// Get the current Ethereum account address
export async function getAccount(): Promise<string | null> {
  const web3 = await initializeWeb3();
  if (web3) {
    const accounts = await web3.eth.getAccounts();
    return accounts[0] || null;
  }
  return null;
}

// Create a DID for the authenticated user
export function createDID(account: string): string {
  return `did:ethr:${account}`;
}

// Initialize DID resolver
const providerConfig = {
  rpcUrl: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID', // Replace with your Infura project ID
};
const resolver = new Resolver(getResolver(providerConfig));

// Verify a DID
export async function verifyDID(did: string): Promise<boolean> {
  try {
    const verified = await resolver.resolve(did);
    return verified !== null;
  } catch (error) {
    console.error('Error verifying DID:', error);
    return false;
  }
}

// Authenticate the user using MetaMask and return their DID
export async function authenticateUser() {
  try {
    const account = await getAccount();
    if (account) {
      console.log('User account:', account);
      const did = createDID(account);
      const isDIDValid = await verifyDID(did);
      if (isDIDValid) {
        console.log('DID verified:', did);
        return { account, did };
      } else {
        console.log('Invalid DID');
        return { account: null, did: null };
      }
    } else {
      console.log('No account found. Please connect your MetaMask wallet.');
      return { account: null, did: null };
    }
  } catch (error) {
    console.error('Error during authentication:', error);
    return { account: null, did: null };
  }
}

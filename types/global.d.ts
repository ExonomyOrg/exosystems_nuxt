// global.d.ts
import Web3 from 'web3';

// Extend the Window interface
declare global {
  interface Window {
    ethereum?: any;
    web3?: Web3;
  }
}

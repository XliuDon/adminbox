// import * as React from 'react';
// import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
// import WalletConnect from "@walletconnect/web3-provider";
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import Web3Modal from "web3modal";
// import { ethers } from 'ethers';
// import { useState } from 'react';

// export const providerOptions = {
//  coinbasewallet: {
//    package: CoinbaseWalletSDK, 
//    options: {
//      appName: "Web 3 Modal Demo",
//      infuraId: process.env.INFURA_KEY 
//    }
//  },
//  walletconnect: {
//    package: WalletConnect, 
//    options: {
//      infuraId: process.env.INFURA_KEY 
//    }
//  }
// };

// const web3Modal = new Web3Modal({
//     providerOptions // required
//   });

// export default function WalletConnector () {
//     const [provider, setProvider] = useState();
//     const [library, setLibrary] = useState();

//     const connectWallet = async () => {
//         try {
//           const provider = await web3Modal.connect();
//           const library = new ethers.providers.Web3Provider(provider);
//           setProvider(provider);
//           setLibrary(library);
//         } catch (error) {
//           console.error(error);
//         }
//       };
    
//    return (
//     <IconButton aria-label="wallet" sx={{color:'inherit'}} onClick={connectWallet}>
//         <AccountBalanceWalletIcon />
//     </IconButton>
//    );
// }
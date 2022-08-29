
import * as dotenv from "dotenv";
dotenv.config()

import { extendEnvironment, HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-ethers";
import "hardhat-contract-sizer";
import "solidity-coverage";
import "hardhat-gas-reporter";
import "hardhat-deploy";
import "./tasks";
import { ethers } from "ethers";

/* An array of private keys. */
const private_keys: string[] = [
  process.env.PRIVATE_KEY_DEPLOYER as string,
];

/* Adding a custom signer to the hardhat environment. */
extendEnvironment((hre: any) => {
  if(private_keys[0]) {
    const formatedCustomKey = hre.ethers.Wallet(private_keys[0], hre.ethers.provider)
    hre.customSigners = formatedCustomKey;
  }
});

/* Extending the HardhatUserConfig interface. */
interface FullHardhatUserConfig extends HardhatUserConfig {
  etherscan: {
    apiKey: Record<string, any>;
  }
}

/**
 * It creates a random wallet.
 * @returns A random wallet address.
 */
const createRandomWalletOnInit = () => {
  let random_address: ethers.Wallet = ethers.Wallet.createRandom();
  return random_address;
}

/**
 * If there is a private key in the private_keys array, return it, otherwise return the private key of
 * the wallet created by the createRandomWalletOnInit() function.
 * @returns The private key of the first wallet in the array of wallets.
 */
const usePrivateKeyOrMockKey = () => {
  let private_key = private_keys[0];
  return private_key ? private_key : createRandomWalletOnInit().privateKey;
}

const config: FullHardhatUserConfig = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
      gasPrice: 5000000000
      /* forking: {
        url: "https://bsc-dataseed.binance.org"
      } */
    },
    bsc: {
      accounts: [process.env.BSC_DEPLOYER_KEY ? process.env.BSC_DEPLOYER_KEY : createRandomWalletOnInit().privateKey],
      url: `https://bsc-dataseed1.binance.org`,
    },
    bscTestnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      accounts: [usePrivateKeyOrMockKey()]
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [usePrivateKeyOrMockKey()],
      chainId: 4,
      gasPrice: 5000000000,
      gasMultiplier: 2
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS === "true" ? true : false,
    token: "BNB",
    gasPriceApi: "https://api.bscscan.com/api?module=proxy&action=eth_gasPrice",
    currency: "USD",
  },
  etherscan: {
    apiKey: {
      bscscan: process.env.BSCSCAN_API_KEY,
      ethereum: process.env.ETHERSCAN_API_KEY,
    }
  },
};

export default config;
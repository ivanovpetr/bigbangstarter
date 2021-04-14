import { task } from "hardhat/config";
import 'hardhat-deploy';
import "@nomiclabs/hardhat-waffle";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

//task("")

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default {
  solidity: "0.8.0",
  namedAccounts: {
    deployer: {
      default: 0,
      ganache: "0x9696FB44f9a8c2bCc8F7C06Bc68FA2d7b2dbf282"
    },
    alice: {
      default: 1,
      ganache: "0xdf243A71DeEB400aC0F7FBc6bB369340243550D0"
    },
    bob: {
      default: 2,
      ganache: "0xeC56Aa21BbA347B67e209c6D5241D06Ff82BeBd4"
    },
    carol: {
      default: 3,
      ganache: "0x6b565940EF6beCD05f79d3b85553262fc640408B"
    },
  },
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:8545",
      chainId: 1337,
      live: false,
      saveDeployments: false,
      tags: ["local"],
    }
  }
};


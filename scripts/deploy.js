// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const moment = require("moment")


async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Funding = await hre.ethers.getContractFactory("Funding");
  const funding = await Funding.deploy();

  const accounts = hre.ethers.getSigners()

  await funding.deployed();

  const start = moment().add(20, 'seconds').unix()
  const finish = moment().add(1, 'days').unix()

  await funding.createCampaign(accounts[0], 5000, start, finish)

  console.log("")
  console.log("Funding owner is:" , await funding.owner())

  console.log("Greeter deployed to:", funding.address);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

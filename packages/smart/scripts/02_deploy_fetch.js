// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { saveFrontendFiles } = require("./helpers");
const {
  abi,
  bytecode,
} = require("usingfetch/artifacts/contracts/FetchPlayground.sol/FetchPlayground.json");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  let FetchOracle = await ethers.getContractFactory(abi, bytecode);
  fetchOracle = await FetchOracle.deploy();
  await fetchOracle.deployed();

  let PriceFetch = await ethers.getContractFactory("PriceFetch");
  priceFetch = await PriceFetch.deploy(fetchOracle.address);
  await priceFetch.deployed();

  console.log(
    "PriceFetch deployed to:",
    fetchOracle.address,
    priceFetch.address
  );

  console.log("Token address:", priceFetch.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(fetchOracle, "FetchOracle", false);
  saveFrontendFiles(priceFetch, "PriceFetch");
}

// You can also export the main function if you want to use it in other scripts
module.exports = main;

// Run the deployment function if this script is executed directly
if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

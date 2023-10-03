// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.

const path = require("path");
const { saveFrontendFiles } = require("./helpers");

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const { address: collateralAddress } = await deployments.get("Collateral");
  const shareFactor = calcShareFactor(await deployments.read("Collateral", "decimals"));
  const { address: feePotAddress } = await deployments.get("FeePot");
  const fees = getFees();

  const args = [
    deployer, // initial owner must be deployer for coins to be addable
    collateralAddress,
    shareFactor,
    feePotAddress,
    fees,
    protocol,
    linkNode,
  ];

  await deployments.deploy("CryptoCurrencyMarketFactoryV3", {
    contract: "CryptoCurrencyMarketFactoryV3",
    from: deployer,
    args,
    log: true,
  });


  const CryptoMarketFactoryV2 = await ethers.getContractFactory("CryptoMarketFactoryV2");
  const cryptoMarketFactoryV2 = await CryptoMarketFactoryV2.deploy();
  await cryptoMarketFactoryV2.deployed();

  console.log("CryptoMarketFactoryV2 address:", cryptoMarketFactoryV2.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(cryptoMarketFactoryV2, 'CryptoMarketFactoryV2');
}

// You can also export the main function if you want to use it in other scripts
module.exports = main;

// Run the deployment function if this script is executed directly
if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
}
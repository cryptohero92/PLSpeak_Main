require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.17",
  networks: {
    pulsev4: {
      chainId: 943,
      url: "https://rpc.v4.testnet.pulsechain.com",
      accounts: ['d63affb15da7a0fd10b5937961d43bb1078420090bd5082e69677fb12c0a7fb6'],
      // @see https://www.hexpulse.info/docs/hardhat-development.html#configure-hardhat-for-testnet
      gasPrice: 5e10
      // gasMultiplier: 1.75
    },
  }
};

// scripts/deploy-all.js
async function main() {
  // Import and execute individual deployment scripts one by one
  // await require("./01_deploy_token")();
  await require("./04_deploy_prediction_market")();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

const path = require("path");

function saveFrontendFiles(token, name, artifactExists = true) {
  const fs = require("fs");
  try {
    const contractsDir = path.join(
      __dirname,
      "..",
      "..",
      "frontend",
      "src",
      "contracts",
      name
    );

    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }

    fs.writeFileSync(
      path.join(contractsDir, "contract-address.json"),
      JSON.stringify({ [name]: token.address }, undefined, 2)
    );

    const TokenArtifact = artifactExists
      ? artifacts.readArtifactSync(name)
      : false;

    if (TokenArtifact) {
      fs.writeFileSync(
        path.join(contractsDir, `${name}.json`),
        JSON.stringify(TokenArtifact, null, 2)
      );
    }
  } catch (err) {
    console.log("Error", err);
  }
}

module.exports = {
  saveFrontendFiles,
};

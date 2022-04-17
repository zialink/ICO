const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

  const cryptoDevsTokenContract = await ethers.getContractFactory(
    "CryptoDevToken"
  );

  const deployedCryptoDevsTokenContract = await cryptoDevsTokenContract.deploy(
    cryptoDevsNFTContract
  );

  await deployedCryptoDevsTokenContract.deployed();

  // Contract Address: 0xE8B8C1c237583a4B52cAb002ae62221B5F8EF3d6
  console.log(
    "Crypto Devs Token Contract Address.",
    deployedCryptoDevsTokenContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

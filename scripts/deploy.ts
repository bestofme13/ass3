import { ethers } from "hardhat";

async function main() {
  const NFTMarket = await ethers.getContractFactory("NFTMarket");
  const nftMarket = await NFTMarket.deploy();
  await nftMarket.deployed();
  console.log("Deployde to address: " + nftMarket.address);
}

main().catch(error => {
    console.log(error);
    process.exitCode = 1
})
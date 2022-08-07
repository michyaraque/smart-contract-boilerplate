import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import hre from 'hardhat'

async function main() {
  let deployer: SignerWithAddress;

  [deployer] = (hre as any).customSigners.concat(await hre.ethers.getSigners());

  const Contract = await hre.ethers.getContractFactory("Token");
  const contract = await Contract.deploy()
  await contract.deployed();
  console.log("Token deployed to:", contract.address);

  try {
    await hre.run("verify:verify", {
      address: contract.address,
      contract: "contracts/Token.sol:Token",
      constructorArguments: []
    });
  } catch (err: any) {
    if (err.message.includes("Reason: Already Verified")) {
      console.log("Contract is already verified!");
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

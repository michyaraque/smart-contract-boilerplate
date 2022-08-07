import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, use } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";
import { solidity } from 'ethereum-waffle';

use(solidity);

const BigNumber = (value: number) => ethers.BigNumber.from(value);
const parseEther = (value: number) => ethers.utils.parseEther(String(value));
const formatEther = (value: number) => Number(ethers.utils.formatEther(String(value)));

const AdvanceTime = async (time: number) => {
  await ethers.provider.send('evm_increaseTime', [time]);
  await ethers.provider.send('evm_mine', []);
}

describe("Token Testing [TOK]", function () {

  let token: Contract,
    masterAccount: SignerWithAddress,
    userAccount: SignerWithAddress,
    userAccount2: SignerWithAddress,
    addrs;

  before(async () => {

    [masterAccount, userAccount, userAccount2, ...addrs] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Token");
    token = await Token.deploy();

  });

  describe("#Contract initialization", async () => {

    it("MasterAccount Wallet should have max supply", async () => {
      var balance = await token.balanceOf(masterAccount.address);
      expect(balance).to.equal(parseEther(1000000));
    });

  });

});
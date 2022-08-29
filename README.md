<h1 align="center">
  ⚙️📋 Smart Contract Boilerplate, TS, Chai, Waffle
</h1>

<p align="center">
    <a href="#"><img src="https://img.shields.io/badge/Solidity-0.8.4-white.svg?labelColor=white&logoColor=363636&color=363636&style=flat&logo=solidity" alt="Solidity 0.8.4"/></a>
    <a href="#"><img src="https://img.shields.io/badge/Hardhat-white?style=flat" alt="Hardhat"/></a>
    <a href="#"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white" alt="Typescriot"/></a>
    <a href="#"><img src="https://img.shields.io/badge/chai.js-323330?style=flat&logo=chai&logoColor=red" alt="Chai"/></a>
    <a href="#"><img src="https://img.shields.io/badge/Waffle-black.svg?color=brown&style=flat" alt="Solidity 0.8.4"/></a>
</p>

## 🔋⚡ Smart Contract battery template

This is a boilerplate for create a solid smart contracts with <b>[Solidity](https://solidity.readthedocs.io/), [Hardhat](https://hardhat.org/), [Typescript](https://typescript.com), [Chai](https://www.chaijs.com/)</b> and <b>[Waffle](https://ethereum-waffle.readthedocs.io/)</b>

### 🚀 Easy test Deployments

<p>
    <a href="https://stackblitz.com/github/michyaraque/smart-contract-boilerplate"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="Stackblitz" /></a>
    <a href="https://codesandbox.io/s/github/michyaraque/smart-contract-boilerplate"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="CodeSandbox" width="150px"/></a>
</p>

- ✔️ Toolings for linting, formatting, and conventions configured

  `solhint`, `eslint` and `prettier`

### Features
- 👷 [Hardhat](https://hardhat.org/) environment
- 🔥 Type checking [Typescript](https://www.typescriptlang.org/)
- For testing:
    - Chai
    - Waffle

## Getting started
You can either click `Use this template` button on this repository and clone the repo or directly from your terminal:

```bash
npx degit michyaraque/smart-contract-boilerplate <YOUR_APP_NAME>
```

- Run `yarn install` in the root directory.

- Change `.env.example` to `.env` and put your private key on the key <b>PRIVATE_KEY_DEPLOYER</b>

## Unit Tests
Run `npx hardhat test` to run the unit tests.

## Get Coverage Diagnostic
Run `npx hardhat coverage` to get the actual testing coverage.
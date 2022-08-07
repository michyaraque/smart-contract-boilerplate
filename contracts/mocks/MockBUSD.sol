// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockBUSD is ERC20 {
    constructor() ERC20("Mock BUSD", "BUSD") {
        _mint(msg.sender, 500000000 * 10 ** decimals());
    }
}
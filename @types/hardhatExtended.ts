import { ethers } from "ethers"
import { HardhatRuntimeEnvironment, HardhatUserConfig } from "hardhat/types"

export type HardhatRuntimeEnvironmentExtended = HardhatRuntimeEnvironment & {
    customSigners?: ethers.Wallet[] |ethers.Wallet
}

export interface FullHardhatUserConfig extends HardhatUserConfig {
    etherscan: {
        apiKey: Record<string, any>;
    }
}
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://sepolia.infura.io/v3/947cd10fb13a4150a7383c0df3e49d42",
      accounts: [`0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e`]
    }
  }
};

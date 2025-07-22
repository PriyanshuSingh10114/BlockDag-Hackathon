require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl: process.env.RPC_URL,
        }),
      network_id: "*", 
    },
  },

  compilers: {
    solc: {
      version: "0.8.20", 
    },
  },
};

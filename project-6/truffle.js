const provider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const secret = JSON.parse(fs.readFileSync(".secret.json").toString().trim());

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },

    rinkeby: {
      provider: () =>
        new provider(
          secret.mnemonic,
          `https://rinkeby.infura.io/v3/${secret.infuraKey}`,
          0,
          3
        ),
      network_id: 4,
    },
  },
};

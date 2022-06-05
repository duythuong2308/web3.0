require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/QSJnudQEzI6Mbvv_GHAXjZ2HTmbp9FcR',
      accounts: ['cece138a1dd936f1428e2c1e1bab72a5019d2696760cf7127a717c987c833c53'],
    },
  },
};
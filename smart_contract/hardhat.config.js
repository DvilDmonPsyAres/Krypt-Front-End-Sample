require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/918w0ULT4gA5JBJQFwJHH1K8DuBkDdoS",
      accounts: ['d3f98330a64ef7dd71f36251bc3ad670c2a23851db7575474d431918aa08dc17']
    }
  }
}
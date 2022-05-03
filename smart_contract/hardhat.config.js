// https://eth-goerli.alchemyapi.io/v2/mbzfbVM_46yQlXN4uk1cpw2r0_bukeDG

require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.7"
      },
      {
        version: "0.8.0"
      },
      {
        version: "0.6.12"
      }
    ]
  },
  networks : {
    goerli : {
      url : 'https://eth-goerli.alchemyapi.io/v2/mbzfbVM_46yQlXN4uk1cpw2r0_bukeDG',
      accounts: ['c12cb15d4e613193475296cc630b3ed9ac8415b68e0c34181a5b5c3427491dd0']
    }
  }
}
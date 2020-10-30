// CitizenERC20 is an artifact of the CitizenERC20 contract
const CitizenERC20 = artifacts.require('CitizenERC20');

const { BN } = require('@openzeppelin/test-helpers');

module.exports = async (deployer) => {
  // an abstraction/instance of CitizenERC20
  await deployer.deploy(
    CitizenERC20,
    'CITIZEN',
    'CTZ',
    18,
    new BN('1000000000000000000000000'),
    new BN('1000000000000000000000000'),
  );
};

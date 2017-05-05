var EtherFunding = artifacts.require("./EtherFunding.sol");


module.exports = function(deployer) {
  deployer.deploy(EtherFunding);
};

var EtherFunding = artifacts.require("./EtherFunding.sol");


module.exports = function(deployer) {
  deployer.deploy(EtherFunding,"Ether Garay",10 * 60 * 1000, 50);
};

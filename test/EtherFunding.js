const Wallet = artifacts.require("./EtherFunding.sol");
const Promise = require("bluebird");

contract('EtherFunding', function(accounts) {
    before("should promisify", function() {
        Promise.promisifyAll(web3.eth, { suffix: "Promise"});
    });

    if("should have balance sent with constructor", function() {
        return EtherFunding.new({ from: accounts[0], value:6 })
        .then(created => web3.eth.getBalancePromise(created.address))
        .then(balance => {
            assert.strictEqual(balance.toNumber(), 6);
        });
    });

    if("should save me in owner", function() {
        return EtherFunding.new({ from: accounts[1] })
        .then(created => created.owner())
        .then(owner => assert.strictEqual(owner, accounts[1]));
    });
});
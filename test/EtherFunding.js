const EtherFunding = artifacts.require("./EtherFunding.sol");
const Promise = require("bluebird");

contract('EtherFunding', function(accounts) {
   
    before("should promisify", function() {
        Promise.promisifyAll(web3.eth, { suffix: "Promise"});
    });


    it("should have balance sent with constructor", function() {
        return EtherFunding.new("test", 10000, 100,  { from: accounts[0], value:6 })
        .then(created => web3.eth.getBalancePromise(created.address))
        .then(balance => {
            assert.strictEqual(balance.toNumber(), 6);
        });
    });

    it("should save all information", function() {
        let deadline;
        return EtherFunding.new("test", 10000, 100, { from: accounts[1],  })
        .then(created => created.owner()
            .then(address =>  {
                assert.strictEqual(address, accounts[1]);
                return created.projectName();
            })
            .then(projectName => {
                assert.strictEqual(web3.toUtf8(projectName), "test");
                return created.deadline()
            })
            .then(_deadline => {
                deadline = _deadline.toNumber();
               // assert.strictEqual(deadline.toNumber(), 10000);
                return web3.eth.getTransactionPromise(created.transactionHash);
            })
            .then(tx => web3.eth.getBlockPromise(tx.blockNumber))
            .then(block => {
                assert.strictEqual(block.timestamp + 10000, deadline) 
                return created.etherGoal()
            })
            .then(etherGoal => assert.strictEqual(etherGoal.toNumber(), 100)  )
        );
    });
    it("should donate", function (){
        return EtherFunding.new("test", 10000, 100,{ from: accounts[0], value:6 })
        .then(created => created.donate({from:accounts[1], value:1})
            .then(txObject => {
                return created.donorBalances(accounts[1])
            } ).then( balance => {
                assert.strictEqual(balance.toNumber(),1);
            }));
    } )

    it("should withdraw", function() {

        let originalBalance;

        return EtherFunding.new("test", 0, 100,{ from: accounts[0], value:6 })
            .then(created => created.donate({from:accounts[1], value:1})
                .then(txObject => {
                    return web3.eth.getBalancePromise(accounts[1])
                }).then(balance => {
                    originalBalance = balance.toNumber();
                }).then(txObject => {   
                    return created.withdraw.call(accounts[1])
                }).then(successfulInt => {
                    assert.strictEqual(successfulInt.toNumber(),0);   
                })
            )
    });

});
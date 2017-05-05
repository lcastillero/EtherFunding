pragma solidity ^0.4.8;

contract EtherFunding {
    bytes32 public projectName;
    uint public deadline;
    uint public etherGoal;
    address owner;
    mapping(address => uint) public donorBalances;

    function EtherFunding(bytes32 name, uint duration, uint goal) payable {
        owner = msg.sender;
        projectName = name;
        deadline = now + duration;
        etherGoal = goal;
        if(msg.value > 0) {
            donorBalances[msg.sender] = msg.value;
        }
    }

    function donate() payable {
        if(msg.value > 0) {
            donorBalances[msg.sender] += msg.value;
        }
    }

    function withdraw(address donor)  returns (uint) {
        if(block.timestamp < deadline ) {
            return 1;
        }
        if(donorBalances[donor] == 0) {
            return 2;
        }

        donorBalances[donor] = 0;
        if(!donor.send(donorBalances[donor])) throw;

        return 0;
    }

}

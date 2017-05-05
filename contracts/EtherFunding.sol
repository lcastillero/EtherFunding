pragma solidity ^0.4.8;

contract EtherFunding {
    bytes32 public projectName = "";
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
            donorBalances[msg.sender] = msg.value;
        }
    }

}

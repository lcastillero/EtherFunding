pragma solidity ^0.4.8;

contract EtherFunding {
    byte32 public projectName = "";
    uint public deadline;
    uint public etherGoal;
    address owner;
    mapping(address => uint) public donorBalances;

    function EtherFunding(byte32 name, uint duration, uint goal) payable {
        owner = msg.sender;
        projectName = name;
        deadline = now + duration days;
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

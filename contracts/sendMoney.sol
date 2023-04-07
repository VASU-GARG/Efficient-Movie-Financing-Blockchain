pragma solidity 0.8.19;

contract sendMoney{
    function send(address payable _recipient) public payable {
        _recipient.transfer(msg.value);
    }
}   
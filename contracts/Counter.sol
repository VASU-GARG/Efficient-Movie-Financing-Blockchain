pragma solidity 0.8.19;

contract counter{
    uint public count;


    function get() public view returns(uint){
        return count;
    }

    function inc() public{
        count += 1;
    }
    function dec() public{
        count -=1;
    }
}
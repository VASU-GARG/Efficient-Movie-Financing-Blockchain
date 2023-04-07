const send_money = artifacts.require('../contracts/sendMoney.sol');

module.exports = function(deployer){
    deployer.deploy(send_money);
}
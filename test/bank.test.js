const Bank = artifacts.require('Bank');
const assert = require('assert');
var web3 = require('web3');

const { italic } = require('colors');

contract("Bank", async (accounts) => {

    it("User's Balance", async()=>{
        const bank = await Bank.new();
        const account = accounts[2];

        let balance = await bank.balance(account);
        balance = parseInt(web3.utils.fromWei(balance, 'ether'));
        console.log(balance);

        assert.equal(balance, '0');  
    })
});
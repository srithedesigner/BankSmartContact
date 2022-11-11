const Bank = artifacts.require('Bank');
const assert = require('assert');
var web3 = require('web3');

const { italic } = require('colors');

contract("Bank", async (accounts) => {

    it("User's Balance", async()=>{
        const bank = await Bank.new();
        const account = accounts[5];

        let balance = await bank.balance(account);
        balance = parseInt(web3.utils.fromWei(balance, 'ether'));
        console.log(balance);

        assert.equal(balance, '0');  
    })

    it("User's Deposit", async()=>{
        const bank = await Bank.new();
        const account = accounts[5];

        await bank.deposit({
            from: account,
            value: web3.utils.toWei('10', 'ether')
        });

        let balance = await bank.balance(account);
        balance = parseInt(web3.utils.fromWei(balance, 'ether'));
        console.log(balance);

        assert.equal(balance, '10');  
    })

    it("User's Withdraw", async()=>{
        const bank = await Bank.new();
        const account = accounts[5];

        await bank.deposit({
            from: account,
            value: web3.utils.toWei('50', 'ether')
        });

        await bank.withdraw({
            from: account,
            value: web3.utils.toWei('10', 'ether')
        });

        let balance = await bank.balance(account);
        balance = parseInt(web3.utils.fromWei(balance, 'ether'));
        console.log(balance);

        assert.equal(balance, '40');  
    })
});


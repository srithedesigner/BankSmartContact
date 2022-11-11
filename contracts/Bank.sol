// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Bank {

  mapping (address => uint256) private _balances;

  function deposit( ) public payable {
    _balances[msg.sender] += msg.value;
    
  }

  function balance(address account) public view returns(uint256){
    return _balances[account];
  }

  function withdraw() public payable{
	require(msg.value <= _balances[msg.sender]);
	_balances[msg.sender] -= msg.value;

  }
}

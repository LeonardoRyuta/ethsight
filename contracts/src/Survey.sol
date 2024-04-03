// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.19;

contract Survey {
  struct question {
    string question;
    string option;
  }

  string name;
  address[] participants;
  mapping(address => question[]) public chosenAnswers;

  function distributeRewards() private {

  }
}
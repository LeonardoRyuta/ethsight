// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.19;

import "@openzeppelin/token/ERC20/ERC20.sol";
import "@openzeppelin/access/Ownable.sol";
import "./SurveyTypes.sol";

contract Survey is Ownable{

  ERC20 token;
  string name;
  address[] private participants;
  uint private expiry;
  uint minToDeposit;
  address[] private contributers;
  Question[] private questions;
  mapping(address => Answer[]) private answers;
  mapping(string => Result) private results;
  uint private resultsCount = 0;

  constructor (address _token, string memory _name, uint _expiry, uint _minToDeposit, Question[] memory _questions) Ownable(msg.sender) {
    token = ERC20(_token);
    name = _name;
    expiry = _expiry;
    minToDeposit = _minToDeposit;

    for (uint i = 0; i < _questions.length; i++) {
        questions.push(_questions[i]);
    }
  }

  function distributeRewards() private onlyOwner {
    require(hasExpired(), "Survey has not expired yet");
    uint reward = token.balanceOf(address(this)) / participants.length;
    for (uint i = 0; i < participants.length; i++) {
      token.transfer(participants[i], reward);
    }
  }

  function addToPool(uint amount) public {
    require(amount >= minToDeposit, "Amount is less than minimum required");
    token.transferFrom(msg.sender, address(this), amount);
    contributers.push(msg.sender);
  }

  function poolSize() public view returns (uint) {
    return token.balanceOf(address(this));
  }

  function hasExpired() public view returns (bool) {
    return block.timestamp > expiry;
  }

  function contains(address user) private view returns (bool) {
    for (uint i = 0; i < contributers.length; i++) {
      if (contributers[i] == user) {
        return true;
      }
    }
    return false;
  }

  function getParticipants() public view returns (address[] memory) {
    require(contains(msg.sender), "You need to deposit to see the participants");
    return participants;
  }

  function getOptionIndex(string memory _question, string memory _option) private returns (uint) {
    for (uint i = 0; i < questions.length; i++) {
      Question storage currentQuestion = questions[i]; 
      if (keccak256(abi.encodePacked(currentQuestion.question)) == keccak256(abi.encodePacked(_question))) {
        for (uint j = 0; j < currentQuestion.options.length; j++) {
          if (keccak256(abi.encodePacked(currentQuestion.options[j])) == keccak256(abi.encodePacked(_option))) {
            return j;
          }
        }
      }
    }
    return type(uint).max;
  }

  function answerSurvey(Answer[] memory _answers) public {
    answers[msg.sender] = _answers;
    participants.push(msg.sender);
    for (uint i = 0; i < _answers.length; i++) {
      Answer memory currentAnswer = _answers[i];
      results[currentAnswer.question].counts[getOptionIndex(currentAnswer.question, currentAnswer.option)]++;
      resultsCount++;
    }
  }

  function getResults() public view returns (Result[] memory) {
    Result[] memory resultsArray = new Result[](resultsCount);
    for (uint i = 0; i < resultsCount; i++) {
        resultsArray[i] = results[questions[i].question];
    }
    return resultsArray;
  }
}
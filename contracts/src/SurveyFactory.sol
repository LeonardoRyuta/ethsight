// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.19;

import "./Survey.sol";
import "@openzeppelin/token/ERC20/ERC20.sol";
import "./SurveyTypes.sol";

contract SurveyFactory {
  address[] private expiredSurveys;
  address[] private activeSurveys;

  function createSurvey(address _token, string memory _name, uint _expiry, uint _minToDeposit, uint amountToDeposit, Question[] memory _questions) public returns (address) {
    ERC20 token = ERC20(_token);
    Survey survey = new Survey(_token, _name, _expiry, _minToDeposit, _questions);
    address newSurvey = address(survey);
    token.transferFrom(msg.sender, newSurvey, amountToDeposit);
    activeSurveys.push(newSurvey);
    return newSurvey;
  }

  function updateSurveys() public {
    address[] memory surveys = getSurveys();
    for (uint i = 0; i < surveys.length; i++) {
      Survey survey = Survey(surveys[i]);
      if (survey.hasExpired()) {
        expiredSurveys.push(surveys[i]);
        delete activeSurveys[i];
      }
    }
  }

  function getSurveys() public view returns (address[] memory) {
    address[] memory surveys = new address[](activeSurveys.length + expiredSurveys.length);
    for (uint i = 0; i < activeSurveys.length; i++) {
      surveys[i] = activeSurveys[i];
    }
    for (uint i = 0; i < expiredSurveys.length; i++) {
      surveys[i + activeSurveys.length] = expiredSurveys[i];
    }
    return surveys; 
  }

  function getActiveSurveys() public view returns (address[] memory) {
    return activeSurveys;
  }

  function getExpiredSurveys() public view returns (address[] memory) {
    return expiredSurveys;
  }
}
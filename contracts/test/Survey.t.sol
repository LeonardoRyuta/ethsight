// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.19;

import {Test, console} from "forge-std/Test.sol";
import "../src/Survey.sol";
import "../src/SurveyFactory.sol";
import "../src/SurveyTypes.sol";

contract SurveyTest is Test {
  // SurveyFactory public surveyFactory;

  // function setUp() public {
  //   surveyFactory = new SurveyFactory();
  // }

  // function createSurvey() internal returns (address) {
  //   string[] memory options = new string[](2);
  //   options[0] = "Option1";
  //   options[1] = "Option2";
  //   Question[] memory questions = new Question[](2);
  //   questions[0] = Question("Question1", options);
  //   questions[1] = Question("Question2", options);
  //   return surveyFactory.createSurvey(address(0x0), "Survey", 100, 10, 100, questions);
  // }

  // function test_CreateSurvey() public {
  //   address newSurvey = createSurvey();
  //   assertEq(surveyFactory.getActiveSurveys().length, 1);
  //   assertEq(surveyFactory.getExpiredSurveys().length, 0);
  //   assertEq(surveyFactory.getSurveys().length, 1);
  // }

  // function test_UpdateSurveys() public {
  //   surveyFactory.updateSurveys();
  //   assertEq(surveyFactory.getExpiredSurveys().length, 0);
  //   assert(surveyFactory.getActiveSurveys().length > 0);
  // }

  // function test_GetSurveys() public {
  //   address[] memory surveys = surveyFactory.getSurveys();
  //   assertEq(surveys.length, 0);
  //   address newSurvey = createSurvey();
  //   surveys = surveyFactory.getSurveys();
  //   assertEq(surveys.length, 1);
  // }

  // function test_GetActiveSurveys() public {
  //   address newSurvey = createSurvey();
  //   address[] memory activeSurveys = surveyFactory.getActiveSurveys();
  //   assertEq(activeSurveys.length, 1);
  //   address anotherSurvey = createSurvey();
  //   activeSurveys = surveyFactory.getActiveSurveys();
  //   assertEq(activeSurveys.length, 2);
  // }

  // function test_expiry() public {
  //   Survey survey = Survey(createSurvey());
  //   assert(survey.hasExpired());
  // }
}
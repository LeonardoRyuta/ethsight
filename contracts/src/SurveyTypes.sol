// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.19;

struct Question {
  string question;
  string[] options;
}

struct Answer {
  string question;
  string option;
}

struct Result {
  string question;
  string[] options;
  uint[] counts;
}
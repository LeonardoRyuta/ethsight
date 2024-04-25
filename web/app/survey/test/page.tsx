"use client"

import { ClockIcon, UsersIcon } from "@/icons";
import { Card, CardBody, CardHeader, Heading, Radio, RadioGroup, Stack, VStack, Container, Box, useRadioGroup, Button } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RadioCard } from "@/components";

export default function Test() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [prevQuestion, setPrevQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<Array<string>>(new Array<string>());

  const survey = {
    "name": "Survey 1",
    "author": "0x12345678890123456",
    "questions": [{ "question": "What is your favorite color?", "answers": ["Red", "Blue", "Green"] }, { "question": "What is your favorite animal?", "answers": ["Dog", "Cat", "Bird"] }],
    "pool": "1ETH",
    "participants": 15,
    "time": "1d",
    "address": "0x12345678890123456"
  }

  const { value, getRootProps, getRadioProps } = useRadioGroup({
    name: "questions",
    onChange: (value) => {
      selectedAnswer[currentQuestion] = value;
      console.log(selectedAnswer)
    },
  });


  const changeQuestion: (value: number) => void = (value : number) => {
    setPrevQuestion(currentQuestion);
    if (value < 0) {
      setCurrentQuestion(0);
    } else if (value >= survey.questions.length) {
      setCurrentQuestion(survey.questions.length - 1);
    } else {
      setCurrentQuestion(value)
    }
  }

  return (
    <Box p={10}>
      <div className="w-full grid grid-cols-[1fr,2fr,1fr] gap-6">
        <div className="flex items-center justify-end">
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold">{survey.name}</h1>
            <p className="opacity-50 text-md">By: {survey.author.substring(0, 6)}...{survey.author.substring(survey.author.length - 4, survey.author.length)}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center font-bold text-xl">
          <p>Questions: {survey.questions.length}</p>
          <p>Pool: {survey.pool}</p>
        </div>
        <div className="flex flex-row gap-4 items-start">
          <div className="flex items-center">
            <UsersIcon size={20} extraStyles={{ marginRight: "5px" }} />
            <p>{survey.participants}</p>
          </div>
          <div className="flex items-center">
            <ClockIcon size={20} extraStyles={{ marginRight: "5px" }} />
            <p>{survey.time}</p>
          </div>
        </div>
      </div>

      <div className="w-full h-4/5 flex justify-center items-center">
        <AnimatePresence>
          <motion.div
            key={currentQuestion}
            initial={{ position: "absolute", x: currentQuestion > prevQuestion ? 500 : -500, opacity: 0}}
            animate={{ x: 0, opacity: 1 }}
            exit={{ position: "absolute", x: currentQuestion > prevQuestion ? -500 : 500, opacity: 0, zIndex: 100}}
          >
            <Card align="center" h="60%" bg="#EDEDED" boxShadow='lg' p={6}>
              <CardHeader>
                <Heading size="lg">{survey.questions[currentQuestion].question}</Heading>
              </CardHeader>
              <CardBody w="full" display="flex" pt={0}>
                <Stack fontSize="x-large" w="full">

                  {
                    survey.questions[currentQuestion].answers.map((answer: string, index: number) => {
                      const radio = getRadioProps({ value: answer });
                      return (
                        <RadioCard key={index} {...radio}>{answer}</RadioCard>
                      );
                    })
                  }

                </Stack>
              </CardBody>
            </Card>
          </motion.div>
        </AnimatePresence>
        <Box position="absolute" w="60%" display="flex" justifyContent="space-between">
          <Button onClick={() => { 
            changeQuestion(currentQuestion - 1);
          }}> Test </Button>
          <Button onClick={() => { 
            changeQuestion(currentQuestion + 1);
          }}> Test </Button>
        </Box>
      </div>
    </Box>
  );
}
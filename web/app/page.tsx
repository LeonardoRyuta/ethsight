"use client"
import { useEffect } from "react";
import { SurveyCard } from "../components";
import { protectData, getProtectedData } from "@/utils/dataProtector";
import { useAccount } from "wagmi";

export default function Home() {
  const hasSurveys = true; //temporary state
  const { address } = useAccount();

  const surveys = [
    {
      "name": "Survey 1",
      "author": "0x12345678890123456",
      "questions": [],
      "pool": "1ETH",
      "participants": 15,
      "time": "1d",
      "address": "0x12345678890123456"
    },
    {
      "name": "Survey 2",
      "author": "0x12345678890123456",
      "questions": [],
      "pool": "1ETH",
      "participants": 15,
      "time": "1d",
      "address": "0x12345678890123456"
    }
  ]

  useEffect(() => {
    if (address) {
      getProtectedData(address).then((data) => {
        console.log(data);
      });
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-between px-24">
      {
        localStorage.getItem("email") ? (
          <div className="min-h-full min-w-full flex">
            {hasSurveys ?
              <div className="flex justify-start w-full gap-x-28">
                {Object.values(surveys).map((survey: any, index: number) => {
                  return (
                    <SurveyCard key={index} survey={survey} />
                  );
                })}
              </div>
              :
              <div className="text-center text-lg font-bold">
                <p>
                  No surveys are currently available.
                </p>
                <p>
                  You can make your own by pressing the create button.
                </p>
              </div>
            }
          </div>
        ) : (
          <div className="text-center text-lg font-bold">
            <p>
              Please login to view surveys.
            </p>
          </div>
        )
      }

    </main>
  );
}

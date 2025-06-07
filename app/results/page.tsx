"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { useGlobalContext } from "@/context/globalContext";
import { Button } from "@/components/ui/button";
import { play } from "@/utils/icons";

function page() {
  const router = useRouter();

  const { quizResponses, selectedQuiz } = useGlobalContext();

  if (!quizResponses || quizResponses.length === 0) {
    return router.push("/");
  }

  //Calculate the Score
  const correctAnswers = quizResponses.filter(
    (response: { isCorrect: boolean }) => response.isCorrect
  ).length;

  const totalQuestions = quizResponses.length;

  const scorePercentage = (correctAnswers / totalQuestions) * 100;

  //Show Appropriate Message Based on User Score
  let message = "";

  if (scorePercentage < 25) {
    message = "You Practically do not Know Anything Regarding this Topic!";
  } else if (scorePercentage >= 25 && scorePercentage < 50) {
    message = "Your Knowledge of this Topic is very Elementary!";
  } else if (scorePercentage >= 50 && scorePercentage < 75) {
    message = "You have Average Knowledge of this Topic!";
  } else if (scorePercentage >= 75 && scorePercentage < 90) {
    message = "You have Above Average Knowledge of this topic!";
  } else if (scorePercentage >= 90 && scorePercentage < 100) {
    message = "You Have Expert Knowledge of this Topic!";
  } else if (scorePercentage === 100) {
    message = "Congratulations! You Got A Perfect Score!";
  }

  return (
    <div className="py-20 flex flex-col gap-4">
      <h1 className="text-4xl font-bold text-center">Quiz Results</h1>
      <p className="text-2xl text-center mt-4">
        You Scored <span>{correctAnswers}</span> Out of {""}
        <span className="font-bold text-3xl">{totalQuestions}</span>
      </p>
      <span className="text-blue-400 font-bold text-4xl text-center">
        {scorePercentage.toFixed()}%
      </span>
      <p className="text-2xl text-center mt-2 font-semibold">{message}</p>
      <div className="flex justify-center mt-8">
        <Button
          variant={"green"}
          className="px-10 py-6 font-bold text-white text-xl rounded-xl cursor-pointer"
          onClick={() => router.push("/quiz/setup/" + `${selectedQuiz.id}`)}
        >
          {play} Take Quiz Again
        </Button>
      </div>
    </div>
  );
}

export default page;

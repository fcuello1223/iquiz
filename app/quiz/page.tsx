"use client";
import React, { useEffect, useState } from "react";

import { useGlobalContext } from "@/context/globalContext";
import { useRouter } from "next/navigation";
import { IOption, IQuestion, IResponse } from "@/types/types";
import { Button } from "@/components/ui/button";
import { flag, next } from "@/utils/icons";
import toast from "react-hot-toast";
import axios from "axios";

function page() {
  const {
    selectedQuiz,
    quizSetup,
    setQuizSetup,
    setQuizResponses,
    filteredQuestions,
  } = useGlobalContext();

  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(null) as any;
  const [responses, setResponses] = useState<IResponse[]>([]);
  const [shuffledOptions, setShuffledOptions] = useState<IOption[]>([]);
  const [shuffledQuestions, setShuffledQuestions] = useState<IQuestion[]>([]);

  if (!selectedQuiz) {
    router.push("/");
    return null;
  }

  //Fisher-Yates Shuffle Algorithm
  const shuffleArray = (arr: any[]) => {
    for (let i = arr.length - 1; i > 0; i--) {
      //Generate a Random Index Between 0 and i
      const randomIndex = Math.floor(Math.random() * (i + 1));

      //Swap Elements
      [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }

    return arr;
  };

  //Shuffle Questions when Quiz is Started
  useEffect(() => {
    const allQuestions = filteredQuestions.slice(0, quizSetup?.questionCount);
    
    setShuffledQuestions(shuffleArray([...allQuestions]));
  }, [selectedQuiz, quizSetup]);

  //Shuffle Opti.ons when Active Question Changes
  useEffect(() => {
    if (shuffledQuestions[currentIndex]) {
      // shuffle options for the current question
      setShuffledOptions(
        shuffleArray([...shuffledQuestions[currentIndex].options])
      );
    }
  }, [shuffledQuestions, currentIndex]);

  const handleActiveQuestion = (option: any) => {
    if (!shuffledQuestions[currentIndex]) {
      return;
    }

    const response = {
      questionId: shuffledQuestions[currentIndex].id,
      optionId: option.id,
      isCorrect: option.isCorrect,
    };

    setResponses((prev) => {
      //Check if the Response Already Exists
      const existingIndex = prev.findIndex((res) => {
        return res.questionId === response.questionId;
      });

      //Update Response if it Exists
      if (existingIndex !== -1) {
        const updatedResponses = [...prev];
        updatedResponses[existingIndex] = response;

        return updatedResponses;
      } else {
        return [...prev, response];
      }
    });

    //Set Active Question
    setActiveQuestion(option);
  };

  const handleNextQuestion = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);

      //Reset the Active Question
      setActiveQuestion(null);
    } else {
      router.push("/quiz/results");
    }
  };

  const handleFinishQuiz = async () => {
    setQuizResponses(responses);

    const score = responses.filter((response) => response.isCorrect).length;

    try {
      const response = await axios.post("/api/user/quiz/finish", {
        categoryId: selectedQuiz.categoryId,
        quizId: selectedQuiz.id,
        score: score,
        responses: responses,
      });

      console.log("Quiz Finished: ", response.data);
    } catch (error) {
      console.log("Error Finishing Quiz: ", error);
    }

    setQuizSetup({ questionCount: 1, category: null, difficulty: null });

    router.push("/results");
  };

  return (
    <div className="flex flex-col relative">
      <main className="flex-1 py-[2.5rem] px-4 pb-[12rem] overflow-y-auto">
        {shuffledQuestions[currentIndex] ? (
          <div className="space-y-6">
            <div className="flex flex-col gap-6">
              <p className="px-6 py-3 border-2 text-xl font-bold self-end rounded-lg shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)]">
                Question: <span>{currentIndex + 1}</span>/
                <span className="text-3xl">{shuffledQuestions.length}</span>
              </p>
              <h1 className="mt-4 px-10 text-5xl font-bold text-center">
                {shuffledQuestions[currentIndex].text}
              </h1>
            </div>
            <div className="pt-14 space-y-4">
              {shuffledOptions.map((option, index) => {
                return (
                  <button
                    key={index}
                    className={`relative group py-3 w-full text-center border-2 text-lg font-semibold 
                      hover:bg-[rgba(0,0,0,0.03)] transition-all duration-200 ease-in-out cursor-pointer
                      ${
                        option.text === activeQuestion?.text
                          ? "bg-green-100 border-green-500 shadow-[0_.3rem_0_0_#51bf22] hover:bg-green-100 hover:border-green-500"
                          : "shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)]"
                      }`}
                    onClick={() => handleActiveQuestion(option as IOption)}
                  >
                    {option.text}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <p className="text-lg">No Questions Found For This Quiz!</p>
        )}
        <div className="w-full py-[4rem] fixed bottom-0 left-0 border-t-2 bg-white flex items-center justify-center z-10">
          <Button
            className="px-10 py-6 font-bold text-white text-xl rounded-xl cursor-pointer"
            variant={"green"}
            onClick={() => {
              if (currentIndex < shuffledQuestions.length - 1) {
                if (activeQuestion?.id) {
                  handleNextQuestion();
                } else {
                  const sound = new Audio("/sounds/error.mp3");
                  sound.play();
                  toast.error("Please Select an Option to Continue!");
                }
              } else {
                if (activeQuestion?.id) {
                  handleFinishQuiz();
                } else {
                  const sound = new Audio("/sounds/error.mp3");
                  sound.play();
                  toast.error("Please Select an Option to Continue!");
                }
              }
            }}
          >
            {currentIndex < shuffledQuestions.length - 1 ? (
              <span className="flex items-center gap-2">{next} Next</span>
            ) : (
              <span className="flex items-center gap-2">{flag} Finish</span>
            )}
          </Button>
        </div>
      </main>
    </div>
  );
}

export default page;

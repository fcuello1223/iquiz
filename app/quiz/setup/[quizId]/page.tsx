"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { play } from "@/utils/icons";

import { useGlobalContext } from "@/context/globalContext";

function page() {
  const router = useRouter();

  const { quizSetup, setQuizSetup, selectedQuiz, setFilteredQuestions } =
    useGlobalContext();

  useEffect(() => {
    if (!selectedQuiz) {
      router.push("/");
    }
  }, [selectedQuiz, router]);

  useEffect(() => {
    const filteredQuestions = selectedQuiz?.questions.filter(
      (q: { difficulty: string }) => {
        return (
          !quizSetup?.difficulty ||
          quizSetup?.difficulty === "unspecified" ||
          q?.difficulty.toLowerCase() === quizSetup?.difficulty.toLowerCase()
        );
      }
    );

    setFilteredQuestions(filteredQuestions);
  }, [quizSetup]);

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(event.target.value, 10);

    const maxQuestions = selectedQuiz?.questions.length || 1;

    const newCount = isNaN(val) || val < 1 ? 1 : Math.min(val, maxQuestions);

    setQuizSetup((prev: {}) => ({ ...prev, questionCount: newCount }));
  };

  const handleDifficultyChange = (difficulty: string) => {
    setQuizSetup((prev: {}) => ({ ...prev, difficulty: difficulty }));

    console.log("Difficulty: ", difficulty);
  };

  const startQuiz = async () => {
    const selectedQuestions = selectedQuiz?.questions
      .slice(0, quizSetup?.questionCount)
      .filter((q: { difficulty: string }) => {
        return (
          quizSetup?.difficulty ||
          q.difficulty?.toLowerCase() ===
            selectedQuiz?.difficulty?.toLowerCase()
        );
      });

    if (selectedQuestions.length > 0) {
      //Update the database for quiz attempt start
      try {
        await axios.post("/api/user/quiz/start", {
          categoryId: selectedQuiz?.categoryId,
          quizId: selectedQuiz?.id,
        });
      } catch (error) {
        console.log("Error Starting Quiz: ", error);
      }

      router.push("/quiz");
    } else {
      toast.error("No Questions Found For The Selected Criteria!");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <main className="flex-1 flex items-start justify-center pt-10">
        <div className="w-full max-w-2xl px-4 py-8 border-2 rounded-2xl shadow-[0_.5rem_0_0_rgba(0,0,0,0.1)]">
          <h1 className="text-4xl font-bold mb-4">Quiz Setup</h1>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="questionCount" className="text-lg">
                Number of Questions
              </Label>
              <Input
                type="number"
                id="questionCount"
                min={3}
                max={selectedQuiz?.questions.length}
                value={quizSetup?.questionCount}
                onChange={handleQuestionChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category" className="text-lg">
                Category
              </Label>
              <Select disabled>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="biology">Biology</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="earth-space-science">
                    Earth/Space Science
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="difficulty" className="text-lg">
                Difficulty
              </Label>
              <Select
                defaultValue="unspecified"
                onValueChange={(val) => handleDifficultyChange(val)}
              >
                <SelectTrigger id="difficulty" className="w-full">
                  <SelectValue placeholder="Select Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unspecified">Unspecified</SelectItem>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </main>
      <div className="w-full bg-white flex justify-center">
        <div className="py-10">
          <Button
            variant={"blue"}
            className="px-10 py-6 font-bold text-white text-xl rounded-xl cursor-pointer"
            onClick={startQuiz}
          >
            <span className="flex items-center gap-2">{play} Start</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default page;
